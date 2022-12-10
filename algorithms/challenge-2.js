function fizzBuzz(input){
for (i=0; i<input.length;i++){
    if(i % 3 === 0){
        return "fizz";
    }else if(i % 5 === 0){
        return "buzz";
    }else if(i % 3 === 0 && i % 5 === 0){
        return "fizzbuzz";
    }else{
        return input[i]
    }
}
  
}


module.exports = fizzBuzz
