module.exports = (first) => (second) =>
  (choice) => {
    if (choice === 1) {
      return first
    } else if (choice === 2) {
      return second
    }
  }
