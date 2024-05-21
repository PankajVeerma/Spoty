console.log("Wellcome to spotify");
let songIndex = 0;
let audioElement = new Audio('song/YeRate.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName: "Ye Rate", filePath: "song/1.mp3", coverPath: "cover/1.jpg"
    },
    {
        songName: "Ye Rate111", filePath: "song/2.mp3", coverPath: "cover/2.jpg"
    },
    {
        songName: "Ye Rate12", filePath: "song/3.mp3", coverPath: "cover/3.png"
    },
    {
        songName: "Ye Rate13", filePath: "song/4.mp3", coverPath: "cover/4.jpg"
    },
    {
        songName: "Ye Rate14", filePath: "song/5.mp3", coverPath: "cover/5.jpg"
    },
    {
        songName: "Ye Rate15", filePath: "song/6.mp3", coverPath: "cover/6.jpg"
    },
    {
        songName: "Ye Rate16", filePath: "song/7.mp3", coverPath: "cover/7.jpg"
    },
    {
        songName: "Ye Rate17", filePath: "song/8.mp3", coverPath: "cover/8.jpg"
    },
    {
        songName: "Ye Rate18", filePath: "song/9.mp3", coverPath: "cover/9.jpg"
    },
    {
        songName: "Ye Rate19", filePath: "song/10.mp3", coverPath: "cover/10.jpg"
    }
]
songItem.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100
})
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        

        songIndex = parseInt(e.target.id)
        makeAllplays();
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }

    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }

    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})