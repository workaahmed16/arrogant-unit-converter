function changeDropDown(id){
    if (id === "btcusdRadio"){
        document.getElementById('dropdown').innerHTML="";// clear the previous selection if exists
        document.getElementById('dropdown').innerHTML+="<option>Choose a Currency</option><option id = 'USD'>USD</option><option id = 'btc'>BTC</option>"
        document.getElementById('dropdown2').innerHTML="";
        document.getElementById('dropdown2').innerHTML = "<option>Choose a Currency</option><option id = 'usd'>USD</option><option id = 'btc'>BTC</option>"

    } else if (id === "weightRadio"){
        document.getElementById('dropdown').innerHTML = "";
        document.getElementById('dropdown').innerHTML = "<option>Choose Measurement</option><option id = 'kg'>Kilogram</option> <option id = 'pound'>Pound</option>"
        document.getElementById('dropdown2').innerHTML ="";
        document.getElementById('dropdown2').innerHTML ="<option>Choose Measurement</option><option id = 'kg'>Kilogram</option><option = 'pound'>Pound</option>"

    } else if (id === "tempRadio"){
        document.getElementById('dropdown').innerHTML = "";
        document.getElementById('dropdown').innerHTML = "<option>Choose Measurement</option><option id = 'celcius'>Celcius</option> <option id = 'fahrenheit'>Fahrenheit</option>"
        document.getElementById('dropdown2').innerHTML="";
        document.getElementById('dropdown2').innerHTML="<option>Choose Measurement</option><option id = 'celcius'>Celcius</option><option id = 'fahrenheit'>Fahrenheit</option>"

    }
}

function swap(){
    temp = document.getElementById('dropdown').value;
    document.getElementById('dropdown').value = document.getElementById('dropdown2').value;
    document.getElementById('dropdown2').value = temp;
    convert(document.getElementById('dropdown').value, document.getElementById('dropdown2').value)
}

function convert(value1, value2){
    alert("Value 1: " + value1)
    var userValue = parseFloat(document.getElementById('textbox1').value)
    var result = document.getElementById('textbox2')

    if (value1 === "USD" && value2 === "USD") {
        result.value = userValue;
    }else if (value1 ==="USD" && value2 === "BTC"){
        result.value = (parseInt(enteredValue)/1000);
    }
}