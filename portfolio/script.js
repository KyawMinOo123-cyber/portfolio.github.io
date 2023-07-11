const skillBtn = document.querySelector(".skillBtn");
const skills = document.querySelector(".skill");
const profileImg = document.querySelector(".kmo");
const designation = document.getElementById("dev");
const kyaw = document.getElementById("kyaw");
const contact = document.getElementById("contact");
const gmail = document.getElementById("gmail");
const mobile = document.getElementById("mobile");


skillBtn.addEventListener('click',()=>{
    
    if(skills.classList.contains("contain")){
        skills.style.opacity = 0;
        skills.classList.remove("contain");
        profileImg.style.top = "20%";
    }else{
        skills.classList.add("contain");
        skills.style.opacity = 1;
        profileImg.style.top = "50%";
    }

})

const mouseOver =()=>{
    designation.innerHTML = "Web Designer";
    designation.style = `
        color:red;
    `
    
    kyaw.style = `
        color:aqua;
    `
 }

const mouseOut=()=>{
   designation.innerHTML = "Web Developer";

   designation.style = `
   color:aqua;
`

kyaw.style = `
   color:#fff;
`
}

const mouseTrue = ()=>{
    kyaw.style = `
        color:aqua;
    `
    designation.style.color= "#fff";
}
const mouseFalse = ()=>{
    kyaw.style =`
        color:#fff;
    `
    designation.style.color= "aqua";
}

const mousing=()=>{
    contact.style.color = "#fff";
    contact.style.transform = "scale(110%)";
    gmail.style.color = "aqua";
    mobile.style.color = "aqua";
}
const notMouse =()=>{
    contact.style.color = "aqua";
    contact.style.transform = "scale(100%)";
    gmail.style.color = "#fff";
    mobile.style.color="#fff";
}



