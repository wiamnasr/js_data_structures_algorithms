/*
                => Queue Data Structure <=

    -   The queue data structure, is a way to hold data

    -   Similar to the stack instead, unlike the stack its FIFO -> First in  First out

    -   Examples of this is the queue in the store, or the queue at a printer machine

    -   A queue can be implemented with just an array, just like the stack

    -   If we want to limit an array to just the traditional queue methods, we must create it ourselves

    => Below is one such implementation
*/

function Queue() {
  collection = [];

  this.print = () => {
    console.log(collection);
  };

  this.enqueue = (element) => {
    collection.push(element);
  };

  this.dequeue = () => {
    return collection.shift();
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return collection.length === 0;
  };
}

let q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");

q.print();
q.dequeue();
console.log(q.front());

q.print();

/*
    _______________________________________________________________________________________________________________
    _______________________________________________________________________________________________________________

    
    Another way to create a queue is through PriorityQueue

    -   In a priority queue, not only do we pass the elements into the queue, but we also pass the priority of the element

    -   If all the priorities are the same number, its going to behave just like a normal queue

    -   When different priority elements are passed through, the elements with a higher priority, are sent to the beginning to the queue


*/

function PriorityQueue() {
  let collection = [];

  this.printCollection = () => {
    console.log(collection);
  };

  this.enqueue = (element) => {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          // Checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = () => {
    let value = collection.shift();
    return value[0];
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return collection.length === 0;
  };
}

let pq = new PriorityQueue();

pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Random Name", 1]);

pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
