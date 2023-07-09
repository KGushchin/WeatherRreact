import React, {useState} from 'react';
import './button.css'
import {click} from "@testing-library/user-event/dist/click";
import DropDownList from "./DropDownList";
import DropDownItem from "./DropDownItem";

const ChangeButton = ({state, setState}) => {


    function trueState() {
        setState(true);
    }
    function falseState() {
        setState(false);
    }

    function checkState() {
        if (!state) {
            trueState()

        }
        else {
            falseState()

        }
    }
    function clickEvent() {
        checkState();


    }

    return (
        <div className={'changeButton'} onClick={clickEvent}>
            <h2 className={'button__text'}>Что будем искать?</h2>


        </div>
    );
};

export default ChangeButton;