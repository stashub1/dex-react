import React, {useState, useEffect} from 'react';


function FromSelect(props) {

  const onKeyPressHandler = function (event) {
  	console.log("Onkeypress", event.charCode >= 48 && event.charCode <= 57);
  	return (event.charCode >= 48 && event.charCode <= 57);
  }

  return (
 	<div className="row d-flex align-items-center choose_raw" id="from_raw">
 		<div className="swapbox_select row align-items-center col-auto mr-auto currency_container" 
 			id="from_currency_container" onClick={() => props.toggleDialog()} >
	        <img className="token_image" id="from_image"></img>
	        <div className="symbol_name" id="from_token">frf</div>
	        <i className="material-icons">expand_more</i>
        </div>

	      <div className="col-auto">
	        <input className="number form-control" 
	        	placeholder="amount" 
	        	id="from_input" 
	        	onKeyPress={onKeyPressHandler}/>
	     </div>
 	 </div>
  );
}

export default FromSelect;