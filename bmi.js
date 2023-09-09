// Function to calculate BMI
// Function to calculate BMI
function calculateBMI() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    var bmi = weight / (height * height);
    var result = "Your BMI is: " + bmi.toFixed(2);

    var interpretation = "BMI Category: ";
    if (bmi < 18.5) {
        interpretation += "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation += "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation += "Overweight";
    } else {
        interpretation += "Obese";
    }

    document.getElementById("result").innerHTML = result + "<br>" + interpretation;
}

// Event listeners
document.getElementById('bmiForm').addEventListener('click', calculateBMI);
document.getElementById('reset').addEventListener('click', resetForm);
document.getElementById('result').addEventListener('click', resetForm);