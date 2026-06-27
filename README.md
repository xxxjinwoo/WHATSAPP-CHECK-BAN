# WhatsApp Check Ban

Application Android pour vérifier le statut de ban d'un compte WhatsApp.

## Fonctionnalités

- ✅ Vérification du statut de ban WhatsApp
- ✅ Interface utilisateur intuitive et moderne
- ✅ Support des numéros internationaux
- ✅ Affichage des résultats en temps réel
- ✅ Gestion des erreurs

## Prérequis

- Android Studio (Flamingo ou plus récent)
- JDK 11 ou supérieur
- Android SDK 21+ (minimum)
- Target SDK 34

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/xxxjinwoo/WHATSAPP-CHECK-BAN.git
cd WHATSAPP-CHECK-BAN
```

### 2. Ouvrir dans Android Studio

- Ouvrir Android Studio
- File → Open → Sélectionner le dossier du projet
- Attendre que Gradle se synchronise

### 3. Compiler et générer l'APK

#### Via Android Studio:

1. Build → Build Bundle(s) / APK(s) → Build APK(s)
2. L'APK se trouvera dans: `app/build/outputs/apk/debug/app-debug.apk`

#### Via Terminal:

```bash
./gradlew assembleDebug
```

L'APK de debug sera généré dans:
```
app/build/outputs/apk/debug/app-debug.apk
```

Pour générer un APK de release:
```bash
./gradlew assembleRelease
```

## Structure du Projet

```
WHATSAPP-CHECK-BAN/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/example/whatsappcheckban/
│   │       │       └── MainActivity.kt
│   │       ├── res/
│   │       │   ├── drawable/
│   │       │   ├── layout/
│   │       │   ├── values/
│   │       │   └── ...
│   │       └── AndroidManifest.xml
│   └── build.gradle
├── build.gradle
├── settings.gradle
└── README.md
```

## Dépendances

- `androidx.appcompat:appcompat:1.6.1`
- `com.google.android.material:material:1.9.0`
- `androidx.constraintlayout:constraintlayout:2.1.4`
- `com.squareup.okhttp3:okhttp:4.11.0`
- `com.google.code.gson:gson:2.10.1`
- `org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.1`
- `androidx.lifecycle:lifecycle-runtime-ktx:2.6.1`

## Utilisation

1. Entrez un numéro de téléphone au format international (ex: +33612345678)
2. Cliquez sur "Vérifier le statut de ban"
3. L'application affichera le statut du compte

## Permissions

L'application demande les permissions suivantes:

- `INTERNET` - Pour accéder aux services de vérification
- `ACCESS_NETWORK_STATE` - Pour vérifier la connexion internet

## Génération de l'APK - Guide Complet

### Méthode 1: Android Studio GUI

1. **Menu Build**
   - Cliquer sur `Build` dans la barre de menu
   - Sélectionner `Build Bundle(s) / APK(s)`
   - Cliquer sur `Build APK(s)`

2. **Attendre la compilation**
   - Vous verrez une notification à la fin

3. **Localiser l'APK**
   - Cliquer sur `Locate` dans la notification
   - Ou aller à: `app/build/outputs/apk/debug/app-debug.apk`

### Méthode 2: Terminal (Linux/Mac)

```bash
# Debug APK
./gradlew assembleDebug

# Release APK (demande de keystore)
./gradlew assembleRelease

# View APK path
find app/build/outputs -name "*.apk"
```

### Méthode 3: Terminal (Windows)

```batch
REM Debug APK
gradlew.bat assembleDebug

REM Release APK
gradlew.bat assembleRelease
```

## Installation sur un appareil

### Avec Android Studio:

1. Connectez votre appareil Android via USB
2. Run → Run 'app'

### Avec ADB (Android Debug Bridge):

```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

## Dépannage

### Erreur: "SDK not found"
- Ouvrir Android Studio Settings
- SDK Manager → Installer SDK 34

### Erreur: "Gradle sync failed"
- File → Sync Now
- Ou utiliser: `./gradlew --refresh-dependencies`

### L'app crash au démarrage
- Vérifier que les permissions sont bien déclarées dans AndroidManifest.xml
- Vérifier les logs: `adb logcat`

## Notes de sécurité

⚠️ **IMPORTANT**: Cette application est à des fins de démonstration. Les vérifications de ban sont simulées. Pour une utilisation en production, il faudrait:

- Intégrer une API WhatsApp officielle
- Implémenter une authentification sécurisée
- Ajouter du chiffrement pour les données sensibles

## Contributions

Les contributions sont bienvenues! N'hésitez pas à:
1. Fork le projet
2. Créer une branche (`git checkout -b feature/Amelioration`)
3. Commit vos changements (`git commit -am 'Ajouter une amélioration'`)
4. Push vers la branche (`git push origin feature/Amelioration`)
5. Créer une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

**Développé avec ❤️ pour Android**
