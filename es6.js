// //Promise
// function testPromise(value) {
//   return new Promise(function(resolve, reject){
//       if(value < 3) {
//         setTimeout(function(){
//           resolve(value)
//         })
//       }
//       else {
//         setTimeout(function(){
//           reject(value)
//         })
//       }
//   });
// }
//
// testPromise(5).then(function(value){
//   console.log(value)
// }, function(value){
//   console.error(value)
// })
// testPromise(5).then(console.log, console.error)


// //串行化
// function testPromise(value) {
//   return new Promise(function(resolve, reject){
//       if(value < 3) {
//         setTimeout(function(){
//           console.log("resolve: ", value)
//           resolve(value)
//         }, Math.random() * 2000)
//       }
//       else {
//         setTimeout(function(){
//           console.error("reject: ", value)
//           reject(value)
//         }, Math.random() * 2000)
//       }
//   });
// }
//
// testPromise(1)
// .then(function(){
//   return testPromise(2)
// })
// .then(function(){
//   return testPromise(3)
// })
// .then(function(){
//   return testPromise(4)
// })
// .catch(function(value){
//   console.error("Error", value)
// })

//并行化
function testPromise(value) {
  return new Promise(function(resolve, reject){
      if(value < 3) {
        setTimeout(function(){
          console.log(value)
          resolve(value)
        }, Math.random()*2000)
      }
      else {
        setTimeout(function(){
          console.log(value)
          reject(value)
        }, Math.random()*2000)
      }
  })
}

function createPromises(valueList) {
  return valueList.map(function(element){
    return testPromise(element)
  })
}

Promise.all(createPromises([1,2,0,-1]))
.then(function(value){
  console.log("Success: ", value)
}, function(value){
  console.log("Error: ", value)
})
