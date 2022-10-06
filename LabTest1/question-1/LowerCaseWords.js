const mixeArray = [ "PIZZA", 10, true, 25, false, 'Wings']

function lowerCaseWords (mixedArray){
    return new Promise((resolve, reject) => {
        if (mixeArray || !mixeArray || mixeArray === 0 ){
            resolve(mixeArray.filter((item) => 
            isNaN(item)).map((word) => 
            word.toLowerCase()));
        }else{
            reject("Not Found")
        }
            
        
    });
}
    lowerCaseWords(mixeArray).then(function(result){
        console.log(result);
    }, function(error){
        console.log(error);
    });


   