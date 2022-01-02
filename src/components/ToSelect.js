import React, {useState, useEffect} from 'react';


function ToSelect(props) {

  console.log("quoteValue ToSelect", props.quoteValue);

  return (

	   <div className="row d-flex align-items-center choose_raw" id="to_raw">
 		<div className="swapbox_select row align-items-center col-auto mr-auto currency_container" 
 			id="to_currency_container" 
 			onClick={() => props.toggleDialog(2)} 
 			>
	        <img className="token_image" id="to_image"></img>
	        <div className="symbol_name" id="to_token">
	        			{props.selectedToToken.symbol}</div>
	        <i className="material-icons">expand_more</i>
        </div>

	      <div className="col-auto">
	        <input className="number form-control" 
	        	placeholder="0" 
	        	id="to_input" 
	        	type="number"
	        	value={props.quoteValue} 
	        	// onKeyPress={e => this.onChange(e.target.value)}
	        	// onKeyPress={onKeyPressHandler()}
	        />
	     </div>
 	 </div>
  );
}

export default ToSelect;
