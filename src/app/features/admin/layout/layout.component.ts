import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Menu } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  opened = true;
  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: 'AA77FF',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: 'AA77FF',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: 'AA77FF',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: 'AA77FF',
          link: '/customers',
          
        },
      ],
    },
  ];

  toggle(): void {
    this.opened = !this.opened;
  }
}
