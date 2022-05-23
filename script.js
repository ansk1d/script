var arr = ["a", "b", "c"];
let newItem = "d"
function push(arr, newItem) {
    arr[arr.length] = newItem;
    return arr;
}
push(arr,newItem)
console.log(arr);
