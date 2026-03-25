#!/bin/bash
# Script to match PDF files with publications

cd /Users/a966/.openclaw/workspace-webdesign/trans-lab-site

# List all PDF files
echo "Available PDF files:"
find file/ -name "*.pdf" | grep -v "CV" | sort

echo ""
echo "Total PDF count (excluding CVs):"
find file/ -name "*.pdf" | grep -v "CV" | wc -l
