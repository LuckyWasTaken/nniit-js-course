import React, { useState, useEffect, useContext } from 'react'
import {useHttp} from '../hooks/http.hook'
import { register } from '../serviceWorker';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState ( {email: '', password: ''}
    );

    useEffect( () => {
        console.log('Error', error);
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request ('/api/auth/register', 'POST', {...form});
            message(data.message);
        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request ('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);
        } catch (e) {

        }
    }



    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Shorten the link!</h1>
                <div className="card deep-purple accent-2">
                    <div className="card-content white-text">
                        <span className="card-title">Аuthorization</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Please, enter your email" 
                                    id="email" 
                                    type="text"
                                    name="email"
                                    className="deep-purple-input"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Please, enter your password" 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    className="deep-purple-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn deep-purple accent-1 black-text" style={{marginRight: 5}}
                            disabled = {loading}
                            onClick = {loginHandler}
                        >Enter</button>
                        <button className="btn deep-purple accent-1 black-text"
                            onClick = {registerHandler}
                            disabled = {loading}
                        >Registrations</button>

                    </div>
                </div>

            </div>
        </div>
    )
}