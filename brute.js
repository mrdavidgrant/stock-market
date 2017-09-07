function maxProfit(array){
  let profit = -1
  for (let a = 0; a < array.length; a++){
    for (let b = a + 1; b < array.length; b++){
      // console.log('A:', a, 'B:', b)
      // console.log('Array at: A:', array[a], 'B:', array[b])
      if (profit < (array[b] - array[a])) {
        profit = array[b] - array[a]
      }
    }
  }
  return profit
}
