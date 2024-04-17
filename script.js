let cookies = 0;
let upgradeCost = 10;
let clickValue = 1;
let autoClickers = 0;
let autoClickerCost = 100;

// Cookie click event listener
document.getElementById("cookie").addEventListener("click", clickCookie);
document.getElementById("upgradeButton").addEventListener("click", buyUpgrade);
document.getElementById("autoClickerButton").addEventListener("click", buyAutoClicker);

// Start generating special cookies
setInterval(generateSpecialCookie, 10000); // Generates a special cookie every 10 seconds

// Cookie click function
function clickCookie() {
    cookies += clickValue;
    playClickAnimation();
    updateDisplay();
}

// Buy upgrade function
function buyUpgrade() {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        clickValue *= 2;
        upgradeCost *= 2;
        updateDisplay();
    } else {
        alert("Not enough cookies to buy the upgrade!");
    }
}

// Buy auto-clicker function
function buyAutoClicker() {
    if (cookies >= autoClickerCost) {
        cookies -= autoClickerCost;
        autoClickers++;
        autoClickerCost += 50;
        updateDisplay();
        setInterval(autoClick, 1000);
    } else {
        alert("Not enough cookies to buy an auto-clicker!");
    }
}

// Auto-click function
function autoClick() {
    cookies += autoClickers;
    updateDisplay();
}

// Update display function
function updateDisplay() {
    document.getElementById("cookieCount").innerText = cookies;
    document.getElementById("upgradeCost").innerText = upgradeCost;
    document.getElementById("autoClickers").innerText = autoClickers;
    document.getElementById("autoClickerCost").innerText = autoClickerCost;
}

// Click animation function
function playClickAnimation() {
    let cookie = document.getElementById("cookie");
    cookie.style.transform = "scale(1.1)";
    setTimeout(() => {
        cookie.style.transform = "scale(1)";
    }, 100);
}

// Generate a special cookie
function generateSpecialCookie() {
    let specialCookie = document.createElement("img");
    specialCookie.src = "special_cookie.png";
    specialCookie.classList.add("special-cookie");
    specialCookie.style.position = "absolute";
    specialCookie.style.left = Math.random() * (window.innerWidth - 100) + "px";
    specialCookie.style.top = Math.random() * (window.innerHeight - 100) + "px";
    specialCookie.addEventListener("click", collectSpecialCookie);
    document.body.appendChild(specialCookie);

    // Remove the special cookie after 10 seconds
    setTimeout(() => {
        specialCookie.remove();
    }, 10000);
}

// Collect a special cookie
function collectSpecialCookie() {
    this.remove(); // Remove the special cookie from the DOM
    cookies += 10; // Add 10 bonus cookies
    updateDisplay(); // Update the cookie count
}
