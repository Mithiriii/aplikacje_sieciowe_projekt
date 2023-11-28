import { Timer } from "./Timer";

export class Statistics {
    private questionTimers: Timer[] = [];
    private questionCorrectness: boolean[] = [];
  
    startQuestionTimer(index: number) {
      this.ensureTimer(index);
      //this.questionTimers[index].start();
    }
  
    stopQuestionTimer(index: number) {
      if (this.questionTimers[index]) {
        this.questionTimers[index].stop();
      }
    }
  
    markQuestionCorrectness(index: number, isCorrect: boolean) {
      this.questionCorrectness[index] = isCorrect;
    }
  
    private ensureTimer(index: number) {
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
  