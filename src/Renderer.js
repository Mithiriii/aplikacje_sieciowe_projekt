export class Renderer {
    constructor() {
        this.quizContainer = document.getElementById('app');
    }
    renderQuiz(quiz) {
        const currentQuestion = quiz.getCurrentQuestion();
        this.quizContainer.innerHTML = `
      <div class="question">
        <h2>Question: ${currentQuestion.getText()}</h2>
        ${this.renderOptions(currentQuestion)}
      </div>
      <button id="previous">Previous</button>
      <button id="next">Next</button>
      <button id="submit" ${quiz.hasFinished() ? '' : 'disabled'}>Submit</button>
    `;
        this.setupOptionListeners(quiz);
        this.setupNavigationListeners(quiz);
        this.quizContainer.insertAdjacentHTML('beforeend', '<div id="timer"></div>');
        quiz.startQuiz();
    }
    renderOptions(question) {
        return question.getOptions().map((option, index) => `
      <label>
        <input type="radio" name="option" value="${option}" ${question.getUserAnswer() === option ? 'checked' : ''} />
        ${option}
      </label>
    `).join('');
    }
    setupOptionListeners(quiz) {
        const options = this.quizContainer.querySelectorAll('input[name="option"]');
        options.forEach(option => {
            option.addEventListener('change', (e) => {
                const selectedOption = e.target.value;
                quiz.getCurrentQuestion().setUserAnswer(selectedOption);
                this.enableSubmitIfFinished(quiz);
            });
        });
    }
    setupNavigationListeners(quiz) {
        const previousButton = this.quizContainer.querySelector('#previous');
        const nextButton = this.quizContainer.querySelector('#next');
        const submitButton = this.quizContainer.querySelector('#submit');
        previousButton.onclick = () => {
            quiz.previousQuestion();
            this.renderQuiz(quiz);
        };
        nextButton.onclick = () => {
            quiz.nextQuestion();
            this.renderQuiz(quiz);
        };
        submitButton.onclick = () => {
            quiz.calculateScore();
            this.renderResults(quiz);
        };
    }
    enableSubmitIfFinished(quiz) {
        const submitButton = this.quizContainer.querySelector('#submit');
        submitButton.disabled = !quiz.hasFinished();
    }
    renderResults(quiz) {
        this.quizContainer.innerHTML = `
      <div class="results">
        <h2>Results</h2>
        <p>Your score: ${quiz.getScore()} / ${quiz.getQuestionCount()}</p>
      </div>
    `;
        quiz.endQuiz();
    }
}
