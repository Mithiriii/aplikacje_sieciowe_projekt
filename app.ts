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
        const jsonString: string = `{
          "questions": [
            {
              "question": "Co jest stolicą Francji?",
              "options": ["Paryż", "Londyn", "Berlin", "Madryt"],
              "answer": "Paryż"
            },
            {
              "question": "Ile wynosi suma kątów w trójkącie?",
              "options": ["180 stopni", "90 stopni", "360 stopni", "270 stopni"],
              "answer": "180 stopni"
            },
            {
              "question": "Który pierwiastek chemiczny ma symbol 'O'?",
              "options": ["Złoto", "Krzem", "Tlen", "Wodór"],
              "answer": "Tlen"
            },
            {
              "question": "Kto napisał 'Hamleta'?",
              "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
              "answer": "William Shakespeare"
            },
            {
              "question": "Jaka jest najwyższa góra świata?",
              "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
              "answer": "Mount Everest"
            }
          ]
        }`;
        
        console.log("Jestem tu 0");
        const questions = JSON.parse(jsonString);
        console.log("Jestem tu");
        this.quiz.setQuestions(questions.questions);  // Uwaga na to, jak odnosimy się do pytań
        console.log("Jestem tu2");
        this.renderer.renderQuiz(this.quiz);
        console.log("Jestem tu3");
        this.quiz.startQuiz(); // Wywołaj startQuiz() po wczytaniu pytań
        console.log("Jestem tu4");
      } catch (error) {
        console.error("Failed to load quiz questions.", error);
      }
    }
  }
  
  new App();
  
