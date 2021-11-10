let summationAnswer = () => {
  return sum(5, 2) == 7 ? true : false
}

let counterAnswer = () => {
  console.log(counter())
  return JSON.stringify(counter()) == JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ? true : false
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
    correct: counterAnswer(),
  },
  {
    render: summationAnswer(),
    correct: oddCounterAnswer(),
  }
]

let responseFor = (answer) => {
  return answer.correct ? correctReply : incorrectReply
}

let finishAssesment = () => {
  let challenge = document.getElementsByClassName("challenge-container")[0]
  challenge.innerHTML = `
  <div>Great Job! You've completed all JS challenges!</div>
  `
}

let isChallengeComplete = () => {
  let challenge = document.getElementsByClassName("check-solution-btn")[0]
  let challengeId = parseInt(challenge.dataset.id)
  return challengeId == challenges.length - 1 && challenges[challenges.length - 1].correct == true
}

let checkSolution = () => {
  let done = isChallengeComplete();
  if (done) {
    return finishAssesment();
  } else {
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

