import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AdminnavComponent } from "../../navbars/adminnav/adminnav.component";
import { AdminfooterComponent } from "../../footers/adminfooter/adminfooter.component";

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [
    RouterModule,
    AdminnavComponent,
    AdminfooterComponent
  ],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})
export class AdminpanelComponent {

}
