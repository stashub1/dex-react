import React, {useState, useEffect} from 'react';
import FromSelect from "./FromSelect";
import ToSelect from "./ToSelect";
import SwapBtn from "./SwapBtn";
import FormTitle from "./FormTitle";


function MainForm(props) {

  
  return (

     <div className="container col-md-5  bg-dark text-white">
     	<FormTitle />
     	<FromSelect  toggleDialog={props.toggleDialog}/>
     	<ToSelect />
     	<SwapBtn />
     </div>
     		
  );
}

export default MainForm;
