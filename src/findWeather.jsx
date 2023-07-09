import React,{useState} from 'react';
import ChangeButton from "./changeButton";
import './wrapper.css'
import DropDownList from "./DropDownList";
import SearchWindow from "./SearchWindow";

const FindWeather = () => {
  const [state,setState] = useState(false);
  const [click, checkClick] = useState(false);
  const [id, setId] = useState(0);
    return (
        <div className={'wrapper__weather'}>
            {!click && !state &&  <ChangeButton state={state} setState={setState} click={click}/>}
            {state && !click && <DropDownList state={state} checkClick={checkClick} click={click} id={id} setId={setId}/>}
            {click && <SearchWindow click={click} checkClick={checkClick} state={state} setState={setState}/>}
        </div>

    );
};

export default FindWeather;

