#!/bin/bash

# Extract titles from all unlinked PDFs
echo "Extracting titles from PDF files..."
echo "========================================"
echo ""

cd /Users/a966/.openclaw/workspace-webdesign/trans-lab-site/file

# List of unlinked PDFs
pdfs=(
"activity.pdf"
"alpha_readability_chinese.pdf"
"chongsu.pdf"
"cognitive_constraints.pdf"
"collaborative_argumentation.pdf"
"corpora_translation_phenomena.pdf"
"corpora_translation_review.pdf"
"corporate_communication_complexity.pdf"
"corpus_assisted_teaching2.pdf"
"corpus_linguistics_translation.pdf"
"corpus_translation_teaching.pdf"
"eco_translation_criticism.pdf"
"effects_of_directionality.pdf"
"entropy_based_simplification_interpreting.pdf"
"entropy_based_syntactic_tree.pdf"
"entropy_discrimination.pdf"
"epistemic_modality.pdf"
"europeanization_cognitive_triggers.pdf"
"extratextual_connective.pdf"
"foreign_language_translation_ai.pdf"
"genai_translation_assistant.pdf"
"how_do_students.pdf"
"impact_of_directionality.pdf"
"intelligent_higher_education.pdf"
"interactional_metadiscourse.pdf"
"interactional_metadiscourse_translated.pdf"
"interpreter_visibility.pdf"
"learner_corpus_research.pdf"
"lexical_complexity_efl_texts.pdf"
"lexical_simplification.pdf"
"linguistic_variations.pdf"
"localization_trends_review.pdf"
"machine_learning_corporate_reports.pdf"
"metaphoricity_translation_strategies.pdf"
"multi_word_expressions.pdf"
"nominalization_study.pdf"
"pervasiveness_of_corpora.pdf"
"simplification_entropy.pdf"
"style_in_speech.pdf"
"sustainability_machine_translation.pdf"
"syntactic_complexity_chinese.pdf"
"syntactic_complexity_constrained.pdf"
"syntactic_complexity_corpora.pdf"
"syntactic_complexity_simplification.pdf"
"syntactic_simplification.pdf"
"translation_style_ideology.pdf"
"translation_universals.pdf"
"translators_style.pdf"
"unravelling_stylistic_nuances.pdf"
"word_lists_academic_textbooks.pdf"
)

for pdf in "${pdfs[@]}"; do
    echo "FILE: $pdf"
    # Extract title from PDF metadata
    title=$(strings "$pdf" 2>/dev/null | grep -o "/Title([^)]*)" | head -1 | sed 's|/Title(||' | sed 's|)$||')
    
    if [ -n "$title" ]; then
        echo "TITLE: $title"
    else
        echo "TITLE: [Not found in metadata]"
        # Try to find title in first page text
        echo "Attempting to extract from content..."
        strings "$pdf" 2>/dev/null | head -50 | grep -i "abstract\|introduction" -A 2
    fi
    echo ""
done

echo "========================================"
echo "Extraction complete"
