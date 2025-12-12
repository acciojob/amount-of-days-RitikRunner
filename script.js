//your JS code here. If required.
function daysOfAYear(year) {
	return isLeapYear(year)? 366 : 365
	
}
funtion isLeapYear(year){
	return year%400===0 || (year%100!==0 && year%4===0)  
}
const year = prompt("Enter a year.")
alert(daysOfAYear(year))


