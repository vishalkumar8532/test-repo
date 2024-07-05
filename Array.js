// for (let x of arr.keys()) {
//     console.log(x)

//   }
let arr = ["++X","++X","X++"]
let X=0
for (let i=0;i<arr.length;i++)
{
    if(arr[i] == "X++")X++
    else if(arr[i] == "++X")++X
    else if(arr[i] == "X--")X--
    else --X


}
console.log(X)
// for (let i=0;i<arr.length;i++)
// {
  
//     for (let j=i+1;j<arr.length;j++)
//     {
//             if(arr[i]==arr[j])
//             {
//                 count++;
//             }
//     }
// }  