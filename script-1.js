let menu = [
  "Nasi Ayam Geprek",
  "Nasi Rames",
  "Gorengan",
  "Bakso",
  "Mie Instan",
  "Es Jeruk",
  "Jus Buah",
  "Es Teh",
  "Susu Bubuk"
];

let harga = [7000,7000,1000,5000,7000,5000,7000,3000,5000];
let jumlah = new Array(menu.length).fill(0);

let menuForm = document.getElementById("menuForm");

for (let i = 0; i < menu.length; i++) {
  menuForm.innerHTML += `
    <div class="menu-item">
      <div class="menu-info">
        <span>${menu[i]}</span>
        <small>${rupiah(harga[i])}</small>
      </div>
      <div class="qty">
        <button type="button" onclick="kurang(${i})">−</button>
        <span id="qty${i}">0</span>
        <button type="button" onclick="tambah(${i})">+</button>
      </div>
    </div>
  `;
}

function rupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function tambah(i) {
  jumlah[i]++;
  document.getElementById("qty"+i).innerText = jumlah[i];
}

function kurang(i) {
  if (jumlah[i] > 0) {
    jumlah[i]--;
    document.getElementById("qty"+i).innerText = jumlah[i];
  }
}

function hitung() {
  let total = 0;
  for (let i = 0; i < menu.length; i++) {
    total += harga[i] * jumlah[i];
  }

  let diskon = 0;
  let bonus = "";
  let hari = new Date().getDay();

  if (total >= 25000) diskon = total * 0.1;
  if (hari === 5) {
    diskon += total * 0.05;
    bonus = " + Free Es Teh";
  }

  let totalBayar = total - diskon;
  let uangBayar = Number(document.getElementById("uangBayar").value);

  if (uangBayar < totalBayar) {
    alert("Uang bayar kurang");
    return;
  }

  let kembalian = uangBayar - totalBayar;
  let now = new Date();

  document.getElementById("waktu").innerText =
    now.toLocaleDateString("id-ID") + " " + now.toLocaleTimeString("id-ID");
  document.getElementById("total").innerText = rupiah(total);
  document.getElementById("diskon").innerText = rupiah(diskon) + bonus;
  document.getElementById("uang").innerText = rupiah(uangBayar)
  document.getElementById("bayar").innerText = rupiah(totalBayar);
  document.getElementById("kembalian").innerText = rupiah(kembalian);

  let li = document.createElement("li");
  li.innerText = rupiah (totalBayar)+ bonus;
  document.getElementById("riwayat").appendChild(li);
}