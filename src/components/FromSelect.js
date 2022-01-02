import React from 'react';


function FromSelect(props) {

  const onInputChange = function (event) {
    props.fromInputListener(event.target.value);
  }

  return (
 	<div className="row d-flex align-items-center choose_raw" id="from_raw">
 		<div className="swapbox_select row align-items-center col-auto mr-auto currency_container" 
 			id="from_currency_container" 
 			onClick={() => props.toggleDialog(1)} 
 			>
	        <img className="token_image" id="from_image"></img>
	        <div className="symbol_name" id="from_token">
	        			{props.selectedFromToken.symbol}</div>
	        <i className="material-icons">expand_more</i>
        </div>

	      <div className="col-auto">
	        <input className="number form-control" 
	        	placeholder="0" 
	        	id="from_input" 
	        	type="number"
	        	value={props.inputValue}
	        	onChange={onInputChange}
	        />
	     </div>
 	 </div>
  );
}

export default FromSelect;
