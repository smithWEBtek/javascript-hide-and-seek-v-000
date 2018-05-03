function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('#nested .target');
}

function deepestChild() {
	return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
	var l = document.querySelectorAll('.ranked-list li').length;
	for (var i = 0; i <= l - 1; i++) {
		var num = parseInt(document.querySelectorAll('.ranked-list li')[i].innerHTML) + n;
		document.querySelectorAll('.ranked-list li')[i].innerHTML = num;
	}
}