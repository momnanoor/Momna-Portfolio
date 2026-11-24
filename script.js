
// Update footer year automatically
const year = document.querySelector("footer p");

if (year) {
    year.textContent = `© ${new Date().getFullYear()} Momna Noor. All Rights Reserved.`;
}

console.log("Momna Portfolio loaded successfully!");
