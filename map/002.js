const map = (func) => (array) => {
  if (!array.length) return []

  return [func(array[0])].concat(map(func)(array.slice(1)))
}

module.exports = map
