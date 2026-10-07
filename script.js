
const intro = document.getElementById("intro");
const nightSky = document.getElementById("night-sky");
const continueButton = document.getElementById("continue-button");

const starsContainer = document.getElementById("stars");
const skyMessage = document.getElementById("sky-message");

const memoryCard = document.getElementById("memory-card");
const memoryText = document.getElementById("memory-text");
const memoryLabel = document.getElementById("memory-label");
const memoryProgress = document.getElementById("memory-progress");
const closeCard = document.getElementById("close-card");

// Music
const musicPlayer = document.getElementById("music-player");
const playButton = document.getElementById("play-button");

const memoryAudio = new Audio(
    "assets/audio/audio.mp3"
);

memoryAudio.preload = "metadata";

// Final star / reveal
const finalStar = document.getElementById("final-star");
const finalReveal = document.getElementById("final-reveal");

const discoveredStars = new Set();
const TOTAL_SPECIAL_STARS = 5;

let finalStarRevealed = false;
let finalRevealStarted = false;


// --------------------------------------------------
// STAR CONTENT
// --------------------------------------------------

const memories = [
    {
        label: "a truth and a lie",
        message: "You’re a navigation expert. You speak from the heart."
    },
    {
        label: "something I noticed",
        message: "Even though we've had different experiences in life, I've realized we have a lot more in common than I expected."
    },
    {
        label: "one of my favourites",
        message: "Talking to you somehow makes an ordinary night feel special."
    },
    {
        label: "something I wanted you to hear",
        message: "Some things are easier to say with a song."
    },
    {
        label: "something more",
        message: "I really admire the way you think and the way you carry yourself. And I hope you never lose that little inner child in you."
    }
];


// --------------------------------------------------
// MEMORY CARD
// --------------------------------------------------

function showMemory(memory, index, star) {

    discoveredStars.add(index);

    star.classList.add("discovered");

    memoryLabel.textContent = memory.label;
    memoryText.textContent = memory.message;

    memoryProgress.textContent =
        `${discoveredStars.size} of ${TOTAL_SPECIAL_STARS} stars found`;

    // Star 4 = music star
    if (index === 3) {
        musicPlayer.classList.add("visible");
    } else {
        musicPlayer.classList.remove("visible");
        stopMusic();
    }

    memoryCard.classList.add("visible");
}


function hideMemory() {

    stopMusic();

    musicPlayer.classList.remove("visible");

    memoryCard.classList.remove("visible");

    // Only reveal the final star after all five
    // special stars have been discovered.
    if (discoveredStars.size === TOTAL_SPECIAL_STARS) {
        revealFinalStar();
    }
}


closeCard.addEventListener("click", hideMemory);


// --------------------------------------------------
// MUSIC
// --------------------------------------------------

playButton.addEventListener("click", () => {

    if (memoryAudio.paused) {

        memoryAudio.play();

        playButton.textContent = "Ⅱ";

    } else {

        memoryAudio.pause();

        playButton.textContent = "▶";
    }
});


function stopMusic() {

    memoryAudio.pause();

    memoryAudio.currentTime = 0;

    playButton.textContent = "▶";
}


memoryAudio.addEventListener("ended", () => {

    playButton.textContent = "▶";

});


// --------------------------------------------------
// REVEAL FINAL / 6TH STAR
// --------------------------------------------------

function revealFinalStar() {

    if (finalStarRevealed) return;

    finalStarRevealed = true;

    // Small pause after closing the fifth memory.
    setTimeout(() => {

        const allStars = document.querySelectorAll(".star");

        allStars.forEach(star => {

            star.style.transition = "opacity 3s ease";

            star.style.opacity = "0.18";

        });


        const moon = document.querySelector(".moon");

        moon.style.transition = "opacity 3s ease";

        moon.style.opacity = "0.3";


        // After the existing sky fades,
        // reveal the sixth star.
        setTimeout(() => {

            finalStar.classList.add("visible");

        }, 2500);

    }, 1000);
}


finalStar.addEventListener("click", beginFinalReveal);


// --------------------------------------------------
// FINAL REVEAL
// --------------------------------------------------

