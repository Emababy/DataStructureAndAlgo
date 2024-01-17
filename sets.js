function mySet() {
    var collections = [];

    // check whether collection has the item or its unique
    this.has = function (element) {
        return (collections.indexOf(element) !== -1);
    }

    // return the set
    this.values = function () {
        return collections; // Remove parentheses
    }

    // add a new item to the collection and check if it exists or not
    this.add = function (element) {
        if (!this.has(element)) {
            collections.push(element);
            return true;
        }
        return false;
    }

    // remove the element from the collection and check if it exists or not
    this.remove = function (element) {
        if (this.has(element)) {
            var index = collections.indexOf(element); // Declare index variable
            collections.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function () {
        return collections.length;
    }

    this.union = function (otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(element => {
            unionSet.add(element);
        });

        return unionSet;
    }

    this.intersection = function(otherSet) {
        var intersection = new mySet();
        var firstSet = this.values();
        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                intersection.add(element);
            }
        });

        return intersection;
    }

    this.difference = function(otherSet){
        var difference = new mySet();
        firstSet = this.values();
        firstSet.forEach((element) => {
            if(!otherSet.has(element)){
                difference.add(element);
            }
        });

        return difference;
    };

}

var set1 = new mySet();
var set2 = new mySet();

// Add elements to set1
set1.add(1);
set1.add(2);
set1.add(3);

// Add elements to set2
set2.add(3);
set2.add(4);
set2.add(5);


    var unionResult = set1.union(set2);
    var intersectionResult = set1.intersection(set2);
    var differenceResult = set1.difference(set2);

    // Display the sets and the union result
    console.log("Set 1: ", set1.values());  // Set 1:  [1, 2, 3]
    console.log("Set 2: ", set2.values());  // Set 2:  [3, 4, 5]
    console.log("Union Result: ", unionResult.values()); // Union Result:  [1, 2, 3, 4, 5]

    // Display the sets and the intersection result
    console.log("Set 1: ", set1.values());  // Set 1:  [1, 2, 3]
    console.log("Set 2: ", set2.values());  // Set 2:  [3, 4, 5]
    console.log("intersection Result: ", intersectionResult.values()); // intersection Result:  [3]

    // Display the sets and the difference result
    console.log("Set 1: ", set1.values());  // Set 1:  [1, 2, 3]
    console.log("Set 2: ", set2.values());  // Set 2:  [3, 4, 5]
    console.log("difference Result: ", differenceResult.values()); // difference Result:  [1,2]



