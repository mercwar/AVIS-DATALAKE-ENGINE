  <a href="page2.md" style="margin:0 10px; text-decoration:none;">⬅️ Back</a>
 <a href="../README.md" style="margin:0 10px; text-decoration:none;">🏠 Home</a>
  <a href="page4.md" style="margin:0 10px; text-decoration:none;">➡️ Forward</a>
    <a href="readme.md" style="margin:0 10px; text-decoration:none;">⚡ CVBGod</a>

# 📘 AVIS Datalake Engine — README Tutorial Page 3

## 📁 Storage Architecture & Directory Traversal Protocols

The AVIS Datalake Engine relies on **predictable tokenized pathing layouts** and strict array‑cleansing loops to translate raw disk assets into filterable client UI blocks.

---

## ⚙️ Path Traversal Rules & Standardizations

### 🔑 Rule 1: Tenant Root Discovery
All user profiles are discovered inside the master tenant root:
```php
$search_pattern = rtrim($public_root, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . '*';
$userDirs = glob($search_pattern, GLOB_ONLYDIR);
```

### 🔑 Rule 2: Safe Loop Validation
Immediately validate glob results to avoid runtime crashes:
```php
if ($userDirs === false) {
    $userDirs = [];
}
```

### 🔑 Rule 3: Modification‑Time Sorting
Sort directories by last modified timestamp to surface the most active tenants:
```php
clearstatcache();
usort($userDirs, fn($a,$b) => filemtime($b) <=> filemtime($a));
```

---

## 🗂️ File Discovery & Filtering

### Step 1: Build Inner Path
```php
$inner_path = rtrim($dir, '/') . '/' . ltrim($user_loc, '/') . '*.json';
```

### Step 2: Skip Empty Nodes
```php
if (empty($jsonFiles)) { continue; }
```

### Step 3: Store Newest File
```php
usort($jsonFiles, fn($a,$b) => filemtime($b) <=> filemtime($a));
$recentFiles[$folderName] = $jsonFiles[0];
```

---

## 🔍 Browser Interface Controls

### Private Browser
- **Scope:** `$google_user` only.  
- **Filters:** ID/Title, Keyword, Date, Time.  
- **Pagination:** 10 files per page.  
- **Routing:** `print_view.php?owner=$google_user&file=<basename>`.

### Public Browser
- **Scope:** Latest file per publisher.  
- **Publisher Filter:** Dropdown + refine input.  
- **Empty Nodes:** Show “NO FILE AVAILABLE.”  
- **Pagination:** 10 publishers per page.  

---

## 🧪 Example Workflow

1. **User Uploads JSON File** → `node_alpha_router_20260801_051700.json`  
2. **Engine Discovers File** → via `$inner_path` glob.  
3. **Browser Displays Metadata Card** → Title, Description, View Details link.  
4. **Review Form Renders Full Schema** → Identity, Architecture, Storage, Security, Contact.  

---

# 📘 AVIS Datalake Engine — README Tutorial Page 4

## 📄 Payload Schemas & Diagnostics

### 📊 Standard JSON Schema
```json
{
  "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "slug": "alpha-router-node",
  "title": "Alpha Core Network Hub",
  "description": "Primary multi-tenant data routing node.",
  "architecture": "x86_64",
  "os": "linux",
  "cpu": "min-8-core",
  "db": "vector-redis",
  "version": "1.0.4-build",
  "architect": "admin@rru.intelligent.net"
}
```

---

### 🩺 Diagnostic Uplink (`diagnostic_uplink.php`)
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
