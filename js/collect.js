function collectWood(){
	wood = wood + woodAdd;
	update();
}

function collectStone(){
	if(wood >= 5){
		wood = wood - 5;
		stone = stone + stoneAdd;
	}
	update();
}

function collectFood(){
	if(wood >= 10){
		food = food + foodAdd;
	}
	update();
}

function makePop(){
	if(food >= 5){
		population = population + 1;
		food = food - 5
	}
	update();
}

function update(){
	$("#popText").text("Population: " + population);
	$("#foodText").text("Food: " + food);
	$("#stoneText").text("Stone: " + stone);
	$("#woodText").text("Wood: " + wood);
}