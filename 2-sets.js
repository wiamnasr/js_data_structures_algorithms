/*
            => Sets <=

    -   The set data structure is kind of like an array, except there are no duplicate items

    -   The values are not in any particular order

    -   The typical use of a set is to check for the presence of a particular item

    -   Implementing a set function:
        => ES6 has a built-in set object
        => However, the built-in set object does not contain all the methods that are common to sets
        => We may still have to implement part of the set ourselves depending on what we are going to use it for
        
*/

function mySet() {
  // the collection variable will hold the set
  let collection = [];

  // this method is to check an element is present -> returns true or false
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  // this method returns all the values in the set
  this.values = () => {
    return collection;
  };

  // this method will add an element to the set
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method removes an element from the set
  this.remove = (element) => {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //   this method returns the size of the collection
  //   size is a property not a method
  this.size = () => {
    return collection.length;
  };

  // >>>>>>>>>>>>>>>>>>-> these methods below are not included in ES6 s implementation of the set, but often are included in sets

  // this method returns the union of 2 sets
  this.union = (otherSet) => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((e) => {
      // remember, the add method, will not add a duplicate value, so we will have a unique unionSet
      unionSet.add(e);
    });
    return unionSet;
  };

  //   this method returns the intersections of 2 sets as a new set
  this.intersection = (otherSet) => {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //   this method will return the difference of two sets as a new set
  this.difference = (otherSet) => {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  //   this method tests if a set is a subset of a different set
  this.subset = (otherSet) => {
    let firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}

let setA = new mySet();
let setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));

console.log(setA.intersection(setB).values());

/*
    _______________________________________________________________________________________________________________
    _______________________________________________________________________________________________________________

    Below is the build in set

*/

let setC = new Set();
let setD = new Set();

setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");

console.log(setD.values());
// instead of returning an array like the defined set structure above, this returns an iterator, that we can iterate through

setD.delete("a");
console.log(setD.has("a")); //  returns false

console.log(setD.add("d"));
