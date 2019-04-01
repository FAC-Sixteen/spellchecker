const searchQuery = document.querySelector(".spells__input");
const spellList = document.querySelector(".spells__list");
const outputDisplay = document.querySelector(".output__display");

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
  outputDisplay.innerHTML = "";

  fetch(`/spells?search=${input}`)
    .then(response => response.json())
    .then(json => appendSpells(json));
};

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
  if (event.key === "ArrowDown") {
    event.preventDefault();
    focusChange(1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    focusChange(-1);
  }
});

const renderSpellInfo = spell => {
  outputDisplay.innerHTML = "";
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

const spellHandler = spell => {
  searchQuery.value = spell;
  spellList.innerHTML = "";
  fetch(`/search?search=${spell}`)
    .then(response => response.json())
    .then(json => renderSpellInfo(json[0]));
};

searchQuery.oninput = inputHandler;
