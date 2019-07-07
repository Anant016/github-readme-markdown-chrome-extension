var index = 1;
buttton = document.createElement("button");

buttton.innerHTML = "See Markup";
buttton.setAttribute("type", "button");
buttton.setAttribute(
  "class",
  "flex-item-equal nav-link flex-md-auto preview tabnav-tab js-blob-edit-preview js-blob-edit-tab"
);
buttton.setAttribute("data-toggle", "popover");
buttton.setAttribute(
  "title",
  "Headings\n# The largest heading\n## The second largest heading\n###### The smallest heading\n\nStyling text\nBold - ** **\nItalic - * * or _ _\nStrikehrough - ~~ ~~\nBold and Italic - **_ _**\n\nQuoting text\n> Pardon my French\n\nQuoting code\n`git status`\nor\n```git status\ngit add\ngit commit```\n\nLinks\n[GitHub Pages](https://pages.github.com/)\n\nList\n1. James Madison\n2. James Monroe\n\nTask lists\n- [x] Finish my changes\n- [ ] Push my commits to GitHub\n\nAdding an img\n![alt text](./img.png) or\n<img>\n\nAdding Image Link\n[<img>](link) "
);
buttton.setAttribute(
  "data-content",
  "Headings\n#The largest heading\n##The second largest heading\n######The smallest heading\n\nStyling text\nBold - ** **\nItalic - * * or _ _\nStrikehrough - ~~ ~~\nBold and Italic - ** __\n\nQuoting text\n> Pardon my French\n\nQuoting code\n`git status`\nor\n```git status\ngit add\ngit commit```\n\nLinks\n[GitHub Pages](https://pages.github.com/)\n\nList\n1. James Madison\n2. James Monroe\n\nTask lists\n- [x] Finish my changes\n- [ ] Push my commits to GitHub\n\nMentioning people and teams\n@github/support"
);

// "https://github.com/*/new*?readme*",
// "https://github.com/*/new*Readme.md",
// "https://github.com/*/new*README.md",
// "https://github.com/*/new*readme*",
// "https://github.com/*/new*Readme*",
// "https://github.com/*/new*README*",
// "https://github.com/*/edit*?readme*",
// "https://github.com/*/edit*Readme.md",
// "https://github.com/*/edit*README.md",
// "https://github.com/*/edit*readme*",
// "https://github.com/*/edit*Readme*",
// "https://github.com/*/edit*README*"
// buttton.addEventListener("click", () => {
//   if (index % 2 != 0) {
//     buttton.setAttribute(
//       "class",
//       "js-blob-edit-code js-blob-edit-ta nav-link code selected px-sm-6 px-lg-3 px-3 flex-item-equal flex-md-auto  tabnav-tab "
//     );
//   } else {
//     buttton.setAttribute(
//       "class",
//       "flex-item-equal flex-md-auto preview nav-link tabnav-tab js-blob-edit-preview js-blob-edit-tab"
//     );
//   }
//   index += 1;
// });
var a = document.querySelector(".tabnav-tabs");
if (a == undefined || null) {
} else {
  a.appendChild(buttton);
}
