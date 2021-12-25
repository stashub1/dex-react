import React, {useState, useEffect} from 'react';


function TokenPicker(props) {

  // const defineTokenList() => {
  // 	tokens = 
  // }
 
 
  
  return (
    <div class="modal" id="token_modal" style={{display:props.display}}
     tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select token</h5>
            <button 
            	type="button" 
            	id="modal_close" 
            	class="close" 
            	data-dismiss="modal"
            	aria-label="Close"
            	onClick={() => props.closeDialog()}
            	>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal_body">
            <div id="token_list"></div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default TokenPicker;
