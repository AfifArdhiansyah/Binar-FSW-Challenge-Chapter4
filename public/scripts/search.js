document.getElementById("search").addEventListener("submit", function(e) {
    e.preventDefault();
    displayFormInput();
});

let tipeDriver;
let waktuJemput;
//display form input
function displayFormInput() {
    const tanggal = document.getElementById("tanggalSelect").value;
    const jumlahPenumpang = document.getElementById("jumlahPenumpang").value;
    console.log(tipeDriver, tanggal, waktuJemput, jumlahPenumpang);
}

//get tipe driver
const tipeDriverItem = document.getElementsByClassName("tipe-driver-item");
for (let i = 0; i < tipeDriverItem.length; i++) {
    tipeDriverItem[i].addEventListener("click", function() {
        tipeDriver = tipeDriverItem[i].innerHTML;
    });
}

//get waktu jemput
const waktuJemputItem = document.getElementsByClassName("waktu-jemput-item");
for (let i = 0; i < waktuJemputItem.length; i++) {
    waktuJemputItem[i].addEventListener("click", function() {
        waktuJemput = waktuJemputItem[i].innerHTML;
    });
}