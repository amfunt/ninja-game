var currentState = {
    attempts: 20,
    gold: 0,
    events: ["cave","house","goldmine","casino","reset"],
}
var total = {
    gains: 0,
    losses: 0,
    
}
var loghistory = [];
let random = 0;
let randomGold = 0;

$("#cave").click(cave); 
$("#house").click(house); 
$("#goldmine").click(goldmine); 
$("#casino").click(casino); 
$("#reset").click(reset); 

$("#cave").click(function () {
    $("#ninja").animate({
        marginTop: '-425px',
        marginLeft: '40px'
    }, 800, function () {
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});
$("#house").click(function () {
    $("#ninja").animate({
        marginTop: '-325px',
        marginLeft: '40px'
    }, 800, function () {
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});
$("#goldmine").click(function () {
    $("#ninja").animate({
        marginTop: '-215px',
        marginLeft: '40px'
    }, 800, function () {
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});
$("#casino").click(function () {
    $("#ninja").animate({
        marginTop: '-105px',
        marginLeft: '40px'
    }, 800, function () {
        $(this).css({ marginLeft: 0, marginTop: 0 });
    });
});

function reset(){
    location.reload();
}

function cave(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    new Date();
    let t = new Date().toLocaleTimeString();
    
    total.gains += 5;
    currentState.gold += 5;
    $("#gold").html(currentState.gold);
    $("#log").html( "Cave +5 Gold " +  new Date());
    $("#gains").html (total.gains) ;
    $("#gains").css('color', 'green') ;
    $(document).ready(function(){
        var loghistory = {"place":"Cave +5 Gold ", "dt": new Date(), "nextline": " <br>"};
        $.each(loghistory, function(key, value){
            $("#loghistory").append(value + ' ');
            $("#gainloghistory").append(value + ' ');

        });
        
    });
}


function house(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    new Date();
    let t = new Date().toLocaleTimeString();
    $("#gains").html (total.gains);
    $("#gains").css('color', 'green') ;
    random=Math.floor(Math.random() * 100);
    console.log(random);
    if(random < 80 ){
        currentState.gold+=10;
        total.gains+=10;
        $("#gold").html(currentState.gold);
        $("#gains").html (total.gains);
        $("#log").html( "House +10 Gold " +  new Date());
        $(document).ready(function(){
            var loghistory = { "place":"House +10 Gold ", "dt": new Date(), "nextline": " <br>"};
            $.each(loghistory, function(key, value){
                $("#loghistory").append(value);
                $("#gainloghistory").append(value);
            });
        });

    }
    else{
        $("#log").html( "House +0 Gold " +  new Date());
        
        $(document).ready(function(){
            var loghistory = { "place":"House", "loggold": " +0 Gold", "dt": new Date(), "nextline": " <br>"};
            $.each(loghistory, function(key, value){
                $("#loghistory").append(value);
            });
        });
    }
}

function goldmine(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    new Date();
    let t = new Date().toLocaleTimeString();
    $("#gains").html (total.gains);
    $("#gains").css('color', 'green') ;
    random=Math.floor(Math.random() * 100);
    console.log(random);
    if(random < 80 ){
        randomGold=Math.floor(Math.random()*25)
        console.log(randomGold);
        currentState.gold+=randomGold;
        total.gains+=randomGold;
        $("#log").html( "Goldmine +"+ randomGold +" Gold " +  new Date());
        $("#gold").html(currentState.gold);
        $("#gains").html (total.gains) ;
        $("#gains").css('color', 'green');
        
        $(document).ready(function(){
            var loghistory = { "place":"Goldmine +", "loggold": randomGold, "space":" Gold ","dt": new Date(), "nextline": " <br>"};
            $.each(loghistory, function(key, value){
                $("#loghistory").append(value);
                $("#gainloghistory").append(value);
            });
        });
    }else{
        $("#log").html( "Goldmine +0 Gold " +  new Date());
        $(document).ready(function(){
            var loghistory = { "place":"Goldmine +0 ","dt": new Date(), "nextline": " <br>"};
            $.each(loghistory, function(key, value){
                $("#lossloghistory").append(value);
            });
        });
    }
}

function casino(){
    end();
    currentState.attempts--;
    $("#attempts").html(currentState.attempts);
    new Date();
    let t = new Date().toLocaleTimeString();
    random=Math.floor(Math.random() * 100);
    console.log(random);
    randomGold=Math.floor(Math.random()*(50-40))+ 40;
    console.log(randomGold);
    if(random < 50 ){
        currentState.gold+=randomGold;
        total.gains+=randomGold;
        $("#log").html( "Casino +" + randomGold + " Gold" + " " + new Date());
        $("#gold").html(currentState.gold);
        $("#gains").html (total.gains);
        $("#gains").css('color', 'green');
        $(document).ready(function(){
            var loghistory = { "place":"Casino +", "loggold": randomGold, "space":" Gold ","dt": new Date(), "nextline": " <br>"};
            $.each(loghistory, function(key, value){
                $("#loghistory").append(value);
                $("#gainloghistory").append(value);
            });
        });

    }else{
        currentState.gold-=randomGold;
        total.losses-=randomGold;        
        
        $("#log").html("Casino -" + randomGold + " Gold"+ new Date());
        $("#gold").html(currentState.gold);
        $("#losses").html (total.losses) ;
        $("#losses").css('color', 'red') ;
        $(document).ready(function(){
            var loghistory = { "place":"Casino -", "loggold": randomGold, "space":" Gold ","dt": new Date(), "nextline": " <br>"};
            $.each(loghistory, function(key, value){
                $("#loghistory").append(value);
                $("#lossloghistory").append(value);
            });
        });
    }
}

function end(){
    if (currentState.attempts < 1){
        if (currentState.gold >= 250){
            alert('WIN');
            reset();
        }
        else {
            alert('LOSE');
            reset();
        }   
        } 
    if (currentState.attempts > 1){
        if (currentState.gold >= 250){
            alert('WIN');
            reset();
        }
    } 
        
    }





