import React, {useState,useEffect} from 'react';
import './App.css';

import {SearchAppBar} from './Navbar';
import {Classes, classes} from './classes'; 
export function Table(){
    let [datas,setDatas]=useState([]);
    let [currData,setCurr]=useState([]);
    const [text,setText]=useState('Priyanshi');
    const [selectValue,setValue]=useState("");
    const [bool,setBool]=useState(false);
    useEffect(()=>{
        fetch("http://localhost:2345/users").then(res=>res.json())
        .then(el=>setDatas(el.users))
    },[])
    console.log(datas)
    function increase(){
        var ar =datas.sort((a,b)=>{return a.age - b.age});
        setDatas([...ar]);
       
    }
    function decrease(){
        var ar =datas.sort((a,b)=>{return b.age - a.age});
        setDatas([...ar]);
       
    }
    function page(event){
        
        fetch(`http://localhost:2345/users/${event.target.innerHTML}`).then(res=>res.json())
        .then(el=>setDatas(el.users))
    }
     function takeData(value){
         console.log( value)
       setDatas(value);
     }
     function filterFunc(event){
        setValue(event.target.value);
     }
     function filterFunc1(){
        fetch(`http://localhost:2345/users/filter/${selectValue}`).then(res=>res.json()).then(el=>setDatas(el))
     }
    return (
        <>
        {bool?<Classes value={currData}/>:
        <div>
        <SearchAppBar value={takeData}/>
        <div style={{display: 'flex',"marginTop":"20px"}}>
            <div style={{"marginLeft":"230px"}} onChange={filterFunc}>
                <select>
                <option value="">select gender</option>
                <option value="Male">male</option>
                <option value="female">female</option></select>
                <button onClick={filterFunc1}>Filter</button>
<button onClick={increase} style={{"marginLeft":"10px","borderRadius":"5px","backgroundColor":"blue","color":"white" }} >sort age in increasing order</button>
<button onClick={decrease} style={{"marginLeft":"10px","borderRadius":"5px","backgroundColor":"blue","color":"white"}}>sort age in decreasing order</button>
            </div>
                <div style={{marginLeft:"10px"}}>
                <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>age </th>
                    <th>gender</th>
                </tr>
                </thead>
               <tbody>
                {datas.map((el)=>{
                    
                    return <tr>
                        <td onClick={()=>{setCurr(el);setBool(true);}}>{el.name}</td>
                        <td>{el.age}</td>
                        <td>{el.gender}</td>
                    </tr>
                })}
                </tbody>
            </table>
                </div>
           
            </div>
            <div style={{"display":'flex',"justifyContent":"center","marginTop":"10px"}}>
            <button onClick={page}style={{"backgroundColor":"blue","color":"white"}}>1</button>
            <button onClick={page}style={{"backgroundColor":"blue","color":"white"}}>2</button>
            <button onClick={page}style={{"backgroundColor":"blue","color":"white"}}>3</button>
            <button onClick={page}style={{"backgroundColor":"blue","color":"white"}}>4</button>
            </div>
            </div>
}
        
        </>
    )
}