import React, {useState, useEffect} from 'react';
import FromSelect from "./FromSelect";
import ToSelect from "./ToSelect";
import SwapBtn from "./SwapBtn";
import FormTitle from "./FormTitle";


function MainForm(props) {

  
  return (

     <div className="container col-md-5  bg-dark text-white">
     	<FormTitle />
     	<FromSelect  toggleDialog={props.toggleDialog} 
     		selectedFromToken={props.selectedFromToken}
        />
     	<ToSelect toggleDialog={props.toggleDialog} 
            selectedToToken={props.selectedToToken}
        />
     	<SwapBtn />
     </div>
     		
  );
}

export default MainForm;
