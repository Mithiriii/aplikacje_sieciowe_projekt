import { Question } from "./Question";
import { Timer } from "./Timer";
import { Statistics } from "./Statistics";
import { StorageService } from "./StorageService";
export class Quiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [];
        this.shuffleQuestions();
        this.timer = new Timer();
        this.statistics = new Statistics();
    }
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
        }
    }
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
        }
    }
    hasFinished() {
        return this.questions.every(question => question.getUserAnswer() !== null);
    }
    calculateScore() {
        this.score = this.questions.reduce((score, question) => {
            return score + (question.isCorrect() ? 1 : 0);
        }, 0);
    }
    setQuestions(questionsData) {
        this.questions = questionsData.map(data => new Question(data));
    }
    getScore() {
        return this.score;
    }
    getQuestionCount() {
        return this.questions.length;
    }
    startQuiz() {
        this.timer.start();
        this.statistics.startQuestionTimer(this.currentQuestionIndex);
    }
    endQuiz() {
        this.timer.stop();
        this.statistics.stopQuestionTimer(this.currentQuestionIndex);
        this.calculateScore();
        StorageService.saveResults(this.getScore());
        // Save detailed statistics if required
        StorageService.saveDetailedStatistics(this.statistics.getStatistics());
    }
}
