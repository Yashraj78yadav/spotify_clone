console.log("welcome to my spotify")
let songIndex =0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let progressBar=document.getElementById('progressBar');
let songs=[
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
