document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const quizResults = document.getElementById('quiz-results');

    const correctAnswers = {
        question1: 'b', // 500 million
        question2: 'a', // Greed
        question3: 'c', // Temple or Monastery
        question5: 'c',  // Emphasis on self-effort through mindfulness
        question6: 'b'   // Subway Surfurs, GTA clips, Glass dropping, and slime
    };

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let score = 0;
        const formData = new FormData(quizForm);

        for (const [question, userAnswer] of formData.entries()) {
            if (correctAnswers[question] === userAnswer) {
                score++;
            }
        }

        quizResults.innerHTML = `You scored ${score} out of ${Object.keys(correctAnswers).length}!`;
    });
});
