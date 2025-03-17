document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById('menu-button');
  const nav = document.getElementById('nav-links');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
