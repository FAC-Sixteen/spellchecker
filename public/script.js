const spells = [
  {
    _id: "5b74ebd5fb6fc0739646754c",
    spell: "Aberto",
    type: "Jinx",
    effect: "opens objects"
  },
  {
    _id: "5b74ecfa3228320021ab622b",
    spell: "Accio",
    type: "Charm",
    effect: "Summons an object",
    __v: 0
  },
  {
    _id: "5b74ed2f3228320021ab622c",
    spell: "Age Line",
    type: "Enchantment",
    effect: "Hides things from younger people",
    __v: 0
  },
  {
    _id: "5b74ed453228320021ab622d",
    spell: "Aguamenti",
    type: "Curse",
    effect: "shoots water from wand",
    __v: 0
  }
];

const searchQuery = document.querySelector(".spells__input");
const spellList = document.querySelector(".spells__list");

const spellFinder = (str, obj) => {
  if (str.length === 0) {
    spellList.innerHTML = "";
    return;
  }
  const lowerNames = obj.map(item => item.spell.toLowerCase());
  let returnSpells = [];
  lowerNames.forEach(spell => {
    if (spell.includes(str)) returnSpells.push(spell);
  });
  appendSpells(returnSpells);
};

const appendSpells = spells => {
  spellList.innerHTML = "";
  spells.forEach(spell => {
    const li = document.createElement("li");
    li.textContent = spell;
    spellList.appendChild(li);
  });
};

const inputHandler = e => {
  console.log("hai");
  const input = e.target.value;

  fetch("/spells")
    .then(response => response.json())
    .then(json => spellFinder(input, json));
  // console.log(e.target.value);
  // spellFinder(e.target.value, spells);
};

searchQuery.oninput = inputHandler;

// fetch('http://example.com/movies.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });
