document.addEventListener("DOMContentLoaded", function() {
    var ispressed=false
    var bar_content=document.getElementById("bar_content")
    var bar_default=document.getElementById("bar_default")
    var bar=document.getElementById("bar")
    bar.addEventListener("click",()=>{
        if(ispressed)
        {
            ispressed=false
            bar_content.style.display="none"
            bar.style.width="100px"
            bar.style.height="30px"
            bar.style.transform="rotate(0deg)"
            setTimeout(()=>{
                bar.style.backgroundColor="red"
                bar_default.style.display="block"
            },2000)
        }
        else{
            ispressed=true
            bar_default.style.display="none"
            bar.style.width=(innerWidth-2*8) + "px"
            bar.style.height="300px"
            bar.style.transform="rotate(360deg)"
            setTimeout(()=>{
                bar.style.backgroundColor="blue"
                bar_content.style.display="block"
            },2000)
        }
    })
})