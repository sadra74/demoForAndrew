import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Route, Router} from '@angular/router';
import {StateService} from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'account-balance';

  constructor(public router: Router, public state: StateService) {
  }

  buttonClick(e: MouseEvent): void {
    this.router.navigateByUrl('/account-balance').then(res => {
    });
  }
}
