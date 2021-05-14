export const debounce = function debounce(func, wait, immediate) { // eslint-disable-line
  let timeout;

  return function wrapper(...args) {
    const context = this;
    const later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

export const shuffleArray = function shuffleArray(array) {
  const result = [];
  const copiedArray = array.slice();

  for (let i = 0; i < array.length; i++) {
    const randomIndex = Math.floor(Math.random() * (copiedArray.length));

    result.push(copiedArray[randomIndex]);
    copiedArray.splice(randomIndex, 1);
  }

  return result;
};
