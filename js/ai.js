var aiOneRelDropInterval = 0;
var doNotGiftOne = 0;
function aiBrainOne(){
	if(isRunning = 1){
		aiOneRelDropInterval++;
		if(aiOneRel <= 60){
			doNotGiftOne = 1;
		} else {
			doNotGiftOne = 0;
		}
		aiCollectWoodFor();
		if(aiWoodOne >= 50){
			aiCollectStoneOne();
		} else{
			aiCollectWoodFor();
		}
		if(aiStoneOne >= 50){
			if(aiWoodOne >= 50){
				if(aiFoodOne >= 50){
					if(aiFoodOne / 4 >= aiPopOne){
						aiMakePopOne();
					}
				};
			};
			aiCollectFoodFor();
		} else{
			aiCollectWoodFor();
		}
		if(aiOneRelDropInterval == 300){
			if(aiOneRel > 0){
				aiOneRel = aiOneRel - 5;
			}
		aiOneRelDropInterval = 0;
	}
}

function aiCollectWoodFor(){
	aiWoodOne = aiWoodOne + 5;
}
function aiCollectFoodFor(){
	aiFoodOne = aiFoodOne + 5;
	aiStoneOne = aiStoneOne - 10;
}
function aiCollectStoneOne(){
	aiStoneOne = aiStoneOne + 1;
	aiWoodOne = aiWoodOne - 5;
}
function aiMakePopOne(){
	aiStoneOne = aiStoneOne - 5;
	aiWoodOne = aiWoodOne - 5;
	aiFoodOne = aiFoodOne - 5;
	aiPopOne = aiPopOne + 1;
}
function giveWood(ai){
	if(ai == 1){
		if(wood >= 10){
			wood = wood - 10;
			aiWoodOne = aiWoodOne + 10;
			if(aiOneRel < 100){
				aiOneRel = aiOneRel + 1;
			}
		}
	}
}
function requestWood(ai){
	if(ai == 1){
		if(doNotGiftOne == 0){
			wood = wood + 5;
			aiWoodOne = aiWoodOne - 5;
		}
	}
}
function giveStone(ai){
	if(ai == 1){
		if(stone >= 10){
			stone = stone - 10;
			aiStoneOne = aiStoneOne + 10;
			if(aiOneRel < 100){
				aiOneRel = aiOneRel + 5;
				if(aiOneRel > 100){
					aiOneRel = 100;
				}
			}
		}
	}
}
function requestStone(ai){
	if(ai == 1){
		if(doNotGiftOne == 0){
			stone = stone + 5;
			aiStoneOne = aiStoneOne - 5;
		}
	}
}
function giveFood(ai){
	if(ai == 1){
		if(food >= 10){
			food = food - 10;
			aiFoodOne = aiFoodOne + 10;
			if(aiOneRel < 100){
				aiOneRel = aiOneRel + 10;
				if(aiOneRel > 100){
					aiOneRel = 100;
				}
			}
		}
	}
}
function requestFood(ai){
	if(ai == 1){
		if(doNotGiftOne == 0){
			aiFoodOne = aiFoodOne - 5;
			food = food + 5;
		}
	}
}
}