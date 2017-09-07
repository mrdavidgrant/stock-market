function elegantMaxProfit(array){
  let max = Math.max.apply(0, array)
  let slot = array.lastIndexOf(max)
  let min = Math.min.apply(0, array.slice(0, slot))
  if (slot === 0){
    return elegantMaxProfit(array.slice(1))
  }
  return max - min
}

module.exports = elegantMaxProfit

