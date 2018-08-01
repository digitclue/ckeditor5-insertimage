import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import InputTextView from '@ckeditor/ckeditor5-ui/src/inputtext/inputtextview';
import LabeledInputView from '@ckeditor/ckeditor5-ui/src/labeledinput/labeledinputview';
import View from '@ckeditor/ckeditor5-ui/src/view';
export declare class InsertImageFormView extends View {
    readonly labeledInput: LabeledInputView<InputTextView>;
    readonly saveButton: ButtonView;
    readonly cancelButton: ButtonView;
    private readonly focusTracker;
    private readonly keystrokes;
    private readonly _focusables;
    private _focusCycler;
    constructor(locale: any);
    render(): void;
    private _createButton;
    private _createLabeledInputView;
}
