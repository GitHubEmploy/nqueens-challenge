const treeify = require("./treeify.js");

class binaryNode {
  constructor(object) {
    this.value = object;
    this.left = null;
    this.right = null;
  }

  add(object) {
    if (this.value == null ) {
      this.value = object
      return false;
    }
    let compared = this.value.compareTo(object);
    if (isNaN(compared)) {
      console.error("found a nan", object);
      throw "found nan";
    }
    if (compared < 0) {
      if (this.right == null) {
        return this.right = new binaryNode(object);
      } else {
        return this.right.add(object);
      }

    }
    if (compared > 0) {
      if (this.left == null) {
        return this.left = new binaryNode(object);
      } else {
        return this.left.add(object);
      }
    }
    if (compared === 0 ) {
      return true;
    }
    throw "illegal state";
  }
}

exports.binaryNode = binaryNode;
