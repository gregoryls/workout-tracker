export function toCamelCase(string) {
  // arrow function uses throwaway variable for the regex match,
  // capture group 0, as per replace() format
  return string.replace(/[-_\s](.)/g, (_, char) => char.toUpperCase());
}

export function removeCamelCase(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
}

function setAttributes(element, attribtues) {
  Object.keys(attribtues).forEach((key) =>
    element.setAttribute(key, attribtues[key]),
  );
}

export function createInput(inputType, inputID, wrapperID) {
  const input = document.createElement("input");
  const label = document.createElement("label");
  const div = document.createElement("div");

  setAttributes(input, {
    type: inputType,
    name: inputID,
    id: inputID,
    value: inputID,
  });
  setAttributes(label, { for: inputID });
  setAttributes(div, { id: `${inputID}${wrapperID}` });
  label.textContent = inputID;
  div.append(label, input);

  return div;
}

export function fillDatalist(listID, obj) {
  const list = document.getElementById(listID);

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i += 1) {
    const option = document.createElement("option");
    option.value = removeCamelCase(keys[i]);
    list.append(option);
  }
}

export function getMovementInput() {
  const input = document.getElementById("exerciseInput");
  return input.value;
}

export function getSetInput() {
  const input = document.getElementById("setNumber");
  return input.value;
}
export function getWeightInput() {
  const input = document.getElementById("weight");
  return input.value;
}
export function getRepsInput() {
  const input = document.getElementById("reps");
  return input.value;
}
export function getRpeInput() {
  const input = document.getElementById("rpe");
  return input.value;
}
export function getInputValue(inputID) {
  const input = document.getElementById(inputID);
  return input.value;
}
export function getTempoValues() {
  const eccentric = document.getElementById("eccentric");
  const concentric = document.getElementById("concentric");
  return [eccentric.value, concentric.value];
}
export function getDateTime() {
  const datetime = document.getElementById("dateInput");
  return datetime.valueAsDate;
}

export function getVariationInput() {
  const variationInputs = document.getElementById("variationInputs");
  const variations = variationInputs.childNodes;
  // rename x
  const x = [];

  variations.forEach((variant) => {
    if (variant.children[1].checked) {
      // console.log(variant.children[1].value);
      x.push(variant.children[1].value);
      // console.log(x);
    }
  });
  return x;
}

export function generateSetObj(movementObj) {
  const set = getSetInput();
  const weight = getWeightInput();
  const reps = getRepsInput();
  const rpe = getRpeInput();
  const variationInput = getVariationInput();

  const obj = {
    [`set${set}`]: {
      variations: {},
      weight,
      reps,
      rpe,
    },
  };

  if (variationInput.length < 1) {
    obj[`set${set}`].variations.none = true;
  }
  for (let i = 0; i < variationInput.length; i += 1) {
    if (variationInput.length < 1) console.log("none");
    obj[`set${set}`].variations[variationInput[i]] = true;
  }
  return obj;
}

export function generateMovementObj() {
  const movement = getMovementInput();

  const obj = {
    [movement]: {},
  };

  return obj;
}

// accepts an array of movement objects as a parameter
export function generateWorkoutObj(movements) {
  const obj = {};
  obj.date = getDateTime();

  for (let i = 0; i < movements.length; i += 1) {
    const movement = movements[i];
    obj[`exercise${i + 1}`] = movement;
  }
  return obj;
}

export function displayWorkoutInProgress(workout) {}
