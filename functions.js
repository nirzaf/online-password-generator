function generatePassword() {
    const length = document.getElementById('password-length').value;
    const includeSpecial = document.getElementById('include-special').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;

    document.getElementById('password').value = generateRandomString(length, includeSpecial, includeNumbers, includeUppercase, includeLowercase);
    document.getElementById('password-label').textContent = 'Password generated';
    document.getElementById('copyButton').textContent = 'Copy to Clipboard';
    document.getElementById('copyButton').disabled = false;
    document.getElementById('copyButton').style.backgroundColor = '#4caf50';
    document.getElementById('viewPassword').disabled = false;
}

function copyToClipboard() {
    const password = document.getElementById('password').value;
    const textArea = document.createElement('textarea');
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    document.getElementById('copyButton').textContent = 'Password Copied';
    document.getElementById('copyButton').disabled = true;
    document.getElementById('copyButton').style.backgroundColor = '#4a4d4b';
}

function generateBackupVersion() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    document.getElementById('backup-version').value = `backup-version-${year}.${month}.${day}.${hours}.${minutes}.${seconds}`;
    document.getElementById('backup-label').textContent = 'Backup version generated';
    copyBackupVersionToClipboard();
}

function copyBackupVersionToClipboard() {
    const backupPassword = document.getElementById('backup-version').value;
    const textArea = document.createElement('textarea');
    textArea.value = backupPassword;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

function generateRandomString(length, includeSpecial, includeNumbers, includeUppercase, includeLowercase) {
    let allCharacters = '';
    let result = '';

    if (includeSpecial) {
        allCharacters += '!@#$%^&*()_-+=<>?/[]{},.';
    }
    if (includeNumbers) {
        allCharacters += '0123456789';
    }
    if (includeUppercase) {
        allCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercase) {
        allCharacters += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (allCharacters === '') {
        return 'No characters selected';
    }

    // Add one character from each selected category
    if (includeSpecial) {
        result += '!@#$%^&*()_-+=<>?/[]{},.'[Math.floor(Math.random() * '!@#$%^&*()_-+=<>?/[]{},.'.length)];
    }
    if (includeNumbers) {
        result += '0123456789'[Math.floor(Math.random() * '0123456789'.length)];
    }
    if (includeUppercase) {
        result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.length)];
    }
    if (includeLowercase) {
        result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 'abcdefghijklmnopqrstuvwxyz'.length)];
    }

    for (let i = result.length; i < length; i++) {
        result += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    result = result.split('');
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result.join('');
}

function viewPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('viewPassword').textContent = 'Hide Password';
    } else {
        x.type = "password";
        document.getElementById('viewPassword').textContent = 'View Password';
    }
}

const lightTheme = {
    background: '#ffffff',
    text: '#000000',
    inputBackground: '#f0f0f0',
    buttonBackground: '#4CAF50',
    buttonText: '#ffffff'
};

const darkTheme = {
    background: '#333333',
    text: '#ffffff',
    inputBackground: '#555555',
    buttonBackground: '#4CAF50',
    buttonText: '#ffffff'
};

let currentTheme = lightTheme;

const GlobalStyles = styled.createGlobalStyle`
    body {
      background-color: ${props => props.theme.background};
      color: ${props => props.theme.text};
      transition: all 0.3s ease;
    }

    input, select {
      background-color: ${props => props.theme.inputBackground};
      color: ${props => props.theme.text};
    }

    button {
      background-color: ${props => props.theme.buttonBackground};
      color: ${props => props.theme.buttonText};
    }
`;

function applyTheme(theme) {
    currentTheme = theme;
    const root = document.documentElement;
    Object.keys(theme).forEach(key => {
      root.style.setProperty(`--${key}`, theme[key]);
    });
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    document.getElementById('darkModeToggle').className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}

// Apply initial theme
applyTheme(lightTheme);

// Render global styles
const globalStyles = GlobalStyles``;
document.head.appendChild(globalStyles);