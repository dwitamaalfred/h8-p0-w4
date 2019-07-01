

function digitPerkalianMinimum(angka) {
    output = ''
    var temp = ''
    var output = []
    
    for(var i=0 ; i<= angka ; i++){
      for(var j=0 ; j<= angka ; j++){
      if (i * j === angka && i < 10){
        temp = i.toString()+ j.toString()
       }
      }
    }
     return temp.length
   }
   
   // TEST CASES
   console.log(digitPerkalianMinimum(24)); // 2
   console.log(digitPerkalianMinimum(90)); // 3
   console.log(digitPerkalianMinimum(20)); // 2
   console.log(digitPerkalianMinimum(179)); // 4
   console.log(digitPerkalianMinimum(1)); // 2