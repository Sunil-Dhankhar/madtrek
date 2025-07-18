// Javascript Function
/* ---------------------------------- */
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// function <function name>(){ --write your code herer --} 

/* JavaScript Array Functionality  */
 
const cars = ["Saab", "Volvo", "BMW"]; // this is an array of javascript
const car = ["Ford", "Kia", "Hundai"]; // this is an array of javascript
console.log(cars);//printing the log of an array
console.log(Array.isArray(cars)); // this is check that is that object is an array or not
cars[0] = "Jaguar";//changing the first element of array or change the first value of array
console.log(cars[0]);// printing the first value of array after change the array value
console.log(cars); // print the array log or values
console.log(cars.toString()); // converting an array into a String
console.log(cars.length); // count how many elements are present in array 
console.log(cars[cars.length-1]); // this print the last element of the array
let pt = "<ul>";
let i = 0;
cars.forEach(function(){
    pt += "<li>"+cars[i]+"</li>";
    i++;
});
pt += "</ul>";
console.log(pt);
console.log(cars.push("TATA"));// this increment one element into existing array or add 1 new value into the existing array into the last of array
console.log(cars);
console.log(cars.concat(car));//this method concat is used to merge or concatinate to two array ,string, objects etc
 

// new example for nested array with objects  
const myObj = {  // creating new object or initlizing new object
  name: "John",
  age: 30,
  carss: [ //initilizeing new array into the object
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]}, //initlizing new objects with arrays into the array called as nested array with objects
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

let ca = "";//set an variable as null
myObj.carss.forEach(function(car){//start a for each loop for get the data from the nested array and object
    ca += " \n "+ car.name+ " \n ";
    car.models.forEach(function(model){ // again start a foreach for get data and values from internal array
        ca += model+ " \n";
    });
    ca += " \n ";
});
console.log(typeof ca); // getting the type of ca varible 
console.log(ca); // printing the whole data of nested array and object as a string through this varible that is initlize for store the whole value of nested array.

let allModels = myObj.carss.flatMap(car => car.models);  // this method is used for grab all car models that are placed into nested array into single layer array in short term.
console.log(allModels); //print all models of car array object
console.log(allModels[4]);//print specific array object element

let arr = [[1,2],[3,4],[5,6],[7,[8,[9,0]]]];// another nested array
let pc = arr.flat(Infinity);// this method is used to convert a multilevel array into single level array like [1,2,3,4,5,6,7,8,9,0]

console.log(pc); // print the nested array as flat aray and change the all level into defth provide level like [1,2,3,4,5,6,7,8[9,0]],if we provide infinity in place of 2(depth) then output is in single array like [1,2,3,4,5,6,7,8,9,0]
console.log(pc.flatMap(x => [x, x * 15])); // here we print an array with performing calculation as per index.. 1, 1*15 = 1,15, => 2, 2*15 = 2,30 and so on.
const carry = cars.splice(1,0, "Mahindra & Mahindra", "Toyota", "Volkswagon", "Skoda", "Honda");// with this method we add some new array elements to the existing array 
console.log(cars);//printing the array after added the elements into the array

let rv  = pc.find(function(values){ // find method is used for find specif value from the array
               if(values > 5) {
                    //console.log(values) // if we print here then it provide me all values that have greater then 5 that are existing in array
                    return values; // with this method its return only one value that is existing in array when condition is true.. here conditin is true when after 5, 6 is existing, then it returns the 6
               }
});
console.log(rv); // print in console the return value that found in the array
console.log(pc.sort()); // this print the array elements in sorting array
console.log(pc.reverse()); // this print the array elements in reverse mode  like end to start according to reverse indexing
let bie = [90,19,2,3,4,5,6,87,8,9,18,15]; // initilizing a new array with rendomied elements

