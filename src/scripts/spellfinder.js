const spellFinder = (str, spellList) => {
  return spellList
    .filter(spell => spell.spell.toLowerCase().includes(str.toLowerCase()))
    .map(spell => spell.spell);
  // appendSpells(returnSpells);
};

const pullSpell = (str, obj) => obj.filter(thing => thing.spell === str);

module.exports = { spellFinder, pullSpell };
