let skill = document.querySelector("#my-skills");
let experience = document.querySelector("#experience");
let div1 = document.querySelector(".skills-info");
let div2 = document.querySelector(".myself")
experience.addEventListener("click",()=>{
    div1.classList.add("remove");
    div2.classList.remove("none");
});
skill.addEventListener("click",()=>{
    div1.classList.remove("remove");
    div2.classList.add("none");
    
});

let submit = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let review = document.getElementById("riview");
let empty = document.getElementById("empty");

let add = name + email + password + review;
submit.addEventListener("click",()=>{
    if(name.value == ""){
        alert("enteryour name");
    }else if(email.value == ""){
        alert("enter your email");
    }else if(password.value == ""){
        alert("enter your password");
    }else{
        empty.innerText = "submited";
        
    }
})
let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
let hiddenEements = document.querySelectorAll(".hidden");

hiddenEements.forEach((el)=>observer.observe(el));

let menu = document.getElementById("menu");
let close = document.getElementById("close")
let option = document.querySelector(".option");
menu.addEventListener('click',()=>{
    option.classList.remove("opac");
})
close.addEventListener('click',()=>{
    option.classList.add("opac");
})