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
# AVIS Datalake Browser System
<a target="_self" title="CLICK HERE to ENTER the GATEWAY FREE!" href="https://mercwar.github.io/Constellation/index.html">
<img 
    src="https://raw.githubusercontent.com/mercwar/Robo-Knight-Gallery/refs/heads/main/Version%207/image_d2a07390.png" 
    alt="Mercwar Constellation" 
    style="width:100%; height:auto;"
/>
</a>
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
