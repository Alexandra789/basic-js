const chainMaker = {
  getLength() {
    return chainMaker.length;
  },
  addLink(value) {
    if(value === '') chainMaker += '()';
    else chainMaker += value;
  },
  removeLink(position) {
    throw 'Not implemented';
    // remove line with error and write your code here
  },
  reverseChain() {
    throw 'Not implemented';
    // remove line with error and write your code here
  },
  finishChain() {
    throw 'Not implemented';
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
