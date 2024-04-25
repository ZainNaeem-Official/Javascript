const accountId = 976969;
let accountEmail = "zain@google.com";
var accountPassword = "123";
let accountState; 
accountCity = "islamabad"; // bad practice 


// accountId = 6123124; // const can not be changed 
accountEmail = "zain@gmail.com";
accountPassword = "038024";
accountCity = "Lahore";

/* prefer not to use var 
because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*

************** IMPORTANT QUESTIONS ************
1. Constant ko redeclare kar sakty hn?
2. bina type ky variable declare karna kasa ha?  
3. let accountState = ""  ya undefine ha??
4. Var use kue nhi kar sakty?

*/

