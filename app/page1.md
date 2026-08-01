Here’s a **brilliantly styled GitHub tutorial** for the AVIS Datalake Engine, presented as two massive consecutive README pages. They combine technical depth with educational clarity, so developers can learn and deploy with confidence.

---

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
