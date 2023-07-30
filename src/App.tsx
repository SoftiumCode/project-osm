import React, { createContext, useContext, useState } from 'react';
import './index.scss';
import Header from './components/Header/Header';
import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => {

    const thingy = React.useRef(AboutUs);

    const num = '123'

    const context = createContext({num});

    const ctx = useContext(context);


    const someOtherUrl = import.meta.env['VITE_DISCORD_WEBHOOK_URL'];

    const nameFieldId = React.useId();
    const contentFieldId = React.useId();

    const [nameFieldValue, setNameFieldValue] = useState('');
    const [contentFieldValue, setContentFieldValue] = useState('');

    function buttonHandler2() {

        const params = {
            username: nameFieldValue,
            avatar_url: "",
            content: contentFieldValue
        }

        return fetch(someOtherUrl, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
    }

    return (
        <>
            <Header></Header>
            <HeaderCarousel></HeaderCarousel>
            <AboutUs></AboutUs>
            <input id={nameFieldId} type='text' placeholder='Ваше имя' value = {nameFieldValue} onInput = {e => setNameFieldValue((e.target as HTMLInputElement).value)}></input>
            <input id={contentFieldId} type='text' placeholder='Ваше текст' value = {contentFieldValue} onInput = {e => setContentFieldValue((e.target as HTMLInputElement).value)}></input>
            <button onClick={buttonHandler2}>Тыкни на меня</button>
            <Footer></Footer>
        </>
        
    )
}

export default App