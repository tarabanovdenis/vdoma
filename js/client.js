
let teamMembers = document.querySelectorAll(".about__desc .link");

for (let i = 0; i < teamMembers.length; i++) {
    teamMembers[i].addEventListener('mouseover', function (e) {
        membersHover('', teamMembers[i], e)
    });
    teamMembers[i].addEventListener('mouseleave', function (e) {
        membersHover('leave', teamMembers[i], e)
    });
}


setTimeout(function () {
    document.getElementsByClassName('hero-pics')[0].classList.remove('hero-pics_start')
}, 5000)


function membersHover(action, node, e){
    let currHref,
        currNode;

    document.querySelectorAll('[data-member]')[0].classList.remove('hover');
    currHref = e.target.getAttribute('href').substring(1);
    currNode = document.querySelectorAll('[data-member="' + currHref + '"]');

    if (action === 'leave') {
        setTimeout(function () {
            currNode[0].parentElement.classList.remove('hover');
            currNode[0].parentNode.parentNode.parentNode.classList.remove('hover');
        }, 100)
    } else {
        setTimeout(function () {
            currNode[0].parentElement.classList.add('hover');
            currNode[0].parentNode.parentNode.parentNode.classList.add('hover');
        }, 100)
    }
}


document.getElementById('burger').addEventListener("click", function () {
    document.getElementsByTagName('body')[0].classList.add('burger_on');

    document.getElementsByTagName('nav')[0].addEventListener("click", function () {
        document.getElementsByTagName('body')[0].classList.remove('burger_on');
    });
});


// parallax\
document.addEventListener("mousemove", parallax);
const elem = document.querySelectorAll(".js-parallax");

function parallax(e) {
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    let moveX = (_mouseX - _h) / 100
    let moveY = (_mouseY - _w) / 100

    for (let i = 0; i < elem.length; i++) {
        // elem[i].style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
        // console.log(moveX * i);
        let coef = elem[i].getAttribute('data-parallax')
        elem[i].style.transform = 'translate(' + (moveX * coef) + 'px, ' + (moveY * coef) + 'px)';
    }

}
