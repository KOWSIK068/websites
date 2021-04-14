document.addEventListener("DOMContentLoaded", function() {
    var button=document.getElementById("button")
    var trial=new floating_bar(".floating_bar")
    var back=document.getElementById("go_back_button")
    back.addEventListener("click",()=>{
        trial.dismiss()
    })
    button.addEventListener("click",()=>{
        trial.show("auto","auto")
    })
})