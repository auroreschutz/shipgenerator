// Clear 
function clearFields() {
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('result').innerText = '♡';
}

function generateName() {
    // Clear
    document.getElementById('result').innerText = '';

    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;

    // If empty fields
    if (name1 && name2) {
        var generatedName = mixNames(name1, name2);
        document.getElementById('result').innerText += generatedName;
    } else {
        document.getElementById('result').innerText += '-`♡´-';
        // alert('Please enter both names.');
    }
}

function mixNames(name1, name2) {
    // Randomly choose the names
    var randomOrder = Math.random() < 0.5;

    // Randomly choose the first or last 3 letters
    var useFirstThree1 = Math.random() < 0.5;
    var useFirstThree2 = Math.random() < 0.5;

    // Randomly combine the names
    var mixedName = randomOrder
        ? (useFirstThree1 ? name1.slice(0, 3) : name1.slice(-3)) + (useFirstThree2 ? name2.slice(0, 3) : name2.slice(-3))
        : (useFirstThree2 ? name2.slice(0, 3) : name2.slice(-3)) + (useFirstThree1 ? name1.slice(0, 3) : name1.slice(-3));

    return mixedName;
}

