const themeElement = document.querySelector("body");
const themePickers = document.querySelectorAll(".theme-picker");
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = prefersDarkScheme ? 'dark' : 'light';
themeElement.setAttribute("data-bs-theme", currentTheme);
themePickers.forEach((themePicker) => {
    if (currentTheme === 'dark') {
        themePicker.querySelector(".icon-dark").classList.add("active");
        themePicker.querySelector(".icon-light").classList.add("d-none");
    } else {
        themePicker.querySelector(".icon-light").classList.add("active");
        themePicker.querySelector(".icon-dark").classList.add("d-none");
    }
})

themePickers.forEach((themePicker) => themePicker.addEventListener("click", () => {  
    let isDarkMode = themeElement.getAttribute("data-bs-theme") === "dark";  
    themePicker.querySelector(".icon-light").classList.toggle("d-none");
    themePicker.querySelector(".icon-light").classList.toggle("active");
    themePicker.querySelector(".icon-dark").classList.toggle("d-none");
    themePicker.querySelector(".icon-dark").classList.toggle("active");
    themeElement.setAttribute("data-bs-theme", isDarkMode ? "light" : "dark");
}));