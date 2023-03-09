var currentState = {
    attempts: 20,
    gold: 0,
    events: ["cave","house","goldmine","casino","reset"],
}
var dt = new Date(); var time = dt. getHours() + ":" + dt. getMinutes() + ":" + dt

var total = {
    gains: 0,
    losses: 0
}

var arr = [];

let random = 0;
let randomGold = 0;

$("#cave").click(cave); 
$("#house").click(house); 
$("#goldmine").click(goldmine); 
$("#casino").click(casino); 
$("#reset").click(reset); 

function reset(){
    currentState.attempts = 20;
    currentState.gold = 0;
    total.gains = 0;
    total.losses = 0;
    $("#log").html("");
    $("#attempts").html(currentState.attempts);
    $("#gold").html(currentState.gold);
    $("#gains").html(total.gains);
    $("#losses").html(total.losses);
    

}

function cave(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    $("#gains").html(total.gains);
    total.gains += 5;
    currentState.gold += 5;
    $("#gold").html(currentState.gold);
    $("#log").html(dt + " +5 Gold");
    
}

function house(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    $("#gains").html(total.gains);
    random=Math.floor(Math.random() * 100);
    console.log(random);
    if(random < 80 ){
        currentState.gold+=10;
        total.gains+=10;
        $("#gold").html(currentState.gold);
        $("#gains").html(total.gains);
        $("#log").html(dt + " +10 Gold");

    }
    else{
        $("#log").html(dt + " +0 Gold");
    }
}

function goldmine(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    $("#gains").html(total.gains);
    random=Math.floor(Math.random() * 100);
    console.log(random);
    if(random < 80 ){
        randomGold=Math.floor(Math.random()*25)
        console.log(randomGold);
        currentState.gold+=randomGold;
        total.gains+=randomGold;
        $("#log").html(dt + " +" + randomGold + " Gold");
        $("#gold").html(currentState.gold);
        $("#gains").html(total.gains);
    }else{
        $("#log").html(dt + " +0 Gold");
        
    }
}


function casino(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    random=Math.floor(Math.random() * 100);
    console.log(random);
    randomGold=Math.floor(Math.random()*(50-40))+ 40;
    console.log(randomGold);
    if(random < 50 ){
        currentState.gold+=randomGold;
        total.gains+=randomGold;
        $("#log").html(dt + " +" + randomGold + " Gold");
        $("#gold").html(currentState.gold);
        $("#gains").html(total.gains);

    }else{
        currentState.gold-=randomGold;
        total.losses-=randomGold;
        $("#log").html(dt + " -" + randomGold + " Gold");
        $("#gold").html(currentState.gold);
        $("#losses").html(total.losses);
    }
}

var log = []


function end(){
    if (currentState.attempts >= 0){
        if(currentState.gold >= 250){
            alert("WIN");
        } 
        
    }

    else if (currentState.attempts < 0){
            alert("WIN");
        } 
    }





