module.exports = {
  PrintA4By4: (pages) => {
    let front = "", back = "";
    let less = 4 - (pages % 4)
    for (let i = 1; i <= (pages + less); i += 4) {
      front += `${i+3},${i},`;
      back += `${i+2},${i+1},`;
    }
    return {front, back}
  }
}
