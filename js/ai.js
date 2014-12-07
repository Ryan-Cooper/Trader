var aiOneRelDropInterval = 0;
var doNotGiftOne = 0;
function aiBrainOne(){
	aiOneRelDropInterval++;
	if(aiOneRel <= 60){
		doNotGiftOne = 1;
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
				aiMakePopOne();
			};
		};
		aiCollectFoodFor();
	} else{
		aiCollectWoodFor();
	}
	if(aiOneRelDropInterval == 300){
		aiOneRelDropInterval = 0;
		aiOneRel = aiOneRel - 5;
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