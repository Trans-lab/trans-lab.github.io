# Add PDF links for matched papers

# GenAI as a translation assistant
/<div class="pub-title">GenAI as a translation assistant.*<\/div>/,/<\/div>/ {
  /<\/div>/ {
    s|</div>|</div>\n                            <div class="pub-actions">\n                                <a href="file/genai_translation_assistant.pdf" class="pub-link" target="_blank">\n                                    <i class="fas fa-file-pdf"></i> PDF\n                                </a>\n                            </div>|
    t end
    :end
  }
}

# Unravelling stylistic nuances
/<div class="pub-title">Unravelling the stylistic nuances.*<\/div>/,/<\/div>/ {
  /<div class="pub-actions">/!{
    /<\/div>/ {
      s|</div>|</div>\n                            <div class="pub-actions">\n                                <a href="file/unravelling_stylistic_nuances.pdf" class="pub-link" target="_blank">\n                                    <i class="fas fa-file-pdf"></i> PDF\n                                </a>\n                            </div>|
    }
  }
}

