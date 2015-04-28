// (function(){
//   try {
//     setTimeout(function(){
//       throw new Error("error")
//     }, Math.random() * 2000)
//     console.log("continue")
//   }
//   catch(err) {
//     console.error(err)
//   }
//
// })()

function promiseFactory (value) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      reject(value)
    })
  })
}

// promiseFactory(5).then(function(value){
//   console.log("Success: ", value)
// })
// .then(null, function(value) {
//   console.error("Error: ", value)
// })

promiseFactory(5)
.then(function(value){
  console.log("Success: ", value)
})
.catch(function(value){
  console.error("Error: ", value)
})
