const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snacks.js")

describe('manipolazione di stringhe', () => {

    //snack 1
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials("Samuele Terraroli")).toBe("ST")
        expect(getInitials("marco bianchi")).toBe("MB")
        expect(getInitials("mario   rossi")).toBe("MR")
    })

    // snack 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome("osso")).toBeTruthy()
        expect(isPalindrome("samuele")).toBeFalsy()
        expect(isPalindrome("I topi non avevano nipoti")).toBeTruthy()
    })
})

describe('operazioni su array', () => {
    //snack 3
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([10, 20])).toBe(15)
        expect(average([10, 20, 30, 40, 50])).toBe(30)
        expect(average([0, 20, 30, 40, 50])).toBe(28)
        expect(() => average([0, 20, '30', 40, 50])).toThrow()
    })
    const posts = [
        { id: 1, title: "Post numero 1" },
        { id: 2, title: "Post numero 2" },
        { id: 3, title: "Post numero 3" }
    ]



    //snack 7 
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 3)).toEqual({ id: 3, title: "Post numero 3" });
        expect(findPostById(posts, 25)).toBeNull();
        expect(() => findPostById(posts, "string")).toThrow("Passa un id corretto");
        expect(() => findPostById(10, 3)).toThrow("Array non corretto");
    });

})

describe('Generazione di slug', () => {

    //snack2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug("Ciao")).toBe("ciao")
        expect(createSlug("Come Stai?")).toBe("come-stai?")
    })




    //snack 4
    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
    })



    //snack 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow('Titolo non valido')
        expect(() => createSlug(null)).toThrow('Titolo non valido')
    })
})






