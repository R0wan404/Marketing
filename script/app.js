const MYICONS = document.querySelectorAll(".galary-icons > *");
const BACK = document.querySelector(".back");
const FORWARD = document.querySelector(".forward");
const CONTENT = document.querySelectorAll(".cont");
const SPANS = document.querySelectorAll(".cont span");

function removeActive(items = new NodeList()) {
    items.forEach((e) => {
        e.classList.remove("active");
    });
}

MYICONS.forEach((e, i) => {
    e.addEventListener("click", () => {
        removeActive(MYICONS);
        removeActive(CONTENT);
        removeActive(SPANS);
        e.classList.add("active");
        CONTENT.item(i).classList.add("active");
        SPANS.item(i).classList.add("active");
    });
});

BACK.addEventListener("click", () => {
    let counter = 0;
    for (let i = 0; i < CONTENT.length; i++) {
        if (CONTENT[i].classList.contains("active")) {
            counter = i;
            break;
        }
    }
    if (counter === 0) {
        MYICONS[MYICONS.length - 1].click();
    } else {
        MYICONS[counter - 1].click();
    }
});
FORWARD.addEventListener("click", () => {
    let counter = 0;
    for (let i = 0; i < CONTENT.length; i++) {
        if (CONTENT[i].classList.contains("active")) {
            counter = i;
            break;
        }
    }
    if (counter === MYICONS.length - 1) {
        MYICONS[0].click();
    } else {
        MYICONS[counter + 1].click();
    }
});
