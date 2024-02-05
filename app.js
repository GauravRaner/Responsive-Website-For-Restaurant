const toggleBar = document.querySelector("#icon1");
const elements = document.querySelector(".elements");

toggleBar.addEventListener("click", () => {
  elements.classList.toggle("show");
  
  toggleBar.classList.toggle("fa-bars");
  toggleBar.classList.toggle("fa-xmark");
});


let trends=document.querySelectorAll(".trending-foods");
let btn=document.querySelectorAll(".cart");
let cards=document.querySelectorAll(".card");
let count=0;

trends.forEach((curElem, index)=>{
  curElem.style.left=`${index*100}%`;
})
const myFun  = ( ) =>{
  trends.forEach((curImg)=>{
      curImg.style.transform=`translateX(-${count * 100}%)`
  })
   
}

setInterval(()=>{
  count++;
  if(count == trends.length){
      count=0
  }
  myFun()
},4000)


// add to cart
btn.forEach((curBtn)=>{
  curBtn.addEventListener("click",()=>{
    alert("ADDE TO CART")
  })
})

// card details

cards.forEach((curCard)=>{
  curCard.addEventListener("click",()=>{
    console.log(curCard);

    let div=document.createElement("div");
    div.classList.add("cardDetail");
    div.innerHTML=`
    <i id="icon" class="fa-solid fa-xmark"></i>
    <img src=${curCard.firstElementChild.src} alt="">
    <h1>Fresh Foods</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br> Molestiae magni atque reprehenderit veritatis? Officia, velit? Quos molestiae nulla nostrum. Minima.</p>
    `

    document.querySelector("body").appendChild(div);
    document.getElementById("icon").addEventListener("click",()=>{
      div.remove();
    })
  })
})
