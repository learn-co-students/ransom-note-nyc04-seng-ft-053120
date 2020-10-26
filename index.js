function buildHistogram(magazine) {
  let histogram = {};

  for (const letter of magazine) {
    if (histogram.hasOwnProperty(letter)) {
      histogram[letter]++
    } else {
      histogram[letter] = 1
    }
  }

  return histogram
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine);

  for (const char of note) {
    if (!histogram[char]) {
      return false
    } else {
      histogram[char]--
    }
  }

  return true
}

// note = 'hereisat'
// start with note h;
// loop through magazine 
  // magazine letter = magazine.shift()
  // if (magazineletter is same as note letter) 
    // change noteletter to the next letter
    // break out of loop
  // if the magazine letter is not same as note letter
    // check if letter exists in hash, if yes, minus 1; if not initialize to 1

