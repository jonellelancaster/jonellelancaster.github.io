(function () {

    setUpPage();

    function setUpPage() {

        addArticleEventListeners();
        addWindowEventListeners();
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


});
