/**
 * ==========================================================================
 * 🤖 CYBORG LIVE AVIS DATALAKE GATEWAY DIRECTORY ENGINE
 * Core Frontend Navigation, Matrix Intersection Filtering, & State Loops
 * ==========================================================================
 */

/**
 * Switch between different portal views and handle UI tabs seamlessly
 * @param {string} portalId - The target section ID ('all', 'github', 'production', etc.)
 * @param {HTMLElement} clickedTab - The specific active tab clicked by the user
 */
function switchPortal(portalId, clickedTab) {
    // 1. Terminate active layout styles on all navigation tab items
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // 2. Lock current glowing tactical selector style onto the target tab element
    if (clickedTab) {
        clickedTab.classList.add('active-tab');
    }

    // 3. Cycle matrix visibility blocks based on incoming view parameters
    const sections = document.querySelectorAll('.matrix-section');
    sections.forEach(section => {
        if (portalId === 'all') {
            section.classList.add('active-section');
        } else if (section.id === `portal-${portalId}`) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });

    // 4. Reset query filters to clear views during architectural view shifts
    const inputElement = document.getElementById('engineFilter');
    if (inputElement) {
        inputElement.value = '';
    }
    
    // 5. Force run a clean filtering indexing sweep across active layouts
    filterMatrixEngine();
}

/**
 * High-Speed Multi-Column Matrix Text Search Filtering Engine
 * Evaluates live query vectors against complete underlying text nodes
 */
function filterMatrixEngine() {
    const filterInput = document.getElementById('engineFilter');
    if (!filterInput) return;
    
    const query = filterInput.value.toLowerCase().trim();
    const tables = document.querySelectorAll('.repo-table');
    let totalVisibleNodes = 0;

    tables.forEach(table => {
        const innerTextMatrix = table.textContent.toLowerCase();
        if (innerTextMatrix.includes(query)) {
            table.style.display = '';
            totalVisibleNodes++;
        } else {
            table.style.display = 'none';
        }
    });

    const errorNotificationBar = document.getElementById('noResultsBlock');
    if (errorNotificationBar) {
        errorNotificationBar.style.display = totalVisibleNodes === 0 ? 'block' : 'none';
    }
}

/**
 * Navigation Controls: Back, Forward, Home, CVBGod
 */
function initNavigation() {
    const backBtn = document.getElementById("nav-back");
    const forwardBtn = document.getElementById("nav-forward");
    const homeBtn = document.getElementById("nav-home");
    const cvbgodBtn = document.getElementById("nav-cvbgod");

    if (backBtn) backBtn.addEventListener("click", () => window.history.back());
    if (forwardBtn) forwardBtn.addEventListener("click", () => window.history.forward());
    if (homeBtn) homeBtn.addEventListener("click", () => window.location.href = "index.html");
    if (cvbgodBtn) cvbgodBtn.addEventListener("click", () => window.location.href = "https://cvbgod.github.io");
}

/**
 * DOM Ready Hook
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("📡 AVIS DATALAKE NAVIGATION HUB: Online and indexing loops active.");
    initNavigation();
});
