
/* ================================= */
/* PAGE NAVIGATION */
/* ================================= */

const pages =
    document.querySelectorAll(".page");


const proceedButtons =
    document.querySelectorAll(
        ".proceed-button"
    );


function showPage(pageId) {

    /* Hide every page */

    pages.forEach((page) => {

        page.classList.remove(
            "active"
        );

    });


    /* Find next page */

    const nextPage =
        document.getElementById(
            pageId
        );


    if (!nextPage) {

        console.error(
            "Page not found:",
            pageId
        );

        return;

    }


    /* Show next page */

    nextPage.classList.add(
        "active"
    );


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================================= */
/* PROCEED BUTTONS */
/* ================================= */

proceedButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const nextPage =
                    button.getAttribute(
                        "data-next"
                    );


                showPage(
                    nextPage
                );

            }
        );

    }
);



/* ================================= */
/* RESTART BUTTON */
/* ================================= */

const restartButton =
    document.getElementById(
        "restartButton"
    );


if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            showPage("page1");

        }
    );

}



/* ================================= */
/* FLOATING LEAVES */
/* ================================= */

const leavesContainer =
    document.getElementById(
        "leaves"
    );


const leafSymbols = [
    "🍃",
    "🌿",
    "🍂"
];


function createLeaf() {

    const leaf =
        document.createElement(
            "div"
        );


    leaf.className =
        "floating-leaf";


    /* Random leaf */

    leaf.textContent =
        leafSymbols[
            Math.floor(
                Math.random() *
                leafSymbols.length
            )
        ];


    /* Random position */

    leaf.style.left =
        Math.random() * 100 + "%";


    /* Random size */

    const size =
        14 +
        Math.random() * 18;


    leaf.style.fontSize =
        size + "px";


    /* Random speed */

    const duration =
        7 +
        Math.random() * 8;


    leaf.style.animationDuration =
        duration + "s";


    /* Random transparency */

    leaf.style.opacity =
        0.25 +
        Math.random() * 0.4;


    leavesContainer.appendChild(
        leaf
    );


    /* Remove leaf after falling */

    setTimeout(
        () => {

            leaf.remove();

        },
        duration * 1000
    );

}


/* Create initial leaves */

for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createLeaf,
        i * 400
    );

}


/* Continue creating leaves */

setInterval(
    createLeaf,
    1200
);
