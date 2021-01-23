function calculateTip() {
				var billAmt = document.getElementById("totalamt").value;
				var serviceQual = document.getElementById("services").value;
				var numOfPeople = document.getElementById("numOfPeople").value;

  //validate input so that value can be null
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1( if empty consider 1 by default)
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total);
    //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
