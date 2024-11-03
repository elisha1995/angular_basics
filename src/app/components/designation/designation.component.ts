import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { MasterService } from './../../services/master.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe({
      next: (res: APIResponseModel) => {
        this.designationList = res.data;
        this.isLoader = false;
      },
      error: (error) => {
        alert('API error/ Network Down');
        this.isLoader = false;
      },
    });
  }
}
