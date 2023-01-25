const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}


// redirecting to Single product page information when click on product

const product = document.getElementsByClassName("pro");
// console.log(product);

let imgurl="";
for(let item of product){
    item.addEventListener("click", ()=>{

        imgurl= item.children[0].src;
           console.log(imgurl);
        //  displaySingleProduct(imgurl)

        window.location.href='sproduct.html';
      
    })
}









// console.log(imgurl)

// const sproductPage= document.getElementById('prodetails');

// function displaySingleProduct(){
//     console.log("im herer")
//     const MainImg=document.getElementById("MainImg");
//         console.log(MainImg.src);
//         console.log(imgurl);
       
// }


