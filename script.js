document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hero h1, .hero p, .btn");

    elements.forEach((el, index) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "all 1s ease-in-out";
        }, index * 300);
    });

    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your feedback! We will get in touch soon.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const mediaElements = document.querySelectorAll(".category img, .category video");

    function revealOnScroll() {
        mediaElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once when the page loads
});
function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent default jump behavior
    let target = document.getElementById(sectionId);

    if (target) {
        let headerHeight = document.querySelector("header").offsetHeight; // Get fixed header height
        let offsetPosition = target.offsetTop - headerHeight - 20; // Adjust position to avoid overshoot

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth" // Enables smooth scrolling
        });
    }
}
async function fetchNews() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/radve88/Saavyelegant-with-ticker/master/fonts/news.txt");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        const messages = text.split("\n").filter(line => line.trim() !== "");

        if (messages.length > 0) {
            let tickerHTML = messages.map(msg => `<div class="ticker__item">${msg}</div>`).join("");
            document.getElementById("news-content").innerHTML = tickerHTML;
        } else {
            document.getElementById("news-content").innerHTML = `<div class="ticker__item">Watch out for the latest stocks and promotions</div>`;
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();

