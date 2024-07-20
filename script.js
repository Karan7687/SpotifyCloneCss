let audioElement = new Audio("./assets/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");

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
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
  }

});

//audioElement.play();
