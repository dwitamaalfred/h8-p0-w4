function cariMedian(arr) {
    var hasil = ''
    for(var i = 0; i<arr.length ;i++){
      if(arr.length % 2 === 0){
        var position = arr.length / 2
        hasil = (arr[position]+arr[position-1])/2
        return hasil
      }else{
         var position = Math.ceil(arr.length / 2)
         hasil = (arr[position-1])
         return hasil
      }
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5