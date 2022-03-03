// //alert("Good Evening, Welcome to school of techies!");

// var student1 = "Balaji";
// var student2 = "Vijay";
// var student3 = "Vivek";

// var rollno = 7;
// rollno = 9;

// var students = ['vijay', 1, 5, 'balaji', 'prasanna', '8', 'vivek'];


// document.getElementById("para").innerHTML = "javascript";

// // 10

// // 1 ---- 10

// for(var k = 1 ; k <= 10 ; k++){
//     document.write(k);
// }

// var k = 1 ;
// while(k <= 10 ){
//     document.write(k);
//     k++;
// }




// document.write('hello')
// document.write('hello')
// document.write('hello')
// document.write('hello')
// document.write('hello')
// document.write('hello')
// document.write('hello')
// document.write('hello')

// // //to print anything onto your html, we have 4 methods:
// // document.getElementById("p1").innerHTML = "Balaji";
// // document.getElementById("heading1").innerHTML = "Vijay";
// // document.getElementById("head").innerHTML = '7';
// // document.getElementById("roll").innerHTML = "rollno";

// // document.write(rollno);
// // alert(rollno);
// // console.log(rollno);

// //document.getElementById("t1").value = 5;

// function multiply(){
//     x = document.getElementById("t1").value; 
//     y = document.getElementById("t2").value; 

//     if(x == y){
//         alert(3(x+y));
//     }
//     var sum = x + y;
//     alert(sum);
// }


// function add(x,y){
//     var sum = x + y;
//     alert(sum);
// }
// add();
//parameters or arguments
// add(5,6);
// add(11,15);
// add(20,25);


//conditional statements
// var age = 20;
// if(age > 18){
//     alert("congrats, ur eligible")
// }
// else{
//     alert("sorry, not eligible")
// }

// function check(){
//     var age = Number(document.getElementById("date").value);
    
//     //Number('6')
//     // 6
//     var nat = document.getElementById("nat").value;
    
//     if(age >= 18 && nat.toLowerCase() == "indian"){
//         document.getElementById("head1").innerHTML = ("congrats, ur eligible")
//     }
//     else{
//         document.getElementById("head1").innerHTML = ("sorry, not eligible")
//     }
// }

//'aeroplane'
// var count = 0;
// var str = 'aeroplane';

// for(var k = 0 ; k <= str.length ; k++){
//     if(str.charAt(k) == 'a' || str.charAt(k) == 'e' || str.charAt(k) == 'i' || str.charAt(k) == 'o' || str.charAt(k) == 'u'){
//         count++;
//     }
// }

// function changeStyle(){
//     document.getElementById("para").classList.remove("balaji");
// }

// setTimeout(function(){
//     alert("Hello, I am from timout")
// },3000);

// setInterval(function(){
//     console.log(new Date())
// },1000)

//AJAX = Asynchronous Javascript and XML 

function getData(){
    var x = new XMLHttpRequest();
    x.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    x.send();

    x.onreadystatechange = function(){
        if(this.status == 200){
            for(i = 0; i <= 100 ; i++){
                document.getElementById("result").innerHTML += "<div class='myresult'>" +JSON.parse(this.responseText)[i].title + "</div>";
            }
        }
        else{
            document.getElementById("result").innerHTML = "Sorry, No data available"
        }
        
    }
}

     



// if(str.charAt(1) == 'a' || str.charAt(1) == 'e' || str.charAt(1) == 'i' || str.charAt(1) == 'o' || str.charAt(1) == 'u'){
//     count++;
// }

// if(str.charAt(1) == 'a' || str.charAt(1) == 'e' || str.charAt(1) == 'i' || str.charAt(1) == 'o' || str.charAt(1) == 'u'){
//     count++;
// }

// if(str.charAt(1) == 'a' || str.charAt(1) == 'e' || str.charAt(1) == 'i' || str.charAt(1) == 'o' || str.charAt(1) == 'u'){
//     count++;
// }

// if(str.charAt(1) == 'a' || str.charAt(1) == 'e' || str.charAt(1) == 'i' || str.charAt(1) == 'o' || str.charAt(1) == 'u'){
//     count++;
// }

// if(str.charAt(1) == 'a' || str.charAt(1) == 'e' || str.charAt(1) == 'i' || str.charAt(1) == 'o' || str.charAt(1) == 'u'){
//     count++;
// }

// if(str.charAt(1) == 'a' || str.charAt(1) == 'e' || str.charAt(1) == 'i' || str.charAt(1) == 'o' || str.charAt(1) == 'u'){
//     count++;
// }

// if(str.charAt(1) == 'a' || str.charAt(1) == 'e' || str.charAt(1) == 'i' || str.charAt(1) == 'o' || str.charAt(1) == 'u'){
//     count++;
// }

// e
// r
// o
// p
// l
// a
// n
// e


// "jvascrjavaipt"

// java

// var student1 = "balaji"
// undefined
// student1.valueOf()
// 'balaji'
// student1.length
// 6
// var student1 = "balaji is learning javascript with 2 other students namely vijay and vivek"
// undefined
// student1.length
// 74
// student1.search("vijay")
// 59
// student1.search("prasanna")
// -1
// student1.slice(0,6)
// 'balaji'
// student1.substring(0,6)
// 'balaji'
// student1.substr(0,50)
// 'balaji is learning javascript with 2 other student'
// student1.substr(5,2)
// 'i '
// student1.toUpperCase()
// 'BALAJI IS LEARNING JAVASCRIPT WITH 2 OTHER STUDENTS NAMELY VIJAY AND VIVEK'
// student1.toLowerCase()
// 'balaji is learning javascript with 2 other students namely vijay and vivek'
// student1.replace("javascript","jquery")
// 'balaji is learning jquery with 2 other students namely vijay and vivek'
// student1.charAt(5)
// 'i'
// student1.charAt(4)
// 'j'
// student1.charAt(45)
// 'u'


