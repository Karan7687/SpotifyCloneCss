let audioElement = new Audio("./assets/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgreassBar = document.getElementById("myProgressBar");
let gif = document.getElementById("playingGif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "abc",
    filePath: "./assets/songs/song/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
  {
    songName: "def",
    filePath: "./assets/songs/song/2.mp3",
    coverPath: "./assets/covers/2.jpg",
  },
  {
    songName: "ghi",
    filePath: "./assets/songs/song/3.mp3",
    coverPath: "./assets/covers/3.jpg",
  },
  {
    songName: "jkl",
    filePath: "./assets/songs/song/4.mp3",
    coverPath: "./assets/covers/4.jpg",
  },
  {
    songName: "mno",
    filePath: "./assets/songs/song/5.mp3",
    coverPath: "./assets/covers/5.jpg",
  },
];

//aranging all songs

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;

  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

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
  prog = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(prog);

  myProgressBar.value = prog;
});

myProgreassBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
