import React from 'react';
import './close.css'
const Close = ({state,setState,checkClick,click}) => {
    function allClose() {
        setState(false)
        checkClick(false)
    }
    return (
        <div onClick={allClose}   className={'fuckgoback'}>
            <h2 className={'text'}>Назад</h2>
            <img className={'img'} src={require('./close.png')} alt=""/>
        </div>
    );
};

export default Close;