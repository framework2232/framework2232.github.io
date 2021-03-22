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





const box2 = document.getElementById("FridayGambit");
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