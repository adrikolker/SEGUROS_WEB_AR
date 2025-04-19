document.addEventListener("DOMContentLoaded", () => {
    const transitionDiv = document.querySelector(".page-transition");

    function showTransition() {
        transitionDiv.classList.add("active");
        setTimeout(() => {
            transitionDiv.classList.remove("active");
        }, 1000);
    }

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showTransition();
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    });
});
