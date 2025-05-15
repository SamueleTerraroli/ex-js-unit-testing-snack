const { getInitials, createSlug, average, isPalindrome } = require("./snacks.js")


//snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Samuele Terraroli")).toBe("ST")
    expect(getInitials("marco bianchi")).toBe("MB")
    expect(getInitials("mario   rossi")).toBe("MR")
})


//snack2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao")).toBe("ciao")
    expect(createSlug("Come Stai?")).toBe("come-stai?")
})


//snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([10, 20])).toBe(15)
    expect(average([10, 20, 30, 40, 50])).toBe(30)
    expect(average([0, 20, 30, 40, 50])).toBe(28)
    expect(() => average([0, 20, '30', 40, 50])).toThrow()
})

//snack 4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
})


// snack 5
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("osso")).toBeTruthy()
    expect(isPalindrome("samuele")).toBeFalsy()
})