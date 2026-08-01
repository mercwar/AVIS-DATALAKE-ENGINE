/**
 * ==========================================================================
 * 🤖 CYBORG LIVE AVIS DATALAKE GATEWAY ENGINE
 * Auto-Window Generator + Sidebar Navigator (Fixed Continuity Paging)
 * ==========================================================================
 */

let highestZIndex = 100;
let currentActiveWindowIndex = -1; // Tracks currently active window index pointer

/**
 * Global window visibility controller
 */
function toggleWindow(windowId, forceState = null) {
    const win = document.getElementById(windowId);
    if (!win) return;

    const index = parseInt(windowId.replace('win-', ''), 10);
    const navBtn = document.querySelector(`.sidebar-btn[data-window-index="${index}"]`);

    if (forceState !== null) {
        win.style.display = forceState ? 'flex' : 'none';
    } else {
        win.style.display = (win.style.display === 'none' || win.style.display === '') ? 'flex' : 'none';
    }

    if (win.style.display === 'flex') {
        bringToFront(win);
        currentActiveWindowIndex = index; // Safely assign pointer position
        if (navBtn) navBtn.classList.add('active');
    } else {
        if (navBtn) navBtn.classList.remove('active');
        if (currentActiveWindowIndex === index) {
            currentActiveWindowIndex = -1; // Safe clearance only when manually closing out
        }
    }
}

/**
 * Layer depth manager
 */
function bringToFront(windowElement) {
    highestZIndex++;
    windowElement.style.zIndex = highestZIndex;
}

/**
 * Sequential Paging Engine (Fixed: Decoupled pointer transition tracking)
 */
function pageWindows(direction) {
    const totalWindows = document.querySelectorAll('.cyber-window').length;
    if (totalWindows === 0) return;

    // Isolate calculation vector safely away from the close execution handler
    let targetIndex = currentActiveWindowIndex;

    if (direction === 'next') {
        targetIndex++;
        if (targetIndex >= totalWindows || targetIndex < 0) targetIndex = 0; 
    } else if (direction === 'prev') {
        targetIndex--;
        if (targetIndex < 0) targetIndex = totalWindows - 1; 
    }

    // Force close out whatever window is currently on top 
    if (currentActiveWindowIndex !== -1) {
        const oldWin = document.getElementById(`win-${currentActiveWindowIndex}`);
        const oldBtn = document.querySelector(`.sidebar-btn[data-window-index="${currentActiveWindowIndex}"]`);
        if (oldWin) oldWin.style.display = 'none';
        if (oldBtn) oldBtn.classList.remove('active');
    }

    // Explicitly transition up and project the targeted matrix element window
    toggleWindow(`win-${targetIndex}`, true);
}

/**
 * Generates application windows from static tables in a collapsed state
 */
function buildWindowsFromTables() {
    const tables = document.querySelectorAll('table');
    const canvas = document.getElementById('workspaceCanvas');
    const sidebar = document.getElementById('sidebarNav');
    if (!canvas || !sidebar) return;

    tables.forEach((table, index) => {
        const winId = `win-${index}`;

        const win = document.createElement('div');
        win.className = 'cyber-window';
        win.id = winId;
        win.style.display = 'none';

        const row = Math.floor(index / 4);
        const col = index % 4;
        win.style.top = `${12 + row * 30}px`;   
        win.style.left = `${20 + col * 440}px`; 

        const header = document.createElement('div');
        header.className = 'window-header';
        header.innerHTML = `
            <span class="window-title">ENGINE://TABLE-${index+1}</span>
            <button class="window-close" aria-label="Close Window" onclick="toggleWindow('${winId}', false)">×</button>
        `;
        win.appendChild(header);

        const content = document.createElement('div');
        content.className = 'window-content';
        content.appendChild(table.cloneNode(true));
        win.appendChild(content);

        canvas.appendChild(win);

        const navBtn = document.createElement('button');
        navBtn.className = 'sidebar-btn';
        navBtn.setAttribute('data-window-index', index); 
        navBtn.textContent = `📂 Table ${index+1}`;
        
        navBtn.addEventListener('click', () => toggleWindow(winId));
        sidebar.appendChild(navBtn);

        table.style.display = 'none';
    });

    initializeDynamicTableWindows();
}

