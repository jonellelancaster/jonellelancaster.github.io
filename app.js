fadeInTitleOne();
displayName();





function fadeInTitleOne() {
    var textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: false
        })
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
            delay: 6000
        });

    var textWrapper = document.querySelector('.title2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: false
        })
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

    anime.timeline({
            loop: false
        })
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
    //google sleep or wait

}

function displayName() {
    var headerWrapper = document.querySelector('.header');
    headerWrapper.innerHTML = headerWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: false
        })
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

    var headerWrapper = document.querySelector('.header2');
    headerWrapper.innerHTML = headerWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: false
        })
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
};
//toggle
function classToggle() {
    const navs = document.querySelector('.Navbar__Items')

    navs.classList.toggle('.Navbar__ToggleShow');
}

document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);