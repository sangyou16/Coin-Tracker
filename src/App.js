import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";


function App() {
  const [loading, setloading] = useState(true);
  const [coins, setCoins] = useState([]); //to show the data(=json) in component use useState
  const [money, setMoney] = useState();
  const [coin, setCoin] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(0); 
  const [selectedName, setSelectedName] = useState("");


  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then( (response)=> response.json())
      .then((json)=> { 
        setCoins(json); //set the data: json to setCoins and so "coins" will have json's data
        setloading(false);
        setCoin(coins[0]);
      } 
      ); //GET, then extract JSON from the response(first then), THEN take that JSON (data of all the coins) and console log it (second "then")
  },[]) //want to run this function ONLY ONCE so we are going to watch nothing = []

  const coinChange = (event) => { //from the selected coin
    const selectedCoin = event.target.value
    var res = selectedCoin.match(/\d+\.\d+/)[0];
    var name = selectedCoin.split(" ")[0];
    setSelectedCoin(res)
    setSelectedName(name)

  };

  const onChan= (event) => {
    const money = Number(event.target.value);
    setMoney(money);
  };

  console.log(selectedName)

  return (<div>
    
    <center><img src="https://www.thecoinrepublic.com/wp-content/uploads/2022/03/Crypto-Staking-1-1-1536x864.jpg" height="100px" width="300px"></img><h1>The Coins (Total = {coins.length} coins)</h1></center>
    {loading ? <strong>Loading...</strong>: null}


    <select className = {styles.custom_select} onChange = {coinChange}>
      {coins.map((coin) => 
        (<option> {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
        </option>))
        };
     </select>

      <br></br>  <br></br>  <br></br>  
        <label htmlFor = "money">How much money do you have?</label>
        <br></br> 
        <input 
          id = "money"
          value = {money}
          onChange = {onChan}
          type = "number"
          placeholder = "How much money" />
        
        <h3>You can buy { (money / selectedCoin) ? money / selectedCoin: null} coins of {selectedName}</h3>

        
      

  </div>
    


  );
};
//the coin variable means each coin inside of the coins array (as set in line 8)
//**must put {} on a javascript code

export default App;