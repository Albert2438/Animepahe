
const img =document.getElementById("img");
const select =document.getElementById("select");
const tabs = document.getElementById("tabs");


img.addEventListener('click',() =>{
    tabs.style.display = 'block';
})
tabs.addEventListener('blur',() =>{
    tabs.style.display = 'none';
})
document.addEventListener('click',(event)=>{
    if(event.target !== img && event.target !== tabs){
        select.style.display = 'none';
    }
}
    
)