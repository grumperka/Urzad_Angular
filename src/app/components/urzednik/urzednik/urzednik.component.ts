import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urzednik',
  templateUrl: './urzednik.component.html',
  styleUrls: ['./urzednik.component.css']
})
export class UrzednikComponent implements OnInit {
  title: string = 'Urzednicy';

  constructor() { }

  ngOnInit(): void {
  }

}
