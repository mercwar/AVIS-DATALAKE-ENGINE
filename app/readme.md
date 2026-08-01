

# 📘 AVIS Datalake Engine — README Tutorial Page 1

## 🚀 Introduction
The **AVIS Datalake Engine** is a high‑performance, multi‑tenant filesystem indexing framework. It bridges localized storage repositories with browser visualization portals, enabling instant file discovery, metadata filtering, and diagnostic validation.

---

## 🔑 Core Rules

### 1. Mandatory Trailing Traversal Slashes
Always declare `$user_loc` with a trailing slash:
```text
/htdocs/MWAD/avis/
```
Without it, glob patterns collapse into broken queries (`.../avis*.json` instead of `.../avis/*.json`).

---

### 2. Context‑Aware Profile Filtering
Skip only true virtual back‑references:
```php
if ($folderName === '.' || $folderName === '..') { continue; }
```
Do **not** skip `/htdocs/` — it lives inside user folders, not at the root.

---

### 3. Cross‑Platform Directory Normalization
Use native separators for compatibility:
```php
$inner_path = $sanitized_dir . DIRECTORY_SEPARATOR . $sanitized_loc . '*.json';
```

---

## 🧬 Filename Tokenization
File names are exploded into searchable parts:
```text
ID_Title _ Keyword_Hash _ Date(YYYYMMDD) _ Time(HHMMSS)
```
Mixed formats (like dashes) are normalized:
```php
$name = str_replace('-', '_', $name);
```

---

## 🛠️ Deployment Guide

### Step 1: Global Constants (`UniversalRoot.php`)
```php
$avis_datalake_dir = [
  'RRU_AI'        => 'RRU-AI/',
  'BASE_USER'     => 'USER/',
  'DATALAKE_DATE' => '/htdocs/MWAD',
  'AVIS'          => '/avis/',
];
$user_dir = ($avis_ini['DIST'] ?? '../') . $avis_datalake_dir['RRU_AI'] . $avis_datalake_dir['BASE_USER'];
$user_loc = $avis_datalake_dir['DATALAKE_DATE'] . $avis_datalake_dir['AVIS'];
```

### Step 2: Indexing Engine (`directory.php`)
```php
$userDirs = glob(rtrim($user_dir, '/') . '/*', GLOB_ONLYDIR);
clearstatcache();
usort($userDirs, fn($a,$b) => filemtime($b) <=> filemtime($a));
```

### Step 3: Pagination
```php
$page = $_GET['page'] ?? 1;
$userSlice = array_slice($userDirs, ($page-1)*10, 10);
```

---

# 📘 AVIS Datalake Engine — README Tutorial Page 2

## 🌐 Browser Interfaces

### 🔒 Private Browser
- **Scope:** Files tied to `$google_user`.
- **Filters:** ID/Title, Keyword, Date, Time.
- **Pagination:** 10 files per page.
- **Routing:**  
  ```
  print_view.php?owner={OWNER_ID}&file={FILE_BASENAME}
  ```

### 🌐 Public Browser
- **Scope:** Latest file per publisher directory.
- **Publisher Filter:** Dropdown + refine input.
- **Empty Nodes:** Show “NO FILE AVAILABLE” cards.
- **Pagination:** 10 publishers per page.

---

## 📄 Payload Schema
Every JSON payload must include core keys:
```json
{
  "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "slug": "alpha-router-node",
  "title": "Alpha Core Network Hub",
  "description": "Primary multi-tenant data routing node."
}
```

---

## 🩺 Diagnostics (`diagnostic_uplink.php`)
```php
header('Content-Type: text/plain');
echo "=== AVIS DATALAKE ENGINE DIAGNOSTIC UPLINK STATUS ===\n\n";
include_once("UniversalRoot.php");

if (is_dir($user_dir)) {
  echo "└─ [SUCCESS] Tenant folder space mapped.\n";
  $profiles = glob($user_dir . '*', GLOB_ONLYDIR);
  echo "   └─ Active Profiles: " . count($profiles) . "\n";
} else {
  echo "└─ [ERROR] Target path not found.\n";
}
```

---

## 🎛️ Advanced Search Controls
- **Global Search Box:** Matches filename substrings.  
- **Dropdown Selectors:** Populated dynamically from `$uniqueParts`.  
- **Refine Inputs:** Manual entry for precise filtering.  
- **Pagination Links:** Built with `http_build_query($queryParams)` to preserve filters.

---

## ✅ Best Practices
- Always call `clearstatcache()` before sorting.  
- Normalize filenames with `str_replace('-', '_', $name)`.  
- Skip empty folders to avoid “No records found.”  
- Use `DIRECTORY_SEPARATOR` for cross‑platform safety.  
