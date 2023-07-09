import React from 'react';
import './dropdownitem.css'

const DropDownItem = ({data,click,checkClick,id,setId}) => {
        function eventClick() {
        click ? checkClick(true) : checkClick(true);

        setId(data.searchId)
            console.log(id);
        }

    return (
        <div className={'dropdown__item'} onClick={eventClick}>
            <h2 className={'dropdown__text'}>{data.text}</h2>
        </div>
    );
};

export default DropDownItem;