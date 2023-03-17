"use strict";
document.body.append(document.createElement("button"));
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++ "],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const p = Number(
      prompt(`${poll.question}\n ${poll.options} \n write option number`) // write this instead of poll.option etc
    );
    typeof p === "number" && p >= 0 && p <= 4 && poll.answers[p]++; // if would not work properly that why use short ciruting
    console.log(poll.answers);
    // this.displayResults();
    // this.displayResults("string");
  },

  displayResults: function (type = "array") {
    // defult is array
    if (type === "array") console.log(`${this.answers}`);
    else if (type === "string") {
      console.log("poll results are " + this.answers.join(", "));
    }
  },
};
// console.log(...poll.answers);
// poll.registerNewAnswer(); use bind method to call the method poll.answer direclty

document
  .querySelector("button")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [1, 2, 3] }, "string"); // bonus calling the obhect answers
