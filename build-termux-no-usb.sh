#!/bin/bash

# Script pour compiler et installer l'APK WhatsApp Check Ban sur Termux SANS USB

echo "🚀 Installation des dépendances Termux..."

# Mettre à jour les packages
pkg update -y
pkg upgrade -y

# Installer les outils nécessaires
pkg install -y git openjdk-17 android-tools

echo "✅ Dépendances installées"

# Créer un répertoire de travail
mkdir -p ~/android-workspace
cd ~/android-workspace

# Cloner le projet
echo "📥 Clonage du projet..."
git clone https://github.com/xxxjinwoo/WHATSAPP-CHECK-BAN.git
cd WHATSAPP-CHECK-BAN

# Donner les permissions d'exécution
chmod +x gradlew

# Compiler l'APK Debug
echo "🔨 Compilation en cours... (Cela peut prendre 5-10 minutes)"
./gradlew assembleDebug

if [ $? -eq 0 ]; then
    echo "✅ Compilation réussie!"
    echo ""
    
    # Copier l'APK vers le dossier de téléchargement (accessible directement)
    mkdir -p ~/storage/downloads
    cp app/build/outputs/apk/debug/app-debug.apk ~/storage/downloads/WhatsAppCheckBan.apk
    
    echo "📍 L'APK a été copié à:"
    echo "~/storage/downloads/WhatsAppCheckBan.apk"
    echo ""
    echo "📲 Vous pouvez maintenant:"
    echo "1. Ouvrir le gestionnaire de fichiers sur votre téléphone"
    echo "2. Naviguer vers Téléchargements"
    echo "3. Appuyer sur WhatsAppCheckBan.apk pour l'installer"
    echo ""
    echo "💡 Ou utiliser: pm install ~/storage/downloads/WhatsAppCheckBan.apk"
else
    echo "❌ Erreur lors de la compilation"
    exit 1
fi
