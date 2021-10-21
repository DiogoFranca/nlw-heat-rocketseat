const links = {
  github: "diogoFranca",
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

