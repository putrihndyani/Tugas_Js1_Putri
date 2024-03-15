function dataPerson() {
    let form = document.getElementById('frm');
    let nama = document.getElementById ("frm").nama.value;
    let pekerjaan = document.getElementById ("frm").pekerjaan.value;
    let hobby = document.getElementById ("frm").hobby.value;
    let input = "Selamat Datang " + nama + "<br> Pekerjaan  : " + pekerjaan +"<br> Hobby  : " +hobby ;
    let no_input = "Maaf Form Belum Diisi,Harap Isi Terlebih Dahulu!!";
    let hasil = nama && pekerjaan && hobby != "" ? input : no_input;
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  
  