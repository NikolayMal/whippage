$(document).ready(function() {
    if ($(".ajax-form").length) {
        $(".ajax-form").submit(function(event) {
            var form = $(this);
            var url = form.attr('action');
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function(data) {
                    if (data == "Success") {
						//isUserLoggedIn();
                        window.location.href = "homepage";
                    } else {
                        $(".msg").text(data);
                    }
                }
            });
            event.preventDefault();
        });
    }
});


/*
var log = 1;

function userLoggedIn() {
		$("div.isMember").show();
		$("div.notMember").hide();
		log = 0;
}

function userNotLoggedIn() {
	if ( log == 0 ){
		userLoggedIn();
	} else { //(log == 1)
		$("div.isMember").hide();
		$("div.notMember").show();
	}
}*/
/*
function isUserLoggedIn() {
	

	if( i == 1) { //yes 
		$("div.isMember").show();
		$("div.notMember").hide();
		return 1;
	}
	
	var i = 0;
	if ( i == 0) { // no
		$("div.isMember").hide();
		$("div.notMember").show();
	}
	
}
*/
// onload auto sets to 0
// check to see if their loged in >> they are we change it >> numnber g
// NEW: i = 1. User logs in: navs change. i gets changed to 2, user logs out, i gets changed to 3
// Logs in: number increments by one, display the nav/remove a nav.
// Logs out: number increments by one, display the nav's
		//Scenario 1: user logs in: num is 1(odd) display eee,
					//user logs out : num is 2(even) display proper.
					
//user logs in: function is called: if navold is display:block, change to display: none; and vise versa 









