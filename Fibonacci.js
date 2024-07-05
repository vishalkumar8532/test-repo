// const Fibonacci = function(n){

//     const arr =[0,1];

//     for(let i=3;i<=n;i++ ){

//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     console.log(arr);

// };

// Fibonacci(20);

//Fibonacci Using recersion

// function fibo(n){

// if(n<=1) return n;

// return fibo(n-1)+fibo(n-2);
// n=5 =fib(4)+fib(3)=2
//fib(4)=fib(3)+fib(2)=>2+1
// }


// console.log(fibo(5));
// let n= 6
// for(let j=0;j<n;j++)
// {
//     console.log(fibo(j));
// }


// Tri

// function tribonacci(n){
//     if(n<=1) return n;

//     return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);


// };

// console.log(tribonacci(5));

// let a=0,b=1,c=1,nextn
//     if(n==0) return 0
//     else if(n==1 || n==2) return 1
//     else
//     {for(let i=3;i<=n;i++ ){
//             nextn=a+b+c;
//             a=b;
//             b=c;
//             c=nextn;

//     }
//     return nextn
//     }

