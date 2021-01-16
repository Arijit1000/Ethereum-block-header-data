var Block = require('./block');
var request = require('superagent');
var app = require('./app');

module.exports = (app) => {
  // Watch for incoming requests of method GET and POST
  // to the route http://localhost:8545/

  // declares result in order to hold res.body.result
let result;

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  // this is the call api call to GET ethereum data from Infura ********************************
    app.get("/api", (req, res) => {
      request
      .get('https://api.infura.io/v1/jsonrpc/mainnet/eth_getBlockByNumber?params=["latest",false]')
      .then(res => {
        result = res.body.result;
        console.log(result);
      }).catch((e) => console.log(e));
    });

  // this is the api call to POST the Header Data
    app.post("/api/block", (req, res) => {
      console.log(result);
  // ETH block header data Schema setup
      let myData = new Block(
        {
          parentHash: result.parentHash,
          ommersHash: result.ommersHash,
          beneficiary: result.beneficiary,
          stateRoot: result.stateRoot,
          transactionsRoot: result.transactionsRoot,
          receiptsRoot: result.receiptsRoot,
          logsBloom: result.logsBloom,
          difficulty: result.difficulty,
          number: result.number,
          gasLimit: result.gasLimit,
          gasUsed: result.gasUsed,
          timestamp: result.timestamp,
          extraData: result.extraData,
          mixHash: result.mixHash,
          nonce: result.nonce,
        }
      );
      myData.save()
        .then(item => {
            res.send("Block Data saved to database!!");
            console.log(req.body);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database :( sad face");
        });
    });
  };
