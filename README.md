<!-- AVIS Standard Header -->
<div align="center" style="margin:20px 0;">
  <!-- Navigation Buttons -->

<a href="app/readme.md" style="margin:0 10px; text-decoration:none;">⚡ CVBGod</a>
  <a href="./app/page1.md" style="margin:0 10px; text-decoration:none;">➡️ Forward</a>
  <a href="../README.md" style="margin:0 10px; text-decoration:none;">🏠 Home</a>
  
</div>

<!-- Gateway Image Link -->
<a target="_self" title="CLICK HERE to ENTER the GATEWAY FREE!" href="https://mercwar.github.io/Constellation/index.html">
  <img 
    src="ChatGPT Image 1. Aug. 2026, 04_43_41.png" 
    alt="Mercwar Constellation" 
    style="width:100%; height:auto;"
  />
</a>


---
<a target="_self" title="CLICK HERE to ENTER the GATEWAY FREE!" href="https://mercwar.github.io/Constellation/index.html">
<img 
    src="https://raw.githubusercontent.com/mercwar/Robo-Knight-Gallery/refs/heads/main/Version%207/image_d2a07390.png" 
    alt="Mercwar Constellation" 
    style="width:100%; height:auto;"
/>
</a>
<!-- ============================================================
     AVIS-ARTIFACT
     PROJECT: MERCWAR AVIS DROP
     VERSION: RRU LIVE v9
     ============================================================ -->

## ✨ Mercwar Avis-Datalake-Engine! 🛠️


# 🌌 AVIS Datalake Engine — Graphical README

# 🌌 AVIS Datalake Engine — README TOC

## 📑 Table of Contents

### 🔧 Developer/Internal Tutorials
1. [Core Rules & Deployment](app/page1.md)  
2. [Browser Interfaces](app/page2.md)  
3. [Storage Architecture](app/page3.md)  
4. [Payload Schemas & Diagnostics](app/page4.md)  
5. [Contributing & License](app/page5.md)  

---

### 🌐 Public Tutorials
6. [Routers, Switches & Engines](app/dl/p1.md)  
7. [Browser Navigation](app/dl/p2.md)  
8. [Payload Review Forms](app/dl/p3.md)  
9. [Diagnostics & Verification](app/dl/p4.md)  
10. [Community Practices](app/dl/p5.md)  
11. [Visualization & Monitoring](app/dl/p6.md)  
12. [Security & Access Control](app/dl/p7.md)  
13. [Advanced Configurations](app/dl/p8.md)  
14. [Performance & Scalability](app/dl/p9.md)  
15. [Final Integration & Roadmap](app/dl/p10.md)  


<a target="_self" title="CLICK HERE to ENTER the GATEWAY FREE!" href="https://mercwar.github.io/Constellation/index.html">
<img 
    src="ChatGPT Image 1. Aug. 2026, 04_43_41.png" 
    alt="Mercwar Constellation" 
    style="width:100%; height:auto;"
/>
</a>

# AVIS Datalake Browser System

## Overview
The AVIS Datalake Browser System provides a unified interface for browsing, filtering, and reviewing JSON-based metadata stored in user directories. It supports both **private** and **public** contexts:

- **Private Browser**: Displays files tied to the authenticated `$google_user`.  
- **Public Browser**: Displays the most recent file per publisher directory, limited to 10 users per page.  
- **Review Form**: Presents detailed metadata for a selected file, following the standardized file naming protocol.

---

## Features

### 🔒 Private Browser
- Filters by **ID/Title**, **Keyword/Hash**, **Date**, and **Time**.  
- Supports both **dropdown selections** and **refine text inputs**.  
- Global keyword search across filenames.  
- Pagination with preserved query parameters.  
- **View Details** links pass `owner=$google_user` and `file=<basename>` to `print_view.php`.

### 🌐 Public Browser
- Groups files by publisher directories.  
- Sorts directories by last modified time.  
- Displays the **most recent file per user**, limited to 10 users per page.  
- Dropdown populated with publisher usernames.  
- Filters identical to private browser (ID/Title, Keyword, Date, Time).  
- **View Details** links pass `owner=<publisher>` and `file=<basename>` to `print_view.php`.  
- Gracefully handles users with no files (`No file available`).

