function start(){
	$("#gamescreen").show();
	$("#gameover").hide();
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
}

var foodLossInterval = 0;

function update(){
	if(isRunning = 1){
		$("#gameover").hide();
		checkLoss();
		$("#popText").text("Population: " + population);
		$("#foodText").text("Food: " + food);
		$("#stoneText").text("Stone: " + stone);
		$("#woodText").text("Wood: " + wood);
		foodLossInterval++;
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
		aiBrainOne();
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