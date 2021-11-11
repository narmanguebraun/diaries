// MODE
const toggle = document.getElementById("mode");
const storedMode = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedMode)
  document.documentElement.setAttribute('data-theme', storedMode)
function toggleMode() {
  const currentMode = document.documentElement.getAttribute("data-theme");
  let targetMode = "light";
  if (currentMode === "light") {
    targetMode = "dark";
  }
  document.documentElement.setAttribute('data-theme', targetMode)
  localStorage.setItem('theme', targetMode);
};
// LINKS
const links = document.getElementsByTagName('a');
const len = links.length;
for (let i=0; i<len; i++) {links[i].target = "_blank";}
