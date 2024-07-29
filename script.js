let songIndex = 0;
let audioElement = new Audio("./assets/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("playingGif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "abc",
    filePath: "./assets/songs/1.mp3",
    coverPath: "./assets/covers/1.jpg",
  },
  {
    songName: "def",
    filePath: "./assets/songs/2.mp3",
    coverPath: "./assets/covers/2.jpg",
  },
  {
    songName: "ghi",
    filePath: "./assets/songs/3.mp3",
    coverPath: "./assets/covers/3.jpg",
  },
  {
    songName: "jkl",
    filePath: "./assets/songs/4.mp3",
    coverPath: "./assets/covers/4.jpg",
  },
  {
    songName: "mno",
    filePath: "./assets/songs/5.mp3",
    coverPath: "./assets/covers/5.jpg",
  },
];

// Arranging all songs
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Master play button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    setPlayButton(songIndex);
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
    makeAllPlays();
  }
});

// Update progress bar
audioElement.addEventListener("timeupdate", () => {
  let prog = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = prog;
});

// Seek in audio
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// Reset all play buttons to play state
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((ele) => {
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  });
};

// Set the play button for the currently playing song
const setPlayButton = (index) => {
  document.getElementById(index).classList.remove("fa-play");
  document.getElementById(index).classList.add("fa-pause");
};

// Play specific song
Array.from(document.getElementsByClassName("songItemPlay")).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    makeAllPlays();

    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  });
});

// When audio ends, reset play buttons
audioElement.addEventListener("ended", () => {
  masterPlay.classList.remove("fa-circle-pause");
  masterPlay.classList.add("fa-circle-play");
  gif.style.opacity = 0;
  makeAllPlays();
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});
