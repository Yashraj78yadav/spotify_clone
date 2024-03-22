console.log("welcome to my spotify")
let songIndex =0;
let audioElement=new Audio('1song.mp3');
let masterplay=document.getElementById('masterplay');
let progressBar=document.getElementById('progress_bar');
let gif=document.getElementById('gif');
let songs=[
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/2.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/3.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
    {sonngName:"pawan-star",filepath:"file/1.mp3",coverpath:"cover/1.jpg"},
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //  console.log(progress);
    progress_bar.value=progress;
})
progress_bar.addEventListener('change',()=>{
    audioElement.currentTime=pogress_bar.value*audioElement.duration/100;
})