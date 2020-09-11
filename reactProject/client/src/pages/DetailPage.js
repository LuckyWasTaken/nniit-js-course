import React, { useState, useCallback, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { compareSync } from "bcryptjs";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { LinkCard } from "../components/LinkCard";

export const DetailPage = () => {
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;
  const { token } = useContext(AuthContext);

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(fetched);
    } catch (e) {}
  }, [token, linkId, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && link && <LinkCard link={link} />}</>;
};
