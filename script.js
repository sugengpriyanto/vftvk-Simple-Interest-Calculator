function compute()
{
    // get form value
    amount = document.getElementById("principal").value;
    rate = parseFloat(document.getElementById("rate").value).toFixed(1);
    years = parseInt(document.getElementById('years').value);

    // compute result
    result = amount * (rate / 100) * years

    // get result date
    now = new Date().getFullYear()
    year = now + years

    // debug
    console.log(rate / 100)

    // validate
    
    if (amount <= 0) {
        // show validation notice
        alert('Please input positive number')
    } else {
        document.getElementById('amount').innerText = amount
        document.getElementById('rateValue').innerText = rate
        document.getElementById('result').innerText = result
        document.getElementById('year').innerText = year
        document.getElementById('results').classList.remove('hidden')
    }
}

function updateTextInput(val) {
    document.getElementById('range').innerText = val
}
