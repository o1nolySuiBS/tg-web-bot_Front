import React, {useState} from 'react';
import './Form.css'


const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')

    const onChangeCountry = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
        setCountry(e.target.value)
    }
    const onChangeStreet = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
        setStreet(e.target.value)
    }
    const onChangeSubject = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Input ur info</h3>
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
                <option value={'phisical'}>Фіз. лице</option>
                <option value={'legal'}>Юр. лице</option>
            </select>

        </div>
    );
};

export default Form;
