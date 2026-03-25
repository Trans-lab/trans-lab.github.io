#!/bin/bash

# List all PDFs in file directory
echo "=== All PDFs in file/ directory ==="
cd /Users/a966/.openclaw/workspace-webdesign/trans-lab-site/file
find . -name "*.pdf" -type f | grep -v CV | sed 's|^\./||' | sort > /tmp/all_pdfs.txt
cat /tmp/all_pdfs.txt | wc -l
echo ""

# Extract PDFs already linked in publications.html
echo "=== PDFs already linked in publications.html ==="
cd /Users/a966/.openclaw/workspace-webdesign/trans-lab-site
grep -o 'href="file/[^"]*\.pdf"' publications.html | sed 's/href="file\///g' | sed 's/"//g' | sort > /tmp/linked_pdfs.txt
cat /tmp/linked_pdfs.txt | wc -l
echo ""

# Find PDFs not yet linked
echo "=== PDFs NOT linked in publications.html ==="
comm -23 /tmp/all_pdfs.txt /tmp/linked_pdfs.txt
echo ""

# Count unlinked PDFs
echo "=== Summary ==="
echo "Total PDFs in file/: $(wc -l < /tmp/all_pdfs.txt)"
echo "PDFs linked in HTML: $(wc -l < /tmp/linked_pdfs.txt)"
echo "PDFs NOT linked: $(comm -23 /tmp/all_pdfs.txt /tmp/linked_pdfs.txt | wc -l)"
