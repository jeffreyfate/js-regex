function matchWord(test, match) {
  let words = test.split(' ')
  let found = []

  for (let word of words) {
    if (word.indexOf(match) == 0 && !found.includes(match)) {
      found.push(word.substring(0, match.length))
    }
  }

  return found
}

function matchPipe(test, piped) {
  let matches = piped.split('|')
  let found = []

  for (let match of matches) {
    found = found.concat(matchWord(test, match))
  }

  return found
}

function match(test, match) {
  if (!test || !match || typeof test !== 'string' || typeof match !== 'string') {
    return []
  }
  if (match.indexOf('|') > -1) {
    return matchPipe(test, match)
  } else {
    return matchWord(test, match)
  }
}

module.exports = {
  match
}