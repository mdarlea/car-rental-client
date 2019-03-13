/// <reference path="../../../../node_modules/reflect-metadata/reflect.d.ts" />
import { Component, TypeDecorator, Input } from '@angular/core';
import { Validator, ValidatorFn } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { copyObject } from '../utils';
import 'reflect-metadata';

export class ValidationTypeDecorator {
    constructor(public validatorType: Function) {
    }
}

// validation type decorator
export function ValidationType(validatorType: Function) {
    return (target: Function) => {
        const annotations = Reflect.getMetadata('validation:annotations', target) || [];
        annotations.push(new ValidationTypeDecorator(validatorType));
        Reflect.defineMetadata('validation:annotations', annotations, target);
    };
}
export abstract class ValidationErrorComponent {

    @Input() message: string;

    private validator: Validator | ValidatorFn;

    constructor(private control: NgControl,
                validators: Array<Validator | ValidatorFn>) {

        // get the validator type
        const target = this.constructor;
        const annotations = Reflect.getMetadata('validation:annotations', target) || [];

        for (const annotation of annotations) {
            if (annotation instanceof ValidationTypeDecorator) {
                const type = annotation.validatorType;
                for (const validator of validators) {
                    if (validator instanceof type) {
                        this.validator = validator;
                        break;
                    }
                }
            }
        }
    }

    isValid(): boolean {
        if (!this.validator) { return true; }
        if (this.control.pristine) { return true; }

        const result = ('validate' in this.validator)
            ? (this.validator as Validator).validate(this.control.control) : (this.validator as ValidatorFn)(this.control.control);
        return !result;
    }
}
