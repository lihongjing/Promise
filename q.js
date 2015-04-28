//resolve一个Promise
// var q = require('q')
// var defer = q.defer()
// defer.promise.then(console.log)
// setTimeout(defer.resolve, 300, "RESOLVED!")

//reject一个Promise
// var q = require('q')
// var defer = q.defer()
// defer.promise.then(null, console.log)
// setTimeout(defer.reject, 300, "REJECTED!")

//Promise只能Solve一次
// var q = require('q')
// var defer = q.defer()
// defer.promise.then(console.log, console.log)
// setTimeout(defer.resolve, 300, "I FIRED")
// setTimeout(defer.reject, 300, "I DID NOT FIRED")

//Promise在下一个事件循环执行，所以'FIRST'，然后'SECOND'
// var q = require('q')
// var defer = q.defer()
// defer.promise.then(console.log)
// defer.resolve('SECOND')
// console.log('FIRST')

//给then传Promise或值都可以
// var q = require('q')
// var defer = q.defer()
// function attachTitle(data){
//   return "DR. " + data
// }
// defer
// .promise
// .then(attachTitle)
// .then(console.log)
// defer.resolve('MANHATTAN')

//异常会被下一个rejection handler处理
// var q = require('q')
// function parsePromised(json){
//   var def = q.defer(),
//       result;
//   try{
//     result = JSON.parse(json)
//     def.resolve(result)
//   }
//   catch(e){
//     def.reject(e)
// }
//   return def.promise;
// }
// parsePromised(process.argv[2])
// .then(null, console.log)

//fcall返回一个Promise根据传入函数运行后的值
// var q = require('q')
// q.fcall(JSON.parse, process.argv[2])
//  .then(null, console.log)

//如果抛出异常，则往下寻找到第一个异常处理函数，当然中间的then会跳过
// var q = require('q')
// function throwMyGod() {
//   throw new Error('OH NOES')
// }
// function iterate(data) {
//   console.log(data)
//   return data + 1
// }
// q.fcall(iterate, 1)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(throwMyGod)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(null, console.log)

// var q = require('q')
// function all(promiseA, promiseB) {
//   var internalPromise = q.defer(), counter = 0, val1, val2
//   promiseA.promise
//   .then(function(result){
//     val1 = result
//     ++counter
//     if(counter >= 2)
//       internalPromise.resolve([val1,val2])
//   })
//   .then(null, internalPromise.reject)
//   promiseB.promise
//   .then(function(result){
//     val2 = result
//     ++counter
//     if(counter >= 2)
//       internalPromise.resolve([val1,val2])
//   })
//   .then(null, internalPromise.reject)
//   return internalPromise.promise
// }
// var promiseA = q.defer(), promiseB = q.defer()
// all(promiseA, promiseB).then(console.log).done()
// setTimeout(function(){
//   promiseA.resolve('PROMISES')
//   promiseB.resolve('FTW')
// }, 200)

// var q = require('q')
// var promiseA = q.defer()
// var promiseB = q.defer()
// Promise.all([promiseA.promise, promiseB.promise]).then(console.log)
// setTimeout(function(){
//   promiseA.resolve('PROMISES')
//   promiseB.resolve('FTW')
// }, 200)


// var http = require('q-io/http')
// http.read('http://localhost:1337')
// .then(function(data){
//   console.log(JSON.parse(data))
// })
// .then(null, console.error)
// .done()
// var http = require('q-io/http')
// http.read('http://localhost:1337')
// .then(JSON.parse)
// .then(console.log, console.error)
// .done()

// var http = require('q-io/http')
// http.read('http://localhost:7000')
// .then(function(id){
//   return http.read('http://localhost:7001/' + id)
// })
// .then(function(json){
//   console.log(JSON.parse(json))
// })
// .then(null, console.error)
// .done()

// var qhttp = require('q-io/http')
// ,_ = require('lodash')
// ,cacheUrl = 'http://localhost:7000'
// ,dbUrl = 'http://localhost:7001/'
//
// var buildUrl = _.bind(String.prototype.concat, dbUrl)
//
// qhttp.read(cacheUrl)
// .then(_.compose(qhttp.read, buildUrl))
// .then(_.compose(console.log, JSON.parse))
// .then(null, console.error)
// .done()

var q = require('q')
var deferA = q.defer()
var deferB = q.defer()
Promise.all([deferA.promise, deferB.promise])
.then(console.log)
setTimeout(function(){
  deferA.resolve('PROMISES')
  deferB.resolve('FTW')
})
