let sum = (a,b) => {
  console.log('the sum of ' + a + ' + ' + b + ' is ' + (parseInt(a) + parseInt(b)));
  return parseInt(a) + parseInt(b);
}
// Code for testing challenge solutions
let testSummation = () => {
  return sum(5, 2) == 7
}

let testCounter = () => {
  return JSON.stringify(counter()) == JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
}

let testOddCounter = () => {
  return JSON.stringify(oddCounter()) == JSON.stringify([1, 3, 5, 7, 9])
}

let testCalculateSum = () => {
  return calculateSum() == 55
}

let testAverage = () => {
  return JSON.stringify(average([1, 2, 3])) == 2
}

let testFindMax = () => {
  return findMax([1, 3, 5, 6, 4, 3, 2]) == 6
}

let testReverseArr = () => {
  return JSON.stringify(reverseArr([2, 5, 7, 3])) == JSON.stringify([3, 7, 5, 2])
}

// Code for defining Challenges
// Note: The way its currently set up is that the student needs to solve
// each problem in order before moving forward.

challenges = [
  {
    render: true,
    correct: testSummation(),
    description: "Coding Challenge #1: Summation"
  },
  {
    render: testSummation(),
    correct: testCounter(),
    description: "Coding challenge #2: Print numbers from 1 to 10"
  },
  {
    render: testCounter(),
    correct: testOddCounter(),
    description: "Coding challenge #3: Print the odd numbers less than 10"
  },
  {
    render: testOddCounter(),
    correct: testCalculateSum(),
    description: "Coding challenge #4: Calculate the sum of numbers from 1 to 10"
  },
  {
    render: testCalculateSum(),
    correct: testAverage(),
    description: "Coding challenge #5: Calculate the average of the numbers in an array of numbers"
  },
  {
    render: testAverage(),
    correct: testFindMax(),
    description: "Coding challenge #6: Find the maximum number in an array of numbers"
  },
  {
    render: testFindMax(),
    correct: testReverseArr(),
    description: "Coding challenge #7: Find the maximum number in an array of numbers"
  }
]


// Code For rendering Answers on the page and checking solutions
let correctReply = "Nice Job!"
let incorrectReply = "Not quite, try again!"

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

let renderChallengeDescription = () => {
  let challengeId = getCompletedChallengeNumber();
  let challengeDescriptionContainer = document.getElementById("challenge-description")
  challengeDescriptionContainer.innerHTML = challenges[challengeId].description
}

let renderChallengeAnswer = (challengeId) => {
  let challengeAnswerContainer = document.getElementById("challenge-answer")
  challengeAnswerContainer.innerHTML = responseFor(challenges[challengeId])
}

let checkSolution = () => {
  let done = isChallengeComplete();
  if (done) {
    return finishAssesment();
  } else {
    let challenge = document.getElementsByClassName("check-solution-btn")[0]
    let challengeId = parseInt(challenge.dataset.id)
    let studentAnswer = challenges[challengeId]

    if (studentAnswer.correct) {
      challengeId += 1
      challenge.dataset.id = challengeId
    }

    renderChallengeDescription()
    renderChallengeAnswer(challengeId)
  }
}


let setSubmittionId = () => {
  let challengeSection = document.getElementsByClassName("check-solution-btn")[0]
  challengeSection.dataset.id = getCompletedChallengeNumber()
}

let getCompletedChallengeNumber = () => {
  for (let i = 0; i < challenges.length; i++) {
    if (challenges[i].correct == false && challenges[i].render == true) {
      return i
    }
  }

  return challenges.length - 1
}

window.addEventListener('DOMContentLoaded', () => {
  setSubmittionId();
  renderChallengeDescription();
});

