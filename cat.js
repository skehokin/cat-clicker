function listrand(listname) {
	return listname[Math.floor(Math.random()*listname.length)]
}

var cat = document.getElementsByClassName("cat-image")[0];
console.log(cat);

cat.onclick = function() {
	this.innerHTML = '<img src="images/Frame5.png" alt="a pink cat head">';
}