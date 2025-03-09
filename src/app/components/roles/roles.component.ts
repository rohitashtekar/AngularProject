import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role-int';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(): void {
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) => {
      this.roleList = res.data;
    });
  }
  // firstName: string = "Angular Project";
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "text";
  // selectedState: string = '';

  // showWelcomeAlert() {
  //   alert('Welcome to my page');
  // }

  // showMessage(message: string) {
  //   alert(message);
  // }

}
