window.setInterval(function colorchanger() {
	
	var num = Math.round(Math.random() * 2);
	
	if(num == 0)
	{
		$('#colorchanger').removeClass('text-black');
		$('#colorchanger').removeClass('text-gray');
		$('#colorchanger').removeClass('text-gold');
		
		$('#colorchanger').addClass('text-black');
	}
	if(num == 1)
	{
		$('#colorchanger').removeClass('text-black');
		$('#colorchanger').removeClass('text-gray');
		$('#colorchanger').removeClass('text-gold');
		
		$('#colorchanger').addClass('text-gray');
	}
	if(num == 2)
	{
		$('#colorchanger').removeClass('text-black');
		$('#colorchanger').removeClass('text-gray');
		$('#colorchanger').removeClass('text-gold');
		
		$('#colorchanger').addClass('text-gold');
	}
}, 1000);