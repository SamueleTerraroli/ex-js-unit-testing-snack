function getInitials(fullName) {
    const [name, surname] = fullName.split(" ").filter(str => str !== '');
    return `${name.charAt(0).toUpperCase()}${surname.charAt(0).toUpperCase()}`
}

function createSlug(string) {
    return string.toLowerCase()
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
module.exports = {
    getInitials,
    createSlug,
    average
}