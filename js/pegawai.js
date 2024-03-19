let frm = document.getElementById("pegawai");
let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilih Jabatan ----</option>`;
for (let j in jabatanPilihan) {
  pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]} </option>`;
}

let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value=""> Pilih Status ----</option>`;
for (let s in statusPilihan) {
  pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]} </option>`;
}

frm.jabatan.innerHTML = pilihJabatan;
frm.status.innerHTML = pilihStatus;

function cetakGaji() {
  let nama = frm.nama.value;
  let jabatan = frm.jabatan.value;
  let status = frm.status.value;

  if (jabatan == "Manager") {
    gajiPokok = 15000000;
  } else if (jabatan == "Asisten Manager") {
    gajiPokok = 10000000;
  } else if (jabatan == "Staff") {
    gajiPokok = 5000000;
  } else {
    gajiPokok = 0;
  }

  let tunjanganJabatan = 0.15 * gajiPokok;
  let bpjs = 0.1 * gajiPokok;
  let tunjanganKeluaraga = status == "Menikah" ? 0.2 * gajiPokok : 0;
  let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluaraga;
  let nomor = 1;

  Swal.fire({
    icon: "info",
    title: "<i>Cetak Data Pegawai</i>",
    html: `<table border="1" width="100%">
        <thead>
        <tr>
        <th>No.</th>
        <th>Nama Pegawai</th>
        <th>Jabatan</th>
        <th>Status</th>
        </tr>
        </thead>

        <tbody>
        <tr>
        <td>${nomor++}</td>
        <td>${nama}</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        </tr>
        </body>
        
        <tfoot>
        <tr>
        <td>Total Gaji </td>
        <td colspan="3">${totalGaji}</td>
        </tr>
        </tfoot>
    </table>`,
    confirmButtonText:"Ok",
});
}