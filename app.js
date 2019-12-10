var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.title .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.title',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 5000
    });

var textWrapper = document.querySelector('.title2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.title2 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 3000,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.title2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
var textWrapper = document.querySelector('.part3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.part3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 4000,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.part3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
var textWrapper = document.querySelector('.header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.header .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 4000,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.part3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

var textWrapper = document.querySelector('.header2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.header2 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 4000,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.part3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });



