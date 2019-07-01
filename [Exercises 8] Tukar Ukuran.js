function tukarBesarKecil(kalimat) {
    var kecil = kalimat.toLowerCase()
    var besar = kalimat.toUpperCase()
    var balik = ''
    var output = ''
    for(var i=0 ; i<kalimat.length ; i++){
      if(kalimat[i] === kecil[i]){
        balik = kalimat[i].toUpperCase()
        }
      if(kalimat[i] === besar[i]){
        balik = kalimat[i].toLowerCase()
      }
      output += balik
    }
    return output
  }
  
//   function tukarBesarKecil(kalimat) {
//     var kecil = kalimat.toLowerCase()
//     var besar = kalimat.toUpperCase()

//       if(kalimat.length === 0){
//         return ''
//       }
//       if(kalimat[0] === besar[0]){
//         kalimat[0] = kalimat[0] + kecil[0]
//         return kecil[0] + tukarBesarKecil(kalimat.slice(1))
//       }
//       if(kalimat[0] === kecil[0]){
//         kalimat[0][0] = kalimat + besar[0]
//         return besar[0] + tukarBesarKecil(kalimat.slice(1))
//       }
// }
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"