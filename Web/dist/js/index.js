(function() {
	var index = (~~(Date.now()/(60 * 60 * 24 * 1000)))%8;
	var menbers = $(".members-box>.member");
	var menber = menbers.eq(index+2);
	menber.find("a").removeClass("btn-danger").addClass("btn-primary");
}());