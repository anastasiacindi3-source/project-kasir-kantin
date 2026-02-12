let barang = [];

// format rupiah
function rupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function tambahBarang() {
  let nama = document.getElementById("nama").value;
  let harga = parseInt(document.getElementById("harga").value);
  let jumlah = parseInt(document.getElementById("jumlah").value);

  if (nama === "" || isNaN(harga) || isNaN(jumlah)) {
    alert("Data tidak boleh kosong!");
    return;
  }

  barang.push({ nama, harga, jumlah });
  tampilBarang();

  document.getElementById("nama").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("jumlah").value = "";
}

function tampilBarang() {
  let daftar = document.getElementById("daftar");
  daftar.innerHTML = "<b>Daftar Belanja:</b><br>";

  for (let i = 0; i < barang.length; i++) {
    let totalBarang = barang[i].harga * barang[i].jumlah;
    daftar.innerHTML +=
      (i + 1) + ". " + barang[i].nama +
      " | " + rupiah(barang[i].harga) +
      " x " + barang[i].jumlah +
      " = <b>" + rupiah(totalBarang) + "</b><br>";
  }
}

function hitungTotal() {
  let total = 0;

  for (let i = 0; i < barang.length; i++) {
    total += barang[i].harga * barang[i].jumlah;
  }

  let uang = parseInt(document.getElementById("uang").value);
  let hasil = document.getElementById("hasil");

  if (isNaN(uang)) {
    alert("Masukkan uang bayar!");
    return;
  }

  if (uang < total) {
    hasil.innerHTML = "Uang tidak cukup!";
  } else {
    hasil.innerHTML =
      "Total Belanja: <b>" + rupiah(total) + "</b><br>" +
      "Kembalian: <b>" + rupiah(uang - total) + "</b>";
  }
}

function resetData() {
  barang = [];
  document.getElementById("daftar").innerHTML = "";
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("uang").value = "";
}