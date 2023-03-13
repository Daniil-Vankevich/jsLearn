function uniqueSet(names) {
  return Array.from(new Set(names));
  // return [...new Set(names)];
}

function uniqueObj(names) {
  let namesObject = {};
  names.map((name) => namesObject[name] = null)
  return Object.keys(namesObject)
}

function uniqueArr(names) {
  let uniqueNames = [];
  for (item of names) {
    if (!uniqueNames.includes(item)) {
      uniqueNames.push(item)  
    }
  }
  return uniqueNames
}

function uniqueForEach(names) {
  let uniqueNames = [];
    
  names.forEach((item) =>
    !uniqueNames.includes(item) && uniqueNames.push(item)
  )
  return uniqueNames
}

function uniqueReduce(names) {
  return names.reduce((current, next) => {
    !current.includes(next) && current.push(next)
    return current
  }, [])
}

function uniqueFilter(names) {
  return names.filter((name, index, array) => array.indexOf(name) === index)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let set = Array.from(new Set(strings));
console.log( uniqueSet(strings) , set, typeof set); // Hare, Krishna, :-O
console.log( uniqueObj(strings) )
console.log( uniqueArr(strings) )
console.log( uniqueForEach(strings) )
console.log( uniqueReduce(strings) )
console.log( uniqueFilter(strings) )


// function testPerf(func) {
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   for (let i = 0; i < 1000000; i++) {
//     func(strings)
//   }
//   return
// }


// let started = Date.now()
// testPerf(uniqueSet)
// let ended = Date.now() - started
// console.log(`Set took ${ended} ms`)

// started = Date.now()
// testPerf(uniqueObj)
// ended = Date.now() - started
// console.log(`Obj took ${ended} ms`)

// started = Date.now()
// testPerf(uniqueArr)
// ended = Date.now() - started
// console.log(`Arr took ${ended} ms`)

// started = Date.now()
// testPerf(uniqueForEach)
// ended = Date.now() - started
// console.log(`ForEach took ${ended} ms`)

// started = Date.now()
// testPerf(uniqueReduce)
// ended = Date.now() - started
// console.log(`Reduce took ${ended} ms`)


// started = Date.now()
// testPerf(uniqueFilter)
// ended = Date.now() - started
// console.log(`Filter took ${ended} ms`)

