let audioElement = new Audio("./assets/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgreassBar=document.getElementById('myProgressBar');
let gif = document.getElementById("playingGif");

let songs = [
  {
    songName: "abc",
    filePath: "./assets/songs/song/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
  {
    songName: "abc",
    filePath: "./assets/songs/song/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
  {
    songName: "abc",
    filePath: "./assets/songs/song/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
  {
    songName: "abc",
    filePath: "./assets/songs/song/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
  {
    songName: "abc",
    filePath: "./assets/songs/song/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
];

masterPlay.addEventListener("click", () => {
  console.log("Clicked It !");

  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();

    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  // console.log("Time update working");

    //update seekbar as song plays
    prog=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(prog);

    myProgressBar.value=prog;     

});
