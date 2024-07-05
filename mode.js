let modebtn=document.querySelector("#mode");
let a="light";
modebtn.addEventListener("click",() =>{
if (a === "light")
{
    a="dark";
    document.querySelector("body").style.backgroundColor="black";
}

else{
    a="light";
    document.querySelector("body").style.backgroundColor="white";
}
console.log(a);
});
