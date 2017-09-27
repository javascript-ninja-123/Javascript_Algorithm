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

}
