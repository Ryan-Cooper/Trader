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
	if(stone >= 5){
		food = food + foodAdd;
		stone = stone - 5;
	}
	update();
}

function makePop(){
	if(food >= 5){
		if(wood >= 5){
			if(stone >= 5){
				population = population + 1;
				stone = stone - 5;
				wood = wood -5;
				food = food - 5;
			}
		}
	}
	update();
}
