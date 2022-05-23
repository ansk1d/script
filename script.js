var arr = ["a", "b", "c"];

console.log(arr);

function push(arr, newItem) {
    arr[arr.length] = newItem;
    return arr;
}
console.log(push(arr,"d"));
