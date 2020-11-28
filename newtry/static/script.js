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
                        window.location.href = "cars";
                    } else {
                        $(".msg").text(data);
                    }
                }
            });
            event.preventDefault();
        });
    }
});