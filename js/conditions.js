function checkLoss(){
	if(population == 0){
		isRunning = 0;
		$("#gamescreen").hide();
		$("#gameover").show();
	}
}