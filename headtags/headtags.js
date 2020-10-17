
const resultName = document.getElementById("resultName");
const resultURL = document.getElementById("resultURL");
const resultDescription = document.getElementById("resultDescription");
const meta = document.getElementById("metaDataBoilerPlate");


function build() {    

    if (siteName.value === "" || siteName.value == null) {        
        document.getElementById("siteName").style.borderColor="red";
        resultName.innerText = "Website Page Title";
    }    
    if (siteName.value != "") {
        document.getElementById("siteName").style.borderColor="green";
        resultName.innerText = siteName.value;
    }


    if (siteURL.value === "" || siteURL.value == null) {
        document.getElementById("siteURL").style.borderColor="red";
        resultURL.innerText = "www.yourURLhere.com";
    }       
    if (siteURL.value != "") {
        document.getElementById("siteURL").style.borderColor="green";
        resultURL.innerText = siteURL.value;
    }


    if (siteDescription.value === "" || siteDescription.value == null) {
        document.getElementById("siteDescription").style.borderColor="red";
        resultDescription.innerText = "Website Page Description goes here. Recommended between 50 - 150 characters long";
    }       
    if (siteDescription.value != "") {
        document.getElementById("siteDescription").style.borderColor="green";
        resultDescription.innerText = siteDescription.value;
    }         

    if (siteDescription.value.length > 150){
    resultDescription.innerText = siteDescription.value + "...";
    }    
    
    meta.setAttribute('style', 'white-space: pre;');
    meta.textContent = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>'+siteName.value+'</title>\n\t<meta name="robots" content="index, follow">\n\t<meta name="description" content="'+siteDescription.value+'">\n\t<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">\n\t<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">\n\t<link rel="canonical" href="'+siteURL.value+'">\n\t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n\t<link rel="stylesheet" href="css/style.css" type="text/css"></link>\n\t<link rel="manifest" href="manifest.json">\n\t<link rel="icon" type="image/x-icon" href="favicon.ico">\n\t<link rel="icon" type="image/png" href="favicon.png">\n</head>\n<body>\n\n\n</body>\n</html>'    
} 


function clearAll() {    
    siteName.value === "";
    document.getElementById("siteName").style.borderColor="grey";
    resultName.innerText = "Website Page Title";
    document.getElementById("siteName").value="";

    siteURL.value === "";
    document.getElementById("siteURL").style.borderColor="grey";
    resultURL.innerText = "www.yourURLhere.com";
    document.getElementById("siteURL").value="";

    siteDescription.value === "";
    document.getElementById("siteDescription").style.borderColor="grey";
    resultDescription.innerText = "Website Page Description goes here. Recommended between 50 - 150 characters long";
    document.getElementById("siteDescription").value="";
    meta.textContent = "";
}