### 📄 Review Form
- Displays execution receipt with operator ID and target resource matrix.  
- Shows **Project Identity Profile** (slug, UUID, repo, docs, website, license).  
- Displays **General Metadata** (title, description, tags, status, created, updated).  
- Groups metadata into categories:
  - 🏷️ Project Identity  
  - 🛠️ Architecture  
  - 📦 Dependencies  
  - 🔌 API  
  - 💾 Storage  
  - 🔒 Security  
  - 📦 Repository  
  - 📞 Contact  
  - 📂 Artifacts & Uplinks  
- Only renders fields that exist, avoiding empty placeholders.  
- Consistent grid layout across sections.

---

## File Naming Protocol
All JSON files follow the format:

```
node_<id>_<keyword>_<YYYYMMDD>_<HHMMSS>.json
```

- **ID/Title** → `parts[0]`  
- **Keyword/Hash** → `parts[1]`  
- **Date** → `parts[2]`  
- **Time** → `parts[3]`  

This protocol ensures filters and dropdowns work consistently across private and public browsers.

---

## Pagination
- Both private and public browsers paginate results.  
- **Private**: By files (10 per page).  
- **Public**: By users (10 per page).  
- Pagination links preserve query parameters to maintain filter state.

---

## Usage Flow
1. **Browse Listings**  
   - Private: User sees their own files.  
   - Public: User sees latest file per publisher.  

2. **Apply Filters**  
   - Dropdown + refine inputs for ID/Title, Keyword, Date, Time.  
   - Global search for filename keywords.  

3. **View Details**  
   - Click **View Details** → routes to `print_view.php` with correct `owner` and `file`.  
   - Review form displays full metadata.

---

## Example
- Public listing for publisher `Tran` with file `node_avis_6a6da2e9abb39_20260801_074025.json`.  
- Dropdown shows `Tran` in Publisher/Username.  
- View Details link:  
  ```
  print_view.php?owner=Tran&file=node_avis_6a6da2e9abb39_20260801_074025.json
  ```

---

## Future Enhancements
- 🔧 Add AVIS neon aesthetic styling (scrollbars, buttons).  
- 📊 Integrate visualization of metadata trends.  
- 🗂️ Support batch review of multiple files per user.  
- 🔐 Extend private browser with role-based access controls.


# 🚀 AVIS Datalake Engine

The AVIS Datalake Engine is an open, high‑performance multi-tenant filesystem indexing framework designed to instantly bridge localized storage repositories with complex browser visualization portals. By leveraging native pattern recognition routing, the engine provides lightning-fast decentralized file mapping without the overhead of heavy relational database clusters.

## ✨ High-Utility Feature Matrix
* **Decentralized Instant Uplinks:** Link complex, deep system client profiles to storage nodes instantly.
* **Algorithmic Asset Mapping:** Native `glob()` directory pattern analysis automates resource indexing dynamically.
* **Unified Column-Target Filtering:** Case-insensitive string array intersection loops allow immediate multi-field sorting.
* **Optimized I/O Slicing:** Cached modification-time analysis (`filemtime`) powers precise array pagination limits.

## 📁 Standard Repository Layout
To maintain uniform cross-platform operational indexing loops, files must match this path schema:
```text
../RRU-AI/USER/{username}/htdocs/MWAD/avis/[ID/TITLE]_[KEYWORD/HASH]_[YYYYMMDD]_[HHMMSS].json
```

## ⚡ Quick Start Checklist
1. Deploy `UniversalRoot.php` to your local environment backend directory.
2. Initialize target multi-tenant folder trees inside `../RRU-AI/USER/`.
3. Drop a structured `.json` artifact payload inside a user profile path to register data streams.
4. Access `directory.php` via your web server wrapper to view mapped files instantly.

---
*Developed under the secure AVIS-ARTIFACT framework protocol.*
# 📁 Storage Architecture & Directory Traversal Protocols

The AVIS Datalake Engine relies entirely on predictable tokenized pathing layouts and strict array-cleansing loops to translate raw disk assets into filterable client UI blocks.

## ⚙️ Path Traversal Rules & Standardizations

