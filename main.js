document.addEventListener("DOMContentLoaded", function() {
    const createSnowflake = () => {
        const snowflake = document.createElement("i");
        snowflake.classList.add("fas", "fa-solid", "fa-snowflake"); // Use your Font Awesome classes
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
        document.querySelector('.snowflakes').appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000); // Removes snowflake after 5 seconds
    };

    setInterval(createSnowflake, 100); // Generates a snowflake every 100 milliseconds
});






function countdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1); // Next year's January 1st

    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');

    countdownElement.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${minutes}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
        
    `;
}

// Update the countdown every second
setInterval(countdown, 1000);

// Initial call to start the countdown immediately
countdown();

