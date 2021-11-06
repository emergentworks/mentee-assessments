// add logic for handling what we show inside html here, mentee will not be touching any code thats inside this file.
// we can add some base code here that will reflect what students see on their website to make pairing more fun and interesting.


// this logic will hit a lot of edge cases and the code is pretty messy, this is just me throwing in ideas, but the code will need to be refactored
let summationAnswer = () => {
  return sum(5, 2) == 7 ? true : false
}

let solution2Answer = () => {
  // add more js challenges
}

let correctReply = "Nice Job!"
let incorrectReply = "Not quite, try again!"

challengeCompletion = {
  challenge1: {
    render: true,
    correct: summationAnswer()
  },
  challenge2: {
    render: summationAnswer(),
    correct: solution2Answer(),
  }
}

let testSolution = (answer) => {
  return answer.correct ? correctReply : incorrectReply
}

let checkFirstSolution = () => {
  let challenge1 = document.getElementById("challenge-1-answer")

  let studentAnswer = challengeCompletion.challenge1

  challenge1.innerHTML = testSolution(studentAnswer)
}


window.addEventListener('DOMContentLoaded', (event) => {

  // do stuff here

});
