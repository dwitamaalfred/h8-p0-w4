function checkAB(num) {

    // var condition = true
    var positionA = ''
    var positionB = ''
    var hasil = false
    var temp = []
    
      for(var i=0; i<num.length; i++){
        if(num[i] === 'b'){
          positionB = i
          // console.log(positionB)
          for(var j=0; j<num.length; j++){
            if(num[j] === 'a'){
              positionA = j
              console.log(positionA)
              var jumlah = Math.abs(j - i) - 1
              // console.log(jumlah)
              if(jumlah === 3){
                return true
              }
            }
          }
          // console.log (positionB)
        }
      }
      return hasil
}

    
    
    
    // TEST CASES
    console.log(checkAB('lane borrowed')); // true
    console.log(checkAB('i am sick')); // false
    console.log(checkAB('you are boring')); // true
    console.log(checkAB('barbarian')); // true
    console.log(checkAB('bacon and meat')); // false
    console.log(checkAB('babaabbaba')); // false