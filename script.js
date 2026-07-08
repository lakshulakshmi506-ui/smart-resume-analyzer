function analyzeResume() {

let resume =
document.getElementById("resumeText")
.value.toLowerCase();

let skills = [
"java",
"html",
"css",
"javascript",
"sql",
"github",
"mysql",
"python"
];

let found = [];
let missing = [];

for(let i=0;i<skills.length;i++){

    if(resume.includes(skills[i])){
        found.push(skills[i]);
    }
    else{
        missing.push(skills[i]);
    }
}

let score =
Math.round((found.length / skills.length) * 100);

document.getElementById("score")
.innerHTML = "ATS Score: " + score + "%";

document.getElementById("skills")
.innerHTML =
"<b>Skills Found:</b> " + found.join(", ");

document.getElementById("missing")
.innerHTML =
"<b>Missing Skills:</b> " + missing.join(", ");
  }
