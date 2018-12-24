class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
  }
  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.pendingTransactions,
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash
    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
  }
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
  createNewTransaction(amount, sender, recipient) {
    const pendingTransactions = {
      amount,
      sender,
      recipient
    };
    this.pendingTransactions.push(pendingTransactions);
    return this.getLastBlock()["index"] + 1;
  }
}

module.exports = Blockchain;
