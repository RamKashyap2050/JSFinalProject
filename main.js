var p1Name = 'Player 1';
var p2Name = 'Player 2';
const result = document.getElementById('result');

const scoreboard = {
  player1: 0,
  player2: 0,
  draw: 0
};

const modal = document.querySelector('.modal');
let gamecount = 0;
const reset = document.getElementById('but')

var b1, b2, b3, b4, b5, b6, b7, b8, b9;



// Function called whenever user tab on any box

	function myfunc() {

		// Setting DOM to all boxes or input field
	  
	  b1 = document.getElementById("b1").value;
	  b2 = document.getElementById("b2").value;
	  b3 = document.getElementById("b3").value;
	  b4 = document.getElementById("b4").value;
	  b5 = document.getElementById("b5").value;
	  b6 = document.getElementById("b6").value;
	  b7 = document.getElementById("b7").value;
	  b8 = document.getElementById("b8").value;
	  b9 = document.getElementById("b9").value;
		  
		  // Checking if Player X won or not and after
		  // that disabled all the other fields
		  if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
			  b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
			  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
			  result.innerHTML = `<h1> ${p1Name} won </h1>`
			  modal.style.display = 'block';
gamecount++;

		  }
		  else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
			  b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
			scoreboard.player1++;
			result.innerHTML = `<h1> ${p1Name} won </h1>`
			modal.style.display = 'block';
			gamecount++;
		  }
		  else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
			  b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
			scoreboard.player1++;
	  
			  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b6").disabled = true;
			  result.innerHTML = `<h1> ${p1Name} won </h1>`
			  modal.style.display = 'block';
gamecount++;
		  }
		  else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
			  b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
			scoreboard.player1++;
	  
			  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
		  
			  result.innerHTML = `<h1> ${p1Name} won </h1>`
			  modal.style.display = 'block';
				gamecount++;
		  }
		  else if ((b1 == 'x' || b1 == 'X')&& (b5 == 'x' ||
			  b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
			scoreboard.player1++;
	  
			  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
		  
	  
			  result.innerHTML = `<h1> ${p1Name} won </h1>`
				gamecount++;
				modal.style.display = 'block';

		  }
		  else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
			  b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
			scoreboard.player1++;
	  
			  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
		
	  
			  result.innerHTML = `<h1> ${p1Name} won </h1>`

			  modal.style.display = 'block';
			  gamecount++
		  }
		  else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
			  b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
			scoreboard.player1++;
	  
			  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b9").disabled = true;
			  result.innerHTML = `<h1> ${p1Name} won </h1>`
			  gamecount++
			  modal.style.display = 'block';

		  
	  
		  }
		  else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
			  b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
			  document.getElementById('print')
				  .innerHTML = `${p1Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
			  result.innerHTML = `<h1> ${p1Name} won </h1>`
				gamecount++;
				modal.style.display = 'block';

	  
		  }
	  
		  // Checking of Player X finish
		  // Checking for Player 0 starts, Is player 0 won or
		  // not and after that disabled all the other fields
		  else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
			  b2 == '0') && (b3 == '0' || b3 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
				  scoreboard.player2++;

			  document.getElementById("b4").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
			  //window.alert(`${p2Name} won`);
		  result.innerHTML = `<h1> ${p2Name} won </h1>`
		  modal.style.display = 'block';
		  gamecount++;
		  
	  
		  }
		  else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
			  b4 == '0') && (b7 == '0' || b7 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
			  //window.alert(`${p2Name} won`);
		  result.innerHTML = `<h1>${p2Name} won</h1>`
		  modal.style.display = 'block';
		  gamecount++;
		  scoreboard.player2++;

		  
	  
		  }
		  else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
			  b8 == '0') && (b9 == '0' || b9 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b6").disabled = true;
			  //window.alert(`${p2Name} won`);
		  result.innerHTML = `<h1>${p2Name} won</h1>`
		  modal.style.display = 'block';
		  gamecount++;
		  scoreboard.player2++;

	  
		  }
		  else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
			  b6 == '0') && (b9 == '0' || b9 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b5").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
			  //window.alert(`${p2Name} won`);
		  result.innerHTML = `<h1>${p2Name} won</h1>`
		  modal.style.display = 'block';
		  gamecount++;
		  scoreboard.player2++;

	  
		  }
		  else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
			  b5 == '0') && (b9 == '0' || b9 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
			  //window.alert(`${p2Name} won`);
		  result.innerHTML = `<h1>${p2Name} won</h1>`
		  modal.style.display = 'block';
		  gamecount++;
		  scoreboard.player2++;

	  
		  }
		  else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
			  b5 == '0') && (b7 == '0' || b7 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
		  result.innerHTML = `<h1>${p2Name} won</h1>`
		  modal.style.display = 'block';
		  gamecount++;
		  scoreboard.player2++;
		  
	  
		  //window.alert(`${p2Name} won`);
		  }
		  else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
			  b5 == '0') && (b8 == '0' || b8 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
			document.getElementById("b1").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b4").disabled = true;
			  document.getElementById("b6").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b9").disabled = true;
		
		  result.innerHTML = `<h1>${p2Name} won</h1>`
		  modal.style.display = 'block';
		  gamecount++;
		  scoreboard.player2++;
		  
	  
	  
		  }
		  else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
			  b5 == '0') && (b6 == '0' || b6 == '0')) {
			  document.getElementById('print')
				  .innerHTML = `${p2Name} won`;
			  document.getElementById("b1").disabled = true;
			  document.getElementById("b2").disabled = true;
			  document.getElementById("b3").disabled = true;
			  document.getElementById("b7").disabled = true;
			  document.getElementById("b8").disabled = true;
			  document.getElementById("b9").disabled = true;
			  //window.alert(`${p2Name} won`);
		  result.innerHTML = `<h1>${p2Name} won</h1>`
		  modal.style.display = 'block';
			  gamecount++;
			  scoreboard.player2++;
	  
	  
		  }
	  
		  // Checking of Player 0 finish
		  // Here, Checking about Tie
		  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
			  || b2 == '0') && (b3 == 'X' || b3 == '0') &&
			  (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
			  b5 == '0') && (b6 == 'X' || b6 == '0') &&
			  (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
			  b8 == '0') && (b9 == 'X' || b9 == '0')) {
				  document.getElementById('print')
					  .innerHTML = "Match Tie";
			
			gamecount++;
			scoreboard.draw++;
			result.innerHTML = `<h1> It's a Draw Game </h1>`
			modal.style.display = 'block'
		  }
		  else {
	  
			  // Here, Printing Result
			  if (flag == 1) {
				  document.getElementById('print')
					  .innerHTML = "Player X Turn";

			  }
			  else {
				  document.getElementById('print')
					  .innerHTML = "Player 0 Turn";
			  }
		  }
		addListeners();
		
		setScoreContent();
		refreshGameCountDisplay();
	  }
	  

