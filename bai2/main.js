function numberOneTriangle(n) {

    if (n < 1 || n > 10) {
      document.write("Số n phải nằm trong khoảng (1-10)");
    }
  

    const div = document.createElement("div");
    div.classList.add("number-one-triangle");
  
   
    for (let i = 0; i < n; i++) {
      div.innerHTML += "*";
    }
  
    return div;
  }
  
  function drawTriangle() {

    const n = parseInt(document.getElementById("input").value);
  
    const div = numberOneTriangle(n);
  
    document.getElementById("triangle").appendChild(div);
  }
  

  document.getElementById("btn").addEventListener("click", drawTriangle);
  