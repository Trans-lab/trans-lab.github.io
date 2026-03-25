#!/usr/bin/env python3
import re

# Read the HTML file
with open('publications.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Define PDF additions based on filename analysis
pdf_additions = [
    # (title pattern, pdf filename)
    ("GenAI as a translation assistant", "genai_translation_assistant.pdf"),
    ("Unravelling the stylistic nuances", "unravelling_stylistic_nuances.pdf"),
    ("How do students engage with parallel corpora", "how_do_students.pdf"),
    ("Analyzing research trends in localization", "localization_trends_review.pdf"),
    ("人工智能时代的外语与翻译教育", "foreign_language_translation_ai.pdf"),
]

added_count = 0

for title_pattern, pdf_file in pdf_additions:
    # Find the publication item with this title
    pattern = rf'(<div class="pub-title">{re.escape(title_pattern)}[^<]*</div>.*?<div class="pub-journal">.*?</div>)\s*</div>\s*</div>'

    def add_pdf_link(match):
        global added_count
        content = match.group(1)
        # Check if pub-actions already exists
        if 'pub-actions' not in content:
            added_count += 1
            return f'''{content}
                            <div class="pub-actions">
                                <a href="file/{pdf_file}" class="pub-link" target="_blank">
                                    <i class="fas fa-file-pdf"></i> PDF
                                </a>
                            </div>
                        </div>
                    </div>'''
        return match.group(0)

    html = re.sub(pattern, add_pdf_link, html, flags=re.DOTALL)

# Write back
with open('publications.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Added {added_count} PDF links")
