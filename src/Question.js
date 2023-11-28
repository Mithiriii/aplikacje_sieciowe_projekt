export class Question {
    constructor(data) {
        this.userAnswer = null;
        this.text = data.question;
        this.options = data.options;
        this.answer = data.answer;
    }
    getText() {
        return this.text;
    }
    getOptions() {
        return this.options;
    }
    getUserAnswer() {
        return this.userAnswer;
    }
    setUserAnswer(answer) {
        this.userAnswer = answer;
    }
    isCorrect() {
        return this.answer === this.userAnswer;
    }
}
