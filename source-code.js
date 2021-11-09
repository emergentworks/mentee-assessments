// add logic for handling what we show inside html here, mentee will not be touching any code thats inside this file.
// we can add some base code here that will reflect what students see on their website to make pairing more fun and interesting.


// this logic will hit a lot of edge cases and the code is pretty messy, this is just me throwing in ideas, but the code will need to be refactored
let summationAnswer = () => {
  return sum(5, 2) == 7 ? true : false
}

let oddCounterAnswer = () => {
  return JSON.stringify(oddCounter()) == JSON.stringify([1, 3, 5, 7, 9]) ? true : false
}

let correctReply = "Nice Job!"
let incorrectReply = "Not quite, try again!"

challenges = [
  {
    render: true,
    correct: summationAnswer()
  },
  {
    render: summationAnswer(),
    correct: oddCounterAnswer(),
  },
  {
    render: summationAnswer(),
    correct: true,
  },
  {
    render: summationAnswer(),
    correct: true,
  }
]

let responseFor = (answer) => {
  return answer.correct ? correctReply : incorrectReply
}

let checkSolution = () => {
  let challengeAnswerContainer = document.getElementById("challenge-answer")
  let challenge = document.getElementsByClassName("check-solution-btn")[0]
  let challengeId = parseInt(challenge.dataset.id)

  let studentAnswer = challenges[challengeId]

  if (studentAnswer.correct) {
    challengeId += 1
    challenge.dataset.id = challengeId
  }

  challengeAnswerContainer.innerHTML = responseFor(studentAnswer)
}

let renderSolutionButton = () => {
  let challengeSection = document.getElementsByClassName("check-solution-btn")[0]
  challengeSection.dataset.id = completedChallengeNumber()
}

let completedChallengeNumber = () => {
  console.log(challenges)
  for (let i = 0; i < challenges.length; i++) {
    if (challenges[i].correct == false && challenges[i].render == true) {
      return i
    }
  }

  return challenges.length - 1
}

window.addEventListener('DOMContentLoaded', (event) => {
  renderSolutionButton();
});

