export class Question {
  private text: string;
  private options: string[];
  private answer: string;
  private answered: boolean = false;
  private isLock: boolean = false;
  private userAnswer: string | null = null;
  private time : number = 0;

  constructor(data: any) {
    this.text = data.question;
    this.options = data.options;
    this.answer = data.answer;
  }

  public getTime(): number {
    return this.time;
  }

  public setTime(timespend: number): void {
    this.time = timespend;
  } 

  public IsAnswered(): boolean {
    return this.answered;
  }

  public getIsLock(): boolean {
    return this.isLock;
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

  public setIsLock(): void {
    this.isLock = true;
    
  }

  public setUserAnswer(answer: string): void {
    this.userAnswer = answer;
    this.answered = true;
  }

  public isCorrect(): boolean {
    return this.answer === this.userAnswer;
  }
}
