window.onscroll = function() { myFunction() };

var header = document.getElementById("header_header");
var sticky = header.offsetTop;
var isSticky = false;

function myFunction() {
    if (window.pageYOffset > sticky && !isSticky) {
        header.classList.add("sticky");
        setTimeout(function() {
            header.classList.add("sticky-visible");
        }, 100);
        isSticky = true;
    } else if (window.pageYOffset <= sticky && isSticky) {
        header.classList.remove("sticky-visible");
        setTimeout(function() {
            header.classList.remove("sticky");
        }, 200); 
        isSticky = false;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var boxSpan = document.querySelector(".icon_boxspan");

    boxSpan.addEventListener("click", function() {
        smoothScrollToTop(2000);
    });

    function smoothScrollToTop(duration) {
        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, ((now - startTime) / duration));
            var timeFunction = time * (2 - time);
            window.scrollTo(0, Math.ceil((timeFunction * (0 - start)) + start));

            if (window.pageYOffset === 0) {
                return;
            }

            requestAnimationFrame(scroll);
        }

        scroll();
    }
});