var sens = ["I'm in love with the shape of you",
			"I believe I can fly",
			"I'm at a payphone trying to call home",
			"We don't talk anymore like we used to do",
			"It's been a long day without you my friend",
			"I'm gonna swing from the chandelier",
			"Today I don't feel like doing anything",
			"Happy Birthday to you",
			"But here's my number, so call me, maybe",
			"We don't talk anymore"
			];
var ran = sens[Math.ceil(Math.random()*9)],
	repl = ran.replace(/([A-z])/g, "_"),
	remainGuess = 5,
	p = 0;

console.log(ran);
document.getElementById("show").innerHTML = repl;

console.log(ran.length);
console.log(repl.length);
var charac = "",
	characc = "",
	input1 = "",
	useArray = [];

function guess(charac){
		charac = document.getElementById("guess").value;
		characc = charac.toUpperCase();
		var rep = "";

		if(charac == ""){
			alert("Please enter a letter!");
			return;
		}else if(useArray.indexOf(charac) ==-1){
			useArray.push(charac);
		}else{
			alert("You've already typed this letter!");
			document.getElementById("guess").value = "";
			return;
		}

		for(i=0; i<repl.length; i++){
			p = Number(document.getElementById("points").innerHTML);
			if(ran.indexOf(characc) == 0){
				repl = characc + repl.substring(1);
				p += 1;
				console.log("test "+ p);
				document.getElementById("points").innerHTML = p;
				console.log(repl);
				document.getElementById("show").innerHTML = repl;
				document.getElementById("guess").value = "";
			}
			if(ran.indexOf(charac) != -1){
				for(i=0; i< repl.length; i++){
					if(charac == ran[i]){
						input1 = repl.slice(0,i);
						input3 = repl.slice(i+1, repl.length);
						repl = input1 + charac + input3;
						console.log(repl);
						console.log(input1);
						console.log(input3);
						ran.replace(charac,"_");
						p+=1;
						document.getElementById("points").innerHTML = p;
						console.log(p);
					}
				}
			}else{
				document.getElementById("remainGuess").innerHTML = remainGuess-1;
				document.getElementById("incorrect").innerHTML += charac;
				remainGuess= remainGuess-1;

				p-=1;
				document.getElementById("points").innerHTML = p;
				if(remainGuess <= 3){
					document.getElementById("remainGuess").style.color = "red";
				}
				document.getElementById("guess").value = "";
				if(remainGuess == 0){
				document.getElementById("show").innerHTML = ran;
				document.getElementById("show").style.color = "red";
				document.getElementById("show").style.fontSize = "2em";
				document.getElementById("points").style.color = "blue";
				document.getElementById("points").style.fontSize = "2em";
				var reloadd = setTimeout(function(){location.reload()}, 5000);
				}
				return;
			}
			if(repl.indexOf("_") == -1){
				document.getElementById("show").style.color = "green";
				document.getElementById("show").style.fontSize = "2em";
				document.getElementById("points").style.color = "blue";
				document.getElementById("points").style.fontSize = "2em";
				var reloadd = setTimeout(function(){location.reload()}, 5000);
			}
			document.getElementById("show").innerHTML = repl;
			document.getElementById("guess").value = "";
		}
}
