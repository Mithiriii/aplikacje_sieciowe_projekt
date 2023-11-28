import { Question } from "./Question";
import { Timer } from "./Timer";
import { Statistics } from "./Statistics";
import { StorageService } from "./StorageService";

export class Quiz {
  private questions: Question[];
  private currentQuestionIndex: number = 0;
  private score: number = 0;
  private timer: Timer;
  private statistics: Statistics;

  constructor() {
    this.questions = [];
    this.shuffleQuestions();
    this.timer = new Timer();
    this.statistics = new Statistics();
  }
  
    private shuffleQuestions(): void {
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
      }
    }
  
    public getCurrentQuestion(): Question {
      return this.questions[this.currentQuestionIndex];
    }
  
    public nextQuestion(): void {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        
      }
    }
  
    public previousQuestion(): void {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    }
  
    public hasFinished(): boolean {
      return this.questions.every(question => question.getUserAnswer() !== null);
    }
  
    public calculateScore(): void {
      this.score = this.questions.reduce((score, question) => {
        return score + (question.isCorrect() ? 1 : 0);
      }, 0);
    }
    
    public setQuestions(questionsData: any[]): void {
        this.questions = questionsData.map(data => new Question(data));        
      }

    public getScore(): number {
      return this.score;
    }
    public getTimer(): Timer {
      return this.timer
    }
    public getNumberOfQuestion(): number {
      return this.currentQuestionIndex
    }

  
    public getQuestionCount(): number {
      return this.questions.length;
    }

    public startQuiz(): void {
        this.timer.start();
        this.statistics.startQuestionTimer(this.currentQuestionIndex);
      }
    
      public endQuiz(): void {
        this.timer.stop();
        this.statistics.stopQuestionTimer(this.currentQuestionIndex);
        this.calculateScore();
        StorageService.saveResults(this.getScore());
        // Save detailed statistics if required
        StorageService.saveDetailedStatistics(this.statistics.getStatistics());
      }
  }
  