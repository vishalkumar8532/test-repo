const palitrome = function(x){

    return x < 0 ? false : x === x.split("").reverse().join("");
    
    }
  const res = palitrome("nitin");  
console.log(res);


  