### 1. Mandatory Trailing Traversal Slashes
The system directory variable `$user_loc` must be declared with a strict trailing delimiter string:
```text
/htdocs/MWAD/avis/
```
If a trailing slash is omitted, your pathing arrays collapse into broken string concatenation filters (e.g., `.../MWAD/avis*.json` instead of a true subdirectory query).

### 2. Context-Aware Profile Filtering
Do not block folders containing data. The scanner loop must target root profile paths by excluding only true virtual back-references:
```php
if ($folderName === '.' || $folderName === '..') { continue; }
```
*Note: Because `/htdocs/` is nested inside individual tenant paths rather than living at the ecosystem root, blocking it entirely breaks file discovery pipelines.*

### 3. Cross-Platform Directory Normalization
To prevent backslash path mapping breaks when switching between Linux/Unix hosts and Windows servers, strings are assembled using native system separators:
```php
$inner_path = $sanitized_dir . DIRECTORY_SEPARATOR . $sanitized_loc . '*.json';
```

## 🧬 Filename Tokenization Spec
The query filtering matrix converts flat filesystem listings into searchable column matrices by exploding file names at underscore points:
```text
[PART 0: ID/Title] _ [PART 1: Keyword/Hash] _ [PART 2: Date YYYYMMDD] _ [PART 3: Time HHMMSS]
```
If your file names use mixed formatting (such as dashes), the engine standardizes characters using `str_replace('-', '_', $name)` prior to executing search filters.
# 🛠️ Server-Side System Deployment Guide

Follow this systematic deployment map to initialize your multi-tenant environment engine.

## Step 1: Deploy Global Constants (`UniversalRoot.php`)
Create `UniversalRoot.php` at your root application level to register baseline storage locations:

```php
<?php
global \(avis_datalake_dir,\)avis_ini, \(user_dir,\)user_loc;

\$avis_datalake_dir = [
    'RRU_AI'        => 'RRU-AI/',
    'BASE_USER'     => 'USER/',
    'DATALAKE_DATE' => '/htdocs/MWAD',
    'AVIS'          => '/avis/',
];

\$user_dir = (\(avis_ini['DIST'] ?? '../') .\)avis_datalake_dir['RRU_AI'] . \(avis_datalake_dir['BASE_USER'];\)user_loc = \(avis_datalake_dir['DATALAKE_DATE'] .\)avis_datalake_dir['AVIS'];
```

## Step 2: Implement the Indexing Engine (`directory.php`)
Deploy the tracking script to map, sort, and paginate active tenant profile storage nodes:

```php
<?php
global \$avis_datalake_dir, \(avis_ini,\)user_loc, files, usernames;

// Discover profile trees
userDirs = glob(rtrim(user_dir, '/') . '/*', GLOB_ONLYDIR);
if (userDirs === false) userDirs = []; }

// Sort profile paths by newest modification time
clearstatcache();
usort(\$userDirs, function(a, b) {
    return filemtime(b) <=> filemtime(a);
});

// Process 10 items per page
\$page        = isset(\(_GET['page']) ? max(1, (int)\)_GET['page']) : 1;
\(userSlice   = array_slice(\)userDirs, (\(page - 1) * 10, 10);\)recentFiles = [];

foreach (userSlice as dir) {
    folderName = basename(dir);
    if (\$folderName === '.' || \(folderName === '..') { continue; }\)innerPath = rtrim(dir, '/') . '/' . ltrim(user_loc, '/') . '*.json';
    jsonFiles = glob(innerPath);
    if (empty(\$jsonFiles)) { continue; } // Skip uninitialized tenant nodes safely
    
    usort(jsonFiles, function(a, b) return filemtime(b) <=> filemtime(\(a); });\)recentFiles[\(folderName] =\)jsonFiles[0];
}

// Bind to global references for frontend ingestion
\(usernames = array_keys(\)recentFiles);
\(files     = array_values(\)recentFiles);

include_once('public_browser_result.php');
```
# 🌐 Browser Interface Navigation & Search Controls

The system surfaces backend assets through two distinct user interfaces, featuring advanced filtering options and consistent pagination controls.

## 🔒 1. Private Browser Workspace (`private_browser_result.php`)
* **Security Context:** Limits asset visibility to files matching the active `$google_user` identifier path.
* **Advanced Multi-Field Filters:** Features dedicated controls to combine file parameters seamlessly:
  * **Global Search Box:** Scans full string patterns across filenames immediately.
  * **Unified Column Selectors:** Drop-down lists are generated dynamically via array map blocks.
  * **Manual Refinement Fields:** Direct entry text blocks let you filter dates using `YYYYMMDD` profiles.
