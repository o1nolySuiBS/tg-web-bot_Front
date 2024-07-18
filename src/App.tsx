import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes} from "react-router-dom"
import ProductList from "./components/ProductList/ProductList";
import Form from './components/Form/Form';

// @ts-ignore
const {tg} = useTelegram()


function App() {
    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">

            <Routes>
                <Route index element={<ProductList />}/>
                <Route path='/form' element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;
