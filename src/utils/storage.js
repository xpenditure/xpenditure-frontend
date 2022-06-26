export const setToLS = (key, value) => {
  if (window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLS = (key) => {
  if (window !== 'undefined') {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }
};
