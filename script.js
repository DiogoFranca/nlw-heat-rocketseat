const links = {
  github: "DiogoFranca",
  youtube: "horizon",
  instagram: "diogofranca20021",
  facebook: "maykbrito",
  twitter: "maykbrito"
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${links[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`;

  fetch(url)
  .then( response => response.json())
  .then(data => {
    // document.querySelector('#userName').
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url;
    userImage.src = data.avatar_url;
    userLogin.textContent = data.login;
  })
}

getGitHubProfileInfos();

