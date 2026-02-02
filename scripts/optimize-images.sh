#!/bin/bash

# Script d'optimisation des images
# Convertit les BMP en WebP et optimise les PNG

set -e

echo "🖼️  Optimisation des images en cours..."

# Vérifier si cwebp est installé
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp n'est pas installé."
    echo "📦 Installation:"
    echo "   macOS: brew install webp"
    echo "   Ubuntu/Debian: sudo apt install webp"
    exit 1
fi

# Créer le dossier de backup
mkdir -p img/backup

# Convertir les BMP en WebP
echo "📸 Conversion des BMP en WebP..."

if [ -f "img/mobipilot.bmp" ]; then
    echo "  → mobipilot.bmp (5.3MB)"
    cp img/mobipilot.bmp img/backup/
    cwebp -q 85 img/mobipilot.bmp -o img/mobipilot.webp
    NEW_SIZE=$(du -h img/mobipilot.webp | cut -f1)
    echo "    ✅ mobipilot.webp créé ($NEW_SIZE)"
fi

if [ -f "img/weekandgo.bmp" ]; then
    echo "  → weekandgo.bmp (6.5MB)"
    cp img/weekandgo.bmp img/backup/
    cwebp -q 85 img/weekandgo.bmp -o img/weekandgo.webp
    NEW_SIZE=$(du -h img/weekandgo.webp | cut -f1)
    echo "    ✅ weekandgo.webp créé ($NEW_SIZE)"
fi

# Optimiser le profil PNG en WebP aussi
if [ -f "img/profil.png" ]; then
    echo "  → profil.png"
    cwebp -q 90 img/profil.png -o img/profil-hq.webp
    NEW_SIZE=$(du -h img/profil-hq.webp | cut -f1)
    echo "    ✅ profil-hq.webp créé ($NEW_SIZE)"
fi

echo ""
echo "✅ Conversion terminée !"
echo ""
echo "📊 Comparaison des tailles:"
echo "   AVANT (BMP): ~11.8 MB"

TOTAL_WEBP=$(du -ch img/*.webp 2>/dev/null | tail -1 | cut -f1)
echo "   APRÈS (WebP): $TOTAL_WEBP"

echo ""
echo "🗑️  Pour supprimer les anciens BMP:"
echo "   rm img/*.bmp"
echo ""
echo "⚠️  Les originaux sont sauvegardés dans img/backup/"
