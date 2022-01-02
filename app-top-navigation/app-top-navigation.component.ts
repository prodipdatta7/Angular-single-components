import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-top-navigation',
    templateUrl: './app-top-navigation.component.html',
    styleUrls: ['./app-top-navigation.component.scss']
})
export class AppTopNavigationComponent implements OnInit {

    selected = 'daily';

    dates: any[] = [
        { value: 'daily', text: 'Daily' },
        { value: 'weekly', text: 'Weekly View' },
        { value: 'listview', text: 'List View' },
        { value: 'overview', text: 'Overview' }
    ];

    constructor() { }

    ngOnInit() {
    }

}
