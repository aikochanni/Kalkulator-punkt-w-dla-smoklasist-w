const start = () => {
  document.getElementById("profil").addEventListener("change", profile);
  document.addEventListener("change", calc);
};

const profile = () => {
  let profil = document.getElementById("profil");

  switch (profil.value) {
    case "1":
    case "2":
    case "3":
      subject_version_first();
      break;
    case "4":
    case "5":
    case "6":
      subject_version_second();
      break;
    case "":
      subject_version_default();
      break;
  }
};

function calc() {
  var e_polski = document.getElementById("e-polski").value;
  if (e_polski >= 0 && e_polski <= 100) {
    e_polski *= 0.35;
  } else {
    e_polski = 0;
  }

  var e_matma = document.getElementById("e-matma").value;
  if (e_matma >= 0 && e_matma <= 100) {
    e_matma *= 0.35;
  } else {
    e_matma = 0;
  }

  var e_obcy = document.getElementById("e-obcy").value;
  if (e_obcy >= 0 && e_obcy <= 100) {
    e_obcy *= 0.3;
  } else {
    e_obcy = 0;
  }

  var egzaminy = e_polski + e_matma + e_obcy;
  var oceny = 0;

  switch (document.getElementById("ocena-polski").value) {
    case "2":
      oceny += 2;
      break;
    case "3":
      oceny += 8;
      break;
    case "4":
      oceny += 14;
      break;
    case "5":
      oceny += 17;
      break;
    case "6":
      oceny += 18;
      break;
    default:
      break;
  }

  switch (document.getElementById("ocena-matma").value) {
    case "2":
      oceny += 2;
      break;
    case "3":
      oceny += 8;
      break;
    case "4":
      oceny += 14;
      break;
    case "5":
      oceny += 17;
      break;
    case "6":
      oceny += 18;
      break;
    default:
      break;
  }

  switch (document.getElementById("ocena-pierwszy").value) {
    case "2":
      oceny += 2;
      break;
    case "3":
      oceny += 8;
      break;
    case "4":
      oceny += 14;
      break;
    case "5":
      oceny += 17;
      break;
    case "6":
      oceny += 18;
      break;
    default:
      break;
  }

  switch (document.getElementById("ocena-drugi").value) {
    case "2":
      oceny += 2;
      break;
    case "3":
      oceny += 8;
      break;
    case "4":
      oceny += 14;
      break;
    case "5":
      oceny += 17;
      break;
    case "6":
      oceny += 18;
      break;
    default:
      break;
  }

  var konkursy =
    parseInt(document.getElementById("k1").value) +
    parseInt(document.getElementById("k2").value) +
    parseInt(document.getElementById("k3").value) +
    parseInt(document.getElementById("k4").value) +
    parseInt(document.getElementById("k5").value);
  if (konkursy > 18) {
    konkursy = 18;
  }

  var punkty =
    egzaminy +
    oceny +
    parseInt(document.getElementById("wyroznienie").value) +
    parseInt(document.getElementById("wolontariat").value) +
    konkursy;
  document.getElementById("wynik").innerHTML = punkty.toFixed(2);
}

const subject_version_default = () => {
  document.querySelector("#form2 > label:nth-child(5)").innerHTML =
    "1 przedmiot obowiązkowy";
  document.querySelector("#\\32 p").innerHTML = "2 przedmiot obowiązkowy";
};

const subject_version_first = () => {
  document.querySelector("#form2 > label:nth-child(5)").innerHTML =
    "Język obcy wiodący";
  document.querySelector("#\\32 p").innerHTML = "Fizyka";
};

const subject_version_second = () => {
  document.querySelector("#form2 > label:nth-child(5)").innerHTML =
    "Informatyka";
  document.querySelector("#\\32 p").innerHTML = "Geografia";
};

window.addEventListener("load", start);
