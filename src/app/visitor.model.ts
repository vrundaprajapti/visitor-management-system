export interface Visitor {
  role: 'visitor';
  name: string;
  email: string;
  phone: string;
  company: string;
  password: string;
  confirmPassword: string;
  checkInTime: Date;
  checkOutTime?: Date;
}
