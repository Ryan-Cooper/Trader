function checkLoss(){
	if(population == 0){
		isRunning = 0;
		$("#gamescreen").hide();
		$("#gameover").show();
	}
}

function checkWin(){
	if(population == 100){
		if(wood == 10000){
			if(stone == 5000){
				if(food == 15000){
					$("#gamescreen").hide();
					$("#gameWin").show();
					isRunning = 0;
				}
			}
		}
	}
	if(aiPopOne == 0){
		$("#gamescreen").hide();
		$("#gameWin").show();
		isRunning = 0;
	}
}