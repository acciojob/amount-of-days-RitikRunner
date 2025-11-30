//your JS code here. If required.
function days(input) {
	if(input%1000===0){
	console.log("366")	
	}else if (input%100===0) {
		console.log("365")
	} else if (input%4===0) {
		console.log("364")
	} else {
		console.log("365")
	} 
	
}
return days;
document.getElementById("output").innerHTML = days();


