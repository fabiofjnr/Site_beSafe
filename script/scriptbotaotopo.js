document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");

    scrollToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();

        scrollToTopBtn.classList.add("clicked");

        setTimeout(() => {
            scrollToTopBtn.classList.remove("clicked");
        }, 300);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    scrollToTopBtn.addEventListener("touchstart", function () {
        scrollToTopBtn.classList.add("clicked");
    });

    scrollToTopBtn.addEventListener("touchend", function () {
        setTimeout(() => {
            scrollToTopBtn.classList.remove("clicked");
        }, 300);
    });
});