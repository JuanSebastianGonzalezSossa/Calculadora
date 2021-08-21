function insert(num) {
    document.getElementById("TextView").value = document.getElementById("TextView").value + num;
}

function equals() {
    var exp = document.getElementById("TextView").value;
    if (exp) {
        document.getElementById("TextView").value = eval(exp);
    }
}

function clean() {
    document.getElementById("TextView").value = "";
}

function back() {
    var exp = document.getElementById("TextView").value;
    document.getElementById("TextView").value = exp.substring(0, exp.length - 1);
}

function x2() {
    var exp = document.getElementById("TextView").value;
    document.getElementById("TextView").value = parseFloat(exp) * parseFloat(exp);
}

function inversor() {
    var exp = document.getElementById("TextView").value;
    document.getElementById("TextView").value = (1 / parseFloat(exp));
}

function raiz() {
    var exp = document.getElementById("TextView").value;
    document.getElementById("TextView").value = parseFloat(Math.sqrt(exp));
}