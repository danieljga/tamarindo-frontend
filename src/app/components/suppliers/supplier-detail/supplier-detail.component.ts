import { Supplier } from './../../../models/supplier';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {

  @Input() supplier: Supplier = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    createdDate: new Date
  };
  @Output() deleteRequest = new EventEmitter<string>();
  @Output() supplierEdited: EventEmitter<Supplier> = new EventEmitter();
  faSave = faSave;
  editForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    contactName: [''],
    address: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    console.log(this.supplier.createdDate);
  }

  edit(modal:any) {
    console.log('Editar', this.supplier);

    this.editForm.setValue({
      id: this.supplier.id,
      name: this.supplier.name,
      email: this.supplier.email,
      phone: this.supplier.phone,
      contactName: this.supplier.contactName,
      address: this.supplier.address
    });

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

  onEditSubmit(){
    this.supplier = this.editForm.value;
    console.log('Editar', this.supplier);
    this.supplierEdited.emit(this.supplier);
    this.modalService.dismissAll();
  }

  delete() {
    console.log('Eliminar', this.supplier);
    this.deleteRequest.emit(JSON.stringify(this.supplier));
  }



}
