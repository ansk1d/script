var arr = ["a", "b", "c"];
var newItem = "d";

console.log(arr);

function push(arr, newItem) {
    arr[arr.length] = newItem;
    return arr;
}
console.log(push(arr, newItem))
console.log(push(arr, "newItemx"))
console.log(push(arr))