$(function (){
	$("a").click(function(event){
		if(this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$("html, body").animate ({
				scrollTop: $(gato).offset().top
			},850, function() {
				window.location.hash = gato;

		});
	}
});
});

$(document).ready(function(){
  $(".titulo").hover(function(){
    $(this).css("color", "#232424");
    }, function(){
    $(this).css("color", "#9c9c9c");
  });
});