* **Routing Link Engine:** The details hyperlink formats URL targets using explicit string parameters:
  ```text
  print_view.php?owner={OWNER_ID}&file={FILE_BASENAME}
  ```

## 🌐 2. Public Browser Grid Portal (`public_browser.php`)
* **System Context:** Aggregates records across all registered user folders on disk.
* **Publisher Selection Layer:** Adds a master **Publisher / Username** filter tier to isolate specific network profiles.
* **Empty Node Error Gating:** If a profile directory exists but doesn't contain an uploaded `.json` payload, the engine displays a **`NO FILE AVAILABLE`** warning card. This keeps dropdown options clean and prevents parsing crashes.
# 📄 Payload Schemas & System Verification Diagnostics

## 📊 1. Standard Program Form JSON Schema
Every asset payload written to disk by the engine must populate these core keys inside its target structure array:

```json
{
  "viewable": "public",
  "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "slug": "alpha-router-node",
  "nodeid": "NODE-99X",
  "architecture": "x86_64",
  "os": "linux",
  "cpu": "min-8-core",
  "language": "php-8.2",
  "db": "vector-redis",
  "version": "1.0.4-build",
  "architect": "admin@rru.intelligent.net",
  "title": "Alpha Core Network Hub",
  "description": "Primary multi-tenant data routing node for the AVIS network."
}
```

## 🩺 2. Environment Verification (`diagnostic_uplink.php`)
Deploy this validation script to test directory permissions, analyze platform readiness, and check file systems:

```php
<?php
/* AVIS-DIAGNOSTIC: diagnostic_uplink.php */
header('Content-Type: text/plain');
echo "=== AVIS DATALAKE ENGINE DIAGNOSTIC UPLINK STATUS ===\n\n";

include_once("UniversalRoot.php");

echo "Config Validation:\n";
echo "├─ Engine Core Status: " . (isset(\$avis_ini['SESSION_ON']) ? "ONLINE" : "OFFLINE") . "\n";
echo "├─ Scan Target Path:  " . (\$user_dir ?? 'ERROR: NOT DEFINED') . "\n";
echo "└─ Subfolder Route:   " . (\$user_loc ?? 'ERROR: NOT DEFINED') . "\n\n";

echo "Storage Node Discovery:\n";
if (is_dir(\$user_dir)) {
    echo "└─ [SUCCESS] Tenant folder space successfully mapped.\n";
    profiles = glob(user_dir . '*', GLOB_ONLYDIR);
    echo "   └─ Active Profiles Loaded: " . count(\$profiles) . " users registered.\n";
} else {
    echo "└─ [CRITICAL ERROR] Target path not found. Verify your environment directory structure.\n";
}
```

## 🔌 Router → Switch → Engine Flow

```
Client 🌐 → Ingress Router 🔌 → Tenant Switch 🔀 → AVIS Engine ⚙️ → Browser 🌐 → Review Form 📄 → Egress Router 🚀
```





---

## 📊 Example Metadata Card

```json
{
  "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "slug": "router-alpha",
  "title": "Alpha Router Node",
  "description": "Ingress router secured with token-based authentication.",
  "security": {
    "encryption": "AES-256",
    "access": "role-based",
    "audit": "enabled"
  }
}
```





---

## 🚀 Visual Dashboards
- 📈 **Traffic Heatmaps** → Active tenants.  
- ⏱️ **Latency Graphs** → Router response times.  
- 🛡️ **Error Counters** → Failed payloads.  





---

## ✅ Best Practices (Graphical Icons)
- 🔒 Encrypt payloads before upload.  
- 🔀 Use router pools for load balancing.  
- ⚡ Clear cache before sorting directories.  
- 📂 Normalize filenames for consistent filtering.  
- 🩺 Run diagnostics regularly.  





---

## 🌐 Roadmap Visual
- 🎨 Neon UI Styling  
- 📊 Metadata Dashboards  
- 📦 Batch Review  
- 🔐 Role‑Based Access  
- 🔄 Failover Systems  



