const { getInitials, createSlug } = require("./snacks.js")


//snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Samuele Terraroli")).toBe("ST")
    expect(getInitials("marco bianchi")).toBe("MB")
    expect(getInitials("mario   rossi")).toBe("MR")
})


//snack2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao")).toBe("ciao")
    expect(createSlug("Come Stai?")).toBe("come stai?")
})