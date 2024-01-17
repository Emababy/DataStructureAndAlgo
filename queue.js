function PriorityQueue () {
    var collections = [];

    this.PriorityCollection = function () {
        console.log(collections);
    }

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collections.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collections.length; i++) {
                if (element[1] < collections[i][1]) { // compare with the priority of existing elements
                    collections.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collections.push(element);
            }
        }
    };

    this.dequeue = function() {
        var value = collections.shift();
        return value[0];
    };

    this.front = function() {
        return collections[0];
    };

    this.size = function() {
        return collections.length;
    }

    this.isEmpty = function() {
        return (collections.length === 0);
    }

}


var priorityQueue = new PriorityQueue();

priorityQueue.enqueue(["A", 2]);
priorityQueue.enqueue(["B", 1]);
priorityQueue.enqueue(["C", 3]);

priorityQueue.PriorityCollection(); // Should print: [["B", 1], ["A", 2], ["C", 3]]
console.log("Front:", priorityQueue.front()); // Should print: ["B", 1]
console.log("Size:", priorityQueue.size());  // Should print: 3

priorityQueue.dequeue();

priorityQueue.PriorityCollection(); // Should print: [["A", 2], ["C", 3]]
console.log("Front:", priorityQueue.front()); // Should print: ["A", 2]
console.log("Size:", priorityQueue.size());  // Should print: 2
