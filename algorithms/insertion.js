// Use `data` (Array) to sort each element `el` on `el[COLUMN]`
//
// Example using Array.proptotype.sort(), using a custom `compare`
// function.
//
let sortCalls = 0 // number of calls before data is sorted

function sort(tail,head){

  if (tail.length === 0) { return head }

  const next = tail.shift()

  if ( head.length === 0 ) { head.push(next); return sort(tail,head) }

  for (var i = head.length - 1; i >= 0; i--) {
    if (i === 0 && next < head[i]) { head.splice(0, 0, next); break }
    if (next > head[i]) { head.splice(i+1, 0, next); break }
    if (next < head[i]) { continue }
  }
  sortCalls++
  return sort(tail, head)
}

module.exports = (data, COLUMN) => {
  const sortStart = new Date()

  const list = data.map(x => parseInt(x[COLUMN],10))

  const sorted = sort(list,[])

  const sortDuration = new Date() - sortStart

  const sortCallsPerRow = sortCalls / data.length

  console.log(`Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
  console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

  return sorted
}
