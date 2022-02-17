import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [
    {customerNo: 9127, name: 'Masoud', city: 'Tehran'},
    {customerNo: 1254, name: 'Ali', city: 'Esfahan'},
    {customerNo: 9687, name: 'Milad', city: 'Mohammad'},
    {customerNo: 2736, name: 'Ehsan', city: 'Shiraz'},
    {customerNo: 4786, name: 'Reza', city: 'Mashhad'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
