
// function login() {
//   let userName = document.querySelector("#text");
//   let password = document.querySelector("#password");
//   if(userName.value === "" || password.value === "" || userName.value === "" && password.value === "" );
//   alert("Please fill all input fields");
// }

let mark = 0;
function submit() {
  let ans1 = document.querySelector("#opt3");
  let ans2 = document.querySelector("#opt8");
  let ans3 = document.querySelector("#opt10");
  if (ans1.checked == true) {
    mark++;
    alert("Q1 answer is right");
  }
  else {
    alert("Q1 answer is wrong");
  }
  if (ans2.checked == true) {
    mark++;
    alert("Q2 answer is right");
  }
  else {
    alert("Q2 answer is wrong");
  }
  if (ans3.checked == true) {
    mark++;
    alert("Q3 answer is right");
  }
  else {
    alert("Q3 answer is wrong");
  }
  let result = document.querySelector("#resultShow");
  result.innerHTML = "You got " + mark + " out of 3";
}