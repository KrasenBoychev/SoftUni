function extractFile(str) {
    let splitStr = str.split(`\\`);
    let fileName = splitStr[splitStr.length - 1];
    let index = fileName.lastIndexOf(`.`);
    let name = fileName.slice(0, index);
    let extension = fileName.slice(index + 1);
    console.log(`File name:`, name);
    console.log(`File extension:`, extension);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');