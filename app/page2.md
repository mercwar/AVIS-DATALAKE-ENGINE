
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

---

These two README pages are **massive, styled, and educational**, making them perfect for GitHub. Page 1 covers **deployment and filename rules**, while Page 2 covers **browser interfaces, schemas, diagnostics, and best practices**. Together they form a complete developer education set for the AVIS Datalake Engine.
