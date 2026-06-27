#!/bin/bash

# Script pour compiler l'APK WhatsApp Check Ban sur Termux

echo "🚀 Installation des dépendances Termux..."

# Mettre à jour les packages
pkg update -y
pkg upgrade -y

# Installer les outils nécessaires
pkg install -y git openjdk-17 android-tools wget curl

echo "✅ Dépendances installées"

# Créer un répertoire de travail
mkdir -p ~/android-workspace
cd ~/android-workspace

# Cloner le projet
echo "📥 Clonage du projet..."
git clone https://github.com/xxxjinwoo/WHATSAPP-CHECK-BAN.git
cd WHATSAPP-CHECK-BAN

# Télécharger Gradle (si nécessaire)
echo "📦 Configuration de Gradle..."

# Donner les permissions d'exécution
chmod +x gradlew

# Compiler l'APK Debug
echo "🔨 Compilation en cours... (Cela peut prendre 5-10 minutes)"
./gradlew assembleDebug

echo "✅ Compilation terminée!"
echo ""
echo "📍 L'APK se trouve à:"
echo "app/build/outputs/apk/debug/app-debug.apk"
echo ""
echo "📲 Pour installer: adb install app/build/outputs/apk/debug/app-debug.apk"
