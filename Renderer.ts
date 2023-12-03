import { Quiz } from "./Quiz";
import { Question } from "./Question";
// import { Timer } from "./Timer";
import { MyTimer } from "./MyTimer";

export class Renderer {
  private quizContainer: HTMLElement;
  private introductionContainer: HTMLElement;
  private resultContainer: HTMLElement;
  private mytimer: MyTimer;
    private timeDisplayElement: HTMLElement;
    private resultDisplayElement: HTMLElement;
    private currentTime: number;
    private result: string = "";
    private totalTime: number = 0;
  constructor() {
    this.quizContainer = document.getElementById('app')!;
    this.introductionContainer = document.getElementById('introduction')!;
    this.resultContainer = document.getElementById('output')!;
    this.mytimer = new MyTimer(0);
        this.timeDisplayElement = document.createElement('div');
        this.timeDisplayElement.id = 'timer-display';
        this.resultDisplayElement = document.createElement('div');
        this.resultDisplayElement.id = 'result-display';
        this.currentTime = 0;
  }

  


  public renderIntroduction(quiz :Quiz){
    this.introductionContainer.innerHTML=`Przed tobą test wiedzy ogólnej składający sie z ${quiz.getQuestionCount()} pytań. 
   <br> <button id="startTest">Zaczynajmy</button>`
    this.setupStartTestListener(quiz);
  }

  setupStartTestListener(quiz:Quiz){  
    const startTestButton = this.introductionContainer.querySelector('#startTest') as HTMLButtonElement;
    startTestButton.onclick= ()=>{
      this.renderQuiz(quiz);
      
    }

  }

  public renderQuiz(quiz: Quiz): void {
    this.introductionContainer.innerHTML=``;
    const currentQuestion = quiz.getCurrentQuestion();
    this.quizContainer.innerHTML = ` <h2>Pytanie ${quiz.getNumberOfQuestion()+1} z ${quiz.getQuestionCount()}</h2>
      <div class="question">
        <h3>Question: ${currentQuestion.getText()}</h3>
        ${this.renderOptions(currentQuestion)}
      </div>
      <button id="previous">Previous</button>
      <button id="next">Next</button>
      <button id="submit" ${quiz.hasFinished() ? '' : 'disabled'}>Submit</button>
      
      
    `;
    

       this.setupOptionListeners(quiz);
       this.setupNavigationListeners(quiz);
      
       this.quizContainer.appendChild(this.timeDisplayElement);
      
     
    quiz.startQuiz();
    this.startTimer();
  }
 
  private startTimer(): void {
    this.mytimer.startTimer();
    setInterval(() => {
      this.currentTime = this.mytimer.getCurrentTime();
        this.updateTimeDisplay();
    }, 1000);
}

private updateTimeDisplay(): void {
    this.timeDisplayElement.textContent = `Czas: ${this.currentTime}s`;
}

  private renderOptions(question: Question): string {
    if (question.getIsLock()) { // Sprawdza, czy pytanie zostało już odpowiedziane
        // Jeśli pytanie ma już odpowiedź, renderuje opcje jako zablokowane
        return question.getOptions().map((option, index) => `
            <label>
                <input type="radio" name="option" value="${option}" 
                ${question.getUserAnswer() === option ? 'checked' : ''} 
                disabled
                />
                ${option}
            </label>
        `).join('');
    } else {
        // Jeśli pytanie nie ma jeszcze odpowiedzi, renderuje normalne opcje
        return question.getOptions().map((option, index) => `
            <label>
                <input type="radio" name="option" value="${option}" 
                ${question.getUserAnswer() === option ? 'checked' : ''} 
                />
                ${option}
            </label>
        `).join('');
    }
}


  private setupOptionListeners(quiz: Quiz): void {
    const options = this.quizContainer.querySelectorAll('input[name="option"]');
    options.forEach(option => {
      option.addEventListener('change', (e) => {
        const selectedOption = (e.target as HTMLInputElement).value;
        quiz.getCurrentQuestion().setUserAnswer(selectedOption);
        this.enableSubmitIfFinished(quiz);
      });
    });
  }

  private setupNavigationListeners(quiz: Quiz): void {
    const previousButton = this.quizContainer.querySelector('#previous') as HTMLButtonElement;
    const nextButton = this.quizContainer.querySelector('#next') as HTMLButtonElement;
    const submitButton = this.quizContainer.querySelector('#submit') as HTMLButtonElement;
    

    previousButton.onclick = () => {
      if(quiz.getCurrentQuestion().IsAnswered())
      {
        quiz.getCurrentQuestion().setIsLock();
      }
      quiz.getCurrentQuestion().setTime(this.currentTime);
      quiz.previousQuestion();
      this.renderQuiz(quiz);
      this.mytimer.stopTimer();
            this.mytimer = new MyTimer(quiz.getCurrentQuestion().getTime()); 
            this.startTimer();
    };

    nextButton.onclick = () => {
      if(quiz.getCurrentQuestion().IsAnswered())
      {
        quiz.getCurrentQuestion().setIsLock();
      }
      quiz.getCurrentQuestion().setTime(this.currentTime);
      quiz.nextQuestion();
      this.renderQuiz(quiz);
      this.mytimer.stopTimer();
      this.mytimer = new MyTimer(quiz.getCurrentQuestion().getTime()); 
            this.startTimer();
    };

    submitButton.onclick = () => {
      quiz.getCurrentQuestion().setTime(this.currentTime);
      this.mytimer.stopTimer();
      quiz.calculateScore();
      this.renderResults(quiz);
    };
  }

  private enableSubmitIfFinished(quiz: Quiz): void {
    const submitButton = this.quizContainer.querySelector('#submit') as HTMLButtonElement;
    submitButton.disabled = !quiz.hasFinished();
  }

  private renderResults(quiz: Quiz): void {

    for (let i = 0; i < quiz.getQuestionCount(); i++) {
      this.result += " Pytanie nr." + (i+1) + ": " + quiz.dawajToPytanie(i).getTime() + " sekund  "+ `</br>`;
  }

  // this.resultDisplayElement.textContent = this.result;
  this.resultContainer.innerHTML = this.result;
    this.quizContainer.innerHTML = `
      <div class="results">
        <h2>Results</h2>
        <p>Your score: ${quiz.getScore()} / ${quiz.getQuestionCount()}</p>
        
      

      </div>
    `;
    this.quizContainer.appendChild(this.resultDisplayElement);
    quiz.endQuiz();    
  }
}
