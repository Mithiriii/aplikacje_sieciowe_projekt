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
                console.log("Jestem tu 0");
                const questions = yield fetch('questions.json').then(res => res.json());
                console.log("Jestem tu");
                this.quiz.setQuestions(questions);
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
