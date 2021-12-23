document.querySelector("#myUL").innerHTML = "";
function removeAll() {
  document.querySelector("#myUL").innerHTML = "";
}





function addTask() {
  let li = document.createElement("li");
  let inputValue = document.querySelector("#myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  let btn = document.createElement("span");
  btn.innerHTML = "x";
  btn.classList.add("btn", "btn:hover");

  let btn1 = document.createElement("span");
  btn1.innerHTML = "✔";

  li.onclick = function() {

    btn1.classList.add("btn1");
    document.querySelector("#myUL").insertBefore(btn1, li);

      this.classList.add("checked");
  };

  btn.onclick = function() {
    let div = this.parentElement;
      div.style.display="none";
      btn1.style.display = "none";
  };


  if (inputValue === '') {
    alert("Please enter the task");
  } else {
    document.querySelector("#myUL").appendChild(li).appendChild(btn);
  }
  document.querySelector("#myInput").value = "";
}

// let btn = document.createElement("BUTTON");
// btn.innerHTML = "X";
// btn.classList.add("btn", "btn:hover");
// btn.onclick = function() {
//   let div = this.parentElement;
//     div.innerHTML="";
// };
