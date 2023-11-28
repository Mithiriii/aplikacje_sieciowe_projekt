import { Timer } from "./Timer";
export class Statistics {
    constructor() {
        this.questionTimers = [];
        this.questionCorrectness = [];
    }
    startQuestionTimer(index) {
        this.ensureTimer(index);
        this.questionTimers[index].start();
    }
    stopQuestionTimer(index) {
        if (this.questionTimers[index]) {
            this.questionTimers[index].stop();
        }
    }
    markQuestionCorrectness(index, isCorrect) {
        this.questionCorrectness[index] = isCorrect;
    }
    ensureTimer(index) {
        if (!this.questionTimers[index]) {
            this.questionTimers[index] = new Timer();
        }
    }
    getStatistics() {
        return this.questionTimers.map((timer, index) => ({
            timeSpent: timer.formatTime(0, Math.floor(timer.elapsedTime / 1000)),
            correct: this.questionCorrectness[index]
        }));
    }
}
