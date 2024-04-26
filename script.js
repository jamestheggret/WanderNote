// Real Time
function updateDateTime() {
    var now = new Date();
    var datetime = now.toLocaleString();
    document.getElementById("datetime").innerHTML = datetime;
}

// Call the function initially and set interval to update every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Sidebar
var sidebarOpen = false;

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var sidebarbutton = document.querySelector(".sidebarbutton");

    if (!sidebarOpen) {
        sidebar.style.left = "40px";
        sidebarbutton.style.backgroundColor = "#1a1a1a";
        sidebarbutton.style.color = "white";
        sidebarbutton.textContent = "<";
        sidebarOpen = true;
    } else {
        sidebar.style.left = "-500px";
        sidebarbutton.style.backgroundColor = "#e8e4d8";
        sidebarbutton.style.color = "black";
        sidebarbutton.textContent = "☰";
        sidebarOpen = false;
    }
}
// Sidebar Closed//
function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var sidebarbutton = document.querySelector(".sidebarbutton");

    sidebar.style.left = "-300px";
    sidebarbutton.style.backgroundColor = "#e8e4d8";
    sidebarbutton.style.color = "black";
    sidebarbutton.textContent = "☰";
    sidebarOpen = false;
}
/*Fixed Header*/
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.fixed-header');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            header.style.top = "-120px"; // Hides header when scrolling down
        } else {
            header.style.top = "-120px"; // Shows header when scrolling up
        }
        lastScrollTop = currentScroll;
    });
});
//Music Play

var musicPlayer = document.getElementById('musicPlayer');
var isMusicPlayingBeforePopup = false;

// Function to toggle music playback
function toggleMusic() {
    if (musicPlayer.paused) {
        musicPlayer.play();
    } else {
        musicPlayer.pause();
    }
}

// Function to pause the music
function pauseMusic() {
    if (!musicPlayer.paused) {
        musicPlayer.pause();
    }
}

// Function to resume the music
function resumeMusic() {
    if (isMusicPlayingBeforePopup) {
        musicPlayer.play();
    }
}
/*Traveling*/
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.getElementById("videoPopup");
    const playBtn = document.querySelector(".play-btn");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");
    const myVideo = document.getElementById("myVideo");
    let isMusicPlayingBeforePopup = false;

    playBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the body
        toggleVideoPopup();
        pauseMusic(); // Pause the music when the video is played
    });

    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the body
        toggleVideoPopup();
        pauseVideo(); // Pause the video when the close button is clicked
        resumeMusic(); // Resume the music when the video popup is closed
    });

    // Function to toggle the video popup
    function toggleVideoPopup() {
        if (videoPopup.classList.contains("show")) {
            videoPopup.classList.remove("show"); // Remove the "show" class to trigger the reverse animation
            setTimeout(() => {
                videoPopup.style.display = "none"; // Hide the video popup after animation
                document.body.classList.remove("popup-open"); // Remove the class when the popup is closed
                sidebar.style.pointerEvents = "auto"; // Re-enable pointer events on the sidebar
            }, 500); // Wait for the animation duration before removing the elements
        } else {
            videoPopup.classList.add("show"); // Add the "show" class to trigger the animation
            videoPopup.style.display = "block"; // Show the video popup before animation
            document.body.classList.add("popup-open"); // Add class to body to darken background and trigger animation
            sidebar.style.pointerEvents = "none"; // Disable pointer events on the sidebar while the popup is open
            playMusic(); // Start playing the music when video popup is opened
            myVideo.currentTime = 0; // Set the video playback position to the beginning
            myVideo.play(); // Start playing the video from the beginning
        }
    }

    // Function to pause the music
    function pauseMusic() {
        if (!musicPlayer.paused) {
            isMusicPlayingBeforePopup = true; // Store the music state before opening the video popup
            musicPlayer.pause();
        }
    }

    // Function to resume the music
    function resumeMusic() {
        if (isMusicPlayingBeforePopup) {
            musicPlayer.play();
        }
    }

    // Function to pause the video
    function pauseVideo() {
        myVideo.pause();
    }

    // Function to start playing the music
    function playMusic() {
        // Your logic to play the music goes here
        // Example:
        // musicPlayer.play();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const videoPopup1 = document.getElementById("videoPopup1");
    const playBtn = document.querySelector(".play-btn1");
    const closeBtn = document.querySelector(".close-btn1");
    const sidebar = document.querySelector(".sidebar");
    const myVideo1 = document.getElementById("myVideo1");
    let isMusicPlayingBeforePopup = false;

    playBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the body
        toggleVideoPopup1();
        pauseMusic(); // Pause the music when the video is played
    });

    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the body
        toggleVideoPopup1();
        pauseVideo(); // Pause the video when the close button is clicked
        resumeMusic(); // Resume the music when the video popup is closed
    });

    // Function to toggle the video popup
    function toggleVideoPopup1() {
        if (videoPopup1.classList.contains("show")) {
            videoPopup1.classList.remove("show"); // Remove the "show" class to trigger the reverse animation
            setTimeout(() => {
                videoPopup1.style.display = "none"; // Hide the video popup after animation
                document.body.classList.remove("popup-open"); // Remove the class when the popup is closed
                sidebar.style.pointerEvents = "auto"; // Re-enable pointer events on the sidebar
            }, 500); // Wait for the animation duration before removing the elements
        } else {
            videoPopup1.classList.add("show"); // Add the "show" class to trigger the animation
            videoPopup1.style.display = "block"; // Show the video popup before animation
            document.body.classList.add("popup-open"); // Add class to body to darken background and trigger animation
            sidebar.style.pointerEvents = "none"; // Disable pointer events on the sidebar while the popup is open
            playMusic(); // Start playing the music when video popup is opened
            myVideo1.currentTime = 0; // Set the video playback position to the beginning
            myVideo1.play(); // Start playing the video from the beginning
        }
    }

    // Function to pause the music
    function pauseMusic() {
        if (!musicPlayer.paused) {
            isMusicPlayingBeforePopup = true; // Store the music state before opening the video popup
            musicPlayer.pause();
        }
    }

    // Function to resume the music
    function resumeMusic() {
        if (isMusicPlayingBeforePopup) {
            musicPlayer.play();
        }
    }

    // Function to pause the video
    function pauseVideo() {
        myVideo1.pause();
    }

    // Function to start playing the music
    function playMusic() {
        // Your logic to play the music goes here
        // Example:
        // musicPlayer.play();
    }
});


