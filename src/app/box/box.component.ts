import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent implements OnInit, OnDestroy, OnChanges {
  @Input() size = '';

  constructor() {
    console.log('constructor', this.size);
  }
  ngOnInit() {
    console.log('ngOnInit :', this.size);
  }
  ngOnDestroy() {
    console.log('ondestroy:', this.size);
  }
  ngOnChanges() {
    console.log('onchanges:', this.size);
  }
}
