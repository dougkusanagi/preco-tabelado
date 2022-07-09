import html2canvas from "html2canvas";

const elementsNotPrintable = [
  {
    el: "#buttonSaveTablePriceAsImage",
    display: 'flex'

  },
  {
    el: "#formAddTablePriceLine",
    display: 'flex'
  }
];

function hideElements(elementsArray, elementFrom) {
  elementsArray.forEach(element => {
    elementFrom.querySelector(element.el).style.display = "none"
  });
}

function displayElements(elementsArray, elementFrom) {
  elementsArray.forEach(element => {
    elementFrom.querySelector(element.el).style.display = element.display
  });
}

const exportAsImage = async (imageFileName) => {
  const element = document.body;
  
  hideElements(elementsNotPrintable, element);

  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png", 1.0);

  downloadImage(image, imageFileName, () => {
    displayElements(elementsNotPrintable, element);
  });
};

const downloadImage = (blob, fileName, callback) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;
  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
  
  callback();
};

export default exportAsImage;
