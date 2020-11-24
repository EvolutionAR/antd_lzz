export const getInfoFromLocalStorage = function (key) {
  return window.localStorage.getItem(key)
}

export const setInfoToLocalStorage = function (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const removeInfoFromLocalStorage = function (key) {
  return window.localStorage.removeItem(key)
}
