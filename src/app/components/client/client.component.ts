import { ClientService } from './../../services/client.service';
import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { APIResponseModel } from '../../model/interface/role-int';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {

  }

  loadClient() {
    this.clientService.getAllclients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    debugger;
    this.clientService.addupdate(this.clientObj).subscribe((res:APIResponseModel) => {
      if(res.result) {
        console.log("Client created successfully!");
      }
      else {
        console.log(res.message);
      }
    })
  }
}
