//MAKE VARIABLES THAT CONTAIN EACH COMBO KEY USING
//CONCAT
const code1 = `${9 + 1}`
const code2 = `${8 * 5}`
const code3 = `${40 - 1}`
//MAKE A VARIABLE THAT CONTAINS THE FULL COMBO
const combination = `${code1}-${code2}-${code3}`
console.log(combination)
//ALERT TO DISPLAY THE COMB
alert(combination)
//DISPLAY THE COMBO IN THE DOM
//JUST PRACTICING DOM MANIPULATION

//ACCESS H1 IN DOM
const codeView1 = document.getElementById("codeView1")
const codeView2 = document.getElementById("codeView2")
const codeView3 = document.getElementById("codeView3")

const combinationHeading = document.getElementById("combinationHeading")

//UPDATE DOM
codeView1.textContent = code1
codeView2.textContent = code2
codeView3.textContent = code3
combinationHeading.textContent = combination
