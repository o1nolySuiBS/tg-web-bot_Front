import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";


// @ts-ignore
const {onToggleButton, tg} = useTelegram()


function App() {
    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
