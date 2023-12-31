import { Component } from '@angular/core';
import { UsernavComponent } from "../../navbars/usernav/usernav.component";
import { UserfooterComponent } from "../../footers/userfooter/userfooter.component";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [
      UsernavComponent,
      UserfooterComponent,
      RouterModule
    ]
})
export class DashboardComponent {

}
