import React, {useState,useEffect} from 'react';
import './App.css';
export function Table(){
    let [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch("http://localhost:2345/users").then(res=>res.json())
        .then(el=>setDatas(el.users))
    },[])
    console.log(datas)
    return (
        <>
        <div style={{display: 'flex',"marginTop":"20px"}}>
            <div style={{"marginLeft":"230px"}}>
                <select>
                <option value="">select gender</option>
                <option value="male">male</option>
                <option value="female">female</option></select>
<button style={{"marginLeft":"10px","borderRadius":"5px","backgroundColor":"blue","color":"white"}}>sort age in increasing order</button>
<button style={{"marginLeft":"10px","borderRadius":"5px","backgroundColor":"blue","color":"white"}}>sort age in decreasing order</button>
            </div>
            
                <div style={{marginLeft:"10px"}}>
                <table >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>age</th>
                    <th>gender</th>
                </tr>
                </thead>
               <tbody>
                {datas.map((el)=>{
                    
                    return <tr>
                        <td>{el.name}</td>
                        <td>{el.name}</td>
                        <td>{el.name}</td>
                    </tr>
                })}
                </tbody>
            </table>
                </div>
           
            </div>
            <div style={{"display":'flex',"justifyContent":"center","marginTop":"10px"}}>
            <button style={{"backgroundColor":"blue","color":"white"}}>1</button>
            <button style={{"backgroundColor":"blue","color":"white"}}>2</button>
            <button style={{"backgroundColor":"blue","color":"white"}}>3</button>
            <button style={{"backgroundColor":"blue","color":"white"}}>4</button>
            </div>
            
        
        </>
    )
}