function myArrayMin(bies) { // callback function for get a minimum value from the array elements
  let min =  Math.min.apply(null, bies); // returns back minimum value after find from the array elements
  let max =   Math.max.apply(null, bies); // returns back maximum value after find from the array elements
  return min + "\n" + max; 
}
console.log(bie.sort(function(a,b){return a - b})); // sort as numaric number in ascending order
console.log(bie.sort(function(a,b){return b - a})); // sort as numaric number in descending order
console.log(pc.sort(function(){return 0.5 - Math.random()})); // thisfunction is used to print the array elements as rendome manner on each function call, every time  different then previous
console.log( myArrayMin(bie));// this is used to find the minimum value from the array.

/* filteration  */
let fit = bie.filter(function(vals){ // this is a callback function is used for filter the arrayelemnt and then after filtration return back to the caller
    return vals > 20; // return the filteration value
});
console.log(fit); // print the filteration value after all the function from the array elements.

/* reduce array Method */
let total = 0; // initlize total varible with 0 value.
let red = bie.reduce(function(total, values) // reduce function pass two arguments + two arguments [index, array itself ] are ommited reasone behind this :-(ignored because this function call itself)..its mendatory for add atleast two arguments 
{
    return total + values; // creatin addition operation with all values of an array and returns the total value of the after addition of the value to call back function variable for further operation
});
 console.log(red); // print the total sum of all array elements

 /* every array method */

 let ever = bie.every(function(values){ // this method pass one value as array elements into the call-back function for perform further opration. in the call-back function it check each and every condition is pass the condition test or not. if not then return false result else true
    return values >= 2; //check and verify the each element of the array that should be clear the test..if each element pass the condition test mentiond in callback function, it returns the true as result else false.
 });
console.log(ever);

/* some  array method */

let some = bie.some(function(valz){// this method pass one value as array elements into the call-back function for perform further opration. in the call back funtion it check each element of the array and require atleast 1 true condition for pass this test. if  have atleast 1 true condition then it returns true else false.
    return valz > 45 ; // check and verify the each element of array  that pass the condition. if atleast one array element is clear the test then it return as true else false
 });
console.log(some);

/* from array Method */

let str = "The from() method can return an array from any variable with a length property"; // initlizing a string
let from = Array.from(str);// array from method. this method requiresArray. Keyword before from  function call means Array.from();// this is fixed for every time when it initlize. you just put from( // string varible here ), this converts the string into array elements.
console.log(from); // print the array elements that are converted from the stringe to array.

let frm = Array.from(bie, (x) => x ** 3); // here we perform two common but different method for perform same mathod but different syntax.. this method the x super power uppon by 2 and provide the result as on that basis. 
let frms = Array.from(bie, (x) => Math.pow(x,3)); // here we perform two common but different method for perform same mathod but different syntax.. this method the x super power uppon by 3 and provide the result as on that basis.
console.log(bie); // print bie array elements
console.log(frm); // print the array elemets that each value/element have X^3 or x*3*3 (5*5*5=125)
console.log(frms);// print the array elemets that each value/element have X^3 or x*3*3 (5*5*5=125)

/* Array keys Method */

let kies = ""; // initilize an empty variable 
[...cars.keys()].forEach(function(vals){ // start keys method with foreach function for get the array elements keys from the the array 
    kies += "\n"+ vals + " => " + cars[vals] + " \n" ; // assign and reassign the array elements keys with array values
}) ;
console.log(kies); // print the value assign varible as string;

/* Array entries Method */

[...cars.entries()].forEach(function(vals){ //call back freach function with entries method that belongs to array
    kies += "\n"+ vals + "\n"; // assign and reassign the keys and values both into the variable. like (0,saab)
});

console.log(kies); // print the all elements of the array with its keys as string like 0,saab,1,BMW,2,Audi etc.

/* Array With Method  */

