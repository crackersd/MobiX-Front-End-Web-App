var menuIconsts = 0;
{
  const sections = [
    { id: 'home' },
    { id: 'about' },
    { id: 'products' },
    { id: 'contacts' }
  ];
  
  const observer = new IntersectionObserver((entries) => {
    document.querySelectorAll(".nevbtn").forEach(e => {
      e.style.background = "";
    });
    const navBar = document.querySelector(".nav-bar");
    
    const reset = (sectionId) => {      
        navBar.style.backgroundColor = "#01081b";
        navBar.style.boxShadow = "0.5px 1px 2px black";
        navBar.style.paddingTop = "5px";

        if(sectionId === "about"){ 
            document.querySelector(".about").style.background = "#5e92e0";
        }
        if(sectionId === "products"){
            document.querySelector(".products").style.background = "#5e92e0";
        }
        if(sectionId === "contacts"){
            document.querySelector(".contacts").style.background = "#5e92e0";
        }
    }
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
  
        if (sectionId === "home") {
            document.querySelector(".home").style.background = "#5e92e0";
            navBar.style.backgroundColor = "transparent";
            navBar.style.boxShadow = "none";
            navBar.style.paddingTop = "20px";
        } else {
          reset(sectionId);
        }
      }
    });
  }, {
    threshold: 0.6
  });
  
  sections.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  });

}

  document.querySelector(".menu-icon").addEventListener("click", function(){

    if(menuIconsts == 0){
        document.querySelector(".nav-links").style.right = "0";
        menuIconsts = 1;
    }
  });
  
  document.querySelector(".menu-close-icon").addEventListener("click", function(){
    if(menuIconsts == 1){
        document.querySelector(".nav-links").style.right = "-60%";
        menuIconsts = 0;
    }
  });

{

  const forwardbtn = document.querySelector(".backward");
  const backwardbtn = document.querySelector(".forward");
  const container = document.getElementById("containerImg");

  const scroll = ()=>{
    if (container.scrollLeft === 0) {
      forwardbtn.style.display = "none";
    } else {
      forwardbtn.style.display = "block";
    }
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScrollLeft) {
      backwardbtn.style.display = "none";
    } else {
      backwardbtn.style.display = "block";
    }
  }


  backwardbtn.addEventListener("click", () => {
    let fullwidth = container.offsetWidth;

    if (window.matchMedia("(max-width: 940px)").matches) {
      container.scrollLeft += fullwidth * 1;
    } else {
      container.scrollLeft += fullwidth * 0.34;
    }
    scroll();
  });

  forwardbtn.addEventListener("click", () => {
    let fullwidth = container.offsetWidth;

    if (window.matchMedia("(max-width: 940px)").matches) {
      container.scrollLeft -= fullwidth * 1;
    } else {
      container.scrollLeft -= fullwidth * 0.34;
    }
    scroll();
  });
  

}