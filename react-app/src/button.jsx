import React from 'react';
import './window__button.css'
const Button = ({trahatApiCity}) => {
    return (
        <div onClick={trahatApiCity} className={'window__button'}>
            <h2 className={'submit__text'}>Найти погоду</h2>
        </div>
    );
};

export default Button;