//document.getElementById("count-el").innerText = 5
// let count = 5 + 7 ;
// console.log(count)


//  let MyAge = 20 ;
//  console.log(MyAge)
// let FirstBacth = 5;
// let SecondBatch = 10;
// let count = FirstBacth + SecondBatch
// console.log(count)

// let MyAge = 20;
// let HumanAge =30;
// let MyDogAge = MyAge * HumanAge
// console.log(MyDogAge)

// let count = 5 ;
//count + 1//
// count = count + 1
// console.log(count)
 
// let bonusPoints = 50;
// bonusPoints = bonusPoints + 100 ;
// bonusPoints = bonusPoints - 25;
// bonusPoints = bonusPoints + 70
// console.log(bonusPoints

// steps for increment 
//initilize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the inner html to relflect the new count
function increment() {
    console.log(`the funcking buttton was clicked`)
}


// function countDown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
//     console.log(0)
// }
// countDown()

// function MyLogger (){
//     console.log(42)
// }
// MyLogger()

// let lap1 = 20 ;
// let lap3 = 3 ;
// let lap2 = 40 ;
// function racers (){
//     let totaltime = lap1 + lap2 +  lap3
// console.log(totaltime)
// }
//   racers()
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")// passing arguement
let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}


