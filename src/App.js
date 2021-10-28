import './App.css';
import React, { useEffect } from 'react'
import Moralis from 'moralis/dist/moralis.min.js';
import BasicTable from './BasicTable'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/** Add from here down */
function App() {
  const serverUrl = "https://ntkac7pwvls0.usemoralis.com:2053/server";
  const appId = "CPjdSIm5rS1M0LqQ4reF3dGQzgkK0LK64vyCS4GP";
  Moralis.start({ serverUrl, appId });

  const [userBalances, setUserBalances] = React.useState([]);
  const [address, setAddress] = React.useState("");


  async function login() {
    console.log()
    // let user = Moralis.User.current();
    // if (!user) {
    //   try {
    //     let currentUser = Moralis.User.current()
    //     if (!currentUser) {
    //       user = await Moralis.authenticate({ signingMessage: "Hello World!" })
    //     }
    // console.log(user)
    // console.log(user.get('ethAddress'))
    let balances = []
    // if (input !== "") {

    //   balances = await Moralis.Web3.getAllERC20({ address: input });
    // }

    if (address.trim.length === 0) {
      balances = await Moralis.Web3.getAllERC20();
    }

    balances = await Moralis.Web3.getAllERC20({ address: address });
    console.log(balances);
    setUserBalances(balances)
    // } catch (error) {
    //   console.log(error)
    // }
    // }
  }

  const handleInput = (e) => {
    setAddress(e.target.value)
  }

  const handleButton = () => {
    if (address.trim.length > 0) {
      setUserBalances([])
    }
    login();
  }

  React.useEffect(() => {
    login();
  }, [])
  return (
    <div className="App" style={{ padding: "10%" }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField style={{ width: '70%' }} id="outlined-basic" label="" variant="outlined" placeholder="Enter Ethereum address" onChange={handleInput} />
        <Button variant="contained" onClick={handleButton}>Enter</Button>
      </Box>
      <BasicTable userBalances={userBalances} />
    </div>
  );
}

export default App;
