import { Component, Input } from '@angular/core';

@Component({
    selector: 'gantt-header',
    template: `
        <div class="gantt-header">
            <div class="gantt-header-title">
                <div style="flex:1">{{ name }}</div>
                <div>Started: {{ startDate | date: 'medium'}}</div>
            </div>
        </div>
    `,
    styles: [`
        .gantt-header {
            background-color: rgba(0,0,0, 0.1);
            height: 40px;
        }

        .gantt-header-title {
            padding: 12px;   
            display: flex;
            flex-wrap:wrap;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
        }

        .gantt-header-actions {
            display: inline;
            float: right;
            padding: 6px;
        }
    `], 
})
export class GanttHeaderComponent {
    @Input() name:any;
    @Input() startDate: Date;
}