import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCommunicator } from './communicator/api.communicator.';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'fizzbuzz-fe';
    testForm: FormGroup;

    constructor(
        private apiCommunicator: ApiCommunicator,
    ) {
        this.testForm = new FormGroup({
            element: new FormControl(0, []),
            sequence: new FormControl(0, []),
        });
    }

    setElement(event: any) {
        this.testForm.controls.element.setValue(event.target.value);
    }

    async convertElement(): Promise<void> {
        console.log(this.testForm.controls.element.value);
        const result: string = await this.apiCommunicator.convertElement(this.testForm.controls.element.value);
        console.log(result);
    }

    setSequence(event: any) {
        this.testForm.controls.sequence.setValue(event.target.value);
    }

    async generateSequence(): Promise<void> {
        console.log(this.testForm.controls.sequence.value);
        const result: string[] = await this.apiCommunicator.generateSequence(this.testForm.controls.sequence.value);
        console.log(result);
    }
}
