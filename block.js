var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// this is the schema setup for the header data
// you can add or delete to show more/less data
var BlockSchema = new Schema({
  parentHash: String,
  ommersHash: String,
  beneficiary: String,
  stateRoot: String,
  transactionsRoot: String,
  receiptsRoot: String,
  logsBloom: String,
  difficulty: String,
  number: String,
  gasLimit: String,
  gasUsed: String,
  timestamp: String,
  extraData: String,
  mixHash: String,
  nonce: String,
});

// this saves the database to mongo with the name of 'block'
var Block = mongoose.model('block', BlockSchema);

module.exports = Block;
