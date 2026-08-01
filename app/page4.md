

# 📘 AVIS Datalake Engine — README Tutorial Page 4

## 📄 Payload Schemas & System Verification

The AVIS Datalake Engine requires structured JSON payloads to ensure consistent metadata parsing and browser rendering.

---

### 📊 Standard JSON Schema
Every asset payload written to disk must populate these core keys:

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

This schema ensures that dropdown filters (ID/Title, Keyword, Date, Time) and metadata cards render correctly in both private and public browsers.

---

## 🩺 Diagnostic Uplink (`diagnostic_uplink.php`)

Deploy this validation script to test directory permissions, analyze platform readiness, and check file systems:

```php
<?php
/* AVIS-DIAGNOSTIC: diagnostic_uplink.php */
header('Content-Type: text/plain');
echo "=== AVIS DATALAKE ENGINE DIAGNOSTIC UPLINK STATUS ===\n\n";

include_once("UniversalRoot.php");

echo "Config Validation:\n";
echo "├─ Engine Core Status: " . (isset($avis_ini['SESSION_ON']) ? "ONLINE" : "OFFLINE") . "\n";
echo "├─ Scan Target Path:  " . ($user_dir ?? 'ERROR: NOT DEFINED') . "\n";
echo "└─ Subfolder Route:   " . ($user_loc ?? 'ERROR: NOT DEFINED') . "\n\n";

echo "Storage Node Discovery:\n";
if (is_dir($user_dir)) {
    echo "└─ [SUCCESS] Tenant folder space successfully mapped.\n";
    $profiles = glob($user_dir . '*', GLOB_ONLYDIR);
    echo "   └─ Active Profiles Loaded: " . count($profiles) . " users registered.\n";
} else {
    echo "└─ [CRITICAL ERROR] Target path not found. Verify your environment directory structure.\n";
}
```

---

## 🎛️ Advanced Search Controls

The AVIS Datalake Engine surfaces backend assets through two distinct user interfaces, featuring advanced filtering options and consistent pagination controls.

### 🔒 Private Browser Workspace (`private_browser_result.php`)
- **Security Context:** Limits asset visibility to files matching the active `$google_user`.  
- **Advanced Multi‑Field Filters:**  
  - **Global Search Box:** Scans full string patterns across filenames.  
  - **Unified Column Selectors:** Dropdown lists generated dynamically via array map blocks.  
  - **Manual Refinement Fields:** Direct entry text blocks let you filter dates using `YYYYMMDD`.  
- **Routing Link Engine:**  
  ```
  print_view.php?owner={OWNER_ID}&file={FILE_BASENAME}
  ```

### 🌐 Public Browser Grid Portal (`public_browser.php`)
- **System Context:** Aggregates records across all registered user folders.  
- **Publisher Selection Layer:** Adds a master **Publisher / Username** filter tier.  
- **Empty Node Error Gating:** Displays **`NO FILE AVAILABLE`** cards for profiles without JSON payloads.  
- **Pagination:** 10 publishers per page, preserving query parameters.

---

## ✅ Best Practices
- Always call `clearstatcache()` before sorting directories.  
- Normalize filenames with `str_replace('-', '_', $name)` to unify filters.  
- Skip empty folders to avoid “No records found.”  
- Use `DIRECTORY_SEPARATOR` for cross‑platform safety.  
- Preserve filter state across pagination using `http_build_query($queryParams)`.
