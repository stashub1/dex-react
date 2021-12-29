import React, {useState, useEffect} from 'react';


function ToSelect(props) {


  const symbol = () => {
  	if(props.selectedToToken) {
  		return props.selectedToToken.symbol;
  	} else {
  		return "No symbol or token passed";
  	}
  }
  

  const onKeyPressHandler = function (event) {
  	console.log("Onkeypress", event.charCode >= 48 && event.charCode <= 57);
  	return (event.charCode >= 48 && event.charCode <= 57);
  }

  return (

	   <div className="row d-flex align-items-center choose_raw" id="to_raw">
 		<div className="swapbox_select row align-items-center col-auto mr-auto currency_container" 
 			id="to_currency_container" 
 			onClick={() => props.toggleDialog(2)} 
 			>
	        <img className="token_image" id="to_image"></img>
	        <div className="symbol_name" id="to_token">
	        			{symbol}</div>
	        <i className="material-icons">expand_more</i>
        </div>

	      <div className="col-auto">
	        <input className="number form-control" 
	        	placeholder="amount" 
	        	id="to_input" 
	        	onKeyPress={onKeyPressHandler}/>
	     </div>
 	 </div>
  );
}

export default ToSelect;
