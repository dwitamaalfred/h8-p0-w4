function cariModus(arr) {
    var counter = 0
    var modus = ''
    for( var i = 0; i<arr.length ; i++){
      for( var j = 0; j<arr.length ; j++){
        if(arr[i] === arr[j] && i !== j){
          modus = arr[i]
          counter++
        }
      }
    }
    if(counter < 1 || counter > 4){
      return -1
      }
    return modus
  }
  
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1