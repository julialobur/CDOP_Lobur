import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: 
      `<h2>Відсортовані слова:</h2>
      <p>{{ sortedWords.join(' ') }}</p>`,
      styleUrls: ['./styles.css']
})
export class ChildComponent {
  @Input() text: string = '';

  get sortedWords(): string[] {
    return this.text.split(' ').filter(word => word).sort();
  }
}