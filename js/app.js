// Example Function
function myFunction() {
  console.log("Function from my-functions.js is called!");
}

// Opens the sidebar when the menu button is clicked.
function showSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = 'flex'
}

// Closes the sidebar when the menu button is clicked.
function hideSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = 'none'
}
