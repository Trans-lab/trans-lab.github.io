#!/usr/bin/env python3
"""
Match PDF files to journal articles based on filename patterns
"""

import re
from pathlib import Path

# Journal articles from CV (extracted titles)
journal_articles = [
    # 2026
    "Workflow matters: Comparing human translators and multi-agent LLMs in literary translation",
    "A bibliometric analysis of trends and developments in corpus translation studies (2015–2024)",
    "Quantifying Syntagmatic Patterning in Translated and Native Chinese: An R-Motif Approach Based on POS Sequences",
    
    # 2025
    "Syntactic complexity as a discriminator between machine and human interpreting: A machine-learning classification approach",
    "Enhancing EFL argumentative writing through an AI-powered corpus: Impact on learner writing proficiency",
    "Adapt or adopt? Examining the efficacy of ChatGPT in providing translation feedback",
    "Assessing lexical and syntactic simplification in translated English with entropy analysis",
    "What drives university students to use ChatGPT for translation? Disciplinary and experiential influences",
    "Language contact and translation: Dependency relations as a lens for source language influence in fiction",
    "GenAI as a translation assistant: Student engagement and ethical considerations",
    "Student engagement with AI translation tools: A mixed-methods study",
    "Syntactic complexity in Chinese EFL learners' writing: A corpus-based study",
    "The impact of directionality on syntactic complexity in interpreting",
    "Translation style and ideology: A corpus-based study",
    "Unravelling stylistic nuances in translated Chinese literature",
    
    # Earlier years (add more as needed)
]

# PDF files not yet linked
unlinked_pdfs = [
    "activity.pdf",
    "alpha_readability_chinese.pdf",
    "chongsu.pdf",
    "cognitive_constraints.pdf",
    "collaborative_argumentation.pdf",
    "corpora_translation_phenomena.pdf",
    "corpora_translation_review.pdf",
    "corporate_communication_complexity.pdf",
    "corpus_assisted_teaching2.pdf",
    "corpus_linguistics_translation.pdf",
    "corpus_translation_teaching.pdf",
    "eco_translation_criticism.pdf",
    "effects_of_directionality.pdf",
    "entropy_based_simplification_interpreting.pdf",
    "entropy_based_syntactic_tree.pdf",
    "entropy_discrimination.pdf",
    "epistemic_modality.pdf",
    "europeanization_cognitive_triggers.pdf",
    "extratextual_connective.pdf",
    "foreign_language_translation_ai.pdf",
    "genai_translation_assistant.pdf",
    "how_do_students.pdf",
    "impact_of_directionality.pdf",
    "intelligent_higher_education.pdf",
    "interactional_metadiscourse.pdf",
    "interactional_metadiscourse_translated.pdf",
    "interpreter_visibility.pdf",
    "learner_corpus_research.pdf",
    "lexical_complexity_efl_texts.pdf",
    "lexical_simplification.pdf",
    "linguistic_variations.pdf",
    "localization_trends_review.pdf",
    "machine_learning_corporate_reports.pdf",
    "metaphoricity_translation_strategies.pdf",
    "multi_word_expressions.pdf",
    "nominalization_study.pdf",
    "pervasiveness_of_corpora.pdf",
    "simplification_entropy.pdf",
    "style_in_speech.pdf",
    "sustainability_machine_translation.pdf",
    "syntactic_complexity_chinese.pdf",
    "syntactic_complexity_constrained.pdf",
    "syntactic_complexity_corpora.pdf",
    "syntactic_complexity_simplification.pdf",
    "syntactic_simplification.pdf",
    "translation_style_ideology.pdf",
    "translation_universals.pdf",
    "translators_style.pdf",
    "unravelling_stylistic_nuances.pdf",
    "word_lists_academic_textbooks.pdf",
]

def extract_keywords(filename):
    """Extract keywords from PDF filename"""
    # Remove .pdf extension and split by underscore
    name = filename.replace('.pdf', '')
    keywords = name.split('_')
    return set(keywords)

def calculate_match_score(pdf_name, title):
    """Calculate match score between PDF name and article title"""
    pdf_keywords = extract_keywords(pdf_name)
    title_lower = title.lower()
    
    score = 0
    for keyword in pdf_keywords:
        if keyword in title_lower:
            score += 1
    
    return score

# Try to match PDFs to articles
print("=" * 80)
print("PDF Matching Analysis")
print("=" * 80)
print()

matches = {}
for pdf in unlinked_pdfs:
    best_match = None
    best_score = 0
    
    for article in journal_articles:
        score = calculate_match_score(pdf, article)
        if score > best_score:
            best_score = score
            best_match = article
    
    if best_score >= 2:  # At least 2 keyword matches
        matches[pdf] = {
            'title': best_match,
            'score': best_score
        }
        print(f"✓ {pdf}")
        print(f"  → {best_match}")
        print(f"  Score: {best_score}")
        print()

print("=" * 80)
print(f"Matched {len(matches)} out of {len(unlinked_pdfs)} unlinked PDFs")
print("=" * 80)
