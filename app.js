let totalamount = 0;

function btn(amount) {
    totalamount += amount * 1000
}

function btn12() {
    document.getElementById("totalDisplay").innerText = 'Total amount: Rs ' + totalamount;
}