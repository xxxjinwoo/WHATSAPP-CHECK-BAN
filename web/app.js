// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}

// Install prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt();
});

function showInstallPrompt() {
    const formContainer = document.querySelector('.form-container');
    const prompt = document.createElement('div');
    prompt.className = 'install-prompt';
    prompt.innerHTML = `
        <span>📱 Installer l'application sur votre téléphone</span>
        <button id="installBtn">Installer</button>
    `;
    formContainer.insertBefore(prompt, formContainer.firstChild);

    document.getElementById('installBtn').addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('PWA installée');
                }
                deferredPrompt = null;
                prompt.remove();
            });
        }
    });
}

// Éléments du DOM
const phoneInput = document.getElementById('phoneInput');
const checkBtn = document.getElementById('checkBtn');
const resultCard = document.getElementById('resultCard');
const resultContent = document.getElementById('resultContent');
const newCheckBtn = document.getElementById('newCheckBtn');

// Event Listeners
checkBtn.addEventListener('click', checkBanStatus);
newCheckBtn.addEventListener('click', resetForm);
phoneInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkBanStatus();
});

// Valider le numéro de téléphone
function validatePhoneNumber(phone) {
    // Accepte les formats: +33612345678, 0612345678, +1234567890
    const cleaned = phone.replace(/[^0-9+]/g, '');
    return cleaned.length >= 10 && (cleaned.startsWith('+') || cleaned.startsWith('0'));
}

// Nettoyer le numéro
function cleanPhoneNumber(phone) {
    return phone.replace(/[^0-9+]/g, '');
}

// Vérifier le statut de ban
async function checkBanStatus() {
    const phone = phoneInput.value.trim();

    if (!phone) {
        showError('Veuillez entrer un numéro de téléphone');
        return;
    }

    if (!validatePhoneNumber(phone)) {
        showError('Format de numéro invalide. Utilisez +33XXXXXXXXX ou 0XXXXXXXXX');
        return;
    }

    // Afficher le chargement
    checkBtn.disabled = true;
    checkBtn.classList.add('loading');
    resultCard.classList.add('hidden');

    try {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1500));

        const result = analyzeBanStatus(cleanPhoneNumber(phone));
        showResult(result, phone);
    } catch (error) {
        showError('Erreur lors de la vérification. Veuillez réessayer.');
    } finally {
        checkBtn.disabled = false;
        checkBtn.classList.remove('loading');
    }
}

// Analyser le statut de ban
function analyzeBanStatus(phone) {
    // Simulation de vérification basée sur différents critères
    const hash = phone.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a; // Convert to 32bit integer
    }, 0);

    const patterns = {
        banned: [
            { pattern: /^\+33(666|777|888)/i, reason: 'Numéro détecté comme spam' },
            { pattern: /0{4,}/, reason: 'Format suspecte détecté' },
            { pattern: /123456/, reason: 'Numéro test détecté' }
        ],
        warning: [
            { pattern: /^\+\d{1,2}9{2,}/, reason: 'Numéro potentiellement problématique' },
            { pattern: /^0[1-2]/, reason: 'Nécessite une vérification supplémentaire' }
        ]
    };

    // Vérifier les patterns bannissants
    for (let item of patterns.banned) {
        if (item.pattern.test(phone)) {
            return {
                status: 'banned',
                icon: '❌',
                title: 'Compte banni',
                message: item.reason,
                type: 'error'
            };
        }
    }

    // Vérifier les patterns d'avertissement
    for (let item of patterns.warning) {
        if (item.pattern.test(phone)) {
            return {
                status: 'warning',
                icon: '⚠️',
                title: 'Avertissement',
                message: item.reason,
                type: 'warning'
            };
        }
    }

    // Hash-based random result pour les autres
    const random = Math.abs(hash) % 100;
    if (random < 15) { // 15% de chance d'être banni
        return {
            status: 'banned',
            icon: '❌',
            title: 'Compte banni',
            message: 'Votre compte WhatsApp a été banni. Contactez le support WhatsApp pour plus d\'informations.',
            type: 'error'
        };
    } else if (random < 30) { // 15% de chance d'avertissement
        return {
            status: 'warning',
            icon: '⚠️',
            title: 'Avertissement',
            message: 'Votre compte est sous surveillance. Évitez les activités suspectes.',
            type: 'warning'
        };
    }

    // Sinon, compte actif
    return {
        status: 'active',
        icon: '✅',
        title: 'Compte actif',
        message: 'Votre compte WhatsApp est actif et fonctionnel.',
        type: 'success'
    };
}

// Afficher le résultat
function showResult(result, phone) {
    resultCard.classList.remove('hidden');
    resultContent.className = `result-content ${result.type}`;

    const statusColor = {
        'success': 'var(--success)',
        'error': 'var(--error)',
        'warning': 'var(--warning)'
    }[result.type] || 'var(--gray)';

    resultContent.innerHTML = `
        <div class="result-status">${result.icon}</div>
        <div class="result-title">${result.title}</div>
        <div class="result-message">${result.message}</div>
        <div class="result-details">
            <strong>Numéro vérifié:</strong> ${maskPhoneNumber(phone)}<br>
            <strong>Date de vérification:</strong> ${new Date().toLocaleString('fr-FR')}
        </div>
    `;

    // Scroll vers le résultat
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Afficher une erreur
function showError(message) {
    resultCard.classList.remove('hidden');
    resultContent.className = 'result-content warning';
    resultContent.innerHTML = `
        <div class="result-status">⚠️</div>
        <div class="result-title">Erreur</div>
        <div class="result-message">${message}</div>
    `;
}

// Masquer le numéro de téléphone
function maskPhoneNumber(phone) {
    const visible = 4;
    return phone.substring(0, visible) + '*'.repeat(phone.length - visible);
}

// Réinitialiser le formulaire
function resetForm() {
    phoneInput.value = '';
    resultCard.classList.add('hidden');
    phoneInput.focus();
}

// Focus automatique sur l'input
window.addEventListener('load', () => {
    phoneInput.focus();
});

// Enregistrer les vérifications localement
function saveCheckHistory(phone, result) {
    try {
        const history = JSON.parse(localStorage.getItem('checkHistory') || '[]');
        history.push({
            phone: maskPhoneNumber(phone),
            result: result.status,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('checkHistory', JSON.stringify(history.slice(-10))); // Garder les 10 derniers
    } catch (e) {
        console.log('Erreur localStorage:', e);
    }
}

// Patch: sauvegarder après résultat
const originalShowResult = showResult;
showResult = function(result, phone) {
    originalShowResult(result, phone);
    saveCheckHistory(phone, result);
};