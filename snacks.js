function getInitials(fullName) {
    const [name, surname] = fullName.split(" ").filter(str => str !== '');
    return `${name.charAt(0).toUpperCase()}${surname.charAt(0).toUpperCase()}`
}

function createSlug(string) {
    if (!string) {
        throw new Error('Titolo non valido')
    }
    return string.toLowerCase().replaceAll(" ", "-")
}

function average(num) {
    num.forEach(numero => {
        if (typeof numero !== "number" || isNaN(numero)) {
            throw new Error("Inserire solo numeri!");
        }
    });
    const somma = num.reduce((acc, numero) => acc + numero, 0);
    return somma / num.length;
}

function isPalindrome(word) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}