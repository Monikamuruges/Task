


document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("themeToggle");

    function applyDarkMode() {
        const isDark = localStorage.getItem('darkMode') === 'true';
        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Apply on load
    applyDarkMode();

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const isDark = !document.body.classList.contains('dark-mode');
            document.body.classList.toggle("dark-mode");
            localStorage.setItem('darkMode', isDark);

            if (isDark) {
                toggleBtn.innerText = "Light Mode";
                toggleBtn.classList.remove("btn-dark");
                toggleBtn.classList.add("btn-light");
            } else {
                toggleBtn.innerText = "Dark Mode";
                toggleBtn.classList.remove("btn-light");
                toggleBtn.classList.add("btn-dark");
            }
        });
    }
});