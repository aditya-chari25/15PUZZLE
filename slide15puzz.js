
    

var count = 0;var count1;
var flag = 0;
var x;
var startstop = 0;
var miliSecOut = 0;
  var secOut = 0;
  var minOut = 0;
  var hourOut = 0;
  var milisec = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;

 var secl;
 var minl;
 var hourl;
 var milil;
 var count1 = new Array(1000);
 var name = new Array(1000);

function swapTiles(cell1,cell2) {
  
  var count1 = new Array();
 var name = new Array();



 miliSecOut,minOut,hourOut,secOut;
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
    document.getElementById("demo").innerHTML=" MOVES:"+ count;

    if((localStorage.getItem("score")!=null) && (localStorage.getItem("score")!=0)){
    document.getElementById("score1").innerHTML = "Leaderboard:" + "least moves = "+ localStorage.getItem("score");}
    else{
      document.getElementById("score1").innerHTML = "Leaderboard: NOT YET SET";
    }
    flag = 0;
    for(var i=1;i<=4;i++){
      for(var j=1;j<=4;j++){
           if(document.getElementById("cell"+ i+j).className !="tile" + (4*(i-1)+j)) {
            y = document.getElementById("cell" + i + j);
            y.style.opacity = 1;
             flag = 1;
             
           }
           else if(document.getElementById("cell"+i+j).className =="tile" + (4*(i-1)+j)) {
            y = document.getElementById("cell" + i + j);
            y.style.opacity = 0.7;
          }
      }
      }
      if(flag==0){
        if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
          localStorage.clickcount = 1;
        }
        count1[Number(localStorage.clickcount)] = count;startstop = 2; alert("congrats");
      stop();

      var person = prompt("Congrats solving the puzzle in " + count1[localStorage.clickcount] + " Moves in "+ hourOut +":"+minOut+":"+secOut+":"+miliSecOut+ "  --Type your name:","Name");
     if((localStorage.getItem("score") > count1[localStorage.clickcount]) || (localStorage.getItem("score")==0) ||(localStorage.getItem("score")==null)){
      localStorage.setItem("score",count1[localStorage.clickcount]);
      alert("Congrats for getting the bet score among the others");}
      localStorage.setItem("name_"+localStorage.clickcount,person );
      localStorage.setItem("count_"+localStorage.clickcount,count1[localStorage.clickcount]);
      localStorage.setItem("time_"+localStorage.clickcount,"  " + hourOut +":"+minOut+":"+secOut+":"+miliSecOut);
    
    }
  }

  function lead(){
      
  document.getElementById("img").style.display="block";
      
  for(var i=1;i<=localStorage.clickcount;i++)
  {
  document.getElementById("img").style.display="block";
  var table = document.getElementById("myTable");
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = localStorage.getItem("name_"+i);
  cell2.innerHTML = localStorage.getItem("count_"+i);
  cell3.innerHTML = localStorage.getItem("time_"+i);
  }
  alert("IF YOU WANT TO SEE THE BOARD AFTER ANOTHER TRY REFRESH THE PAGE AFTER THE TRY");
  document.getElementById("score2").disabled = true;


  }
  
  function shuffle() {
    document.getElementById("cell11").style.pointerEvents = "auto";
    document.getElementById("cell12").style.pointerEvents = "auto";
    document.getElementById("cell13").style.pointerEvents = "auto";
    document.getElementById("cell14").style.pointerEvents = "auto";
    document.getElementById("cell21").style.pointerEvents = "auto";
    document.getElementById("cell22").style.pointerEvents = "auto";
    document.getElementById("cell23").style.pointerEvents = "auto";
    document.getElementById("cell24").style.pointerEvents = "auto";
    document.getElementById("cell31").style.pointerEvents = "auto";
    document.getElementById("cell32").style.pointerEvents = "auto";
    document.getElementById("cell33").style.pointerEvents = "auto";
    document.getElementById("cell34").style.pointerEvents = "auto";
    document.getElementById("cell41").style.pointerEvents = "auto";
    document.getElementById("cell42").style.pointerEvents = "auto";
    document.getElementById("cell43").style.pointerEvents = "auto";
    document.getElementById("cell44").style.pointerEvents = "auto";
    count =0;
    startstop = 0;
    startstop = startstop + 1;
    document.getElementById("img").style.display = "none";



  if (startstop === 1) {
    start();
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "New Game";
    startstop = 0;
    stop();
  }
  //Use nested loops to access each cell of the 4x4 grid
  for (var row=1;row<=4;row++) { //For each row of the 4x4 grid
     for (var column=1;column<=4;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*4 + 1); //Pick a random row from 1 to 4
      var column2=Math.floor(Math.random()*4 + 1); //Pick a random column from 1 to 4
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    } 
  } 
  
  }
  
  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    var flag = 1;
    
    count = count + 1;

    if (tile!="tile16") { 
         //Checking if white tile on the right
         if (column<4) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile" + 1 + 6) {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile" + 1 + 6) {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return ;
           }
           
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile" + 1 + 6) {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<4) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile" + 1 + 6) {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
   
  
  }

