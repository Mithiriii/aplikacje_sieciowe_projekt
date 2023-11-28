import { Quiz } from "./Quiz";
import { Question } from "./Question";
import { Timer } from "./Timer";

export class Renderer {
  private quizContainer: HTMLElement;
  private introductionContainer: HTMLElement;

  constructor() {
    this.quizContainer = document.getElementById('app')!;
    this.introductionContainer = document.getElementById('introduction')!;
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
   
     this.quizContainer.insertAdjacentHTML('beforeend', '<div id="timer"></div>');
    quiz.startQuiz();
  }
 

  private renderOptions(question: Question): string {
    return question.getOptions().map((option, index) => `
      <label>
        <input type="radio" name="option" value="${option}" ${question.getUserAnswer() === option ? 'checked' : ''} />
        ${option}
      </label>
    `).join('');
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

  private enableSubmitIfFinished(quiz: Quiz): void {
    const submitButton = this.quizContainer.querySelector('#submit') as HTMLButtonElement;
    submitButton.disabled = !quiz.hasFinished();
  }

  private renderResults(quiz: Quiz): void {
    this.quizContainer.innerHTML = `
      <div class="results">
        <h2>Results</h2>
        <p>Your score: ${quiz.getScore()} / ${quiz.getQuestionCount()}</p>
      </div>
    `;
    quiz.endQuiz();    
  }
}
