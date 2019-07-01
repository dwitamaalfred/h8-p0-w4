function changeMe(arr) {
  hasil = ''
  var year = 2019
  var array = {}
  
  if(arr.length === 0){
    console.log('""')
  }
  
    for(var i = 0; i < arr.length; i++){
      // console.log(arr[i])
      
      array['firstName'] = arr[i][0]
      array['lastName'] = arr[i][1]
      array['gender'] = arr[i][2]
      array['age'] = arr[i][3]
      fullName = arr[i][0] + arr[i][1]
  
      if(arr.length < 1){
        hasil = ''
      }
      if(arr[i][3] === undefined){
        array.age = 'invalid age'
      }else{
        array.age = year - arr[i][3] 
      }
      
      hasil = (i+1 + '.' + fullName + ':')
      console.log(hasil)
      console.log(array)
      }
      
      }
  // return hasil
  
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""