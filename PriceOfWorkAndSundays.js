function calculate() {
		
		var date = document.getElementById("date").value;
 
		if (isSunday(date) == false) {
			
			const
			workdayPrice = 48;
			document.getElementById("answer").innerHTML = "<p>Date "
					+ date+ " (work day)."
					+ "<br>The price of this repair work is  " + workdayPrice +
					" euros per hour.</p>";			
		} else {
			
			const
			sundayPrice = 72;

			document.getElementById("answer").innerHTML = "<p>Date "
					+ date+ " (Sunday)"
					+ "<br>The price of this repair work is  " + sundayPrice +
					" euros per hour.</p>";
		}
	}

function isSunday(dateText) {
	
	var dd = dateText.substr(0, 2);
	var mm = dateText.substr(3, 2);
	var yy = dateText.substr(6);

	var asDate = new Date();
	
	
	asDate.setFullYear(yy, (mm - 1), dd);
	
	var dayOfWeek = asDate.getDay();
 
	if (dayOfWeek == 0) {

		return true;	
	} else {
			
		return false;
	}
}