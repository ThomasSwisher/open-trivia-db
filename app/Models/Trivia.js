export default class Trivia {
    // OBJECT DESTRUCTURING MUST USE {} to do this
    // first arugment is an object, pull the specified properties off of it
    constructor({ category, type, difficutly, question, correct_answer, incorrect_answer }) {
        this.category = category
        this.type = type
        this.difficutly = difficutly
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswer = incorrect_answer
    }

    get Template() {

        return /*html*/ `
        <div class="card p-2 value">
            ${this.title}
        </div>
        `
    }
}