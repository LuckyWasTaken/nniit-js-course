const { Router } = require("express");
const config = require("config");
const shortId = require("shortid");
const Link = require("../models/Link");
const auth = require("../middleware/auth.middle.ware");
const c = require("config");
const router = Router();

router.post("/generate", auth, async (req, res) => {
  try {
    console.log("/generate");
    const baseUrl = config.get("baseUrl");
    const { from } = req.body;
    const code = shortId.generate();
    console.log(from);
    const existing = await Link.findOne({ from });
    console.log("existing", existing);

    if (existing) {
      return res.json({ link: existing });
    }

    const to = baseUrl + "/to/" + code;
    console.log(req);
    const link = new Link({
      code,
      to,
      from,
      owner: req.user.userId,
    });

    await link.save();
    res.status(201).json({ link });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Something goes wrong...please, try again!" });
  }
});

router.get("/", auth, async (req, res) => {
  console.log("Get on /");
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.json(links);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something goes wrong...please, try again!" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const links = await Link.findById(req.params.id);
    res.json(links);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something goes wrong...please, try again!" });
  }
});

module.exports = router;
