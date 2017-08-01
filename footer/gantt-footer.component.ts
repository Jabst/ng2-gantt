import { Component, Input } from '@angular/core';

@Component({
    selector: 'gantt-footer',
    template: `<div class="gantt-footer"></div>`,
    styles: [`
        .gantt-footer {
            background-color: rgba(0, 0, 0, 0.1);
            height: 36px;
        }

        .gantt-footer-actions {
            float:right;
        }
    `],
})
export class GanttFooterComponent {
    @Input() project: any;
    constructor() { }
}