// Function to reset game
function myfunc_2() {
	
	refreshplayerchoice();
	addListeners();

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
  addListeners();

}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
  addListeners();

}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
  addListeners();

}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
  addListeners();

}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
  addListeners();

}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
  addListeners();

}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
  addListeners();
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
  addListeners();

}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
  addListeners();
}








function addListeners(){
  /*This function is used to read input dynamically from user using the id of input tag of player 1 and player 2 
    and change their names dynamically*/
  p1namedisplay.addEventListener('click', function(){
      
    document.getElementById('p1namedisplay').style.display = 'none';
    document.getElementById('p1name').style.display = 'inline';
});
/*These change functions are used to change the name in the middle of ythe game 
without actually refreshing the game */ 
p1name.addEventListener('change', function(){
if(document.getElementById('p1name').value){
  document.getElementById('p1namedisplay').innerHTML = document.getElementById('p1name').value;
  p1Name = document.getElementById('p1name').value;    
}
document.getElementById('p1namedisplay').style.display = 'inline';    
document.getElementById('p1name').style.display = 'none';

});
// The same goes with player 2 name too
p2namedisplay.addEventListener('click', function(){
    
document.getElementById('p2namedisplay').style.display = 'none';
document.getElementById('p2name').style.display = 'inline';
});


//These eventlistners are used to chnage then name in the middle of game
p2name.addEventListener('change', function(){

if(document.getElementById('p2name').value){
  document.getElementById('p2namedisplay').innerHTML = document.getElementById('p2name').value;
  p2Name = document.getElementById('p2name').value;    
}
document.getElementById('p2namedisplay').style.display = 'inline';    
document.getElementById('p2name').style.display = 'none';


});
}
function setScoreContent(){
  score.innerHTML = `
  <p><span id="p1namedisplay">${p1Name}</span><input type="text" id="p1name" style="display:none;">: ${scoreboard.player1} </p>
  <p><span id="p2namedisplay">${p2Name}</span><input type="text" id="p2name" style="display:none;">: ${scoreboard.player2} </p>     
  <p>Draw: ${scoreboard.draw}
  `;
  addListeners();
}



setScoreContent()


function clearModal(e) {

  if (e.target == modal) {
    modal.style.display = 'none';
	
  }
  
}



function refreshplayerchoice(){
	
  document.getElementById('b1').value = '';
  document.getElementById('b1').disabled = false;
	document.getElementById("b2").value = '';
	document.getElementById('b2').disabled = false;

	document.getElementById("b3").value = '';
	document.getElementById('b3').disabled = false;

	document.getElementById("b4").value = '';
	document.getElementById('b4').disabled = false;

	document.getElementById("b5").value = '';
	document.getElementById('b5').disabled = false;

	document.getElementById("b6").value = '';
	document.getElementById('b6').disabled = false;

	document.getElementById("b7").value = '';
	document.getElementById('b7').disabled = false;

	document.getElementById("b8").value = '';
	document.getElementById('b8').disabled = false;

	document.getElementById("b9").value = '';
	document.getElementById('b9').disabled = false;

}

function refreshGameCountDisplay(){
	document.getElementById('noofgames').innerHTML = ` <p id="noofgames" style="background-color: black; color: white; text-align: center; margin: auto; width: 200px;">Number of games played:  ${gamecount} </p>` 
	
  }

window.addEventListener('click', clearModal);
reset.addEventListener('click', myfunc_2)
