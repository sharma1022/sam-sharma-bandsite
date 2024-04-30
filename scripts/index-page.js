import {BandSiteApi} from "./band-site-api.js";

const api_key = "2affb33f-5741-4380-a1e7-26ca1d973f88";
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
  return Math.floor(seconds+1) + " seconds ago";
};

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
    date.innerText = timeSince(timestamp);

    const txt = document.createElement("p");
    txt.classList.add("comment__text");
    rightSection.appendChild(txt);
    txt.innerHTML = comment.comment;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("comment__bottom-right-buttons-container");
    rightSection.appendChild(buttonsContainer);
    
    const likeContainer = document.createElement("div");
    likeContainer.classList.add("comment__like-container");

    const likeButton = document.createElement("img");
    likeButton.classList.add("comment__like-button");
    likeButton.setAttribute("src", "./assets/icons/SVG/icon-like.svg");
    likeButton.setAttribute("alt", "Like Icon");
    likeButton.setAttribute("title", "Like Comment");
    
    const likeCount = document.createElement('p');
    likeCount.classList.add("comment__like-txt");
    likeCount.innerHTML = `&nbsp ${comment.likes}`;

    likeContainer.append(likeButton,likeCount);

    const deleteButton = document.createElement("img");
    deleteButton.classList.add("comment__delete-button");
    deleteButton.setAttribute("src", "./assets/icons/SVG/icon-delete.svg");
    deleteButton.setAttribute("alt", "Like Icon");
    deleteButton.setAttribute("title", "Delete Comment");

    buttonsContainer.append(likeContainer,deleteButton);

    likeButton.addEventListener("click", async (e) =>{
      e.preventDefault();
      const commentId = comment.id;
      await api.likeComment(commentId).then(api.getComments());
      location.reload();
    });

    deleteButton.addEventListener("click", async (e)=>{
      const commentId = comment.id;
      const confirmation = confirm("Are you sure you want to delete the comment?");
      if(confirmation == true){
        await api.deleteComment(commentId);
        location.reload();
      }
    })
};

const displayComments = commentArr => {
  commentArr.forEach(displayComment);
}

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
  displayComments(comments);

});

const resetInputs = () => {
  userName.value = "";
  commentText.value = "";
};

const clearComments = async () => {
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
displayComments(comments);

