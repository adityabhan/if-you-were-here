const intro = document.getElementById("intro");
const nightSky = document.getElementById("night-sky");
const continueButton = document.getElementById("continue-button");
const starsContainer = document.getElementById("stars");
const skyMessage = document.getElementById("sky-message");


// ========================================
// STAR CREATION
// ========================================

function createStars() {

    const numberOfStars = 45;

    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("div");

        star.classList.add("star");


        // Position

        const x = Math.random() * 100;
        const y = Math.random() * 100;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;


        // Size

        const size = Math.random() * 2.5 + 1.5;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;


        // Brightness

        const opacity = Math.random() * 0.5 + 0.4;

        star.style.setProperty(
            "--star-opacity",
            opacity
        );


        // Twinkle

        const duration = Math.random() * 3 + 2;

        star.style.setProperty(
            "--twinkle-duration",
            `${duration}s`
        );


        const delay = Math.random() * 4;

        star.style.setProperty(
            "--twinkle-delay",
            `${delay}s`
        );

        star.classList.add("twinkle");


        // Add star

        starsContainer.appendChild(star);


        // Stagger appearance

        setTimeout(() => {

            star.classList.add("visible");

        }, 300 + i * 60);

    }

}


// ========================================
// START NIGHT SKY
// ========================================

continueButton.addEventListener("click", () => {

    continueButton.disabled = true;


    // Fade out intro

    intro.style.opacity = "0";


    // Wait for intro fade

    setTimeout(() => {

        intro.style.display = "none";


        // Show night sky

        nightSky.classList.add("visible");


        // Create stars

        createStars();


        // =================================
        // SHOW MESSAGE
        // =================================

        // Message is visible now.
        // Wait 3.5 seconds before fading it out.

        setTimeout(() => {

            skyMessage.classList.add("hide");

        }, 5000);


    }, 1500);

});