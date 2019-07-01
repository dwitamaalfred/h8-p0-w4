function urutkanAbjad(str) {
    var arr = []
    var output = ''
    for (var i = 0; i < str.length ; i++){
      arr.push(str[i])
      arr.sort()
    }
      for (var j = 0; j < arr.length ; j++){
        output = output+arr[j]
        output.toString()
      }
    return output
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'