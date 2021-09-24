// 150 loops covers the ipad screen in portrait mode
let loops = 300;

while (loops > 0) {
    loops = loops - 1;

    // build a div
    let newDiv = document.createElement('div');
    document.getElementById('box__container').appendChild(newDiv);

    // add class = box to new div
    let newClass = document.createAttribute('class');
    newClass.value = "box";
    newDiv.setAttributeNode(newClass);

    // call getRandomColor to set background color to new div
    newDiv.style.backgroundColor = getRandomColor();
}



// Function to build random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}









// soooo dodgy mangled bandaid slapped together Script... LOL

const box1 = document.getElementById("htmlheadtags");
box1.style.transform = "translateX(-50%)";
box1.style.transitionDuration = "1000ms";
box1.style.opacity = 0;
const callbackFunctionBOX1 = function (entries) {
    if (!entries[0].isIntersecting) { return; }
    observerBOX1.unobserve(box1);
    box1.style.transform = "translateX(0%)";
    box1.style.opacity = 1;
};
const observerBOX1 = new IntersectionObserver(callbackFunctionBOX1, {
    threshold: 0.4
});
observerBOX1.observe(box1);






const box2 = document.getElementById("framework2232");
box2.style.transform = "translateX(-50%)";
box2.style.transitionDuration = "1000ms";
box2.style.opacity = 0;
const callbackFunctionBOX2 = function (entries) {
    if (!entries[0].isIntersecting) { return; }
    observerBOX2.unobserve(box2);
    box2.style.transform = "translateX(0%)";
    box2.style.opacity = 1;
};
const observerBOX2 = new IntersectionObserver(callbackFunctionBOX2, {
    threshold: 0.4
});
observerBOX2.observe(box2);





const box3 = document.getElementById("ComingSoon");
box3.style.transform = "translateX(-50%)";
box3.style.transitionDuration = "1000ms";
box3.style.opacity = 0;

const callbackFunctionBOX3 = function (entries) {
    if (!entries[0].isIntersecting) { return; }
    observerBOX3.unobserve(box3);
    box3.style.transform = "translateX(0%)";
    box3.style.opacity = 1;
};
const observerBOX3 = new IntersectionObserver(callbackFunctionBOX3, {
    threshold: 0.4
});
observerBOX3.observe(box3);