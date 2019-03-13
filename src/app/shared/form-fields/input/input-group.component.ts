import { Component, forwardRef, Optional, Host, Self, Inject, Input, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { coerceBooleanProperty } from '../../utils';

@Component({
    selector: 'input-group',
    templateUrl: './input-group.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputGroupComponent),
        multi: true
    }]
})
export class InputGroupComponent implements ControlValueAccessor{
    // tslint:disable-next-line:no-input-rename
    @Input('fa-icon') faIcon: string;

    get icon(): string {
        return (this.faIcon) ? `fa-${this.faIcon}` : null;
    }

    @Input() name: string;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() type = 'text';
    @Input() minlength: number = null;
    @Input() maxlength: number = null;
    @Input() disabled = false;
    @Input() col = 10;

    get cssCol(): string {
      return (this.col) ? `cols-sm-${this.col}` : 'cols-sm-10';
    }

    @Input()
    get required(): boolean { return this.requiredValue; }
    set required(value: boolean) { this.requiredValue = coerceBooleanProperty(value); }

    // The internal data model
    private inputValue: any = '';
    private requiredValue: any;
    private onTouched = () => {};
    private onChange = (_: any) => {};

    // get accessor
    get value(): any {
        return this.inputValue;
    }

    // set accessor including call the onchange callback
    set value(value: any) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.onChange(value);
        }
    }

    // Set touched on blur
    onBlur() {
        this.onTouched();
    }

    // From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.inputValue) {
            this.inputValue = value;

        }
    }

    // From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    // From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }
}
