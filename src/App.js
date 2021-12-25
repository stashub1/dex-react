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


  useEffect(() => {
    const loadweb3 = async() => {
          await loadWeb3();     
    }
    
    async function loadTokensFromDB() {
         const tokens = await fetchTokensFromLocalServer();
         parseTokens(tokens);
    }
    //loadweb3();
    //loadBlockData();
    //fetchTokens();
    loadTokensFromDB();
    
  }, []);

  function closeDialog() {
    console.log("closeDialog");
    setSelectFromDisplay("none");
  }

  const toggleDialog = () => {
      console.log("toggleDialog", selectFromDisplay);
      if(selectFromDisplay === "none") {
          setSelectFromDisplay("block");
      } else {
          setSelectFromDisplay("none");
      }
      console.log("toggleDialogEnd", selectFromDisplay);

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
      console.log("available tokens", jsonResult);
  }

  const fetchTokensFromLocalServer = async () => {
      const result = await fetch("http://localhost:5000/tokens");
      const jsonResult = await result.json();
      console.log("available tokens", jsonResult);
      return jsonResult;
  }

  const parseTokens = async (tokens) => {
      console.log("inside parsetokens", tokens);
      const listHolder = "<div></div>";
      for (const address in tokens) {
         let token  = tokens[address];
         console.log("address", token);
         console.log("symbol", token.symbol);
         console.log("logo", token.logoURI);
      }
  }

  const loadWeb3 = async () => {
    console.log("inside loadweb3");
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
      <MainForm  toggleDialog={toggleDialog}/>
      <TokenPicker closeDialog={closeDialog} display={selectFromDisplay}/>
    </div>
  );
}

export default App;
