function graduates (students) {
    // console.log(students[0].score)
    if(students.length === 0){
      return{}
    }
    
    var kelas = []
    for(var i = 0 ; i  < students.length ; i++){
      for(var j = 0; j < students.length ; j++){
        if(students[i].class === students[j].class && students[i].score >= 75){
          kelas.push(students[i].class)
        }
      }
    }
  
  
  var result = {}
  
    for(var i = 0; i < kelas.length ; i++){
      var temp = []
      for(var j = 0; j < students.length ; j++){
        if(students[j].score >= 75 && students[j].class === kelas[i]){
          
          var obj = {}
  
          obj.name = students[j].name,
          obj.score = students[j].score
  // 
          temp.push(obj)
          
        }
    
      }
        result[kelas[i]] = temp
    }
        return result
  }
  
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  // console.log(graduates([
  //   {
  //     name: 'Alexander',
  //     score: 100,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Alisa',
  //     score: 76,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Vladimir',
  //     score: 92,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Albert',
  //     score: 71,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Viktor',
  //     score: 80,
  //     class: 'tigers'
  //   }
  // ]));
  // 
  // // {
  // //   foxes: [
  // //     { name: 'Alexander', score: 100 },
  // //     { name: 'Vladimir', score: 92 }
  // //   ],
  // //   wolves: [
  // //     { name: 'Alisa', score: 76 },
  // //   ],
  // //   tigers: [
  // //     { name: 'Viktor', score: 80 }
  // //   ]
  // // }
  
  
  console.log(graduates([])); //{}