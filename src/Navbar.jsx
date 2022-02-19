import * as React from 'react';




export  function SearchAppBar() {
  return (
  <>
  <div>
  <div style={{"display":"flex","backgroundColor":"blue","margin":"auto"}}>
      <h3 style={{"marginLeft":"10px","marginTop":"10px"}}>Home page</h3>
      <input type="text"  placeholder="Search" style={{"marginLeft":"10px","marginTop":"10px","height":"24px","borderRadius":"5px"}} />
      <button style={{"marginLeft":"10px","marginTop":"10px","height":"24px","borderRadius":"5px"}}>Search</button>
      </div>
      </div>
      </>
         
       
  )
}