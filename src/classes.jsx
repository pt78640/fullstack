import {useState} from 'react';
import {useEffect} from 'react'
export function Classes(data){
    const[datas,setDatas]=useState([]);
    useEffect(()=>{
        setDatas(data.value.class);
    },[])
    
    console.log(datas)
    return (
        <>
        <center>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Grade</th>
                    <th>Section </th>
                    <th>Subject</th>
                </tr>
                </thead>
               <tbody>
                   {datas.map((el)=>{return <tr>
                    <td>{el.grade}</td>
                <td>{el.section}</td>
                <td>{el.subject}</td>
                   </tr>})}
               
                
                </tbody>
            </table> 
        </div>
        </center>
        </>
    )
}