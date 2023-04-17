//Write a function that takes in a string and returns it when reversed
let string="eating"
words(string)
function words(string){
let splitting=string.split("")
console.log(splitting.reverse().join(""))
}
function func(){
let word = "agile for agile"
let wordy =word.split("")
console.log(wordy.reverse().join(""))
}
func();
//Alternative//
// let stringArr = string.split(``)
//  console.log(stringArr)
// let reversedString = stringArr.reverse()
//  console.log (reversedString)
//  let joinString=reversedString.join(``) 
//  return console.log(joinString)


// let food = "eating"
// words(food)
// //Write a function that takes in the following array and 
// //consoles the target if it is found else  null


 function Aarr (array,target){
    for(num = 0 ; num < array.length ; num++){
        if (array[num]=== target){
            
        }
        return target;
    }
   
    return null
 }
 
 let num = [2,8,0,23,5,45,76]
 let target = 23
 console.log(Aarr( num,target))
///BINARY SEARCH
 
 function binary (numy,targets){
    let left = 0;
    let right = numy.length-1;
    while (left <= right){
        let middle = Math.floor((left + right)/2);
        
    
    if (numy[middle]===targets){
        return targets;
    }
    else if (numy
        [middle]<targets){
        left = middle+1;
    }
    else{
        right = middle-1;
    }
    
}
return null

}
let numy = [2,8,0,23,5,45,76]
let targets = 23;
console.log(binary(numy,targets))




//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// a leapyear is divisible by 4,400,
let year=2000
leapyear(year)
function leapyear (year){
    while(year<=2022){
       year++
          if(year%4===0 ){
      console.log(`${year} is a leap year`)
        }
         else{
     console.log(`${year} is not leap year`)
         }
    }            
}
leapyear(year)

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let start=0;
mynumbers(start)
function mynumbers(start){
    while(start<=100){
        start++
        if(start %5===0 && start%3===0){
            console.log(`${start}FizzBuzz`)
        }
        else if(start%3===0){
            console.log(`${start}Fizz`)
        }
        else if(start %5===0){
           console.log(`${start}Buzz`)
        }
    }
}
//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let y = [12,87,45,75,23,64,73]
numbers(y)
function numbers(y){
let every = y.map(function(array){
return array*4
})
console.log(every);
}
//Write a function that takes in an array of strings and returns
// an array with every element
//turned into a number
let num3 = ["10","24","45","56","67"];
Ary(num3)
function Ary (num3){
    let mynumberss=num3.map(value=>{
        return  parseInt(value)
    })
    console.log(mynumberss)
    
}



//Binary qn

function binaryS(numberr,targett){
    let left = 0;
    let right = numberr.length-1;

    while (left < right){
        let middle = math.floor((left + right)/2)
        if (numberr[middle]===targett){
            return numberr[middle]
        }
        else if (numberr[middle]<targett){
            let middle = -1
        }
        else{
            right= middle+1
        }
    
        
    }
 return null
}

//mergeSort
function nums(number){
    if(number.length<=1){
      return number;
    }
  let middle=Math.floor(number.length-1)
  let left=number.slice(0,middle)
  let right=number.slice(middle)
  return sortArrays (nums(left),nums(right))
  }
  function sortArrays(left,right){
    newArrays=[]
    while(left.length && right.length){
      if(left[0]<right[0]){
        newArrays.push(left.shift())
      }
      else{
        newArrays.push(right.shift())
      }
    }
    return [...newArrays,...left,...right]
  }
  let number = [2,8,0,23,5,45,76]
  let sort=nums(number)
  console.log(sort)
  //binarySearch
  function binaryS(numbers,Target){
    let left=0;
    let right=numbers.length-1;
    while(left<right){
      let middle=Math.floor((left+right)/2)
      if(numbers[middle]===Target){
          return numbers[middle]
    }
    else if(numbers[middle]<Target){
         left =middle-1
    }
    else{
          right=middle+1
    }
  }
       return null
  }
  let Target =23;
  console.log(binaryS(sort,Target))
