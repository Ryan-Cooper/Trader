function start(){
	hasWon = 0;
	devMode = 0;
	isRunning = 1;
	wood = 0;
	stone = 0;
	woodAdd = 1;
	stoneAdd = 1;
	food = 10;
	foodAdd = 10;
	population = 1;
	foodLossOn = 0;
	aiWoodOne = 100;
	aiStoneOne = 50;
	aiFoodOne = 200;
	aiPopOne = 10;
	aiOneRel = 100;
	hideScreens();
	showGame();
}

function continueGame(){
	$("#gameWin").hide();
	$("#gamescreen").show();
	isRunning = 1;
	hasWon = 1;
}

var foodLossInterval = 0;

function update(){
	if(isRunning = 1){
		checkWin();
		checkLoss();
		$("#popText").text("Population: " + population);
		$("#foodText").text("Food: " + food);
		$("#stoneText").text("Stone: " + stone);
		$("#woodText").text("Wood: " + wood);
		popModifier = population / 2;
		if(foodLossInterval == 50){
			foodLossInterval = 0;
			if(population > food){
				population = population - 1;
			} else{
				food = food - population;
			}
			if(aiPopOne > aiFoodOne){
				aiPopOne = aiPopOne - 1;
			}else{
				aiFoodOne = aiFoodOne - aiPopOne;
			}
		}
		$("#aiWoodOneText").text("Wood: " + aiWoodOne);
		$("#aiStoneOneText").text("Stone: " + aiStoneOne);
		$("#aiFoodOneText").text("Food: " + aiFoodOne);
		if(devMode == 1){
			$("#aiPopOneText").show();
			$("#aiPopOneText").text("Population: " + aiPopOne);
		} else{
		$("#aiPopOneText").hide();
		}
		$("#aiOneRelText").text(aiOneRel + "% Relationship");
	}
}
function foodLoss(){
	foodLossInterval++;
}
function hideScreens(){
	$("#gameover").hide();
	$("#gameWin").hide();
}
function showGame(){
	$("#gamescreen").show();
}