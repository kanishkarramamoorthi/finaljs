try {
  let name = prompt("Enter your name:");
  let email = prompt("Enter your email:");
  let age = parseInt(prompt("Enter your age:"));
  if (!name || !email || isNaN(age)) {
    throw new Error("All fields are required!");
  } else if (age < 12) {
    throw new Error("Age must be 12 or above!");
  }
  score=0;
  let v=prompt("Q1:What is the largest animal in the world?\na)Elephant\nb)Blue Whale\nc)Shark\nd)Giraffe")
if(v==='b'){
    alert("✅Correct Answer!");
       score++;
  }
  else{
    alert("❌Wrong Answer!");
  }
  let b=prompt("Q2:How many days are there in a leap year?\na)364\nb)365\nc)366\nd)367")
  if(b==='c'){
    alert("✅Correct Answer!");
       score++;
  }
  else{
    alert("❌Wrong Answer!");
  }
  let d=prompt("Q3:Which is the fastest land animal?\na)Cheetah\nb)Lion\nc)Tiger\nd)Horse")
  if(d==='a'){
    alert("✅Correct Answer!");
       score++;
  }
  else{
    alert("❌Wrong Answer!");
  }
  
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
Name: ${data.name}
Email: ${data.email}
Score: ${data.score}/${3}
Percentage: ${data.percentage.toFixed(2)}%
Grade: ${data.grade}
Timestamp: ${data.timestamp}`);

    
  });

} catch (err) {
  alert("Error: " + err.message);
}``