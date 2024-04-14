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
        sidebar.style.left = "-300px";
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
    const videoThumbnails = document.querySelectorAll(".video-thumbnail");
    const sidebar = document.querySelector(".sidebar");

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the click event from bubbling up to the body

            // Handling video thumbnails
            const videoSrc = this.getAttribute("data-video-src");

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const popup = document.createElement("div");
            popup.classList.add("popup");

            const video = document.createElement("video");
            video.src = videoSrc;
            video.autoplay = true;
            video.controls = true;

            const likeIcon = document.createElement("i");
            likeIcon.classList.add("fas", "fa-thumbs-up", "icon", "like");
            likeIcon.style.fontSize = "35px"; // Adjust icon size
            likeIcon.style.color = "blue"; // Example styling

            const likeCount = document.createElement("span");
            likeCount.classList.add("like-count");
            likeCount.textContent = "2.4K"; // Set the like count

            const heartIcon = document.createElement("i");
            heartIcon.classList.add("fas", "fa-heart", "icon", "heart");
            heartIcon.style.fontSize = "35px"; // Adjust icon size
            heartIcon.style.color = "red"; // Example styling

            const heartCount = document.createElement("span");
            heartCount.classList.add("heart-count");
            heartCount.textContent = "891"; // Set the heart count

            const closeIcon = document.createElement("span");
            closeIcon.classList.add("close-icon");
            closeIcon.innerHTML = "&times;";
            closeIcon.addEventListener("click", function () {
                popup.classList.remove("show"); // Remove the "show" class to trigger the reverse animation
                setTimeout(() => {
                    popup.remove();
                    overlay.remove(); // Remove the overlay when the popup is closed
                    document.body.classList.remove("popup-open"); // Remove the class when the popup is closed
                    sidebar.style.pointerEvents = "auto"; // Re-enable pointer events on the sidebar
                    if (isMusicPlayingBeforePopup) {
                        resumeMusic();
                    }
                }, 500); // Wait for the animation duration before removing the elements
            });

            popup.appendChild(video);
            popup.appendChild(likeIcon);
            popup.appendChild(likeCount);
            popup.appendChild(heartIcon);
            popup.appendChild(heartCount);
            popup.appendChild(closeIcon);
            // Append the overlay and popup to the body
            document.body.appendChild(overlay);
            document.body.appendChild(popup);

            // Add class to body to darken background and trigger animation
            document.body.classList.add("popup-open");
            setTimeout(() => {
                popup.classList.add("show");
            }, 10); // Add a small delay to allow for the DOM to update before applying the animation

            // Disable pointer events on the sidebar while the popup is open
            sidebar.style.pointerEvents = "none";

            pauseMusic(); // Pause the music when video is played
        });
    });

    // Function to handle opening video popup when "Watch Video" button is clicked
    function openVideoPopup() {
        isMusicPlayingBeforePopup = !musicPlayer.paused; // Store the music state before opening the video popup
        pauseMusic(); // Pause the music when video is played
        const videoThumbnail = document.querySelector(".video-thumbnail");
        videoThumbnail.click(); // Trigger the click event on the video thumbnail
    }

    // Adding functionality to the "Watch Video" button
    const watchVideoButtons = document.querySelectorAll(".card-button");
    watchVideoButtons.forEach(button => {
        button.addEventListener("click", openVideoPopup);
    });

    // Check music state when the page loads
    isMusicPlayingBeforePopup = !musicPlayer.paused;

    // Constants for picture thumbnails

    const pictureThumbnails = document.querySelectorAll(".picture-thumbnail");

    pictureThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the click event from bubbling up to the body

            // Handling picture thumbnails
            const pictureSrc = this.getAttribute("data-pic-src");
            const likesCount = this.getAttribute("data-likes");
            const heartsCount = this.getAttribute("data-hearts");

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const popup = document.createElement("div");
            popup.classList.add("popup");

            const picture = document.createElement("img");
            picture.src = pictureSrc;

            const likeIcon = document.createElement("i");
            likeIcon.classList.add("fas", "fa-thumbs-up", "icon", "like");
            likeIcon.style.fontSize = "35px"; // Adjust icon size
            likeIcon.style.color = "blue"; // Example styling

            const likeCount = document.createElement("span");
            likeCount.classList.add("like-count");
            likeCount.textContent = likesCount; // Set the like count

            const heartIcon = document.createElement("i");
            heartIcon.classList.add("fas", "fa-heart", "icon", "heart");
            heartIcon.style.fontSize = "35px"; // Adjust icon size
            heartIcon.style.color = "red"; // Example styling

            const heartCount = document.createElement("span");
            heartCount.classList.add("heart-count");
            heartCount.textContent = heartsCount; // Set the heart count

            const closeIcon = document.createElement("span");
            closeIcon.classList.add("close-icon");
            closeIcon.innerHTML = "&times;";
            closeIcon.addEventListener("click", function () {
                popup.classList.remove("show"); // Remove the "show" class to trigger the reverse animation
                setTimeout(() => {
                    popup.remove();
                    overlay.remove(); // Remove the overlay when the popup is closed
                    document.body.classList.remove("popup-open"); // Remove the class when the popup is closed
                    sidebar.style.pointerEvents = "auto"; // Re-enable pointer events on the sidebar
                }, 500); // Wait for the animation duration before removing the elements
            });

            popup.appendChild(picture);
            popup.appendChild(likeIcon);
            popup.appendChild(likeCount);
            popup.appendChild(heartIcon);
            popup.appendChild(heartCount);
            popup.appendChild(closeIcon);
            // Append the overlay and popup to the body
            document.body.appendChild(overlay);
            document.body.appendChild(popup);

            // Add class to body to darken background and trigger animation
            document.body.classList.add("popup-open");
            setTimeout(() => {
                popup.classList.add("show");
            }, 10); // Add a small delay to allow for the DOM to update before applying the animation

            // Disable pointer events on the sidebar while the popup is open
            sidebar.style.pointerEvents = "none";

        });
    });

    // Function to open the picture popup when "View Picture" button is clicked
    function openPicturePopup() {
        const pictureThumbnail = this.parentElement.querySelector(".picture-thumbnail");
        pictureThumbnail.click(); // Trigger the click event on the picture thumbnail
    }

    // Adding functionality to the "View Picture" buttons
    const viewPictureButtons = document.querySelectorAll(".card-button1, .card-button2, .card-button3");
    viewPictureButtons.forEach(button => {
        button.addEventListener("click", openPicturePopup);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const videoThumbnails1 = document.querySelectorAll(".video-thumbnail1");
    const sidebar = document.querySelector(".sidebar");

    videoThumbnails1.forEach(thumbnail => {
        thumbnail.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the click event from bubbling up to the body

            // Handling video thumbnails
            const videoSrc1 = this.getAttribute("data-video1-src");

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const popup = document.createElement("div");
            popup.classList.add("popup");

            const video1 = document.createElement("video"); // Corrected element name from 'video1' to 'video'
            video1.src = videoSrc1;
            video1.autoplay = true;
            video1.controls = true;

            const likeIcon = document.createElement("i");
            likeIcon.classList.add("fas", "fa-thumbs-up", "icon", "like");
            likeIcon.style.fontSize = "35px"; // Adjust icon size
            likeIcon.style.color = "blue"; // Example styling

            const likeCount = document.createElement("span");
            likeCount.classList.add("like-count");
            likeCount.textContent = "1.1K"; // Set the like count

            const heartIcon = document.createElement("i");
            heartIcon.classList.add("fas", "fa-heart", "icon", "heart");
            heartIcon.style.fontSize = "35px"; // Adjust icon size
            heartIcon.style.color = "red"; // Example styling

            const heartCount = document.createElement("span");
            heartCount.classList.add("heart-count");
            heartCount.textContent = "10.2K"; // Set the heart count

            const closeIcon = document.createElement("span");
            closeIcon.classList.add("close-icon");
            closeIcon.innerHTML = "&times;";
            closeIcon.addEventListener("click", function () {
                popup.classList.remove("show"); // Remove the "show" class to trigger the reverse animation
                setTimeout(() => {
                    popup.remove();
                    overlay.remove(); // Remove the overlay when the popup is closed
                    document.body.classList.remove("popup-open"); // Remove the class when the popup is closed
                    sidebar.style.pointerEvents = "auto"; // Re-enable pointer events on the sidebar
                    if (isMusicPlayingBeforePopup) {
                        resumeMusic();
                    }
                }, 500); // Wait for the animation duration before removing the elements
            });

            popup.appendChild(video1);
            popup.appendChild(likeIcon);
            popup.appendChild(likeCount);
            popup.appendChild(heartIcon);
            popup.appendChild(heartCount);
            popup.appendChild(closeIcon);
            // Append the overlay and popup to the body
            document.body.appendChild(overlay);
            document.body.appendChild(popup);

            // Add class to body to darken background and trigger animation
            document.body.classList.add("popup-open");
            setTimeout(() => {
                popup.classList.add("show");
            }, 10); // Add a small delay to allow for the DOM to update before applying the animation

            // Disable pointer events on the sidebar while the popup is open
            sidebar.style.pointerEvents = "none";

            pauseMusic(); // Pause the music when video is played
        });
    });

    // Function to handle opening video popup when "Watch Video" button is clicked
    function openVideoPopup() {
        isMusicPlayingBeforePopup = !musicPlayer.paused; // Store the music state before opening the video popup
        pauseMusic(); // Pause the music when video is played
        const videoThumbnail1 = document.querySelector(".video-thumbnail1");
        videoThumbnail1.click(); // Trigger the click event on the video thumbnail
    }

    // Adding functionality to the "Watch Video" button
    const watchVideoButtons = document.querySelectorAll(".card-button4");
    watchVideoButtons.forEach(button => {
        button.addEventListener("click", openVideoPopup);
    });

    // Check music state when the page loads
    isMusicPlayingBeforePopup = !musicPlayer.paused;

    // Constants for picture thumbnails
    const pictureThumbnails1 = document.querySelectorAll(".picture-thumbnail1");

    pictureThumbnails1.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the click event from bubbling up to the body

            // Handling picture thumbnails
            const pictureSrc = this.getAttribute("data-pic1-src");
            const likesCount = this.getAttribute("data-likes");
            const heartsCount = this.getAttribute("data-hearts");

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const popup = document.createElement("div");
            popup.classList.add("popup");

            const picture = document.createElement("img");
            picture.src = pictureSrc;

            const likeIcon = document.createElement("i");
            likeIcon.classList.add("fas", "fa-thumbs-up", "icon", "like");
            likeIcon.style.fontSize = "35px"; // Adjust icon size
            likeIcon.style.color = "blue"; // Example styling

            const likeCount = document.createElement("span");
            likeCount.classList.add("like-count");
            likeCount.textContent = likesCount; // Set the like count

            const heartIcon = document.createElement("i");
            heartIcon.classList.add("fas", "fa-heart", "icon", "heart");
            heartIcon.style.fontSize = "35px"; // Adjust icon size
            heartIcon.style.color = "red"; // Example styling

            const heartCount = document.createElement("span");
            heartCount.classList.add("heart-count");
            heartCount.textContent = heartsCount; // Set the heart count

            const closeIcon = document.createElement("span");
            closeIcon.classList.add("close-icon");
            closeIcon.innerHTML = "&times;";
            closeIcon.addEventListener("click", function () {
                popup.classList.remove("show"); // Remove the "show" class to trigger the reverse animation
                setTimeout(() => {
                    popup.remove();
                    overlay.remove(); // Remove the overlay when the popup is closed
                    document.body.classList.remove("popup-open"); // Remove the class when the popup is closed
                    sidebar.style.pointerEvents = "auto"; // Re-enable pointer events on the sidebar
                }, 500); // Wait for the animation duration before removing the elements
            });

            // Button to change picture
            const changePictureButton = document.createElement("button");
            changePictureButton.textContent = "Next";
            changePictureButton.style.width = "90px";
            changePictureButton.style.borderRadius = "15px";
            changePictureButton.style.height = "30px";
            changePictureButton.style.color = "var(--blue)";
            changePictureButton.style.border = "2px white solid";
            changePictureButton.style.cursor = "pointer";
            changePictureButton.addEventListener("click", function () {
                getNextPicture(picture, index);
            });

            popup.appendChild(picture);
            popup.appendChild(likeIcon);
            popup.appendChild(likeCount);
            popup.appendChild(heartIcon);
            popup.appendChild(heartCount);
            popup.appendChild(closeIcon);
            popup.appendChild(changePictureButton);
            // Append the overlay and popup to the body
            document.body.appendChild(overlay);
            document.body.appendChild(popup);

            // Add class to body to darken background and trigger animation
            document.body.classList.add("popup-open");
            setTimeout(() => {
                popup.classList.add("show");
            }, 10); // Add a small delay to allow for the DOM to update before applying the animation

            // Disable pointer events on the sidebar while the popup is open
            sidebar.style.pointerEvents = "none";
        });
    });

    // Function to open the picture popup when "View Picture" button is clicked for cards 5 to 7
    function openPicturePopup1() {
        const pictureThumbnails1 = this.parentElement.querySelector(".picture-thumbnail1");
        pictureThumbnails1.click(); // Trigger the click event on the picture thumbnail
    }

    // Adding functionality to the "View Picture" buttons for cards 5 to 7
    const viewPictureButtons1 = document.querySelectorAll(".card-button5, .card-button6, .card-button7");
    viewPictureButtons1.forEach(button => {
        button.addEventListener("click", openPicturePopup1);
    });

    // Object of picture sources for each card
    const pictureSources = {
        card1: ["IMG20240325164658.jpg", "IMG20240325164354.jpg", "IMG20240401160522.jpg"],
        card2: ["IMG20240401142756.jpg", "IMG20240401145242.jpg", "IMG20240325165447.jpg"],
        card3: ["IMG20240331175457.jpg", "IMG20240331175215.jpg", "IMG20240331144515.jpg", "IMG20240331180824.jpg"]
    };

    // Variables to keep track of the current picture index for each card
    const currentPictureIndexes = {
        card1: 0,
        card2: 0,
        card3: 0
    };

    // Function to change to the next picture for a specific card
    function getNextPicture(pictureElement, cardIndex) {
        currentPictureIndexes[`card${cardIndex + 1}`] = (currentPictureIndexes[`card${cardIndex + 1}`] + 1) % pictureSources[`card${cardIndex + 1}`].length;
        const currentPicture = pictureSources[`card${cardIndex + 1}`][currentPictureIndexes[`card${cardIndex + 1}`]];
        pictureElement.src = currentPicture;
    }
});