let update_cars = cars.with(1, "Mahindra and Mahindra"); // Array  With Method is used to update the old array element value with new element value or replace the new array element with old array value.. 
console.log(cars); // print the original array with elements
console.log(update_cars);//print the updated version of cloned array from the orignal.
console.log(myArrayMin(bie)); // calling the function which get the minmum element exist as 2 and maximum exist as 90
const newarray = cars.concat(car); //this method is used to concat two array into new single array with both array values
console.log(cars.push(car)); // adding car array values into cars array // with this it just not add values into cars array it make it nested array with new level
console.log(newarray); // print the all values of newarray variable
console.log([...cars],[...car]);// this is concat the two or more array in a single array with help of spread operator (...(three dot))
console.log(cars.flat(Infinity)); // this method is used to convert a single level array from multilevel array or nested array.



/* some array method that are

        1.  pop() => remove the last element of an Array
        2.  shift() => remove the first element of an Array
        3.  push() => add new element into the existing array in to the last of array elements
        4.  join() => join each element of the array with other as String
        5.  toString => this convert the array as String
        6.  unshift() => this is used for add new value or element into the array at the bigning
        7.  delete cars[0] => this is used for delete a perticular element at specific position (**Note** :- this methode leave an undefined hole in array after remove element, you should pop,shift methode in place of delete ) 
        8.  concat() => this methode is used for merge two or more different -2 array into one called as concatinatation of the array
        9.  flat('depth')=> this method is used for convert the array into single array. multilayer to single layer array
        10. flatMap((1, 1 * 10) => flatmap method is used for doing mapping of array, it works (sometimes) look like a foreach, for-loop, for getting the value of multilayered array
        11. array.splice(2(index number), 1(count of element that want to remove), "elemennts-name") => this method is used to add new elemrnt at specifice location in the array and we also replace and remove some element of the array with this method through defing the path and key
                                    this effect the original array..
        12  array.toSpliced(1,2) => this methode works as same splice method, but a major differnce in both is that where splice affected orignal array but the toSpliced method performing
                                    same splice functionality in new different Array without effected orignal array.
        13. slice(1,3) => this method is used for slice an array from a specific location without effecting the original array, this create a new array using slice methode with array values from the specific location
                                    like (slice(1 (starting point),3 (ending point))). 
        14. indexOf("array value")+1 => this method is used for find the position of array elements from the array from the start side
        15. lastIndexOf("array value")+1 => this method is also used for find the array element position from the last/end side of array elemrnts
        16. includes("array element") => this is used to verify or check that this element is existing or not into the array
        17. find("array values") => with this method we get the value according to our requirement if the element is existing in the array. first you create a call back function in the find function 
                                    then pass the array values into function, here you check the required value is existing or not in the array. if already existing into the array then return the value for print or another operation.
        18. findIndex(array value) => this method is used to find the index of an array value...
        19. findLast(array value) => This method is used to find a value according to a condition from the end of the array. It checks the last element first; if it satisfies the condition, it is returned. Then it moves to the previous one, and so on, until the start, while the condition is not met.
        20. arrayname.findLastIndex(x => x > 40) => this is alos working like previouse one (find Last method). but here find only index of the value not value from the last of the array.
        21. sort() => this method is used for sort the elements of an array as ASCENDING in orderas value wise like as index wise like [0,1,2,3,4,5,6,7,8,9,10,11].
        22. reverse() => this methode is used to print array from ending  to startting..in reverse mode as index wise like from [90,19,2,3,4,5,6,87,8,9,18,15] to => [15,18,9,8,87,6,5,4,3,2,19,90].
        23. sort() + reverse() = Sort the array elements sort as DESCENDING order from the big number to small number..not metter what the array index of this. just sort as descending order.
        24. toSorted() => this method is also similar to sort method and also used for sort array elements, but a major differnce between them is that where sort method is alter the original array and sord the original array,
                            but toSorted method is not affecting the original array and it create the replica of original array and sort that new replica of original...or sort the new array..
        25. toReversed() => this method is also similar to reverse but not the same where the reverse method is used to reverse order of an original array, but in toReversed method it create the new array of original array,
                            know as replica of an original array, and then sort this back to front as index wise like [15,18,9,8,87,6,5,4,3,2,19,90].
                            
                // **  Note that ** -> sort method is basicalyy sort the string , so  in string if we found "100" and "25" that both are string and sort method sort it ass 100,25 becouse 1 (100) is small then 2 (25)
                        so result could be wronge. so for numaric  sorting we use function for compare each element of aaray mathematically that which element is small and which one is big..
        26. point.sort(function(a,b){return a - b});  //this is call numaric sorting order//in which compare 2 values and find one is small and one is big, small is written first called as ascending order.
        27. point.sort(function(a,b){return b - a});  //this is call numaric sorting order//in which compare 2 values and find one is big and one is small, big is written first called as descending order.
                
                // ** Note ** -> When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
                             (condition 1)=>    If the result is negative, a is sorted before b.
                             (condition 2)=>    If the result is positive, b is sorted before a.
                             (condition 3)=>    If the result is 0, no changes are done with the sort order of the two values.
        
        28  points.sort(function(){return 0.5 - Math.random()}); // this method is used for set array order as rendom order with new order each time when ever call it. this is not a specific order like asc,desc etc..
        29. min or max value(a-b) =>   // get smallest value from array = point[0] && highest value let bt = point.length-1; ,point[bt]; // this provide the highest value from the array list. in ascending order of array
        30. min or max value(b-a) =>   // get highest value from array = point[0] && smallest value let bt = point.length-1; ,point[bt]; // this provide the highest value from the array list. in Descending order of array
        31. math.min.apply(null,array assign name)=> this function is used to find the smallest value from the array, math.min(array) <= x; this is not accespt direct array value , for execution the methode this required apply method.
        32. sort objects => point.sort(function(a,b){return a.year - b.year}); for ascending order// point.sort(function(a,b){return b.year - a.year}); for descending order (year is belongs to car model)
        33. array.forEach funnction=> this function is run on each value or element of a specific array till array value not complete.
        34. array map () => this function is not affecting the original array. it create a copy or clone of original array and affecting/modifying that clone array according to user requirement
        35. array flatMap()=> flatmap array method or function is used for mapping the array. with flatmap it first map all elements of array then it create a copy of the original array that we have provide it.
                                means it converts multilayer / nested array into the single layer or single level array. 
        36. array filter() => this method is used for filteration array elements accaording to user requirement, this find and filter all data from the array elements.
                            Note that the function takes 3 arguments:
                                The item value
                                The item index
                                The array itself
                            In the example mentdioned in upper part of this documentation, the callback function does not use the index and array parameters, so they can be omitted.
        37. array reduce() => this function or method is used to reduce the length of array with sum of all array elements. in simple terms we can say this method is used to calculae the sum of all array elements.
                            basically reduce methode requires atleast two arguments like one total, value; 
        38. array every() => this function is used to check and verify that each element of array is pass the condition test that is mentioned in the call-back function. if condition is true then it returns result as true in boolean else false
                            from the all elements of array if one conditon is false. then this return false.. this should be require all is perfect. means all elements of array past test and  provide 100% results.
        39. array some() =>  this function or method is opposite of every methode.. this methode requires atleast one value or element pass the test, then it should provide result as true else false this not need 100% results.
                             this requires atleast one value who verified or pass the call-back condition. if this pass the test then it move to further operation else this goes to out from the condition or else part.
        40. array from() => this method is permormed when we want to convert the string as array elements and Array.from(//string varible); is fixed keyword for each time when we use this. for example "Hello" => ['H','e','l','l','o'];
                            in javascript we annalize that if we want to perform a power operation on array elements like X^2 means x * 2 * 2, then its wrong method, 
                            in javascript it perfrm the XOR Operation in place of the power operation known as (Exclusive OR). this is a bitwise operator that works on binary numbers like 01010 (X^2 => 88^2 = 86, 78^3 = 75).
                            in javascript, we perform the power operation with 2 type of method like Math.pow(x,2) && another one is (X ** 2). the basically syntax of those method are different but work of these methode and output are same,
                            where (x ** 2) is direct call for calculation or mathematical operation, hence 2nd method work like previous one but this work through the function in javascript,  the Math.pow is javascript in-Built function for perform power mathematical calculations.
        41. array keys() => this method is used to get the keys of array elements, this is a common and important method in javascript for perform the basic and high-level operations.. this play an important role in the javascript.
        42. array entries() => this method is used to get the array keys along with its value together. with help of this method you get both keys and vits value both together like [(01, BMW), (02, TATA) ] etc.
                               for Example => 0,Jaguar1,Mahindra & Mahindra2,Toyota3,Volkswagon4,Skoda5,Honda6,Volvo7,BMW8,TATA; 
                               this method is not affected the orignal array, it create  a replica of original array and then it affect or modify the cloned or replica array according to the requirement.
        43. array with() => this method is used for update the array element without affecting the original array.. means it create a clone of original and then modify the clone array according to the requirements with affecting the original aray
        44. array Spread() => this method is used to merge the two or more array into single array with help of spread operator(...).. this joins the arrays into single array called as merged array but not affecting the orriginal array because this create a clone of original array.
                                for Example  :-  const arr1 = [1, 2, 3];
                                                 const arr2 = [4, 5, 6];
                                                 const arr3 = [...arr1, ...arr2];  output is now [1,2,3,4,5,6] or 1,2,3,4,5,6
        45. array rest() => this method is used to  create a clone of original array and then assign the clone array elements to new variables without affecting the original array. this method is perform a differnt type of job/work like it assign the all element to a variable
                            this is a collactive method to collect array elements in a variable. this have also a (...) rest operator
                            for Example :-> let a, rest; //initilize new variables
                                            const arr1 = [1,2,3,4,5,6,7,8]; // initilize new array with its elements
                                            [a, ...rest] = arr1; // assign the array values to voth varibale likr a =>1 ,  ....rest => 2,3,4,5,6,7,8
                                            a get first element of the array and ...rest operator get all remaining value from the array.
        46. array const => this is not just a keyword const <varible name>, this is a reference of array that once declared, not modified again,
                            once declared method not change the value ever, this case beloongs to a variable, but in array, this case not applicable, in the array you can change the value of elements when you want with help of various method like push method
                                    for example :-> const cars = ["Saab", "Volvo", "BMW"]; // initlize the new array
                                                    cars[0] = "Toyota"; // reassign or update the first element of the array
                                                    cars.push("Audi"); //  here array push method add new element in the array with new value in end of array.
                                                    output is => "Toyota", "Volvo", "BMW", "Audi".
                           ** Note => it is mendatory or must to declare values when the const variable or array is initilized or declared.. without the values declare it provide error.
                                for Example => const care; // initilize or declare the empty variable.
                                                care = ["healthcare", "bodycare", "skincare"]; //assign or declare the value
                                                now you can check that the when you reload the screen you got error like const varible syntax error or declared but not assigned somthing like this.
                            ** An array declared with const has Block Scope.
                            ** An array declared in a block is not the same as an array declared outside the block:
                                    for Example  :- const cars = ["Saab", "Volvo", "BMW"]; // Here cars[0] is "Saab"
                                                    {
                                                        const cars = ["Toyota", "Volvo", "BMW"]; // Here cars[0] is "Toyota"
                                                    }
                                                    // Here cars[0] is "Saab"

                                                here you can see the internal const car[0] and outer cars[0] are not same,becase the block space differntciate the both from ech other, 
                                                the block space make both differnt from each other.
                            Redeclaring Arrays
                            Redeclaring an array declared with var is allowed anywhere in a program: var cars;
                                                    for Example :-> var cars = ["Volvo", "BMW"];   // Allowed
                                                                    var cars = ["Toyota", "BMW"];  // Allowed
                                                                    cars = ["Volvo", "Saab"];      // Allowed
                                                                    const cars = ["Volvo", "BMW"];   // Not allowed
                                                                    {
                                                                          const cars = ["Volvo", "BMW"]; // Allowed
                                                                          var cars = ["Volvo", "BMW"];   // Not allowed
                                                                    }

        */



