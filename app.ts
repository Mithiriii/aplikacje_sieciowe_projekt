import { Quiz } from "./Quiz";
import { Renderer } from "./Renderer";

class App {
    private quiz: Quiz;
    private renderer: Renderer;
  
    constructor() {
      this.quiz = new Quiz();
      this.renderer = new Renderer();
      this.loadQuiz(); // Przenieś wywołanie loadQuiz() przed startQuiz()
    }
  
    private async loadQuiz(): Promise<void> {
      try {
        
    
        console.log("Jestem tu 0");
        var fs = require('fs');
        const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8')); // wczytanie pytań z json
        console.log("Jestem tu");
        this.quiz.setQuestions(questions.questions);  // Uwaga na to, jak odnosimy się do pytań
        console.log("Jestem tu2");
        this.renderer.renderIntroduction(this.quiz)
        //this.renderer.renderQuiz(this.quiz);
        
        console.log("Jestem tu3");
        this.quiz.startQuiz(); // Wywołaj startQuiz() po wczytaniu pytań
        console.log("Jestem tu4");
      } catch (error) {
        console.error("Failed to load quiz questions.", error);
      }
    }
  }
  
  new App();
  
