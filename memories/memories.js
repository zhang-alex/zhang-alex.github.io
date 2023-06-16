const stories_2020 = [
    {
        url: "2020/1.jpg",
        date: "2020-06-15"
    },
    {
        url: "2020/2.mp4",
        date: "2020-05-15"
    }
]

const stories_2021 = [
    {
        url: "2021/1.jpg",
        date: "2021-06-15"
    },
    {
        url: "2021/2.mp4",
        date: "2021-05-15"
    }
]

const stories_2022 = [
    {
        url: "2022/1.jpg",
        date: "2022-06-15"
    },
    {
        url: "2022/2.mp4",
        date: "2022-05-15"
    }
]

const stories_2023 = [
    {
        url: "2023/1.jpg",
        date: "2023-06-15"
    },
    {
        url: "2023/2.mp4",
        date: "2023-05-15"
    }
]


const stories = [
    stories_2020,
    stories_2021,
    stories_2022,
    stories_2023,
]

// Function to open the modal with appropriate media
function openModal(url) {
    const extension = url.substring(url.lastIndexOf(".") + 1).toLowerCase();
    if (extension === "mp4") {
        mediaElement = document.createElement("video");
        mediaElement.src = url;
        mediaElement.controls = true;
    } else {
        mediaElement = document.createElement("img");
        mediaElement.src = url;
        mediaElement.alt = "Story media";
    }

    mediaContainer = document.getElementById("mediaContainer");
    mediaContainer.appendChild(mediaElement);

    media.style.display = "block";

    if (extension === "mp4") {
        mediaElement.play();
    }
}

function closeModal() {
    modal.style.display = "none";
    mediaElement.src = "";
}



document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("storyContainer");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeButton");
    const mediaElement = document.getElementById("media");

    stories.forEach((story) => {
        const storyIcon = document.createElement("div");
        storyIcon.setAttribute("id", "story");
        storyIcon.addEventListener("click", () => openModal(story.url));
        storyContainer.appendChild(storyIcon);
    });


    let currentIndex = 0;

    function updateStoryProgress() {
        const progressElement = document.getElementById("storyProgress");
        const dateElement = document.getElementById("storyDate");
        progressElement.textContent = `${currentIndex + 1}/${stories.length}`
        dateElement.textContent = stories[currentIndex].date;
    }

    function showNextMedia() {
        currentIndex++;
        if (currentIndex >= stories.length) {
            currentIndex = 0;
        }
        openModal(stories[currentIndex].url);
        updateStoryProgress();
    }

    function showPreviousMedia() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = stories.length - 1;
        }
    }

    openModal.addEventListener("click", handleModalClick);

    updateStoryProgress();
})

// var numChildren;
// var displayNum

// const displayPage() => {
//     // RETRIEVE IMAGE / VIDEO with displayNum - 1 index.
// }


// const advanceStory = () {
//     displayNum++;

//     displayPage();
// }


// const openStory = (year) => {
//     // show into view a modal that takes up the whole screen
//     // replace the center of the modal with the first image from the yera
//     displayNum = 1;
//     numChildren = document.querySelector('main').children.length;

//     MODAL.addEventListener("click", advanceStory);
// }
