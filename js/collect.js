function collectWood(){
	wood = wood + woodAdd;
	document.getElementById("woodText").innerHTML = "Wood: " + wood;
}

function collectStone(){
	stone = stone + stoneAdd;
	document.getElementById("stoneText").innerHTML = "Stone: " + stone;
}

function collectFood(){
	food = food + foodAdd;
	document.getElementById("foodText").innerHTML = "Food: " + food;
}