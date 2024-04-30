import {BandSiteApi} from "./band-site-api.js";
const api_key = "58ea0e78-00f1-4e80-a261-702cce710763";
const api = new BandSiteApi(api_key);

const comments = await api.getComments();

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

const displayComment = (comment) => {
    const commentSection = document.querySelector(".comment__bottom");

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
    const timestamp = new Date(comment.timestamp);
    const convertedDate = timestamp.toLocaleDateString();
    date.innerText = timeSince(convertedDate);

    const txt = document.createElement("p");
    txt.classList.add("comment__text");
    rightSection.appendChild(txt);
    txt.innerHTML = comment.comment;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("comment__bottom-right-buttons-container");
    rightSection.appendChild(buttonsContainer);

    const likeButton = document.createElement("button");
    likeButton.classList.add("comment__like-button");
    likeButton.innerHTML = `Likes: ${comment.likes}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("comment__delete-button");
    deleteButton.innerHTML = "Delete";

    buttonsContainer.append(likeButton,deleteButton);
}

const displayComments = (comments) => {
    comments.forEach(displayComment);
}
displayComments();

const form = document.querySelector(".comment__form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = userName.value;
  const comment = commentText.value;

  if(name && comment){
    const response = await api.postComment({name, comment});
    const timestamp = response.timestamp;
    const likes = 0;
    const newComment = {
      name,
      comment,
      timestamp,
      likes
    };
    validateInput(newComment);
  }
  resetInputs();
  clearComments();
  displayComments();
});

const resetInputs = () => {
    userName.value = "";
    commentText.value = "";
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
      comments.unshift(obj);
    }
  };