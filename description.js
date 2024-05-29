    const para= new URLSearchParams(window.location.search);
    window.addEventListener("load",()=>{
        document.querySelector(".descriptionImg").src = para.get("image"); 
        document.querySelector(".discriptionPrice").innerText =para.get("price");
        document.querySelector(".titleOfDisc").innerText =para.get("title");    
    })

    




   
    

