import './App.css';
import Login from "./components/Login/Login";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

function App() {
    const {store} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if(store.isLoading){
        return <div>Загрузка....</div>
    }

    if (!store.isAuth) {
        return (
            <Login/>
        )
    }

    return (
        <div className="App">
            <h1>{store.isAuth ? 'Пользователь авторизован' : 'Авторизуйтесь'}</h1>
            <button className='button' onClick={() => store.logout()}>Logout</button>
        </div>
    );
}

export default observer(App);
