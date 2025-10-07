
try {

  let name= prompt("Enter your name:");
  let email = prompt("Enter your email:");
  let age = prompt("Enter your age:");
  age=Number(age);
  if (!name || !email || isNaN(age)) {
    throw new Error("All fields are required!");
  } else if (age < 12) {
    throw new Error("Age must be 12 or above!");
  }
  let score = 0
  let questions = [
    { q: "Which is the largest ancient dynasty?\n a)Ming\n b)Qin\n c)Han\n d)Zhou", ans: "b" },
    { q: "Which is the largest continent?\n a)Asia\n b)Africa\n c)North America\n d)Australia", ans: "a" },
    { q: "Which is the longest river in the world?\n a)Amazon\n b)Nile\n c)Yangtze\n d)Mississippi", ans: "b" },
    { q: "Which planet is known as the Red Planet?\n a)Earth\n b)Mars\n c)Venus\n d)Jupiter", ans: "b" },
    { q: "Who is the father of computers?\n a)Alan Turing\n b)Charles Babbage\n c)Bill Gates\n d)Steve Jobs", ans: "b" },
    { q: "Which is the national animal of India?\n a)Lion\n b)Elephant\n c)Tiger\n d)Peacock", ans: "c" },
    { q: "Which gas is essential for breathing?\n a)Carbon dioxide\n b)Oxygen\n c)Nitrogen\n d)Hydrogen", ans: "b" },
    { q: "What is the capital of Japan?\n a)Seoul\n b)Tokyo\n c)Beijing\n d)Bangkok", ans: "b" },
    { q: "Which is the fastest land animal?\n a)Cheetah\n b)Lion\n c)Horse\n d)Tiger", ans: "a" },
    { q: "Who invented the light bulb?\n a)Thomas Edison\n b)Newton\n c)Einstein\n d)Tesla", ans: "a" }
  ];
  let randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 3);
  randomQuestions.forEach(item => {
    let answer = prompt(item.q);if (answer.toLowerCase() === item.ans) {
      alert("✅ Correct Answer!");
      score++;
    } else {
      alert("❌ Wrong Answer!");
    }
  });
  let percentage = (score / 3) * 100;
  let grade = "";

  if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 40) {
    grade = "C";
  } else {
    grade = "D";
  }
  let timestamp = new Date().toLocaleString();
  let student = {
    name: name,
    email: email,
    age: age,
    score: score,
    percentage: percentage,
    grade: grade,
    timestamp: timestamp
  };
  let showResult = new Promise((resolve) => {
    alert("Calculating result… Please wait!");
    setTimeout(() => resolve(student), 2000);
  });

  showResult.then(data => {
    alert(`RESULT SUMMARY\n
Name: ${name}
Email: ${email}
Score: ${score}/${3}
Percentage: ${percentage}%
Grade: ${grade}
Timestamp: ${timestamp}`);
});
} 
catch (err) {
  alert("Error: " + err.message);
}