//  @@@@@@@@@@@@@@@@@@@@@@@@  Java Script Objects  @@@@@@@@@@@@@@@@@@@

// inside the { key:value } curly braces we have find or declare the data in form of pair like key and value called as objects and its properties 

//  @@@@@@@@@@ objcet constructor functions  @@@@@@@@@@@@@  
//      when we create a function then we define or declare a new object with same name as function menas object new keyword and function name should be same if same then we say that that function is created a object with new keyword that exact name like function and then it call the function and runc the script, that the function hold.

// for example

{ // new scope is stared here 
    function myycar (carname, model, year) // created a function here with argument
    {
        this.name = carname; //settitng the car name into temprary value
        this.brand = model; //settitng the car model into temprary value
        this.year = year; //settitng the car mfd year into temprary value
        
    }
    const car_care = new myycar("Scorpio", "Mahindera and Mahindera", 2024); // a new object is created  with function name called as object function constructor

    console.log(car_care.name); // print the constructor function object first value 
    console.log(car_care.brand); // print the constructor function object second value
    console.log(car_care.year);// print the constructor function object third value
} // end of local scope

import {mycar} from "./imp.js"; // importing content or script from another file as per requirement // here we grab or importing a function from another file according to our requirement. we want create a new object with dynamic value get from another file with import export method.
{ // start a local scope for code or script uniqeness
    
    const carcare = new mycar("Helux", "Toyota", 2025); // create a new object and after that we create a object constructor from imported file or function and with this object we call the function using pass the arguments and then in the function we set the values into temprary object variables. 
    console.log(carcare.name); // print the function first argument value that is stored in temprary variable named this.name; 
    console.log(carcare.brand);// print the function second argument value that is also stored in temprary variable this.brand;
    console.log(carcare.year);// print the function third argument value that is also stored in temprary variable this.brand;
}

