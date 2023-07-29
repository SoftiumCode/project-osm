import React from 'react';
// import Config from './utils/configuration'
import dot from 'dotenv';
import './index.scss';

const App = () => {
    
    const appname = import.meta.env['VITE_APP_NAME'];

    // const request = new XMLHttpRequest();
    // request.open('POST', 'https://discord.com/api/webhooks/1134847797250768977/hSgqdNhVc9UbRu42Ap7sZwkfsz2AOXbg51kTF9F5uVlWIIsv5PuyWdMaZ1lHtt9UVmBl');
    // request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "софти",
        avatar_url: "",
        content: "Это ещё одна хуйня которую я отправил со своего сайта для теста"
    }
    

    // function buttonHandler() {
    //     request.send(JSON.stringify(params));
    // }

    function buttonHandler2() {
        return fetch('https://discord.com/api/webhooks/1134847797250768977/hSgqdNhVc9UbRu42Ap7sZwkfsz2AOXbg51kTF9F5uVlWIIsv5PuyWdMaZ1lHtt9UVmBl', {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
    }

    return (
        <>
            <button onClick={buttonHandler2}>Тыкни на меня</button>
            <div>{appname}</div>
        </>
        
    )
}

export default App