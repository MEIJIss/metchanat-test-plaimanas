const track = document.getElementById("slidesTrack");

// clone เนื้อหาเดิมเพิ่มเข้าไปเรื่อยๆ
function fillSlides() {
  const contentWidth = track.scrollWidth;
  const containerWidth = track.parentElement.offsetWidth;

  while (track.scrollWidth < containerWidth * 2) {
    track.innerHTML += track.innerHTML;
  }
}

fillSlides();
