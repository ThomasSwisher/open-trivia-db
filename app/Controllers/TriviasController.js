import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";


// //Private
function _draw() {
    let trivias = ProxyState.trivias;
    let template = ''
    trivias.forEach(v => template += v.Template)
    document.getElementById("app").innerHTML = /*html*/`
  <!--<button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>-->
  <div className="card-columns trivias">
      ${template}
  </div>
  `
}

//Public
export default class TriviasController {
    constructor() {
        ProxyState.on("trivias", _draw);

        triviasService.getAllTrivias()
    }

    // REVIEW what is this?
    getall(url) {
        triviasService.getAllTrivias(url)
    }

}

