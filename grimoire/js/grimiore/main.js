// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");


// factory function to create spells
const createSpell = (name, evil, energy) => {
    return {
        Name: name,
        IsEvil: evil,
        EnergyRequired: energy,
    };
};

const GetAllSpells = () => {
    const spells = [
        createSpell("Turn enemy into a newt", true, 5.1),
        createSpell("Conjure some gold for a local charity", false, 2.99),
        createSpell("Give a deaf person the ability to heal", false, 12.2),
        createSpell("Make yourself emperor of the universe", true, 100.0),
        createSpell("Convince your relatives your political views are correct", false, 2921.5)
    ]
    return spells
}

//assigned the result of GetAllSpells() to a variable
const allSpells = GetAllSpells()


const MakeGoodSpellBook = (allSpells) => {
    return {
        // returning an object with the title key
        Title: "Good Book",
        // and spell key which has an array of objects
        // filter checks for truthy value and shows only those that match (! inverts the statement, which in this case are not evil) resulting in an array that matches the filter
        Spells: allSpells.filter((spell) => !spell.IsEvil)
    }

}

const MakeEvilSpellBook = (allSpells) => {
    return {
        // returning an object with the title key
        Title: "Evil Book",
        // and spell key which has an array of objects
        // filter checks for truthy value and shows only those that match, resulting in an array that matches the filter
        Spells: allSpells.filter((spell) => spell.IsEvil)
    }

}

const displaySpellBooks = (book) => {
    console.log(book.Title)
    // for each spell inside the spells array on our book (parameter from the Make____SpellBook, console.log the spell.Name)
    for (const spell of book.Spells) {
        console.log(`  ${spell.Name}`);


    }

};

displaySpellBooks(MakeGoodSpellBook(allSpells));
console.log("");
displaySpellBooks(MakeEvilSpellBook(allSpells));
