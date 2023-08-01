export enum DialogTypes {
    'warning' = 'warning',
    'error' = 'error',
    'confirm' = 'confirm',
    'info' = 'info'
}

export enum DialogButtons {
    'cancel' = 'cancel',
    'ok' = 'ok',
    'no' = 'no',
}

export class DialogParams {
    type: string;
    title: string;
    message: string;
    okBtn: string;
    noBtn: string;
    cancelBtn: string;
    colorDialog: string;
    checklabel: string;

    constructor(
        type: string,
        title: string,
        message: string,
        okBtn: string,
        noBtn: string,
        cancelBtn: string,
        colorDialog: string,
        checklabel: string,
    ) {
        this.type = type;
        this.title = title;
        this.message = message;
        this.okBtn = okBtn;
        this.noBtn = noBtn;
        this.cancelBtn = cancelBtn;
        this.colorDialog = colorDialog;
        this.checklabel = checklabel;
    }
}

export class DialogResult {
    public buttonName: string;
    public checked: boolean;

    constructor(buttonName: string, checked = false) {
        this.buttonName = buttonName;
        this.checked = checked;
    }

    isOk(): boolean {
        return this.buttonName === DialogButtons.ok;
    }

    isCancel(): boolean {
        return this.buttonName === DialogButtons.cancel;
    }

    isNo(): boolean {
        return this.buttonName === DialogButtons.no;
    }

    isChecked(): boolean {
        return this.checked;
    }
}
