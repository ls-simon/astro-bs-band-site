const themePickers = document.querySelectorAll(".theme-picker") as NodeListOf<HTMLElement>;

function init() {    
    setPreferredTheme();
    handleSwitchTheme();
}

function setPreferredTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = prefersDarkScheme ? 'dark' : 'light';
    document.body.setAttribute("data-bs-theme", currentTheme);
    themePickers.forEach((themePicker) => {
        let iconLight = themePicker.querySelector(".icon-light");
        let iconDark = themePicker.querySelector(".icon-dark");
        if (currentTheme === 'dark') {
            iconLight.classList.add("d-none");
        } else {
            iconDark.classList.add("d-none");
        }
    })
}

function handleSwitchTheme() {
    themePickers.forEach((themePicker) => themePicker.addEventListener("click", () => {  
        let isDarkMode = document.body.getAttribute("data-bs-theme") === "dark";
        let iconLight = themePicker.querySelector(".icon-light");
        let iconDark = themePicker.querySelector(".icon-dark");
        
        iconLight.classList.toggle("d-none");
        iconDark.classList.toggle("d-none");
        document.body.setAttribute("data-bs-theme", isDarkMode ? "light" : "dark");
    }));
}

init();