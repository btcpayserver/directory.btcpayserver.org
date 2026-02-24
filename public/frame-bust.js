"use strict";

// Fallback clickjacking mitigation for hosts where response headers
// cannot be enforced. Header-based frame-ancestors/XFO is still preferred.
if (window.top && window.top !== window.self) {
  try {
    window.top.location = window.self.location.href;
  } catch {
    window.self.location = window.self.location.href;
  }
}
