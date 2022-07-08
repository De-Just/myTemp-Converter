function onlycelcius() {
    document.getElementById("contain2").style.display = "none";
    document.getElementById("contain3").style.display = "none";
    document.getElementById("contain").style.display = "block";
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("convertfrom").innerHTML = "&dArr;  Convert From (&#8451;)  &dArr;";
    document.getElementById("celcius").value = null;
    document.getElementById("output").innerHTML = 0;
}


function onlyfahr() {
    document.getElementById("contain2").style.display = "block";
    document.getElementById("contain3").style.display = "none";
    document.getElementById("contain").style.display = "none";
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("convertfrom").innerHTML = "&dArr;  Convert From (&#8457;)  &dArr;";
    document.getElementById("celcius2").value = null;
    document.getElementById("output2").innerHTML = 0;
}


function onlykelvin() {
    document.getElementById("contain").style.display = "none";
    document.getElementById("contain2").style.display = "none";
    document.getElementById("contain3").style.display = "block";
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("convertfrom").innerHTML = "&dArr;  Convert From (K)  &dArr;";
    document.getElementById("celcius3").value = null;
    document.getElementById("output3").innerHTML = 0;
}

function far() {
    var value1 = document.getElementById("celcius").value;
    var value2 = value1 * 1.8;
    var value3 = value2 + 32;
    document.getElementById("output").innerHTML = value1 + "&#8451; = " + Number(value3.toFixed(2)) + "&#8457";
    if (value1 == "") {
        document.getElementById("output").innerHTML = 0;
    }
}
function kelv() {
    var value1 = document.getElementById("celcius").value;
    var value2 = Number(value1) + 273.15;
    document.getElementById("output").innerHTML = value1 + "&#8451; = " + value2 + "K";
    if (value1 == "") {
        document.getElementById("output").innerHTML = 0;
    }
}
function reset() {
    document.getElementById("celcius").value = null;
    document.getElementById("output").innerHTML = 0;
}

function far2() {
    let value1 = document.getElementById("celcius2").value;
    let value2 = 9 / 5;
    let value3 = 32;
    let value4 = value1 - value3;
    let value5 = value4 / 1.8;
    document.getElementById("output2").innerHTML = value1 + "&#8457; = " + value5.toFixed(2) + "&#8451;";
    if (value1 == "") {
        document.getElementById("output2").innerHTML = 0;
    }
}
function kelv2() {
    var value1 = document.getElementById("celcius2").value;
    var value2 = value1 - 32;
    var value3 = value2 * 5;
    var value4 = value3 / 9;
    var value5 = value4 + 273.15;
    document.getElementById("output2").innerHTML = value1 + "&#8457; = " + value5.toFixed(2) + "K";
    if (value1 == "") {
        document.getElementById("output2").innerHTML = 0;
    }
}
function reset2() {
    document.getElementById("celcius2").value = null;
    document.getElementById("output2").innerHTML = 0;
}

function far3() {
    var value1 = document.getElementById("celcius3").value;
    var value2 = value1 - 273.15;
    document.getElementById("output3").innerHTML = value1 + "K = " + Number(value2) + "&#8451;";
    if (value1 == "") {
        document.getElementById("output3").innerHTML = 0;
    }
}
function kelv3() {
    var value1 = document.getElementById("celcius3").value;
    var value2 = value1 - 273.15;
    var value3 = value2 * 9;
    var value4 = value3 / 5;
    var value5 = value4 + 32;
    document.getElementById("output3").innerHTML = value1 + "K = " + Number(value5.toFixed(3)) + "&#8457;";
    if (value1 == "") {
        document.getElementById("output3").innerHTML = 0;
    }
}
function reset3() {
    document.getElementById("celcius3").value = null;
    document.getElementById("output3").innerHTML = 0;
}