import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'UMS';
  constructor(dialogRef: MatDialog, router: Router) {
    router.events.subscribe(() => dialogRef.closeAll());
  }
}
