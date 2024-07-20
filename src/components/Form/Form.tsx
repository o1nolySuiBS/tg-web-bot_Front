import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";
import {Telegram} from "telegraf";
import {callback} from "telegraf/typings/button";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(()=>{
    const data = {
        country,
        street,
        subject
    }
    tg.sendData(JSON.stringify(data))
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', callback)
        return()=>{
        tg.offEvent('mainButtonClicked', onSendData)
        }
    }, []);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Відправити дані'
        });
    }, []);

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street]);

    const onChangeCountry = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(e.target.value);
    }

    const onChangeStreet = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setStreet(e.target.value);
    }

    const onChangeSubject = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSubject(e.target.value);
    }

    return (
        <div className={"form"}>
            <h3>Input your info</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Країна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={"Вулиця"}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Фіз. лице</option>
                <option value={'legal'}>Юр. лице</option>
            </select>
        </div>
    );
};

export default Form;

