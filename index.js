
/* 
// This is the margin example, 
// See this 
a15-010 accounts: Binance API - trying to understand how to get the account trades data — e2 — 0421981a-d179-4a27-a0d1-fe1280b5e1e5 Friday, April 9⋅2:00 – 5:30pm
*/
const Binance = require('./node-binance-api');

// This is the spot example
//const Binance = require('node-binance-api');
const Keys    = require('./config-REMOVETHIS.js');

const binance = new Binance().options(Keys);

// Trying to set date rande 

let initialDate = new Date("Mon Apr 9 2021 13:00:00 GMT-0300");
let lastDate    = new Date("Mon Apr 9 2021 14:15:00 GMT-0300");

// This example shows how to pass options

let options = { 
  limit       : 10, 
  isIsolated  : true, 
  startTime   : initialDate.getTime(), 
  endTime     : lastDate.getTime(), 
};

binance.trades("ETHUSDT", (error, trades, symbol) => {  
  for(let k in trades) { 
    let trade = trades[k];
    let tradeDateTime = new Date(trade.time);
    console.log(`Trade event ${k} ------------------------------`);
    console.log(`time             : ${tradeDateTime}`);
    console.log(`symbol           : ${trade.symbol}`);
    console.log(`price            : ${trade.price}`);
    console.log(`quantity         : ${trade.qty}`);
    console.log(`commission fee   : ${trade.commission}`);
    console.log(`commission asset : ${trade.commissionAsset}`);
    console.log(`Is buyer         : ${trade.isBuyer}`);
    console.log(`Is Maker         : ${trade.isMaker}`);
//    console.log(trade);
  }
}, options);

