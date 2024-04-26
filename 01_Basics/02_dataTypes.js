"use strict" // treat all JS code as newer verion

//alert(3+3); // we are using Node js not browser 

console.log(3
    +
    3
); // code readability should be high



let name = "zain";
let age = 18 ;
let isLoggedIn = false;
let state = null; // state khali ha undefine nahi ha, khali ka matlab state = "" ya bhi nhi ha, khali ka matlab ha ap ny server py request send ki ky ap ko temp send kary tu voh 0 nhi send karta kue ky 0 tu ek temperature ha, tu voh null send kary ga ap ko, null matlab empty, temp aya hi nhi ha.


/*
/**************** Premitive DataType *****************\
number =>2 to power 53
bigint => agar number bohat bara ha tu hum ya use karty hn
string => "" 
boolean => true, false
null => standalone value
undefine => abhi value assign nhi hoi ha;  
symbol => unique

/**************** Non-Premitive DataType *****************\
Object 
funciton 
array
*/

console.log(typeof null);


/*
************** IMPORTANT QUESTIONS ************
1. Null and undefine my difference explain karo.
2. Why we use “use strict”?
3. Data type kitny type han? Kon kon sy??
4. Null or undefine ka typeof kaya ha??
*/