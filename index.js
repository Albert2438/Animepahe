
const img =document.getElementById("img");
const select =document.getElementById("select");
const tabs = document.getElementById("tabs");
const search =document.getElementById("search");
const Anime = document.getElementById("Anime");



 

img.addEventListener('click',() =>{
    tabs.style.display = 'block';
})
tabs.addEventListener('blur',() =>{
    tabs.style.display = 'none';
})
//document.addEventListener('click',(event)=>{
   // if(event.target !== img && event.target !== tabs){
    //    tabs.style.display = 'none';
  //  }
// })
search.addEventListener ('keypress',(event)=>{
    if(event.key ==='Enter'){
        window.location.href=Anime.html;
    }
})

 
