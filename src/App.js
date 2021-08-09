import React from 'react';
import './App.css';
import './assets/sass/header.sass';
import './assets/sass/main.sass';
import Menu from './components/Menu';
import MainBlockLeft from './components/MainBlockLeft';
import MainBlockRight from './components/MainBlockRight';

function App() {
    return ( <
        >
        <
        header className = 'header' >
        <
        Menu / >
        <
        /header> <
        main className = 'main' >
        <
        div className = 'main__left-block' >
        <
        MainBlockLeft / >
        <
        /div> <
        div className = 'main__right-block' >
        <
        MainBlockRight / >
        <
        /div> <
        /main> <
        footer > FOOTER < /footer> <
        />
    );
}

export default App;