export class Client {
  clientID: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  state: string;
  city: string;
  pincode: string;
  EmployeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;

  constructor() {
    this.clientID = 0;
    this.contactPersonName = '';
    this.companyName = '';
    this.address = '';
    this.state = '';
    this.city = '';
    this.pincode = '';
    this.EmployeeStrength = 0;
    this.gstNo = '';
    this.contactNo = '';
    this.regNo = '';
  }
}
