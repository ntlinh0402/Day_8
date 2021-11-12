let form = document.getElement("main");

let totalCoin=500
let currentCoin=document.creatElement("curentCoin")
currentCoin.innerHTML(`Current coin:${totalCoin}`)
//predict
let predictVIETNAM=document.creatElement("predictVIETNAM")
let predictJAPAN=document.creatElement("predictJAPAN")
let bet = document.creatElement("betCoin")
//submit
let submit=document. creatElement("submit")
submit.addEventListener('click', function(){
    totalCoin -= bet.value
    let realVIETNAM=Math.floor(Math.random()*4)
    let realJAPAN=Math.floor(Math.random()*4)
   
    document.creatElement("predictResult").innerHTML = (`Your predict result `)
    document.creatElement("realResult").innerHTML = (`Final result: Vietnam ${realVIETNAM}`)


    let earnCoin = bet.value 
    let
    if(predictVIETNAM.value==realVIETNAM && predictJAPAN==realJAPAN){
    earnCoin*=2
    }
   
    else earnCoin=0
    totalCoin+=earnCoin
    if(totalCoin<=0){
        alert("You lose")
        totalCoin=0
        
    }
    currentCoin.innerHTML=(`Current coin: ${totalCoin}`)
})

    
