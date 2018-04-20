function listrand(listname) {
	return listname[Math.floor(Math.random()*listname.length)]
}

var cat = document.getElementsByClassName("cat-image")[0];

var resting = []
var active = []

for (i=1; i<5; i++){
	resting.push("Frame"+i)
}

for (i=5; i<13; i++){
	active.push("Frame"+i)
}

cat.onclick = function() {
	cat.innerHTML = '<img src="images/'+listrand(active)+'.png" alt="a pink cat head">';
	setTimeout(function(){
		cat.innerHTML = '<img src="images/'+listrand(resting)+'.png" alt="a pink cat head">';
	}, 500);
}