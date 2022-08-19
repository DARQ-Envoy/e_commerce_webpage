const medium=window.matchMedia("(min-width:767px)");
const sneakerSlide=document.querySelector("#sneakers-slide");
let showImage=document.querySelector("#show-image");
let sneakerCont=document.querySelector("#sm-sneakers-cont");
let cartEl=document.querySelector("#cart-el");
let cartRecord=document.querySelector("#cart-record");
let cartRecordBody=document.querySelector("#cart-record-body");
let addIcon=document.querySelector("#add-icon");
let minusIcon=document.querySelector("#minus-icon");
let valueAmount=0;
const closeRecord=document.querySelector("#close-record");
let productIntro=document.querySelector("#product-intro");
let allSmSneakers=document.querySelectorAll(".sm-sneakers");
let cartDelete;
let allSmSneakersArr=Array.prototype.slice.call(allSmSneakers);
let amount=document.querySelector("#amount");
let finalAmount=~~amount.textContent;
let newPrice=document.querySelector("#new-price");
let newPriceAmount=~~newPrice.textContent;
let itemArray=[];
let value=-1;
let cartAddition=document.querySelector("#cart-addition");
let isShowing=false;
let Image1=document.querySelector("#img-1");
let Image2=document.querySelector("#img-2");
let Image3=document.querySelector("#img-3");
let Image4=document.querySelector("#img-4");
let cartingImage=document.querySelector(".carting-image");

changingLayout(medium);

cartEl.addEventListener("click",()=>{

  if(!isShowing){
    cartRecord.classList.add("show");
    cartRecord.classList.remove("hide");
    isShowing=true;

  }
  else{
    cartRecord.classList.add("hide");
    cartRecord.classList.remove("show");
    isShowing=false;
  }
  if(closeRecord){
    closeRecord.addEventListener("click",()=>{
        cartRecord.classList.add("hide");
    cartRecord.classList.remove("show");
        isShowing=false;
        }
        )
      }
})

// console.log(sneakerSlide);
    function settingListener(){
      showImage=document.querySelector("#show-image");
      sneakerCont=document.querySelector("#sm-sneakers-cont");
      allSmSneakers=document.querySelectorAll(".sm-sneakers");
      allSmSneakersArr=Array.prototype.slice.call(allSmSneakers);
      Image1=document.querySelector("#img-1");
      Image2=document.querySelector("#img-2");
      Image3=document.querySelector("#img-3");
      Image4=document.querySelector("#img-4");
  cartingImage=document.querySelector(".carting-image");
  console.log(cartingImage);

        if(medium.matches){
            console.log(Image1)
            Image1.addEventListener("click",()=>{
                addingCurrent(Image1)
                
                            })
                Image2.addEventListener("click",()=>{
                addingCurrent(Image2)    
                })
                Image3.addEventListener("click",()=>{
                    addingCurrent(Image3)
                
                                })
                Image4.addEventListener("click",()=>{
                addingCurrent(Image4)
                
                            })
            }
    }


    console.log(cartRecordBody.innerHTML);
    // console.log(Boolean("    "))

    if(cartRecordBody.innerHTML==""){
cartRecordBody.innerHTML=
       `<p class="text-empty text-muted text-center">
      Your cart is empty
    </p>
              `
    }
    else{
      cartRecordBody.innerHTML=`
      
      `
    }



function addingCurrent(element){
    for(let i=0 ; i < allSmSneakers.length ; i++){
        allSmSneakers[i].classList.remove("current");
    };
    element.classList.add("current");
showImage.src=`images/image-product-${allSmSneakersArr.indexOf(element)+1}.jpg`;
}


medium.addEventListener("change",()=>{
    changingLayout(medium);
})
function changingLayout(media){

    if(media.matches){
sneakerSlide.innerHTML=`
<div class="container-fluid">
<img src="images/image-product-1.jpg" alt="sneaker image" class="img-fluid rounded" id="show-image">
<div class="container-fluid d-flex my-3 w-100 justify-content-between align-items-center" id="sm-sneakers-cont">
  <img src="images/image-product-1-thumbnail.jpg" class="img-fluid sm-sneakers current carting-image" alt="sneaker" id="img-1"/>
  <img src="images/image-product-2-thumbnail.jpg" class="img-fluid sm-sneakers" alt="sneaker" id="img-2"/>
  <img src="images/image-product-3-thumbnail.jpg" class="img-fluid sm-sneakers" alt="sneaker" id="img-3" />
  <img src="images/image-product-4-thumbnail.jpg" class="img-fluid sm-sneakers" alt="sneaker" id="img-4"/>
</div>
</div>
            `
settingListener();
    }


    else{
        sneakerSlide.innerHTML=`
        <div id="sneakers" class="carousel slide w-100 mx-auto mt-0" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="100">
                  <img src="images/image-product-1.jpg" class="d-block w-100 slide-image carting-image" alt="sneaker photo"/>
                </div>
                <div class="carousel-item" data-bs-interval="1">
                  <img src="images/image-product-2.jpg" class="d-block w-100 slide-image" alt="sneaker photo">
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <img src="images/image-product-3.jpg" class="d-block w-100 slide-image" alt="sneaker photo">
                </div>
              </div>
      <button class="carousel-control-prev button-dir mx-3" type="button" data-bs-target="#sneakers" data-bs-slide="prev">
                <img src="images/icon-previous.svg" class="carousel-control-prev-icon d-block mx-auto img-control" aria-hidden="true" alt="icon previous">
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next button-dir mx-3" type="button" data-bs-target="#sneakers" data-bs-slide="next">
                <img src="images/icon-next.svg" class="carousel-control-next-icon d-block mx-auto img-control" aria-hidden="true" alt="icon next"/>
                <span class="visually-hidden">Next</span>
              </button>
      </div>
        `
    }



}
cartingImage=document.querySelector(".carting-image");
// console.log(cartingImage)

