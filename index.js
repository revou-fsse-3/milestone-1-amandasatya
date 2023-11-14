//preloader typed
const type = new Typed('.motto', {
    strings: ['Hidup sehat dengan herbal'],
    typeSpeed: 70
})
// hamburgerMenu
const menuToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.nav1');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
// save preloader
if (preloader.style.display != 'none') {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        const content = document.querySelector('.navbro');
        const content2 = document.querySelector('.introWeb');

        preloader.style.display = "none";
        content.style.display = "block";
        content2.style.display = "block";
        localStorage.setItem('savedLog', 'true')
        console.log('savedLog')
    }, 4000)
    if (localStorage.getItem('savedLog') === 'true') {
        const preloader = document.getElementById("preloader");
        const content = document.querySelector('.navbro');
        const content2 = document.querySelector('.introWeb');

        preloader.style.display = "none";
        content.style.display = "block";
        content2.style.display = "block";
        // localStorage.setItem('savedLog', 'false');
    } else {
        setTimeout(() => {
            const preloader = document.getElementById("preloader");
            const content = document.querySelector('.navbro');
            const content2 = document.querySelector('.introWeb');

            preloader.style.display = "none";
            content.style.display = "block";
            content2.style.display = "block";
            localStorage.setItem('savedLog', 'true');
            console.log('savedLog');
        }, 4000);
    }

} else {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        const content = document.querySelector('.navbro');
        const content2 = document.querySelector('.introWeb');

        preloader.style.display = "none";
        content.style.display = "block";
        content2.style.display = "block";
        localStorage.setItem('savedLog', 'false')
        console.log('savedLog')
    }, 0)
}
//jquery
$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

let currentIndex = 0;

function scrollGrid(direction) {
    const gridContainer = document.getElementById('gridContainer');
    const itemsPerPage = 1;
    const itemWidth = 250;
    const gap = 10;

    currentIndex += direction * itemsPerPage;

    if (currentIndex < 0) {
        currentIndex = gridContainer.children.length - itemsPerPage;
    } else if (currentIndex > gridContainer.children.length - itemsPerPage) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * (itemWidth + gap);
    gridContainer.style.transform = `translateX(${translateValue}px)`;
}
function toggleIconsSide() {
    const iconsSide = document.querySelector(".iconsSide");
    const leftArrow = document.querySelector(".leftArrow");
    iconsSide.classList.toggle("show");
    leftArrow.classList.toggle("rotate");

}
function toggleSideIcon() {
    const sideContactGrid = document.querySelector(".sideContactGrid");
    sideContactGrid.classList.toggle("moveSide")
    console.log("tes");
}

const leftToogle = document.querySelector('.leftArrow');
const iconShow = document.querySelector('.iconsSide');
