import React, {useState} from 'react';
import './SearchWindow.css'
import Input from "./input";
import Button from "./button";
import {Triangle} from 'react-loader-spinner'
import Close from "./close";

const SearchWindow = ({click, id, state, setState, checkClick}) => {
  const key = '19c3fd00ffb8456dae8120317230807';
  const link = `http://api.weatherapi.com/v1/current.json?key=${key}`;
  const [city,setCity] = useState('');
  let [dataName,setDataName] = useState('');
  let [deegresInfo,setDeegresInfo] = useState('');
  let [deegresDesc,setDeegresDesc] = useState('');
  let [imgLink,setImgLink] = useState('');
  let [isImg,setImg] = useState(false)
    let [showTriagle, setTriagle] = useState(false)
    let [isActive,setActive] = useState(false);
  let [isMistake, fixMistake] = useState(false)
 function trahatApiCity() {
     setTriagle(true);

     setTimeout(() => {
         fetch(`${link}&q=${city}&lang=ru`)
             .then(function(resp){
                 return resp.json()
             })

             .then(function(data) {
                setTriagle(false)
                 setDataName(data.location.name);
                 setDeegresInfo(data.current.temp_c);
                 setImgLink(data.current.condition.icon);
                 setDeegresDesc(data.current.condition.text);
                 console.log(data, dataName)
                 setImg(true)
                 fixMistake(false)
             })
             .catch(error => {
                 console.log(error)
                 fixMistake(true);
                 setDataName('')
                 setDeegresInfo('')
                 setImgLink('')
                 setDeegresDesc('')
             })
     },2000)

 }
    return (
        <div className={'window__wrapper'}>

            <Input city={city} setCity={setCity}/>
            {showTriagle && <Triangle color={'aqua'}/>}
            <h2 className={'data__name'}>{dataName}</h2>
            { isImg && <img src={imgLink} alt=""/>}
            {deegresInfo && <h2 className={'deegres__info'}>{deegresInfo}&deg;</h2>}
            <h2 className={'deegres__desc'}>{deegresDesc}</h2>
            {isMistake && <h2 className={'errortext'}>Уебан вводи название правильно</h2>}
            {isMistake && <img className={'bug'}     src={require('./харам.gif')} alt=""/>}


<Button trahatApiCity={trahatApiCity}/>
<Close state={state} setState={setState} click={click} checkClick={checkClick}/>
        </div>
    );
};

export default SearchWindow;