import { Component, OnInit } from '@angular/core';
import { SupplierService } from './../../services/supplier.service';
import { Supplier } from './../../models/supplier';
import { faPlusCircle, faSave } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[] = [];
  faPlusCircle = faPlusCircle;
  faSave = faSave;
  showEditForm = false;
  addForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    contactName: [''],
    address: ['', Validators.required]
  });

  constructor(
    public suppliersService: SupplierService,
    private router: Router,
    private notificationService : NotificationService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(){
    this.suppliersService.getSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }

  showAddModal(modal:any) {
    this.modalService.open(
      modal,
      {
        ariaLabelledBy: 'modal-basic-title'
      }
    )
    .result
    .then((result) => {
    }, (reason) => {
    });
  }

  onAddSubmit(){
    this.suppliersService.addSupplier(this.addForm.value).subscribe(resp => {
      if(resp.success){
        this.notificationService.showSuccess("El proveedor fue agregado con éxito");
        this.modalService.dismissAll();
        this.getSuppliers();
      } else {
        this.notificationService.showError("Ha ocurrido un error por favor intentar más tarde");
      }
    });
  }

  editSupplier(supplierEdited:Supplier){
    console.log('Proveedor editado');
    console.log(supplierEdited);
    this.suppliersService.editSupplier(supplierEdited).subscribe(resp => {
      if(resp.success){
        this.notificationService.showSuccess("El proveedor fue editado con éxito");
        this.getSuppliers();
      } else {
        this.notificationService.showError("Ha ocurrido un error por favor intentar más tarde");
      }
    });
  }

  deleteSupplier(supplier:Supplier){
    this.suppliersService.deleteSupplier(supplier).subscribe(resp => {
      if(resp.success){
        this.notificationService.showSuccess("El proveedor fue eliminado con éxito");
        this.getSuppliers();
      } else {
        this.notificationService.showError("Ha ocurrido un error por favor intentar más tarde");
      }
    });
  }

}
