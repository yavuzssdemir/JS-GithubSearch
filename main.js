import Github from "./github.js";
import UI from "./ui.js";

const ui = new UI();
const github = new Github();

const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", getInput);

function getInput() {
  if (searchUser.value !== "") {
    github.getUser(searchUser.value).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User Not Found!", "alert alert-danger");
      } else {
        ui.showAlert("User found successfully!", "alert alert-success");
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.showAlert("The form field cannot be empty!", "alert alert-info");

    ui.clearProfile();
  }
}
