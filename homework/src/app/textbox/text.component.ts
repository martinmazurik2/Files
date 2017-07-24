import { Component, Input, Output , EventEmitter, HostListener} from '@angular/core';

@Component({
    selector: 'my-text-box',
    template: `<div class='text-box-div'>
               <span><strong>Org: </strong></span><input class="text-box" #textbox type="text" [(ngModel)]="textValue" required>
               <button class="text-box-button" (click)=textboxClick() type="button" >
                  <img src="images/magnifier.png" height="18" width="16" />
               </button>
               <div>
    `
})
export class TextComponent {
        @Input() textValue: string;
        @Output() mybuttonclick: EventEmitter<string> = new EventEmitter<string>();

        textboxClick()
        {
            this.mybuttonclick.emit( this.textValue);
        }
}
