const bulandipilih = document.getElementById("milihbulan")
const rahinanjuni = document.getElementById("daftarjuni")
const rahinanjuli = document.getElementById("daftarjuli")
const rahinanagustus = document.getElementById("daftaragustus")
const rahinanseptember = document.getElementById("daftarseptember")
const rahinanoktober = document.getElementById("daftaroktober")
const rahinannovember = document.getElementById("daftarnovember")
const rahinandesember = document.getElementById("daftardesember")


rahinanjuni.style.display = "none";
rahinanjuli.style.display = "none";
rahinanagustus.style.display = "none";
rahinanseptember.style.display = "none";
rahinanoktober.style.display = "none";
rahinannovember.style.display = "none";
rahinandesember.style.display = "none";

bulandipilih.addEventListener("change", function () {

    rahinanjuni.style.display = "none";
    rahinanjuli.style.display = "none";
    rahinanagustus.style.display = "none";
    rahinanseptember.style.display = "none";
    rahinanoktober.style.display = "none";
    rahinannovember.style.display = "none";
    rahinandesember.style.display = "none";

    if (bulandipilih.value == 6) {
        rahinanjuni.style.display = "block";
    } else if (bulandipilih.value == 7) {
        rahinanjuli.style.display = "block";
    } else if (bulandipilih.value == 8) {
        rahinanagustus.style.display = "block";
    } else if (bulandipilih.value == 9) {
        rahinanseptember.style.display = "block";
    } else if (bulandipilih.value == 10) {
        rahinanoktober.style.display = "block";
    } else if (bulandipilih.value == 11) {
        rahinannovember.style.display = "block";
    } else if (bulandipilih.value == 12) {
        rahinandesember.style.display = "block";
    }
})