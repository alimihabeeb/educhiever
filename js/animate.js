// image transition function
var img = document.getElementsByTagName('img');
var ct = 0;
var changeimg = ['https://res.cloudinary.com/isocode/image/upload/v1634657055/educhiever_assests/jss-2_ngq7gz.jpg', 'https://res.cloudinary.com/isocode/image/upload/v1634657086/educhiever_assests/jss-3_snuzuv.jpg', 'https://res.cloudinary.com/isocode/image/upload/v1634657068/educhiever_assests/lib-1_kdyrrn.jpg', 'https://res.cloudinary.com/isocode/image/upload/v1634657096/educhiever_assests/Students-engaged-in-classroom-lesson-770x370_ustjk4.jpg', 'https://res.cloudinary.com/isocode/image/upload/v1634657089/educhiever_assests/jss-1_lmkc2f.jpg'];

function time() {
    img[0].src = changeimg[ct];
    ct++;
    if (ct >= changeimg.length) {
        ct = 0;
    }
}
setInterval(time, 5000);

// texttransition function
var h1 = document.getElementsByTagName('h1');


var i = 0;

var changeHeader = ['Our Mission', 'Vision', 'Achivement', 'Prospectus', h1[0].innerHTML];

function tme() {
    h1[0].innerHTML = changeHeader[i];
    i++;
    if (i >= changeHeader.length) {
        i = 0;
    }
}
setInterval(tme, 5000);
var article = document.getElementsByTagName('article');
var a = 0;
var changeArticle = [article[0].innerHTML, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tempora voluptate reprehenderit quisquam minus sit adipisci! Sapiente totam aspernatur', 'Our Vision is to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur amet optio, quos itaque quia fugiat quod deleniti eius eligendi temporibus facilis rem dolorem molestiae autem tempore dolorum excepturi quibusdam magni?', ' we won a standout award of the united ideleniti eius eligendi temporibus facilis rem dolorem molestiae autem tempore dolorum excepturi quibusdam magni?', ' dolor sit amet consectetur adipisicing elit. Sint tempora voluptate reprehenderit quisquam minus sit adipisci! Sapiente t excepturi quibusdam magni? dolor sit amet consectetur adipisicing elit. Sint tempora voluptate reprehenderit quisquam here'];

function art() {
    article[0].innerHTML = changeArticle[a];
    a++;
    if (a >= changeArticle.length) {
        a = 0;
    }
}
setInterval(art, 5000);





// Form for registration
function enrol() {
    let close = document.getElementById("close");
    let teen = document.getElementById("formHall");
    teen.style.display = "none";
    // console.log(teen);

    // // when user click on any part of the window the form dispaly is none
    window.onclick = function(event) {
        if (event.target == teen) {
            close.className = "cancel";
        }
    }
    document.getElementById("enrol_but").onclick = function() {
        teen.style.display = "flex";
    }
    document.getElementById("close").onclick = function() {
        teen.style.display = "none";
    }

}
enrol();



// ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}