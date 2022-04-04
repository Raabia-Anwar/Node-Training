function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// longerArray is of type 'number[]'
var longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
var longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
var notOK = longest(10, 100);
