const resolvedPromise = 
  new Promise(function(res, rej) {
    setTimeout(res({ message: "Delayed Success!" }), 500);

  });

const rejectPromise = 
  new Promise(function(res, rej) {
    setTimeout(rej({ error: "Delayed Exception!" }), 500);

  });
  resolvedPromise.then(function(res){
    console.log(res);
  })

  rejectPromise.catch(function(rej){
    console.log(rej);
  })



