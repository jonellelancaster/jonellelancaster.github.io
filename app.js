(function () {

    setUpPage();

    function setUpPage() {
        addSliderEventListeners();
        addArticleEventListeners();
        addWindowEventListeners();
        addModalEventListeners();

    }

    //slider
    function addSliderEventListeners() {

        const sliderPrev = document.getElementById('slider-prev');
        const sliderNext = document.getElementById('slider-next');
        const sliderFrame = document.getElementById('slider-frame');
        const sliderCaption = document.getElementById('slider-caption');

        const slides =
            Array.from(sliderFrame.querySelectorAll('div[data-src]'))
                .map(div => {
                    return {
                        imageUrl: div.getAttribute('data-src'),
                        caption: div.textContent.trim(),
                    };
                });

        let sliderIndex = 0;
        displaySliderImage();

        function displaySliderImage() {
            let { imageUrl, caption } = slides[sliderIndex];
            sliderFrame.style.backgroundImage = `url('${imageUrl}')`;
            let count = `(${sliderIndex + 1}/${slides.length}) `;
            sliderCaption.innerHTML = count + caption;
            sliderCaption.classList.add('flash');
            setTimeout(() => {
                sliderCaption.classList.remove('flash');
            }, 0);
        }

        function displayPrevSliderImage() {
            sliderIndex--;
            if (sliderIndex < 0) {
                sliderIndex = slides.length - 1;
            }
            displaySliderImage();
        }

        function displayNextSliderImage() {
            sliderIndex++;
            if (sliderIndex === slides.length) {
                sliderIndex = 0;
            }
            displaySliderImage();
        }

        sliderPrev.addEventListener('click', displayPrevSliderImage);
        sliderNext.addEventListener('click', displayNextSliderImage);

        setInterval(function () {
            displayNextSliderImage();
        }, 3000);
    }
    //toggle
    function classToggle() {
        const navs = document.querySelector('.Navbar__Items')

        navs.classList.toggle('Navbar__ToggleShow');
    }

    document.querySelector('.Navbar__Link-toggle')
        .addEventListener('click', classToggle);


    //descript drop down
    function addArticleEventListeners() {

        const articles = document.querySelectorAll('#projects article');

        for (let article of articles) {
            let button = article.querySelector('button');

            button.addEventListener('click', function () {
                article.querySelector("p").classList.toggle('expanded');
                button.innerHTML = article.querySelector("p").classList.contains('expanded') ?
                    'Hide Details' : 'Show Details';
            });
        }
    }


    function addWindowEventListeners() {

        const windowResizeHandler = function () {

            const nav = document.querySelector('nav');
            nav.classList.remove('open');

            const articles = document.querySelectorAll('#projects article');

            for (let article of articles) {
                article.classList.remove('expanded');
            }
        };

        window.addEventListener('resize', windowResizeHandler);
    }
    // Modal can be opened
    function addModalEventListeners() {

        const modalTriggerElement = document.querySelector('#modal-trigger');

        const modalTriggerClickHandler = function () {
            document.querySelector("#backdrop").classList.add('open');
        };

        modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

        // Modal can be closed
        const modalCloseButton = document.querySelector('#modal button');

        const modalCloseButtonClickHandler = function () {
            document.querySelector("#backdrop").classList.remove('open');
        };

        modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
    }
})();
