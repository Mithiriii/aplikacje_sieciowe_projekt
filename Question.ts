export class Question {
    private text: string;
    private options: string[];
    private answer: string;
    private userAnswer: string | null = null;
  
    constructor(data: any) {
      this.text = data.question;
      this.options = data.options;
      this.answer = data.answer;
    }
  
    public getText(): string {
      return this.text;
    }
  
    public getOptions(): string[] {
      return this.options;
    }
  
    public getUserAnswer(): string | null {
      return this.userAnswer;
    }
  
    public setUserAnswer(answer: string): void {
      this.userAnswer = answer;
    }
  
    public isCorrect(): boolean {
      return this.answer === this.userAnswer;
    }
  }
  