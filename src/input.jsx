import React,{useRef} from 'react';
import './input.css'
import {useState} from "react";
const Input = ({city, setCity}) => {
let [focus,changeFocus] = useState(false)
    const inputRef = useRef();

    function inputFocus() {
     inputRef.current.focus();
    }

    return (
        <div className={'input__wrapper'}>
            <input type="text" value={city} className={'window__input'} ref={inputRef}
            onFocus={() => changeFocus(true)} onChange={event => setCity(event.target.value)}/>
            <img src={require('./findicon.png')} alt="" className={'find__icon'} onClick={inputFocus}/>

        </div>
    );
};

export default Input;