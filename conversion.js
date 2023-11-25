//JS File
let calculate = function(){
    let exchangeRate = .75;
    let amountUSD = parseFloat(document.getElementById("amount").value);
    let convertedCAD = amountUSD * exchangeRate;
    document.getElementById("converted").value = convertedCAD.toFixed(2);
}