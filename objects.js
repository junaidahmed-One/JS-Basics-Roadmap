//Question-1:  Create a function to perform a deep clone of an object, handling nested objects and arrays.

const original = {
    name: "Junaid",
    age: 20,
    city: "Bangalore",
    Address: {
      street: "Awesome Street",
      area: "Nice Area"
    },
    Hobbies: ["Cricket", "Coding"]
  };
    
  const deepCopy = (original) => {
    if (original === null || typeof original !== 'object') {
      return original;
    }
    
    //to preserve array structure during deep copy
    let cloned = Array.isArray(original) ? [] : {};

    for (let key in original) {
      cloned[key] = deepCopy(original[key]);
    }

    return cloned;
  };
  
  const cloned = deepCopy(original);
  
  console.log(cloned);

//Question-2:  Write a function that takes two objects and returns an object containing the common key-value pairs.

const obj1 = {
    firstName : "Ahmed",
    lastName : "Junaid",
    jobRole : "Coder",
    domain : "IT",

}


const obj2 = {
    firstName : "ABC",
    lastName : "DEF",
    jobRole : "Coder",
    domain : "IT"
}

const commonKeyValuePairs = (obj1,obj2) => {
    let result = {};

    for(key in obj1){
        if(obj1[key] === obj2[key]){
            result[key] = obj1[key];
        }
    }

    return result;
}

const result = commonKeyValuePairs(obj1,obj2);

console.log(result);

/* 
  Question-3:  Create a function that transforms an object by renaming its keys based on a provided mapping. The function should handle nested objects. For example:

  input: { firstName: 'John', address: { city: 'New York' } }
  mapping: { firstName: 'name', address: { city: 'location.city' } }
  output: { name: 'John', location: { city: 'New York' } }

*/
const input = {
  firstName: 'john',
  address: { city: 'New York'}
}

const mapping = {
  firstName: 'name',
  address: { city: 'location.city'}
}

const renameByMapping = (input,mapping) => {
  let ans = {};
  for(let key in mapping){
    if(typeof mapping[key] === 'object'){
      let nestedObj = mapping[key];
      let arrayOfNestedKeys = Object.keys(nestedObj);
      modifiedkey = nestedObj[arrayOfNestedKeys[0]].split('.')[0];
      ans[modifiedkey] = input[key];
    }else{
      ans[mapping[key]] = input[key];
    }
  }
  return ans;
}

const ans = renameByMapping(input,mapping);
console.log(ans);

/* 
 Question-4:  Write a function that validates an object against a provided schema. The schema should define the expected structure, data types, and optional/required fields. For example:

object: { name: 'John', age: 25, email: 'john@example.com' }
schema: { name: 'string', age: 'number', email: 'string', address: 'string?' }
valid output: true
*/

const obj = { name: 'John', age: 25, email: 'john@example.com' };

const schema = { name: 'string', age: 'number', email: 'string', address: 'string?' };

const validateObject = (obj,schema) => {

  for(let key in obj){
    if(schema[key].endsWith('?') && obj[key] !== undefined && obj[key] !==null){
      continue;
    }
    if(typeof obj[key] !== schema[key]){
      return false;
    }
  }
  return true;
}

console.log(validateObject(obj,schema));