/**
 * Parses and binds custom window drag/focus logic to every window
 */
function initializeDynamicTableWindows() {
    const windows = document.querySelectorAll('.cyber-window');
    
    windows.forEach((win, index) => {
        const header = win.querySelector('.window-header');
        if (!header) return;

        win.classList.remove('fire-card', 'ice-card');
        if (index % 2 === 0) {
            win.classList.add('fire-card');
        } else {
            win.classList.add('ice-card');
        }

        win.addEventListener('mousedown', () => {
            bringToFront(win);
            currentActiveWindowIndex = index; 
        });
        win.addEventListener('touchstart', () => {
            bringToFront(win);
            currentActiveWindowIndex = index;
        }, { passive: true });

        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        header.onmousedown = dragMouseDown;
        header.ontouchstart = dragTouchStart;

        function dragMouseDown(e) {
            e.preventDefault();
            bringToFront(win);
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function dragTouchStart(e) {
            bringToFront(win);
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementTouchDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            win.style.top = (win.offsetTop - pos2) + "px";
            win.style.left = (win.offsetLeft - pos1) + "px";
        }

        function elementTouchDrag(e) {
            pos1 = pos3 - e.touches[0].clientX;
            pos2 = pos4 - e.touches[0].clientY;
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            win.style.top = (win.offsetTop - pos2) + "px";
            win.style.left = (win.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    });
}

/**
 * Filter Engine: Searches internal text matrices of individual windows
 */
function filterMatrixEngine() {
    const filterInput = document.getElementById('engineFilter');
    if (!filterInput) return;
    const query = filterInput.value.toLowerCase().trim();

    const windows = document.querySelectorAll('.cyber-window');
    let totalVisibleWindows = 0;

    windows.forEach(win => {
        const contentArea = win.querySelector('.window-content');
        if (!contentArea) return;
        
        const tableText = contentArea.textContent.toLowerCase();
        const index = win.id.replace('win-', '');
        const navBtn = document.querySelector(`.sidebar-btn[data-window-index="${index}"]`);

        if (tableText.includes(query)) {
            win.style.display = 'flex';
            if (navBtn) navBtn.classList.add('active');
            totalVisibleWindows++;
        } else {
            win.style.display = 'none';
            if (navBtn) navBtn.classList.remove('active');
        }
    });

    const errorBlock = document.getElementById('noResultsBlock');
    if (errorBlock) {
        errorBlock.style.display = totalVisibleWindows === 0 ? 'block' : 'none';
    }
}

/**
 * Global Nav & Command Initialization
 */
function initNavigation() {
    const backBtn = document.getElementById("nav-back");
    const forwardBtn = document.getElementById("nav-forward");
    const homeBtn = document.getElementById("nav-home");
    const cvbgodBtn = document.getElementById("nav-cvbgod");

    if (backBtn) backBtn.addEventListener("click", () => pageWindows('prev'));
    if (forwardBtn) forwardBtn.addEventListener("click", () => pageWindows('next'));
    
    if (homeBtn) homeBtn.addEventListener("click", () => window.location.href = "https://mercwar.github.io/Constellation");
    if (cvbgodBtn) cvbgodBtn.addEventListener("click", () => window.location.href = "http://mercwar01.byethost3.com");

    const filterInput = document.getElementById('engineFilter');
    if (filterInput) {
        filterInput.addEventListener('input', filterMatrixEngine);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("📡 AVIS DATALAKE ENGINE: Desktop + Sidebar operational with infinite paging sequence loops.");
    buildWindowsFromTables();
    initNavigation();
});
