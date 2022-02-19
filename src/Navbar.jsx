import * as React from 'react';
import { useState } from 'react';



export function SearchAppBar(value) {
  const submitData = value.value;
  console.log(submitData);
  const [text, setText] = useState('');
  const [data, seData] = useState([]);
  function search() {
    fetch(`http://localhost:2345/users/search/${text}`).then(res => res.json()).then(res => submitData(res));
  }
  return (
    <>
      <div>
        <div style={{ "display": "flex", "backgroundColor": "blue", "margin": "auto" }}>
          <button style={{ "marginLeft": "10px", "marginTop": "10px", "backgroundColor": "white", "color": "black", "borderRadius": "5px" }}>Home page</button>
          <input onChange={(event) => { setText(event.target.value) }} type="text" placeholder="Search" style={{ "marginLeft": "10px", "marginTop": "10px", "height": "24px", "borderRadius": "5px" }} />
          <button onClick={search} style={{ "marginLeft": "10px", "marginTop": "10px", "height": "24px", "borderRadius": "5px" }}>Search</button>
        </div>
      </div>
    </>


  )
}