import React,{useState} from 'react';
import DropDownItem from "./DropDownItem";
import './dropdownlist.css';
import findWeather from "./findWeather";
const DropDownList = ({click,checkClick,id,setId}) => {

   let [choice,setChoice] = useState([
       {text:'Поиск по городу', searchId:'city',id:1},
       {text:'Поиск по стране',searchId:'country', id:2}])

    return (
        <div className={'dropdown__list'}>
            <h2 className={'desc'}>На самом деле разницы нет, потому что api конченный =)</h2>
            {choice.map((item) => <DropDownItem data={item} key={item.id} click={click} checkClick={checkClick}  id={id} setId={setId} /> )}
        </div>
    )
};

export default DropDownList;