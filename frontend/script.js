// 🔥 IMPORTANT: Use your AKS public IP (NOT localhost)
const API = "http://68.210.113.60:3000";

// -----------------------------
// Add Question
// -----------------------------
async function addQuestion() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    try {
        const res = await fetch(`${API}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question, answer })
        });

        if (res.ok) {
            alert("Question Added Successfully ✅");
        } else {
            alert("Failed to add question ❌");
        }

    } catch (error) {
        console.error(error);
        alert("Server not reachable ❌");
    }
}

// -----------------------------
// Load Quiz Questions
// -----------------------------
async function loadQuiz() {
    try {
        const res = await fetch(`${API}/quiz`);
        const data = await res.json();

        const list = document.getElementById('quizList');
        list.innerHTML = "";

        data.forEach(q => {
            const li = document.createElement("li");
            li.textContent = q.question;
            list.appendChild(li);
        });

    } catch (error) {
        console.error(error);
        alert("Error loading quiz ❌");
    }
}