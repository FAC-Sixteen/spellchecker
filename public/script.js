const searchQuery = document.querySelector(".spells__input");
const spellList = document.querySelector(".spells__list");
const outputDisplay = document.querySelector(".output__display");

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
    button.addEventListener("click", () => spellHandler(button.textContent));
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

const renderSpellInfo = spell => {
  console.log(spell);
  outputDisplay.innerHTML = "";

  console.log(outputDisplay);
  const name = document.createElement("li");
  name.textContent = `Name: ${spell.spell}`;
  outputDisplay.appendChild(name);
  const type = document.createElement("li");
  type.textContent = `Type: ${spell.type}`;
  outputDisplay.appendChild(type);
  const effect = document.createElement("li");
  effect.textContent = `Effect: ${spell.effect}`;
  outputDisplay.appendChild(effect);
  outputDisplay.classList.add(`${spell.type}`);
};

const pullSpell = (str, obj) => obj.filter(thing => thing.spell === str);

const spellHandler = spell => {
  searchQuery.value = spell;
  spellList.innerHTML = "";

  console.log(spell);
  const spellName = properCaser(spell);
  console.log(spellName);
  fetch("/spells")
    .then(response => response.json())
    .then(json => pullSpell(spellName, json))
    .then(spell => renderSpellInfo(spell[0]));
};

searchQuery.oninput = inputHandler;
