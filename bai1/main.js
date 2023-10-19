window.onload = function() {
    document.getElementById("btn-tinh").addEventListener("click", function() {
        var a = parseInt(document.getElementById("a").value);
        var b = parseInt(document.getElementById("b").value);
        if (a < 1 || b < 1) {
            document.getElementById("ket-qua").innerHTML = "Số a và số b phải lớn hơn 0";
            return;
        }

        var tong = 0;
        var mangSoNguyenTo = [];
        for (var i = a; i <= b; i++) {
            if (kiemTraSoNguyenTo(i)) {
                tong += i;
                mangSoNguyenTo.push(i);
            }
        }
        document.getElementById("ket-qua").innerHTML = "Tổng các số nguyên tố trong khoảng " + a + " và " + b + " là: " + tong;
        document.getElementById("ket-qua").innerHTML += "<br>Danh sách các số nguyên tố trong khoảng " + a + " và " + b + ": <br>";
        for (var i = 0; i < mangSoNguyenTo.length; i++) {
            document.getElementById("ket-qua").innerHTML += mangSoNguyenTo[i] + " ";
        }
    });
};

function kiemTraSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }

    for (var i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}