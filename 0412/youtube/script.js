document.getElementById("doplay").addEventListener("click", function () {
  if (this.textContent === "再生") {
    this.textContent = "一時停止";
    player.playVideo(); // 動画を再生
    this.style.backgroundColor = "red";
  } else {
    this.textContent = "再生";
    player.pauseVideo(); // 動画を一時停止
    this.style.backgroundColor = "";
  }
});
document.getElementById("mute").addEventListener("click", function () {
  const img = this.querySelector("img");
  if (img.src.includes("unmute.png")) {
    img.src = "./mute.png"; // ミュートアイコンに切り替え
  } else {
    img.src = "./unmute.png"; // ミュート解除アイコンに切り替え
  }
});
