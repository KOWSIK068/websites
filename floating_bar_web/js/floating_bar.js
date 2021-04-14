var floating_bar=function(bar){
    this.bar=document.querySelector(bar)
    this.back=document.createElement("div")
    this.back.setAttribute("class","blured_background")
    document.body.insertBefore(this.back,this.bar)
    var style_tag=document.createElement("style")
    style_tag.textContent=bar+`{
        margin: auto;
        position: absolute;
        border: 1.2px solid rgb(156, 156, 156);
        border-radius: 5px;
        background-color: white;
        padding: 13px;
        display: none;
        text-align: center;
    }
    `+".blured_background"+`{
        background-color: #0000003d;
        position: absolute;
        top: 0px;
        left: 0px;
        display: none;
    }`
    document.head.appendChild(style_tag)
    this.show=function(width,height,background_str,blur_value){
        if (background_str) {
            this.bar.style.backgroundColor=background_str
        }
        blur_value=blur_value||0.6
        this.back.style.display = "block"
        this.back.style.width = innerWidth + "px"
        this.back.style.height = innerHeight + "px"
        var i
        for(i=0;i<document.querySelector("body").childElementCount-2;i++)
        {
            document.querySelector("body").children[i].style.filter="blur("+blur_value+"px)"
        }
        this.bar.style.display = "block"
        this.bar.style.width = width
        this.bar.style.height = height
        this.bar.style.top = innerHeight  / 2 - this.bar.offsetHeight / 2 + "px"
        this.bar.style.left = innerWidth / 2 - this.bar.offsetWidth  / 2 + "px"
    }
    this.dismiss=function(){
        this.back.style.display="none"
        this.bar.style.display="none"
        for(var i=0;i<document.querySelector("body").childElementCount-2;i++)
        {
            document.querySelector("body").children[i].style.filter="blur(0px)"
        }
    }
    this.back.addEventListener("click",()=>{
        this.dismiss()
    })
}
