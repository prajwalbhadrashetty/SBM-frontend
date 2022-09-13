import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceBookingReportService } from './../../services/service-booking-report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-booking-report-management',
  templateUrl: './service-booking-report-management.component.html',
  styleUrls: ['./service-booking-report-management.component.scss']
})
export class ServiceBookingReportManagementComponent implements OnInit {

  isBookings : boolean = true;
  bookingForm: FormGroup;
  reportForm: FormGroup;
  bookings: any =[];
  reports: any =[];

  constructor(private service:ServiceBookingReportService) { }

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      id:new FormControl('',Validators.required),
      productId:new FormControl('',Validators.required),
      userId:new FormControl('',Validators.required),
      reqDate:new FormControl('',Validators.required),
      problem:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    });
    this.reportForm = new FormGroup({
      reportId:new FormControl({value:0,disabled:true}),
      serReqId:new FormControl(0,Validators.required),
      reportDate:new FormControl('',Validators.required),
      serviceType:new FormControl('',Validators.required),
      actionTaken:new FormControl('',Validators.required),
      diagnosisDetail:new FormControl('',Validators.required),
      isPaid:new FormControl('',Validators.required),
      visitFees:new FormControl('',Validators.required),
      reportDetails:new FormControl('',Validators.required)
    });
    this.getAllBookings();
    this.getAllReports();
  }
  get bookingId() { return this.bookingForm.get('id').value}
  get reportId() { return this.reportForm.get('reportId').value}

  getAllBookings(){
    this.service.getbookings().subscribe(
      (data:any)=>{
       this.bookings=data.appServiceReq;
      }
    )
  }

  addBooking(){
    this.service.addbooking(this.bookingForm.value).subscribe(
      (data:any)=>{
        if(data){
          this.bookingForm.reset();
          this.getAllBookings()
        }
      }
    );
  }

  addReport(){
    this.service.addreport(this.reportForm.value).subscribe(
      (data:any)=>{
        if(data){
          this.reportForm.reset();
          this.getAllReports()
        }
      }
    );
  }

  getAllReports(){
    this.service.getreports().subscribe(
      (data:any)=>{
        console.log(data.appServiceReqReportList);
        this.reports= data.appServiceReqReportList;
      }
    );
  }

  edit(booking:any){
    this.bookingForm.patchValue({id:booking.id,productId:booking.productId,userId:booking.userId,reqDate:booking.reqDate,problem:booking.problem,description:booking.description,status:booking.status})
  }

  editReport(report:any){
    this.reportForm.patchValue({reportId:report.reportId,serReqId:report.serReqId,reportDate:report.reportDate,serviceType:report.serviceType,actionTaken:report.actionTaken,diagnosisDetails:report.diagnosisDetails,isPaid:report.isPaid,visitFees:report.visitFees,reportDetails:report.reportDetails})
  }

  updateBooking(){
    this.service.updatebooking(this.bookingForm.value).subscribe(
      (data:any)=>{
        if(data){
          this.getAllBookings()
        }
      }
    );
  }

  updateReport(){
    this.service.updatereport(this.reportForm.getRawValue()).subscribe(
      (data:any)=>{
        if(data){
          this.getAllReports()
        }
      }
    );
  }

  delete(id:any){
    this.service.deletebooking(id).subscribe(
      (data)=>{
        console.log(data)
        
      }
    )
  }

  deleteReport(id:any){
    this.service.deletereport(id).subscribe(
      (data)=>{
        console.log(data)
        
      }
    )
  }

}
