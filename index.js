const defaultOptions = {
  amount:10,
  quantity:1,
  color:'maroon',
  material:'cotton',
  size:{
    small:true,
    medium:true
  }
}
function inventory(obj1,obj2){
  return Object.assign({},obj1,obj2);
}
function lodashInventory(obj1,obj2){
  return _.merge({},obj1,obj2);
}
let result = inventory(defaultOptions,{
  amount:15,
  quantity:6,
  material:'wool'
})
let result2 = lodashInventory(defaultOptions,{
  amount:15,
  quantity:6,
  material:'wool',
  size:{
    large:true
  }
})
console.log(result)
console.log(result2)


var collection = [
  {age:90,name:'Zach'},
  {age:33, name:'Beth'},
  {age:8, name:'Yolanda'}
]
collection.push({age:1,name:'Yona'})
let sortedCollection = _.sortBy(collection,'age')

console.log(sortedCollection)



function checkArray(array1,array2){
  if(array1.length !== array2.length) return false;
    for(var i=0;  i<array1.length; i++){
    	if(array1[i] === array2[i])	return true
      else return false
    }
}

console.log(checkArray([1,2,3,4,5,6],[1,2,3,4,5,6]))


let checkArray2 = (array1,array2) => {
  return array1.map((value,index) => {
      if(value === array2[index]) return true;
      else return false
  }).every(value => value === true )
}

console.log(checkArray2([1,2,3,4,5,6],[1,2,3,4]))


const jsFactorial = num => {
  if(typeof num !== 'number') return 'type some number';
  else{
    if(num === 0) return 1;
    else return num * jsFactorial(num -1)
  }
}

console.log(jsFactorial(5))

const exponentFuc = (num,n) => {
  if(n === 0){
    return 1;
  }
  else {
    return num * exponentFuc(num,n -1)
  }
}

console.log(exponentFuc(8,2))

var exponent = function(a, n)
{
   if (n === 0)
   {
    return 1;
    }
  else
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(4, 2));


const getIntergerRange = (num1,num2) => {
  let array = [];
  let x = num1;
  while(x < num2 -1){
    x++;
    array.push(x);
  }
  return array;
}

console.log(getIntergerRange(2,9))


const addInteger = (array) => {
  if(!Array.isArray(array)) return 'type array';
  else{
    return array.reduce((acc,val) => {
      acc += val;
      return acc;
    },0)
  }
}

console.log(addInteger([1, 2, 3, 4, 5, 6]))

//compare number 1.1 1.2
//compare number 1.1.2 1.2.5


const addNum = str => {
  let newArr = str.split('.').map(value => Number(value));
  if(newArr.length === 1){
    newArr.push(0,0)
  }
  else if(newArr.length === 2){
    newArr.push(0)
  }
  return newArr;
}

const checkVersion = (str1,str2,num = 0) =>{
  let newStr1 = addNum(str1),
      newStr2 = addNum(str2);
  if(newStr1[num] > newStr2[num])return true;
  else if(newStr1[num] === newStr2[num]){
    return checkVersion(str1,str2,num +1)
  }
  else{
    return false;
  }
}

console.log(checkVersion('3.1.1','2.1.1'))


const mergetTwoSortedArray = (arr1,arr2) => {
 let newArr1 = arr1.slice().sort((a,b) => a - b);
 let newArr2 = arr2.slice().sort((a,b) => a - b);
 let result  = newArr1.concat(newArr2).sort((a,b) => a-b);
 let array = [];
 return result.reduce((acc,val) => {
   if(array.indexOf(val) === -1) array.push(val)
   else return;
   acc = array;
   return acc;
 },[])
}
console.time('d')
console.log(mergetTwoSortedArray([1,2,3],[3,4,5,6]))
console.timeEnd('d')



const reverseString = (str) => {
  return newStr = str
 .trim()
 .split('')
 .reverse()
 .join('')
}

console.log(reverseString('you are a nice dude'))

const reverseInPlace = str => {
   newStr = str.trim().split(' ');
   return  newStr.map(value => {
     return value.split('').reverse().join('')
   }).join(' ')
}

console.log(reverseInPlace('you are a nice dude'))


const firstNonRepeatChar = str => {
  let newObj = {};
  let newStr = str.trim().replace(/ /g,'').split("");
  for(let i = 0; i<newStr.length; i++){
    if(newObj[newStr[i]]){
      newObj[newStr[i]]++;
    }
    else{
      newObj[newStr[i]] = 1;
    }
  }
  return Object.keys(newObj).filter(value => newObj[value] == 1).shift();
}



console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))


const lastNonRepeatChar = str => {
  let newStr = str.trim().replace(/ /g, '').split(''),
      supplyObj = {},
      newObj = newStr.reduce((acc,val) => {
        if(acc[val]){
          acc[val]++;
        }
        else{
          acc[val] = 1;
        }
        return acc;
      },{});
  return Object.keys(newObj).filter(value => newObj[value] === 1).pop()
}
console.log(lastNonRepeatChar('the quick brown fox jumps then quickly blow air'))


const removeRepeatedChar = str => {
  let newStr = str.trim().replace(/ /g,'').split(''),
      newObj = newStr.reduce((acc,val) =>{
        if(acc[val]){
          acc[val]++
        }else{
          acc[val] = 1;
        }
        return acc;
      },{})
  return Object.keys(newObj).filter(value => newObj[value] == 1).join('')
}

console.log(removeRepeatedChar('Learn more javascript dude'))

const isPalindrome = str => {
  let newStr = str.trim().split('').reverse().join('');
  if(str === newStr) return true;
  else return false
}
console.log(isPalindrome('madam'))

const exponent2 = (num,n) => {
  if(n === 0) return 1;
  else{
    return num * exponent2(num, n -1);
  }
}

