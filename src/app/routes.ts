import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';

export const routingTable = [
  { path: '', redirectTo: '/flops/suggestion', pathMatch: 'full'},
  { path: 'flops/suggestion', component: FlopSuggestionComponent },
]