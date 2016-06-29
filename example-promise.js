// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Toronto', function (err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function (){
//       resolve(79);
//       reject("City not found");
//     }, 2000);
//   });
// }
//
// getTempPromise('Toronto').then(function (temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })

//Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject){
    setTimeout(function (){
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject("Your args must be numbers to be added together.");
      }
  }, 1000);
});
}

addPromise(5,6).then(function(sum){
  console.log('Success! Your total is ', sum);
}, function(err){
  console.log('Error: ', err)
});

addPromise(5,'cat').then(function(sum){
  console.log('Success! Your total is ', sum);
}, function(err){
  console.log('Error: ', err)
});
