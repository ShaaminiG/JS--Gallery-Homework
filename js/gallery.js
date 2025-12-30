function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("ALT:", previewPic.alt);
  console.log("SRC:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;
}

function unDo() {
  console.log("unDo triggered");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
}