// ****** javascript object prototype *****
// The prototype of a JavaScript object is a hidden object
// that stores additional (shared) properties and methods.
// If a property or method is not found directly on the object,
// JavaScript looks for it in the prototype chain.

mycar.prototype.price =function (){ // declare a function into prototype method for easy access the internal property for inharit it easely.
     console.log(this.name + "  Ex. Showroom Price is 50 lac"); // we have a add new property with value in to the predefined function mycar with help of prototype
}
const carecar = new mycar("Endever", "Ford", 2015);
const carcare = new mycar("Innova crysta Hybrid Technology", "Toyota", 2021); // created a new object that is call the constructor function.
carcare.price(); // print the new added property into the constroctor object function. 
carecar.price(); // print the new added property into the constroctor object function. 

carcare.name = "Fortuner Legender";
//Object.freeze(carcare);
// carcare.name = "Landrover";
// carcare.brand = "Rangerover";
// console.log(carcare);


// some basic objects methods of javascripts
let person1 = {name:"amit"}; let person2 = {name:"sumit"};
let stud = (["name", "amit"], ["class", "BCA"]);
//Object.assign(person1, person2); // Assign Source to Target // it assign or copy the all matched key value of person2 into person1 object means person1 object get all matched value from person2

//Object.entries(person1);// Returns object key-value in Pair // This method returns an array of the key/value pairs from the object. means that this method returns object properties in like method of array in form of key and value.

