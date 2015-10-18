debugger;

(function() {
	var index = (~~(Date.now()/(60 * 60 * 24 * 1000))+2)%8;
	var mates = $(".mate-box>.mate");
	var duty = mates.eq(index);
	duty.find("span").addClass("duty-people");
	console.log(index, duty, mates)
}());