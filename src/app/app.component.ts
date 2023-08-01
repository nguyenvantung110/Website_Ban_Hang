import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogButtons, DialogParams, DialogResult, DialogTypes } from './shared/dialog-modal/dialog-types';
import { DialogModalService } from './shared/dialog-modal/dialog-modal.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-sale';
  public dialog = new DialogParams(null || '', null || '', null || '', null || '', null || '', null || '', null || '', null || '');
  opening = false;
  ngbModalRef!: NgbModalRef;
  checkValue = false;
  isLoading = false;
  @ViewChild('dialogModal', { static: true }) dialogModal!: ElementRef;
  constructor(
    private dialogModalService: DialogModalService,
    private location: Location,
    private ngbModal: NgbModal,
  ) {}
  
  ngOnInit(): void {
    this.location.onUrlChange(v => {
      this.subcribeDialogModal();
    });
    // this.storeApp.pipe(select(selectedLoading)).subscribe(loading => {
    //   setTimeout(() => {
    //     this.isLoading = loading;
    //   }, 1);
    // });
  }

  subcribeDialogModal() {
    this.dialogModalService.modalSubject.subscribe((dialog: DialogParams) => {
      this.dialog = dialog;
      let isBlankObject = true;
      if (this.dialog.type !== null && this.dialog.type !== '' && this.dialog.type !== undefined ) {
        isBlankObject = false;
      }
      if (!this.opening && !isBlankObject) {
        this.ngbModalRef = this.ngbModal.open(this.dialogModal,
          {
            backdrop: 'static',
            keyboard: false,
            centered: true,
            size: 'modal w500 acist-middle   ' + dialog.colorDialog
          });
        if (this.dialog.type === DialogTypes.info) {
          const timeOut = 1500;
          this.dialog.type = '';
          this.opening = false;
          setTimeout(() => {
            this.ngbModalRef.close();
          }, timeOut);
        } else {
          this.opening = true;
        }
      }
    });
  }

  closeModal() {
    this.ngbModalRef.close();
    this.dialogModalService.source.next(new DialogParams(null || '', null || '', null || '', null || '', null || '', null || '', null || '', null || ''));
    this.dialog = new DialogParams(null || '', null || '', null || '', null || '', null || '', null || '', null || '', null || '');
    this.opening = false;
  }
  clickButtonCancel() {
    const lbCheck = this.dialog?.checklabel;
    this.closeModal();
    if (lbCheck) {
      this.dialogModalService.dialogResult.next(new DialogResult(DialogButtons.cancel, this.checkValue));
    } else {
      this.dialogModalService.dialogResult.next(new DialogResult(DialogButtons.cancel));
    }
    this.dialogModalService.dialogResult.complete();
    this.closeModal();
    this.checkMenuActive();
  }
  checkMenuActive(){
    const strHref = window.location.pathname;
    const strHref2 = $('#navbarNavDropdown a.active').attr('href');
    if (strHref !== strHref2){
      $('#navbarNavDropdown a, #navbarNavDropdown li').removeClass('active');
      $('a[href="' + strHref + '"]').addClass('active');
      $('a[href="' + strHref + '"]').closest('li').addClass('active');
    }
  }
  clickButtonOK() {
    const lbCheck = this.dialog?.checklabel;
    this.closeModal();
    if (lbCheck) {
      this.dialogModalService.dialogResult.next(new DialogResult(DialogButtons.ok, this.checkValue));
    } else {
      this.dialogModalService.dialogResult.next(new DialogResult(DialogButtons.ok));
    }
    this.dialogModalService.dialogResult.complete();
  }

  clickButtonNo() {
    const lbCheck = this.dialog?.checklabel;
    this.closeModal();
    if (lbCheck) {
      this.dialogModalService.dialogResult.next(new DialogResult(DialogButtons.no, this.checkValue));
    } else {
      this.dialogModalService.dialogResult.next(new DialogResult(DialogButtons.no));
    }
    this.dialogModalService.dialogResult.complete();
  }

}
