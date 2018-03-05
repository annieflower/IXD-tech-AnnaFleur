var benzine = 50;

function benzineMeter() {
	benzine--;
	if(benzine == 1){
		benzine++;
	} else {
		document.getElementById("benzine").innerHTML = benzine;
	}
}

benzineMeter();