console.log(exponent2(8,2))

const missingnumber = arr => {
  //slice to copy and sort from the lowest to the highest
  let newArr = arr.slice().sort((a,b) => a-b);
  //get first and last element
  let first = newArr[0],
      last = newArr[newArr.length -1],
      n = first - 1,
      whileLoopArray = [];
  //use while loop to iterate and push items to whileLoopArray
  while(n < last){
    n++
    whileLoopArray.push(n);
  }
  //compare while loop array and newArr
  let results =  whileLoopArray.filter(value => {
      if(newArr.indexOf(value) === -1 ){
        return value;
      }
    })
  //use filter and return
  return results;
}

console.log(missingnumber([1,2,3,7,8,9,3,4]))

// const SumofTwo = (array,num) => {
// //loop twice to check each element
// for(let i=0; i<array.length; i++){
//   for(let j=i +1; j<array.length; j++){
//     if(array[i] + array[j] === num) return true;
//   }
// }
//   return false;
// }
// console.log(SumofTwo([6,4,3,2,1,7], 9))

// const SumofTwo2 = (array,num) => {
//   for(let i=0; i<array.length; i++){
//     for(let j=i +1; j<array.length; i++){
//       if(array[i] + array[j] === num) return true;
//     }
//   }
//   return false;
// }
// console.log(SumofTwo2([6,4,3,2,1,7], 9),'sum2')



const largestSum = array => {
//delcare a new array
let newArray = [];
//for loop to add all sums to a new array
  for(let i=0; i<array.length; i++){
    for(let j=i +1; j<array.length; j++){
      newArray.push(array[i] + array[j])
    }
  }
//sort an array and remove duplicates
return newArray.slice().sort((a,b) => b-a).shift();
}

console.log(largestSum([1,2,3,4,5,6]))


var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

const getMaxProfit = array => {
  let newArray = [];
  for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
      newArray.push(array[i] - array[j], array[j] - array[i])
    }
  }
  return newArray.sort((a,b) => b-a).shift();
}

console.log(getMaxProfit(stockPricesYesterday))


const getProductsOfAllIntsExceptAtIndex = array => {
  //declare new array
  const newArray = [];
  //check wheather or not each item is an integer
  if(array.every(value => Number.isInteger(value)) === false){
    return 'Only intergers please'
  }
  //the main algorithm kicks here
  else{
    //for loop 2twice
    for(let i=0; i<array.length; i++){
      for(let j = i+1; j<array.length; j++){
        for(let x = j+1; x<array.length; x++){
          for(let m = x +1; m<array.length; m++){
            newArray.push(array[i] * array[j] * array[x] * array[m])
          }
        }
      }
    }
    return newArray;
  }
}
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9]))


const LetterChanges = str => {
 let newStr = str
 .trim()
 .split('')
 .map((value,index) => {
   if(value.charCodeAt(0) === 122){
     value = 'a'
     return value;
   }
   else if(value.charCodeAt(0) >= 97 && value.charCodeAt(0) < 122){
     let oldIndex = value.charCodeAt(0);
     let newIndex = String.fromCharCode(oldIndex+1);
     value = newIndex;
     return value;
   }
   else{
     return value;
   }
 })
 .join('')
 .replace(/([aeiou])/g,function(vowel){
   return vowel.toUpperCase()
 })
 return newStr;
}

console.log(LetterChanges('fun times!'))
console.log('z'.codePointAt(0))


const SimpleAdding = num => {
    if(num === 0) return 0;
    else return num + SimpleAdding(num -1);
}

console.log(SimpleAdding(12))

const LetterCapitalize = str => {
  let newStr = str
  .split(' ')
  .map(value => {
    let firstLetter = value.charAt(0);
    return firstLetter.toUpperCase() + value.slice(1);
  })
  .join(' ')
  return newStr;
}

console.log(LetterCapitalize('hello world'))


const SimpleSymbol = str => {
//convert it to an array
let strArray = str.split(''),
    newStr = str
 .split('')
//search alphabets
.map((value,index) => {
  if(value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 122){
      if(strArray[index -1] === '+' && strArray[index+1] === '+' ){
        return true;
      }
      else return false;
  }
  else{
    return true;
  }
})
//check left and right side of each alphabets
.every(value => value === true)
//return a result
 return newStr;
}

console.log(SimpleSymbol('+d+=3=+s+'))


const CheckNums = (num1,num2) => {
  if(num2 > num1) return true;
  else if(num1 === num2) return -1
  else return false;
}

console.log(CheckNums(3,12))


const TimeConvert = num => {
  //divde by 60 and get first num
  var firstNum;
  if(num < 60){
     firstNum = 0;
  }
  else if(num >= 60){
     firstNum = (num / 60);
     firstNum = Math.floor(firstNum);
  }
  //first num * 60 - original num
  let restNum = num - (firstNum * 60) ;
  console.log(restNum)
  //return first num : rest num
  return firstNum.toString() + ':' + restNum.toString()
}

console.log(TimeConvert(60))


const AlphabetSoup = str => {
let newStr =  str
  .trim()
  .split('')
  .slice()
  .sort()
  .join('')
  return newStr;
}

console.log(AlphabetSoup("coderbyte"))
const LongestWord = sen => {
let newSen = sen
.split(' ')
.filter(value => {
  return value
  .split('')
  .every(value => value.charCodeAt(0) >= 65 && value.charCodeAt(0) <=122 ) === true
})
.map(value => {
  return {
    word:value,
    length:value.length
  }
})
.sort((a,b) => b.length - a.length)
.filter((value,index) => {
   if(index === 0){
     return value;
  }
})
.map(value => value.word)
.join('')
return newSen;
}

console.log(LongestWord("Argument goes here"))
