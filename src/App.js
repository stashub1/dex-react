import React, {useState, useEffect} from 'react';
import './App.css';
import Web3 from 'web3'
import Nav from "./components/Nav";
import TokenPicker from "./components/TokenPicker";
import MainForm from "./components/MainForm";
import ReactDOM from "react-dom";


function App() {

  const [account, setAccount] = useState("");
  const [ethBalance, setEthBalance] = useState("");
  const [networkId, setNetworkId] = useState("");
  //const [isOpenDialog, setOpenDialog] = useState(false);
  const [selectFromDisplay, setSelectFromDisplay] = useState("none");
  const [tokens, setTokens] = useState("");
  const [selectedFromToken, setSelectedFromToken] = useState("");
  const [selectedToToken, setSelectedToToken] = useState("");

  const [toTokensHTML, setToTokensHTML] = useState("");
  const [fromTokensHTML, setFromTokensHTML] = useState("");

  const [modalType, setModalType] = useState("");

  var tokenMap = new Map();

  useEffect(() => {
    const loadweb3 = async() => {
          await loadWeb3();     
    }
    
    async function loadTokensFromDB() {
        const tokens = await fetchTokensFromLocalServer();
        // setTokens(tokens);
        // listTokens(tokens);
    }

    async function loadTokens() {
        const tokens = await fetchTokens();
        await setTokens(tokens);
        await storeTokensToTokenMap(tokens);
        await selectDefaultToken();
        prepareHTMLForTokenSelect();
    }
    //loadweb3();
    //loadBlockData();
    //fetchTokens();
    //loadTokensFromDB();
    //loadTokensFromDB();
    loadTokens();
    
  }, []);

  function closeDialog() {
    console.log("closeDialog");
    setSelectFromDisplay("none");
  }

  const storeTokensToTokenMap =  (tokens) => {
       if(tokens) {
         for(const adr in tokens) {
            const token = tokens[adr];
            tokenMap.set(token.symbol, token);
          }
        }
  }

  const prepareHTMLForTokenSelect = () => {
      var toTokensHTML = [];
      var fromTokensHTML = [];
      if(tokens) {
         for(const adr in tokens) {
            const token = tokens[adr];
            fromTokensHTML.push(<div className="token_raw" onClick={() => selectFromToken(token)} >
                    {/* <img src={token.logoURI}></img> */}
                     <span>{token.symbol}</span>
                  </div>) 
          
            toTokensHTML.push(<div className="token_raw" onClick={() => selectToToken(token)} >
                {/* <img src={token.logoURI}></img> */}
                 <span>{token.symbol}</span>
              </div>) 
          }
          setToTokensHTML(toTokensHTML);
          setFromTokensHTML(fromTokensHTML);
        }
  }

   function toggleDialog(type) {
      console.log("toggleDialog", selectFromDisplay);
      if(selectFromDisplay === "none") {
          setSelectFromDisplay("block");
      } else {
          setSelectFromDisplay("none");
      }
      setModalType(type);
      prepareHTMLForTokenSelect(type);
  }

  const loadBlockData = async function loadBlockchainData() {
    const web3 = window.web3

    const netID = await web3.eth.net.getId();
    setNetworkId(netID);
    console.log("networkID", networkId);

    const acc = await web3.eth.getAccounts();
    setAccount(acc);
    console.log("account", account);

    // const ethBalance = await web3.eth.getBalance(account);
    // setEthBalance(ethBalance);
    // console.log("ethBalance", ethBalance);
  }

  const fetchTokens = async () => {
      const result = await fetch("https://api.1inch.io/v4.0/1/tokens");
      const jsonResult = await result.json();
      console.log("fetch tokens jsonn", jsonResult);
      return jsonResult.tokens;
  }

  const fetchTokensFromLocalServer = async () => {
      const result = await fetch("http://localhost:5000/tokens");
      const jsonResult = await result.json();
      console.log("dbserver tokens jsonn", jsonResult);
      return jsonResult;
  }

  const selectFromToken = (token)  => {
    closeDialog();
    setSelectedFromToken(token);
  }

  const selectToToken = (token)  => {
    closeDialog();
    setSelectedToToken(token);
  }

  const selectDefaultToken = ()  => {
    setSelectedFromToken(tokenMap.get("ETH"));
    console.log("DAI", tokenMap.get("DAI"));
    console.log("ETH", tokenMap.get("ETH"));
    setSelectedToToken(tokenMap.get("DAI"));
  }

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  return (
    <div className="root">
      <Nav account={account}/>
      <MainForm  toggleDialog={toggleDialog} 
        selectedFromToken={selectedFromToken}
        selectedToToken={selectedToToken}
      />
      <TokenPicker 
        closeDialog={closeDialog}
        display={selectFromDisplay}
        toTokensHTML={toTokensHTML}
        fromTokensHTML={fromTokensHTML}
        modalType={modalType}
      />
    </div>
  );
}

export default App;
