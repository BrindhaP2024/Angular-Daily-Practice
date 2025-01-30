import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-data-list',
  imports: [FormsModule,NgFor],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {
  data: string[] = [];
  newData: string = '';

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  addData() {
    if (this.newData) {
      this.dataService.addData(this.newData);
      this.newData = '';
      this.data = this.dataService.getData();
    }
  }
}
