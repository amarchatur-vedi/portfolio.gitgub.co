let screenControl = function(){
		var w = window.innerWidth;
		var h = window.innerHeight;

		if (w < 600 || h < 400){
			document.getElementById("navbar").className = "navbar navbar-expand-lg bg-dark navbar-dark fixed-top";
		}
		else{		
			document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-light fixed-top";
		}
	}
	setInterval(screenControl , 1000);