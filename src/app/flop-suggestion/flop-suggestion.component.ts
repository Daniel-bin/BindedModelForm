import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Suggestion } from "./Suggestion";

@Component({
  templateUrl: "./flop-suggestion.component.html"
})
export class FlopSuggestionComponent {
  model: Suggestion = new Suggestion();

  suggestions: Suggestion[] = [
    { id: 0, title: "Ender's Game", year: 2013, stars: 6.6 },
    { id: 1, title: "The Mummy", year: 2017, stars: 5.4 }
  ];

  constructor() {}

  ngOnInit() {}

  editSuggestion(suggestion) {
    this.model = { ...suggestion };
  }

  updateSuggestion(id: number) {
    let curSug = this.suggestions.find(x => x.id === this.model.id);
    curSug.title = this.model.title;
    curSug.year = this.model.year;
    curSug.stars = this.model.stars;
    this.model = curSug;
    this.model = { ...new Suggestion() };
  }

  cancel() {
    this.model = new Suggestion();
  }
}
