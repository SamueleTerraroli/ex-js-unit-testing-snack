const { getInitials } = require("./snacks.js")


//snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Samuele Terraroli")).toBe("ST")
    expect(getInitials("marco bianchi")).toBe("MB")
    expect(getInitials("mario   rossi")).toBe("MR")
})