console.log("JAI SHRI RAM")

let ratingCardEl=document.getElementById("ratingCard")
let ratingContainerEl=document.getElementById("ratingContainer")
let formButtonEl=document.getElementById("formButton")
let thankyouCardEl=document.getElementById("thankyouCard")
let formObject={userRated:0}
function customerRatedValue(inputEl){
    formObject.userRated=inputEl.value
    inputEl.classList.add("user-rated-value")

    // for(let i=0;i<=5;i++){
    //     if(formObject.userRated===inputEl.value){
           
    //         let notSelectedEl=document.getElementById(i+"rating")
    //         console.log(notSelectedEl)
    //     }else{
    //         let notSelectedEl=document.getElementById(i+"rating")
    //         console.log(notSelectedEl)
    //     }
    // }
}

function addInputElements(ratingValue){
    let inputEl=document.createElement("input")
    inputEl.type="button"
    inputEl.value=ratingValue 
    inputEl.onclick=function(){customerRatedValue(inputEl)}
    inputEl.id=ratingValue+"rating"
    inputEl.classList.add("rating-style")
    ratingContainerEl.append(inputEl)
}

for(let i=1;i<=5;i++){
    addInputElements(i)
}

formButtonEl.onclick=function(event){
    event.preventDefault()
    ratingCardEl.style.display="none"
    thankyouCardEl.classList.remove("thankyou-card-hide")
    let userRateEl=document.getElementById("userRate")
    userRateEl.textContent=formObject.userRated
 
}