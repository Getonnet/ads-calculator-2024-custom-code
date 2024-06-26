export function getValues(key) {
  return localStorage.getItem(key);
}

export function setValue(key, value) {
  localStorage.setItem(key, value);
}

export function removeValue(key) {
  localStorage.removeItem(key);
}

export function clearValues() {
  localStorage.clear();
}

export function setRadioValue(name, checkedRadioButtons) {
  let selectedValue;
  checkedRadioButtons.each((index, element) => {
    const value = $(element).val();
    selectedValue = value;
    localStorage.setItem(name, value);
  });
  return selectedValue;
}

// export function setTotalPrice() {
// }
