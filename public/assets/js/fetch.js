let promise = new Promise(function(resolve, reject){
	// dp stuff
	let isSuccessful = true;
	setTimeout(function(){
		// asyncrounous selama 2 detik
		if (isSuccessful) {
			resolve('berhasil');
		} else {
			reject(error('Gagal'));
		}
	}, 2000);
})
promise
	.then(function(val){
		// val merepresentasikan nilai keberhasilan
		console.log(val); //log berhasil
	})
	.catch(function(val){
		// val merepresentasikan nilai penolakan
		console.log(val);
	})



let promise1 = Promise.resolve('INIX');
let promise2 = promise1.then(function(result){
  console.log(result) // Test Promise
  return result + "INDO";
});
promise2.then(function(result){
  console.log(result);
})
promise.resolve("INIX")
  .then(function(result){
    console.log(result);
    return result + "INDO";
  })
  .then(function(result){
    console.log(result);
  });


let promise = Promise.resolve([1,2,3,4]);
promise
  .then(function(result){
    console.log(result) //logs [1,2,3,4]
    return result.map(x => x * x);
  })
  .then(function(result2){
    console.log(result2);
    return result2.filter(x => x > 10);
  })
  .then(function(result3){
    console.log(result3);
    return result3.toString() + "!!";
  })
  .then(function(result4){
    console.log(result4);
    return result4;
  })
  .catch(function(error){
    console.log(error);
  });

/*Promise All*/
var promise1 = Promise.resolve('test promise');
var promise2 = Promise.resolve({nama: "Dastan", jabatan : "manager"});
var promise3 = Promise.reject('failure'); //reject promise
Promise.all([promise1, promise2, promise3])
  .then(function(result){
    console.log(result) //tidak muncul, promise3 ditolak
  })
  .catch(function(error){
    console.log(error) //log failure
  })


/*Promise Race*/
var promise1 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve("Finised in two seconds");
  }, 2000) // return setelah 2 detik
})
var promise2 = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve('selesai dalam 3 detik');
  }, 3000) //rerurn setelah 3 detik
})
// check promise yang paling cepat
Promise.race([promise1, promise2])
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.log(error);
  });