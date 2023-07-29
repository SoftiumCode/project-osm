import React, { useState } from 'react';
import './index.scss';

const App = () => {
    
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
            <input id={nameFieldId} type='text' placeholder='Ваше имя' value = {nameFieldValue} onInput = {e => setNameFieldValue((e.target as HTMLInputElement).value)}></input>
            <input id={contentFieldId} type='text' placeholder='Ваше текст' value = {contentFieldValue} onInput = {e => setContentFieldValue((e.target as HTMLInputElement).value)}></input>
            <button onClick={buttonHandler2}>Тыкни на меня</button>
        </>
        
    )
}

export default App