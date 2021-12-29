import React, {useState, useEffect} from 'react';


function TokenPicker(props) {

  
 // var initialAr = props.items;
 // var tokensHTML = [];
 // for(const adr in initialAr) {
 // 	const token = initialAr[adr];
 // 	tokensHTML.push(<div onClick={() => props.selectToken(token)} >
 // 						{/* <img src={token.logoURI}></img> */}
 // 						<span>{token.symbol}</span>
 // 					</div>)	
 // }
  //console.log("props html", props.toTokensHTML);

  function defineTokenListHTML() {
      if(props.modalType === 1) {
         return props.fromTokensHTML;
      } else if (props.modalType === 2) {
         return props.toTokensHTML;
      }
  }
 

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
            <div id="token_list">
            	{defineTokenListHTML()}
            	{/* <div><img/><span>ONE</span></div> */}
            	{/* <div><img/><span>TWO</span></div> */}
            	{/* <div><img/><span>TREE</span></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default TokenPicker;
