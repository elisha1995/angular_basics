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
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe(
      (res: APIResponseModel) => {
        this.designationList = res.data;
      },
      (error) => {
        alert('API error/ Network Down');
      }
    );
  }
}
