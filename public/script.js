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
  let ind = 0;
  spells.forEach(spell => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = spell;
    button.id = `spell-${ind}`;
    ind += 1;
    li.appendChild(button);
    spellList.appendChild(li);
  });
};

const inputHandler = e => {
  const input = e.target.value;

  fetch("/spells")
    .then(response => response.json())
    .then(json => spellFinder(input, json));
};

const properCaser = string => string.replace(/\b\w/g, l => l.toUpperCase());

const focusChange = num => {
  if (document.hasFocus) {
    const focusedThing = document.activeElement;
    const focusedThingId = focusedThing.id;
    let newFocusId = "";
    if (focusedThingId === "spells-input") {
      newFocusId = "spell-0";
    } else {
      focusedThing.classList.remove("selected");
      newFocusId =
        "spell-" + (parseInt(focusedThingId.replace("spell-", "")) + num);
    }
    const newFocus =
      newFocusId === "spell-NaN"
        ? document.querySelector("#spells-input")
        : document.querySelector(`#${newFocusId}`);
    newFocus.focus();
    newFocus.classList.add("selected");
  } else {
    searchQuery.focus();
  }
};

document.addEventListener("keydown", function(event) {
  if (event.which === 40) {
    event.preventDefault();
    focusChange(1);
  } else if (event.which === 38) {
    event.preventDefault();
    focusChange(-1);
  }
});

const getSpellInfo = spell => {};

searchQuery.oninput = inputHandler;
console.log(properCaser("wingardium leviosa"));
