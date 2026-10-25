"""Rebuild inline styles after editing theme-custom.css or the vendored theme."""
from pathlib import Path
import re

root = Path(__file__).resolve().parent
css = (root / "vendor/minimal-light.css").read_text(encoding="utf-8")
css += "\n" + (root / "theme-custom.css").read_text(encoding="utf-8")
page = root / "index.html"
html = page.read_text(encoding="utf-8")
html, count = re.subn(r'(<style id="minimal-light-theme">)[\s\S]*?(</style>)', lambda m: m[1] + "\n" + css + "\n" + m[2], html)
assert count == 1, "Expected exactly one inline theme block"
page.write_text(html, encoding="utf-8")