function beginFinalReveal() {

    if (finalRevealStarted) return;

    finalRevealStarted = true;

    // Hide the sixth star.
    finalStar.classList.remove("visible");


    // Give the star time to fade away.
    setTimeout(() => {

        finalReveal.classList.add("visible");

        playFinalMessage();

    }, 1800);
}


// --------------------------------------------------
// FINAL MESSAGE SEQUENCE
// --------------------------------------------------

function playFinalMessage() {

    const lines = [
        document.getElementById("final-line-1"),
        document.getElementById("final-line-2"),
        document.getElementById("final-line-3"),
        document.getElementById("final-line-4"),
        document.getElementById("final-line-5"),
        document.getElementById("final-line-6"),
        document.getElementById("final-line-7")
    ];


    // Reveal each line one by one.
    lines.forEach((line, index) => {

        setTimeout(() => {

            line.classList.add("visible");

        }, 1000 + index * 2200);

    });


    // Final emotional line.
    const ending = document.getElementById("final-ending");

    const endingTime =
        1000 + lines.length * 2200;


    setTimeout(() => {

        ending.classList.add("visible");

    }, endingTime);


    // --------------------------------------------------
    // MOON BRIGHTENS AGAIN
    // --------------------------------------------------

    const moon = document.querySelector(".moon");

    setTimeout(() => {

        moon.style.transition = "opacity 4s ease";

        moon.style.opacity = "0.65";

    }, endingTime + 1000);


    // --------------------------------------------------
    // GOODNIGHT
    // --------------------------------------------------

    const goodnight = document.getElementById("goodnight");

    setTimeout(() => {

        goodnight.classList.add("visible");

    }, endingTime + 5000);
}


// --------------------------------------------------
// CREATE BACKGROUND STARS
// --------------------------------------------------

function createStars() {

    const numberOfStars = 45;


    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("div");

        star.classList.add("star");


        const x = Math.random() * 100;
        const y = Math.random() * 100;


        star.style.left = `${x}%`;
        star.style.top = `${y}%`;


        const size =
            Math.random() * 2.5 + 1.5;


        star.style.width = `${size}px`;
        star.style.height = `${size}px`;


        const opacity =
            Math.random() * 0.5 + 0.4;


        star.style.setProperty(
            "--star-opacity",
            opacity
        );


        const duration =
            Math.random() * 3 + 2;


        star.style.setProperty(
            "--twinkle-duration",
            `${duration}s`
        );


        const delay =
            Math.random() * 4;


        star.style.setProperty(
            "--twinkle-delay",
            `${delay}s`
        );


        star.classList.add("twinkle");

        starsContainer.appendChild(star);


        setTimeout(() => {

            star.classList.add("visible");

        }, 300 + i * 60);

    }


    createSpecialStars();
}


// --------------------------------------------------
// CREATE FIVE SPECIAL STARS
// --------------------------------------------------

function createSpecialStars() {

    const positions = [
        { x: 18, y: 28 },
        { x: 34, y: 65 },
        { x: 55, y: 25 },
        { x: 72, y: 48 },
        { x: 82, y: 75 }
    ];


    positions.forEach((position, index) => {

        const star = document.createElement("div");

        star.classList.add(
            "star",
            "special",
            "twinkle"
        );


        star.style.left = `${position.x}%`;
        star.style.top = `${position.y}%`;


        star.style.setProperty(
            "--star-opacity",
            "1"
        );


        star.style.setProperty(
            "--twinkle-duration",
            "3s"
        );


        star.style.setProperty(
            "--twinkle-delay",
            `${index * 0.4}s`
        );


        starsContainer.appendChild(star);


        // Stagger their appearance.
        setTimeout(() => {

            star.classList.add("visible");

        }, 2500 + index * 400);


        // Clicking the star opens its memory.
        star.addEventListener("click", () => {

            showMemory(
                memories[index],
                index,
                star
            );

        });

    });
}


// --------------------------------------------------
// INTRO → NIGHT SKY
// --------------------------------------------------

continueButton.addEventListener("click", () => {

    continueButton.disabled = true;


    // Fade out intro.
    intro.style.opacity = "0";


    setTimeout(() => {

        intro.style.display = "none";


        // Show night sky.
        nightSky.classList.add("visible");


        // Generate stars.
        createStars();


        // Hide introductory sky message.
        setTimeout(() => {

            skyMessage.classList.add("hide");

        }, 6000);

    }, 1500);

});

