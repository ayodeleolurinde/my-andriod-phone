let time = document.getElementById("time")
let timer;

function show(){
    let now = new Date()
    timer = now.toLocaleTimeString()
    time.innerHTML = timer;
    setTimeout(show,1000)
}
show()

let tim = document.getElementById("tim")
let secTime;
function shown(){
    let how = new Date()
    secTime = how.toLocaleTimeString()
    tim.textContent = secTime;
    setTimeout(shown,1000)
}
shown()

let pics = document.getElementById("pics")
function pic(){
    tim.style.display = "none"
    document.getElementById("imgs").style.display="none"
    pics.innerHTML = `
        <div class="flex">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
            <img src="bs.jpg" alt="">
        </div>
    `
}


function meg(){
    tim.style.display = "none"
    document.getElementById("mes").style.width="fit-content"
    document.getElementById("mes").style.backgroundColor = "white"
    document.getElementById("mes").innerHTML = `
    <h3>Message</h3> 
    <div class="over">
   
           <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
              </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div> 
          <div class="mess">
              <div class="pic"></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
          </div>  
          <div class="mess">
             <div class="pic"></div>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
         </div> 
         <div class="mess">
           <div class="pic"></div>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum</p>
         </div>   
  </div>
  <div class="mesopt">
          <button><i class="icofont-square-left"></i></button>
          <button><i class="icofont-square-up"></i></button>
          <button onclick="back()"><i class="icofont-square-right"></i></button>
  </div>
    `
}

function back(){
    document.getElementById("mes").style.display="none"
    tim.style.display = "block"
}