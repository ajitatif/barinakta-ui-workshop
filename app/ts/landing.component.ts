import { Component } from '@angular/core';

@Component({
    selector: 'landing-page',
    moduleId: module.id;
    template: `
                <div id="wrapper">
                    <admin-nav></admin-nav>
                    <admin-main></admin-main>
                </div>`
})
export class LandingComponent {}