const commentsArr = [
  {
    name: "Victor Pinto",
    timestamp: Date.parse("11/02/2023"),
    txt: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    timestamp: Date.parse("10/28/2023"),
    txt: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    timestamp: Date.parse("10/20/2023"),
    txt: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const userName = document.querySelector(".comment__input");
const commentText = document.querySelector(".comment__txt-area");

userName.addEventListener("click", () => {
  userName.classList.add("comment__input--active");
  userName.classList.remove("comment__input--error");
});

commentText.addEventListener("click", () => {
  commentText.classList.add("comment__txt-area--active");
  userName.classList.remove("comment__txt-area--error");
});

const displayComments = () => {
  const commentSection = document.querySelector(".comment__bottom");

  commentsArr.forEach((comment) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment__bottom-container");
    commentSection.appendChild(commentContainer);

    const leftSection = document.createElement("div");
    leftSection.classList.add("comment__bottom-left");
    commentContainer.appendChild(leftSection);

    const avatar = document.createElement("div");
    avatar.classList.add("comment__bottom-avatar");
    leftSection.appendChild(avatar);

    const rightSection = document.createElement("div");
    rightSection.classList.add("comment__bottom-right");
    commentContainer.appendChild(rightSection);

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("comment__bottom-right-container");
    rightSection.appendChild(rightContainer);

    const name = document.createElement("h3");
    name.classList.add("comment__name");
    rightContainer.appendChild(name);
    name.innerText = comment.name;

    const date = document.createElement("p");
    date.classList.add("comment__date");
    rightContainer.appendChild(date);
    date.innerText = timeSince(comment.timestamp);

    const txt = document.createElement("p");
    txt.classList.add("comment__text");
    rightSection.appendChild(txt);
    txt.innerHTML = comment.txt;
  });
};

window.onload = () => {
  displayComments();
};

const form = document.querySelector(".comment__form");
form.addEventListener("submit", (commentObj) => {
  commentObj.preventDefault();
  let newComment = {};
  newComment.name = commentObj.target.name.value;
  newComment.timestamp = Date.now();
  newComment.txt = commentObj.target.comment.value;

  validateInput(newComment);
  resetInputs();
  clearComments();
  displayComments();
});

const resetInputs = () => {
  userName.value = "";
  commentText.value = "";
};

//got this fuction from StackOverflow. Changed it a bit to to fit the layout of the project
const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
};

const clearComments = () => {
  const commentSection = document.querySelector(".comment__bottom");
  while (commentSection.firstChild) {
    commentSection.removeChild(commentSection.lastChild);
  }
};

const validateInput = (obj) => {
  if (obj.name === "" && obj.txt === "") {
    userName.classList.add("comment__input--error");
    commentText.classList.add("comment__txt-area--error");
  } else if (obj.name === "") {
    userName.classList.add("comment__input--error");
    commentText.classList.remove("comment__txt-area--error");
  } else if (!isNaN(obj.name)) {
    userName.classList.add("comment__input--error");
    commentText.classList.remove("comment__txt-area--error");
  } else if (obj.txt === "") {
    commentText.classList.add("comment__txt-area--error");
    userName.classList.remove("comment__input--error");
  } else {
    userName.classList.remove("comment__input--error");
    commentText.classList.remove("comment__txt-area--error");
    userName.classList.add("comment__input--active");
    commentText.classList.add("comment__txt-area--active");
    commentsArr.unshift(obj);
  }
};
