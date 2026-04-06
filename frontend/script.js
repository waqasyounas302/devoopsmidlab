const API = "http://localhost:3000";

// Add question
async function addQuestion() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    await fetch(`${API}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question, answer })
    });

    alert("Question Added!");
}

// Load questions
async function loadQuiz() {
    const res = await fetch(`${API}/quiz`);
    const data = await res.json();

    const list = document.getElementById('quizList');
    list.innerHTML = data.map(q => `<li>${q.question}</li>`).join('');
}