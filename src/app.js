var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Quiz } from "./Quiz";
import { Renderer } from "./Renderer";
class App {
    constructor() {
        this.quiz = new Quiz();
        this.renderer = new Renderer();
        this.loadQuiz(); // Przenieś wywołanie loadQuiz() przed startQuiz()
    }
    loadQuiz() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jsonString = `{
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
                this.quiz.setQuestions(questions.questions); // Uwaga na to, jak odnosimy się do pytań
                console.log("Jestem tu2");
                this.renderer.renderQuiz(this.quiz);
                console.log("Jestem tu3");
                this.quiz.startQuiz(); // Wywołaj startQuiz() po wczytaniu pytań
                console.log("Jestem tu4");
            }
            catch (error) {
                console.error("Failed to load quiz questions.", error);
            }
        });
    }
}
new App();
