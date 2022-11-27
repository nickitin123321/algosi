module.exports = (numberOfElements, maxElementValue) => {
  const res = []

  for(let i = 0; i <= numberOfElements; i++){
    res.push(Math.floor(Math.random() * maxElementValue))
  }

  return res
}

// Math.random()