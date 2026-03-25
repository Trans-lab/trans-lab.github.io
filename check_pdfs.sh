#!/bin/bash
# Script to check PDF first pages and match with publications

cd /Users/a966/.openclaw/workspace-webdesign/trans-lab-site

echo "=== PDF Matching Task ==="
echo ""
echo "Total PDFs to check: $(find file/ -name "*.pdf" | grep -v "CV" | wc -l)"
echo ""
echo "Sample PDFs:"
find file/ -name "*.pdf" | grep -v "CV" | head -10

echo ""
echo "=== Task 2: Book Publisher Links ==="
echo "Books to search:"
echo "1. Corpus-Assisted Translation Teaching (Springer, 2020)"
echo "2. Translation and Interpreting in the Age of COVID-19 (Springer, 2023)"
echo "3. Dream of the Red Chamber (Routledge, 2023)"
echo "4. Corpora in Interpreting Studies (Routledge, 2023)"
echo "5. Translation Studies in the Age of AI (Routledge, 2025)"
echo "6. Technology and Interpreting (Routledge, 2026)"
echo "7. Quantitative Translation and Interpreting Studies (Springer, Forthcoming)"

echo ""
echo "=== Task 3: Bilingual Support ==="
echo "Need to add language switcher and Chinese translations"
