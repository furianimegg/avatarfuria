const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-preview");
const frame = document.getElementById("frame");
const saveButton = document.getElementById("save-button");

function saveImage(blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "imagem-com-moldura.png";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

imageInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function () {
    imagePreview.src = reader.result;
  };
  reader.readAsDataURL(imageInput.files[0]);
});

saveButton.addEventListener("click", function () {
  const canvas = document.createElement("canvas");
  canvas.width = imagePreview.width;
  canvas.height = imagePreview.height;
  const context = canvas.getContext("2d");
  context.drawImage(imagePreview, 0, 0);
  context.drawImage(frame, 0, 0);
  const blob = canvas.toDataURL("image/png");
  saveImage(blob);
});
