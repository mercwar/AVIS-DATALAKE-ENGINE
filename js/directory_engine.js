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
    // 1. Isolate user search criteria strings and clean casing parameters
    const filterInput = document.getElementById('engineFilter');
    if (!filterInput) return;
    
    const query = filterInput.value.toLowerCase().trim();
    
    // 2. Target table matrix data records across visible blocks
    const tables = document.querySelectorAll('.repo-table');
    let totalVisibleNodes = 0;

    // 3. Process structural scanning loops to evaluate text matching
    tables.forEach(table => {
        // Collect string vectors inside table wrappers (headers, cells, badges)
        const innerTextMatrix = table.textContent.toLowerCase();

        // 4. Execute string matching loops to toggle operational layouts
        if (innerTextMatrix.includes(query)) {
            table.style.display = '';
            totalVisibleNodes++;
        } else {
            table.style.display = 'none';
        }
    });

    // 5. Dynamic validation check: Toggle system error banner if dataset matches drop to zero
    const errorNotificationBar = document.getElementById('noResultsBlock');
    if (errorNotificationBar) {
        if (totalVisibleNodes === 0) {
            errorNotificationBar.style.display = 'block';
        } else {
            errorNotificationBar.style.display = 'none';
        }
    }
}

/**
 * Optional Event Listener Hook: Registers automated listeners 
 * once the document complete DOM lifecycle completes loading.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Verify directory tracking status
    console.log("📡 AVIS DATALAKE NAVIGATION HUB: Online and indexing loops active.");
});
