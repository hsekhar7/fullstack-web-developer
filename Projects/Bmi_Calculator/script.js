function CalculateBmi(){
                
    var height=parseFloat(document.getElementById("Height").value);
    var weight=parseFloat(document.getElementById("Weight").value);

  
    var bmi=(weight/height**2)*100*100;

    document.getElementById("results").innerHTML=`Your BMI value is :${bmi.toFixed(2)}`;

    if (bmi > 0 && bmi < 18.5) {
        document.getElementById("WeightStatus").innerHTML = "[Under-Weight]";
        document.getElementById("WeightStatus").className="text-danger";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("WeightStatus").innerHTML = "[Normal-Weight]";
        document.getElementById("WeightStatus").className="text-success";
    } else if (bmi >= 25 && bmi <=29.9) {
        document.getElementById("WeightStatus").innerHTML = "[Over-Weight]";
        document.getElementById("WeightStatus").className="text-danger";
    } else if (bmi >= 30) {
        document.getElementById("WeightStatus").innerHTML = "[Obesity]";
        document.getElementById("WeightStatus").className="text-danger";
    };
 }
 function ClearClick() {
        document.getElementById("Height").value = "";
        document.getElementById("Weight").value = "";
        document.getElementById("results").innerHTML="";
        document.getElementById("WeightStatus").innerHTML="";
}