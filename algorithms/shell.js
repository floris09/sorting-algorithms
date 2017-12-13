// Use `data` (Array) to sort each element `el` on `el[COLUMN]`
//
// Example using Array.proptotype.sort(), using a custom `compare`
// function.
//
let sortCalls = 0 // number of calls before data is sorted

function swap(list, a, b){
  const temp = list[a]
  list[a] = list[b]
  list[b] = temp
}

function sort(list, gapsIndex){
  const gaps = [1750, 701, 301, 132, 57, 23, 10, 4, 1]
  const gap = gaps[gapsIndex]
  var swapCount = 0

  for (var i = 0; i < list.length - gap; i++) {
    if (list[i] > list[i+gap]) { swap(list,i,i+gap); swapCount++ }
    sortCalls++
  }

  if (swapCount === 0) { return list }
  if (gapsIndex !== gaps.length-1) { gapsIndex++ }
  return sort(list, gapsIndex)
}

module.exports = (data, COLUMN) => {
  const sortStart = new Date()

  const list = data.map(x => parseInt(x[COLUMN],10))
  const slicedList = list.slice(0,30)

  const sorted = sort(list,0)

  const sortDuration = new Date() - sortStart

  console.log(list)

  const sortCallsPerRow = sortCalls / data.length

  console.log(`Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
  console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

  return sorted
}
