$(".fabars").click(function (){
    $("header .container nav ul").toggleClass("active-ul");
    // $(".header .container .form").toggleClass("hidden");
    
});
const socialInfo = document.querySelector(".social");
const socialIcons = document.querySelectorAll(".social i");
// console.log(socialInfo);
                // icons animation
                window.addEventListener("scroll", function(){
                    socialIcons.forEach(element => {
                        if(window.innerHeight > socialInfo.getBoundingClientRect().top){
                            
                            element.classList.add("animate__slow", "animate__flip");
                        }else{
                            element.classList.remove("animate__slow", "animate__flip");
                        }
                    });
                });