addIcon.addEventListener("click",()=>{
valueAmount+=1
amount.textContent=valueAmount;
});

  minusIcon.addEventListener("click",()=>{
    valueAmount-=1;
    console.log(valueAmount)
    if(valueAmount < 0){
      valueAmount = 0;
      amount.textContent=valueAmount;
        }
        else{
          amount.textContent=valueAmount;
        }
  });

cartAddition.addEventListener("click",()=>{
if(valueAmount){
  console.log(valueAmount);
    cartRecordBody.innerHTML="";
        createItems();
}
      });


cartAddition.addEventListener("mousedown",()=>{
  cartAddition.classList.remove("fading");
});
cartAddition.addEventListener("mouseout",()=>{
  cartAddition.classList.add("fading");
});


function createItems(){
  value+=1;
  console.log(value);
  finalAmount=~~amount.textContent;
  console.log(productIntro.textContent)
  value={};
value.title=productIntro.textContent
value.image=cartingImage.src;
value.amount=finalAmount;
value.newPrice=newPriceAmount;
value.result=finalAmount*newPriceAmount;
value.trashIcon="icon-delete.svg";
itemArray.push(value);
console.log(itemArray)
itemArray.forEach(
  (item)=>{
    box=document.createElement("div");
    box.classList.add("cart-content","px-1" ,"py-2","d-flex","align-items-top","justify-content-between");

    box.innerHTML=`
     <img src="${item.image}" alt="Sneaker image" class="rounded cart-img mx-1"/>
    <div class="text-muted d-inline cart-text px-2">
      <span class="product-name">
        ${item.title}
      </span> $<span id="discount-price">${item.newPrice}.00 </span> x <span id="amount-ordered">
        ${item.amount}.00
      </span><p class="fw-bold d-inline-block text-dark">$<span class="fw-bold text-dark" id="total-value">${item.result}.00</span></p>
    </div>
                <img src="images/icon-delete.svg" alt="delete icon" class="cart-delete hover"/>
                `;
              
          cartRecordBody.appendChild(box);
          console.log(newPriceAmount);
      
// if(cartRecordBody.innerHTML===""){
//   cartRecordBody.innerHTML=
//   `
//   <p class="text-empty text-muted text-center">
//   Your cart is empty
// </p>
//           `
// }

}
  );
// console.log(itemArray)
// console.log(itemArray[value].title)

cartDelete=document.querySelector(".cart-delete");
cartDelete.addEventListener("click",()=>{
  itemArray.pop();
  console.log(itemArray);
  while(cartRecordBody.firstChild){
    cartRecordBody.firstChild.remove();
  };
  refreshItems();
  console.log("hey");
})
      };
function refreshItems(){
  if(!itemArray.length > 0 || itemArray.length === 0){
    cartRecordBody.innerHTML=
          `
          <p class="text-empty text-muted text-center">
           Your cart is empty
        </p>
                   `
          console.log(itemArray);
        }

  else{

    itemArray.forEach(
      (item)=>{
        box=document.createElement("div");
        box.classList.add("cart-content","px-1" ,"py-2","d-flex","align-items-top","justify-content-between");
    
        box.innerHTML=`
         <img src="${item.image}" alt="Sneaker image" class="rounded cart-img mx-1"/>
        <div class="text-muted d-inline cart-text px-2">
          <span class="product-name">
            ${item.title}
          </span> $<span id="discount-price">${item.newPrice}.00 </span> x <span id="amount-ordered">
            ${item.amount}.00
          </span><p class="fw-bold d-inline-block text-dark">$<span class="fw-bold text-dark" id="total-value">${item.result}.00</span></p>
        </div>
                    <img src="images/icon-delete.svg" alt="delete icon" class="cart-delete hover"/>
                    `;
                  
              cartRecordBody.appendChild(box);
              console.log(newPriceAmount);
      });
      
    

  }
 

  console.log(itemArray)


}