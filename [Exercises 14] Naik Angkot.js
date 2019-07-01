

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
    if(arrPenumpang.length === 0){
      return []
    }
    
    var output = []
    var biaya =0
    var start = 0
    var selesai = 0
  
    for(var i = 0; i<arrPenumpang.length; i++){
      for(var j = 0; j<rute.length; j++){
        
    var grup = {}
  
        if(arrPenumpang[i][1] === rute[j]){
          start = j
          // console.log(start)
        }
        if(arrPenumpang[i][2] === rute[j]){
          selesai = j
          // console.log(j)
        }
        }
        biaya = (selesai-start)*2000
        grup['penumpang'] = arrPenumpang[i][0]
        grup['naik dari'] = arrPenumpang[i][1]
        grup['tujuan'] = arrPenumpang[i][2]
        grup['bayar'] = biaya
        output.push(grup)
      }
      return output
    }
    //your code here
  
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]