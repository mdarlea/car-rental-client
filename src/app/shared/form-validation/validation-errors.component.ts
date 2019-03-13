import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'validation-errors',
    template: `<div *ngIf="hasErrors" class="alert alert-danger">
                    <div *ngFor="let msg of messages">{{msg}}</div>
               </div>`
})
export class ValidationErrorsComponent implements OnChanges {
    // tslint:disable-next-line:no-input-rename
    @Input('model-state') modelState: any;

    messages = new Array<string>();

    get hasErrors(): boolean {
        return this.messages && this.messages.length > 0;
    }
    private ensureMessages(state: any) {
       // tslint:disable-next-line:curly
       if (!state) return;

       for (const property in state) {
            if (state.hasOwnProperty(property)) {
                const items = state[property];
                for (const err of items) {
                    this.messages.push(err);
                }
            }
        }
    }

    ngOnChanges(changes: any): void {
        this.messages = new Array<string>();
        if (changes && 'modelState' in changes) {
            const currentValue = changes.modelState.currentValue;
            if (currentValue) {
                let states: any = null;
                if ('modelState' in currentValue) {
                    states = currentValue.modelState;
                } else if ('exceptionMessage' in currentValue) {
                    states = {
                        message: [currentValue.message],
                        exceptionMessage: [currentValue.exceptionMessage]
                    };
                } else if ('messageDetail' in currentValue) {
                    states = {
                        message: [currentValue.message],
                        messageDetail: [currentValue.messageDetail]
                    };
                } else if ('message' in currentValue) {
                    states = {
                        message: [currentValue.message]
                    };
                } else {
                  states = currentValue;
                }
                this.ensureMessages(states);
            }
        }
    }
}