//Object.values(person2); // Returns object values only without key // this method is similar to Object.entries(), but this returns a single dimension array of the object values means this method returns an array of the object's values only, without the keys.

//Object.keys(person2); // Returns object keys only without values // this method is similar to Object.values(), but this returns a single dimension array of the object values in form of object keys only without values means this method returns an array of the object's Keys only, without the values.

//Object.fromEntries(stud);// convert array values into object in form of key-value // This method in JavaScript is used to create an object from an array of key-value pairs. in simple term it convert the array object into js object with key-value pair. this method is used for create an object from an array with key-value..property

//Object.groupBy(); // create a new object from predefined array object and group them on based of condition. // Object.groupBy() method groups elements of an object according to string values returned from a callback function. in simple terms we can say that it create a objects of groups depending on the cocndition. 
        //for example =>

            const students = [ // declare a new variable and create an array inside the declare variable and convert this variable into the array object.
                                { name: 'Amit kanojia', grade: 'C' , marks:80 }, //insert or declare objects inside the array with keys and values
                                { name: 'Neha kadian', grade: 'A' , marks:95 }, //insert or declare objects inside the array with keys and values
                                { name: 'Raj kumar', grade: 'B'  , marks:91 }, //insert or declare objects inside the array with keys and values
                                { name: 'Simranjeet channi', grade: 'B', marks:90 } //insert or declare objects inside the array with keys and values
                            ];
            
            // first method // based on grade system
            const groupes = Object.groupBy(students, student => student.grade); // create groups of object values depending on its grade system with object grade value..and store groups in a variable

            console.log(groupes); // print the all groups that are created by group object method based on grade system, where grade is equal then all properties of two or more objects are stored in same group other wise create a new group.
            
            // second method // based on marks if marks greater then given range then add into the group first group else other wise add it into another group
       
            function excell({ marks }) // Declare a new function that takes an object as an argument and destructures the 'marks' property
            {
                return marks > 90 ? "ok" : "low"; // Check the 'marks' value: if greater than 90, return "ok", otherwise return "low"
            }

            let result = Object.groupBy(students, excell); // Create a new object by grouping the 'students' array based on the return value of the 'excell' function, then store this object in a new variable

            { // Start a new block scope
                let txt = ""; // Declare a new string variable
                txt += "This group of students is Excellent"; // Store a string message in the 'txt' variable
                for (let [o, p] of result.ok.entries()) // Start a 'for...of' loop using the 'entries()' method, which returns key-value pairs as arrays
                { // Start of 'for' loop block
                    txt += "\n" + p.name + " = " + p.marks + ", " + p.grade; // For each entry, append student details (name, marks, grade) as a formatted string to 'txt'
                } // end of 'for' loop block 
                console.log(txt); // Print the final string stored in 'txt' to the console
            }// end of block scope

            { // Start a new block scope
                let txt = ""; // Declare a new string variable
                txt += "This group of students is Average";// Store a string message in the 'txt' variable
                for(let [y, x] of result.low.entries())// Start a 'for...of' loop using the 'entries()' method, which returns key-value pairs as arrays
                { // start a 'for' loop block
                    txt += "\n"+x.name+ " = " + x.marks+ ", "+ x.grade;// For each entry, append student details (name, marks, grade) as a formatted string to 'txt'
                }// end of 'for' loop block 
                console.log(txt);// Print the final string stored in 'txt' to the console
            }// end of block scope

// JavaScript for...in Loop 
    // javascript for in loop returns the object keys and this key iterate the value of key.. i have mentioned an example related to this like 
    // Iteration means extract property from the object one by one        
    const obj = { a: 1, b: 2, c: 3 }; //declare an object with pair of keys and values

    for (const key in obj) { // start a 'for...in' loop that extract the object properties keys //start of scope of for in block loop 
    console.log("Key:", key);        // 'a', 'b', 'c' in each iteration // print all the keys of mentioned object.
    console.log("Value:", obj[key]); // 1, 2, 3 respectively// print all values of object respectively the object key.
    } // end of dor in loop block scope
