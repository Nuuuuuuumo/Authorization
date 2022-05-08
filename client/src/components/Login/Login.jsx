import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import styles from './login.module.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context)

    return (
        <div className={styles.Wrapper}>
            <h1>Authorization</h1>
            <form className={styles.Form}>
                <input
                    className={styles.Input}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email"
                />
                <input
                    className={styles.Input}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Password'
                />
                <div className={styles.buttons__wrapper}>
                    <button
                        className={styles.buttons}
                        type='button'
                        onClick={() => store.login(email, password)}>Login
                    </button>
                    <button
                        className={styles.buttons}
                        type='button'
                        onClick={() => store.registration(email, password)}>Registration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default observer(Login);