function myfunction(){

  document.getElementById("cell11").style.pointerEvents = "none";
  document.getElementById("cell12").style.pointerEvents = "none";
  document.getElementById("cell13").style.pointerEvents = "none";
  document.getElementById("cell14").style.pointerEvents = "none";
  document.getElementById("cell21").style.pointerEvents = "none";
  document.getElementById("cell22").style.pointerEvents = "none";
  document.getElementById("cell23").style.pointerEvents = "none";
  document.getElementById("cell24").style.pointerEvents = "none";
  document.getElementById("cell31").style.pointerEvents = "none";
  document.getElementById("cell32").style.pointerEvents = "none";
  document.getElementById("cell33").style.pointerEvents = "none";
  document.getElementById("cell34").style.pointerEvents = "none";
  document.getElementById("cell41").style.pointerEvents = "none";
  document.getElementById("cell42").style.pointerEvents = "none";
  document.getElementById("cell43").style.pointerEvents = "none";
  document.getElementById("cell44").style.pointerEvents = "none";



   /* ​document.getElementById("cell11").disabled = true;
    ​document.getElementById("cell12").disabled = true;
    ​document.getElementById("cell13").disabled = true;
    ​document.getElementById("cell14").disabled = true;
    ​document.getElementById("cell21").disabled = true;
    ​document.getElementById("cell22").disabled = true;
    ​document.getElementById("cell23").disabled = true;
​    document.getElementById("cell24").disabled = true;
​    document.getElementById("cell31").disabled = true;
​    document.getElementById("cell32").disabled = true;
​    document.getElementById("cell33").disabled = true;
​    document.getElementById("cell34").disabled = true;
    document.getElementById("cell41").disabled = true;
​    document.getElementById("cell42").disabled = true;
​    document.getElementById("cell43").disabled = true;
​    document.getElementById("cell44").disabled = true;*/
  }

  function start() {
    x = setInterval(timer, 10);
    milisec = 0;
    sec = 0; /* holds incrementing value */
    min = 0;
    hour = 0;
  } /* Start */
  
  function stop() {
    clearInterval(x);
    return;
  } /* Stop */
  
 /* var milisec = 0;
  var sec = 0; /* holds incrementing value *
  var min = 0;
  var hour = 0;*/
  
  /* Contains and outputs returned value of  function checkTime */
  
 
  
  /* Output variable End */
  
  
  function timer() {
    /* Main Timer */
  
  
  
    miliSecOut = checkTime(milisec);
    secOut = checkTime(sec);
    minOut = checkTime(min);
    hourOut = checkTime(hour);
  
    milisec = ++milisec;
  
     if (milisec === 100) {
      milisec = 0;
      sec = ++sec;
    }
  
    if (sec == 60) {
      min = ++min;
      sec = 0;
    }
  
    if (min == 60) {
      min = 0;
      hour = ++hour;
  
    }
  
  
    document.getElementById("milisec").innerHTML = miliSecOut;
    document.getElementById("sec").innerHTML = secOut;
    document.getElementById("min").innerHTML = minOut;
    document.getElementById("hour").innerHTML = hourOut;
  
    }
  
  
  /* Adds 0 when value is <10 */
  
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function reset() {
  
  clearInterval(x);
    /*Reset*/
  
    milisec = 0;
    sec = 0;
    min = 0
    hour = 0;
  
    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";

    alert("if you successfully solve the puzzle refresh the page to see it updated.");

  
    shuffle();
  }
