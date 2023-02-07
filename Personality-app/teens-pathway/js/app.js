

document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();
  let score = 0;
  let question1 = document.getElementById("question1").value;
  let question2 = document.getElementById("question2").value;
  let question3 = document.getElementById("question3").value;
  let question4 = document.getElementById("question4").value;
  let question5 = document.getElementById("question5").value;

  if (question1 === "B") {
    score += 1;
  }
  if (question2 === "B") {
    score += 1;
  }
  if (question3 === "B") {
    score += 1;
  }
  if (question4 === "A") {
    score += 1;
  }
  if (question5 === "A") {
    score += 1;
  }

  let result = "";
  
  if (score >= 3) {
    result = "Extraverted Connector: You might be suited for careers in the Arts or Social Sciences, Sales Person, Public relations people, Politicians,Journalists";
  

  } else 
    result = "Introverted-Mover Personality: You might be suited for careers in Science, Technology, Engineering, Professor, Architect, Writing, Research, Data analysis, IT manager, Mathematics.";
  

  alert(result);
});

if (score == ""){
  alert("please choose an option")
}


