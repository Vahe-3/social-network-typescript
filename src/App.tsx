import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {authThunk} from "./store/thunks/authThunks";
import Preloader from "./components/Preloader/Preloader";


function App() {

    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.auth)

    useEffect(() => {
        dispatch(authThunk())

    }, [])

    if (isLoading) {

        return <>
            <Header/>
            <Preloader/>
        </>
    }

    return (
        <div className="App">
            <Header/>
            <Main/>

        </div>
    );
}

export default App;
