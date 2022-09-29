let totalPercent=0;
let totalPersons=0;
let totalBill=0;

function generateTip(){
    let tipPerPerson=document.getElementById("tipPerPerson");
    let totalTip=document.getElementById("totalTip");
    // console.log(totalTip);
    
    let tipAmount=(totalBill*(totalPercent/100));
    console.log(tipAmount);
    let totalAmount =parseInt(totalBill,10)+parseInt(tipAmount,10);
    console.log(totalAmount);

    tipPerPerson.innerHTML="$"+(tipAmount/totalPersons).toFixed(2);
    totalTip.innerHTML="$"+(totalAmount/totalPersons).toFixed(2);
}

document.getElementById("bill").addEventListener("change",function(){
    let bill=document.getElementById("bill").value;
    // console.log(bill);
    totalBill=bill;
});
document.getElementById("persons").addEventListener("change",function(){
    let persons=document.getElementById("persons").value;
    // console.log(persons);
    totalPersons=persons;
    generateTip();
});
document.getElementById("custom").addEventListener("change",function(){
    let percent=document.getElementById("custom").value;
    // console.log(percent);
    totalPercent=percent;
    // console.log(totalPercent);
});

function handleButtons(percent){
    totalPercent=percent;
    // console.log(totalPercent);
   
}
function handleReset(){
    location.reload();
}
let isClicked=0;
let buttons=document.getElementsByClassName("btn");
for(let i=0;i<5;i++){
    buttons[i].addEventListener("click",function(){
        if(this.classList.contains("active")){
            this.classList.remove("active")
        }
        else{
            buttons[isClicked].classList.remove("active");
            this.classList.add("active");
            isClicked=i;
        }
    });
    
}
