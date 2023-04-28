import { Component, ChangeDetectionStrategy,
  EventEmitter,
  Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Enea';
  logout(): void {
    console.log('Logged out');
  }
}
