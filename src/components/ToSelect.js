import React, {useState, useEffect} from 'react';


function ToSelect() {
  
  return (
	   <div class= "row d-flex align-items-center" id="to_raw" >
		  <div class="swapbox_select row align-items-center col-auto mr-auto currency_container" id="to_currency_container">
		    <img class="token_image" id="to_image"></img>
		    <div class="symbol_name" id="to_token"></div>
		    <i class="material-icons">expand_more</i>
		  </div>

		  <div id="input_loader"></div>
		  <div class="col-auto">
		    <input class="number form-control amount" placeholder="amount" id="to_input"/>
		  </div>
		</div>
  );
}

export default ToSelect;
