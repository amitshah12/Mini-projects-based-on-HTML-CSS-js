// document.getElementById("bmiForm").addEventListener('submit',function(e){
//     e.preventDefault();

//     const gender = document.getElementById('gender').value;
//     const age = parseInt(document.getElementById('age').value);
//     const heightFeet = parseInt(document.getElementById('height-feet').value);
//     const heightInches = parseInt(document.getElementById('height-inches').value);
//     const weight = parseFloat(document.getElementById('weight').value);

//     if(gender && age && heightFeet && heightInches && weight){

//         const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254; //in meters
//         const bmi = weight / (heightInMeters * heightInMeters);
//         const resultElement = document.getElementById("result");
        
//         let category = '';
//         if(bmi < 18.5){
//             category = 'Under Weight';
//         } else if (bmi >= 18.5 && bmi <24.9){
//             category = 'Normal weight'
//         } else if (bmi >= 25 && bmi < 29.9){
//             category = 'Over Weight'
//         } else {
//             category = 'Obese';
//         }

//         let resultMessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
//         resultMessage += 'Category: ' + category;

//         resultElement.innerHTML = resultMessage;
//     }

// });

document.getElementById("bmiForm").addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Check for valid input values
    if (gender && age > 0 && heightFeet >= 0 && heightInches >= 0 && weight > 0) {

        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254; // Convert to meters
        const bmi = weight / (heightInMeters * heightInMeters); // BMI calculation
        const resultElement = document.getElementById("result");

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Create result message
        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;

    } else {
        // Handle invalid input
        alert("Please enter valid inputs for all fields.");
    }
});
