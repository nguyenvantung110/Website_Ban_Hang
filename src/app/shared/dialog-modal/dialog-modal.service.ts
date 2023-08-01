import { Injectable } from '@angular/core';
import { DialogParams, DialogResult, DialogTypes } from './dialog-types';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogModalService {
    public source: BehaviorSubject<DialogParams> = new BehaviorSubject<DialogParams>(new DialogParams(
      null || '', null || '', null || '', null || '', null || '', null || '', null || '', null || ''));
  modalSubject = this.source.asObservable();
  dialogResult: Subscriber<DialogResult> = new Subscriber<DialogResult>();

  constructor(

  ) { }

  openDialogA(message: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Info Modal';
      }
      return this.openModal(DialogTypes.info, title, message, null || '', null || '', null || '', colorDialog || '');
  }

  openErrorModal(message: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Error Modal';
      }
      return this.openModal(DialogTypes.error, title, message, 'OK', null || '', null || '', colorDialog || '');
  }

  openErrorModalMessageCode(messageCode: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Error Modal Message Code';
      }
      let message = '';
      if (messageCode) {
          message = 'Message code';
      }
      return this.openModal(DialogTypes.error, title, message, 'OK', null || '', null || '', colorDialog || '');
  }

  openWarningModal(message: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Warning Modal';
      }
      return this.openModal(DialogTypes.warning, title, message, 'OK', null || '', null || '', colorDialog || '');
  }

  openInfoModal(message: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Info Modal';
      }
      return this.openModal(DialogTypes.error, title, message, 'OK', null || '', null || '', colorDialog || '');
  }

  openConfirmModal(message: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Confirmation Modal';
      }
      return this.openModal(DialogTypes.confirm, title, message,
          'OK', null || '', 'CANCEL', colorDialog || '');
  }

  openConfirmModalMessageCode(messageCode: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Confirmation Modal';
      }
      let message = '';
      if (messageCode) {
          message = 'Message code';
      }
      return this.openModal(DialogTypes.confirm, title, message,
          'OK', null || '', 'CANCEL', colorDialog || '');
  }

  openVerificationModal(message: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Confirmation Modal';
      }
      return this.openModal(DialogTypes.confirm, title, message,
          'YES', 'NO',
          'CANCEL', colorDialog || '');
  }

  openVerificationModalMessageCode(message: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Confirmation Modal';
      }

      return this.openModal(DialogTypes.confirm, title, message,
          'YES', 'NO',
          'CANCEL', colorDialog || '');
  }

  openCheckboxModal(message: string, lbCheck?: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Infor Modal';
      }
      return this.openModal(DialogTypes.confirm, title, message, 'YES', null || '', null || '', colorDialog || '', lbCheck);
  }

  openCheckboxVerificationModal(message: string, lbCheck?: string, title?: string, colorDialog?: string): Observable<DialogResult> {
      if (!title) {
          title = 'Info Modal';
      }
      return this.openModal(DialogTypes.confirm, title, message,
          'YES',
          'NO',
          'CANCEL', colorDialog || '', lbCheck);
  }

  openModal(type: string,
            title: string,
            message: string,
            okBtn: string,
            noBtn: string,
            cancelBtn: string,
            colorDialog: string,
            checklabel = ''): Observable<DialogResult> {
      this.source.next(new DialogParams(type, title, message, okBtn, noBtn, cancelBtn, colorDialog, checklabel));
      return new Observable<DialogResult>(subscriber => {
          this.dialogResult = subscriber;
      });
  }
}
