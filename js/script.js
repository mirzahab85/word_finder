let niz = []
let result = document.getElementById("ispis");

function addWord() {
  let word = document.getElementById("input").value;
  niz.push(word);
  console.log(niz);
}

function searchWord() {
 let search = document.getElementById("search").value;
 let counter = 0;
  for (let i = 0; i < niz.length; i++) {
   if (niz[i] == search) {
     counter += 1;
     result.innerHTML = '<span style="color:green">Trazena rijec je: ' + search + "</span>";
    }
 }
  if (counter == 0) {
     result.innerHTML = '<span style="color:red">Trazena rijec ' + search + ' ne postoji.</span>'
   }
}
