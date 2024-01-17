// LIFO - FILO
// Functions -> push , pop , peek , size

// example 1 :

var letters = [];
var word = 'ZiadEmbaby';
var ReverseWord = '';

// push items into the stack :

for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop items from the stack :

for (var i = 0; i < word.length; i++){
    ReverseWord += letters.pop();
}

if (ReverseWord === word){
    console.log (word + " is a palindrome");
} else {
    console.log (word + " is not a palindrome");
}


// example 2:

var Stack = function (){
    this.storage = {};
    this.count = 0;

    // push the item to the stack:
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // pop the item from the stack:
    this.pop = function () {
        if (this.count === 0){
            return undefined;
        } 

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    this.peek = function () {
        return this.storage[this.count - 1];
    } 

}

var myStack = new Stack;

console.log(myStack.peek());
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek()); // 3
console.log(myStack.size()); // 3
console.log(myStack.pop()); // 3
console.log(myStack.size()); // 2
console.log(myStack.peek()); // 2
