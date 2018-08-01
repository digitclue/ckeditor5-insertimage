import cancelIcon from '@ckeditor/ckeditor5-core/theme/icons/cancel.svg';
import checkIcon from '@ckeditor/ckeditor5-core/theme/icons/check.svg';
import submitHandler from '@ckeditor/ckeditor5-ui/src/bindings/submithandler';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import FocusCycler from '@ckeditor/ckeditor5-ui/src/focuscycler';
import InputTextView from '@ckeditor/ckeditor5-ui/src/inputtext/inputtextview';
import LabeledInputView from '@ckeditor/ckeditor5-ui/src/labeledinput/labeledinputview';
import View from '@ckeditor/ckeditor5-ui/src/view';
import ViewCollection from '@ckeditor/ckeditor5-ui/src/viewcollection';
import FocusTracker from '@ckeditor/ckeditor5-utils/src/focustracker';
import KeystrokeHandler from '@ckeditor/ckeditor5-utils/src/keystrokehandler';
export class InsertImageFormView extends View {
    constructor(locale) {
        super(locale);
        this.labeledInput = this._createLabeledInputView();
        this.saveButton = this._createButton(this.t('Save'), checkIcon, 'ck-button-save');
        this.saveButton.type = 'submit';
        this.cancelButton = this._createButton(this.t('Cancel'), cancelIcon, 'ck-button-cancel');
        this.focusTracker = new FocusTracker();
        this.keystrokes = new KeystrokeHandler();
        this._focusables = new ViewCollection();
        this._focusCycler = new FocusCycler({
            focusables: this._focusables,
            focusTracker: this.focusTracker,
            keystrokeHandler: this.keystrokes,
            actions: {
                focusPrevious: 'shift + tab',
                focusNext: 'tab',
            },
        });
        this.cancelButton
            .delegate('execute')
            .to(this, 'cancel');
        this.keystrokes
            .set('Esc', () => {
            this.fire('cancel');
        });
        this.setTemplate({
            tag: 'form',
            attributes: {
                class: [
                    'ck',
                    'ck-insert-image-form',
                ],
            },
            children: [
                this.labeledInput,
                this.saveButton,
                this.cancelButton,
            ],
        });
    }
    render() {
        super.render();
        this.keystrokes.listenTo(this.element);
        submitHandler({ view: this });
        [
            this.labeledInput,
            this.saveButton,
            this.cancelButton,
        ]
            .forEach(v => {
            // Register the view as focusable.
            this._focusables.add(v);
            // Register the view in the focus tracker.
            this.focusTracker.add(v.element);
        });
    }
    _createButton(label, icon, className) {
        const button = new ButtonView(this.locale);
        button.set({
            label,
            icon,
            tooltip: true,
        });
        button.extendTemplate({
            attributes: {
                class: className,
            },
        });
        return button;
    }
    _createLabeledInputView() {
        const labeledInput = new LabeledInputView(this.locale, InputTextView);
        labeledInput.label = this.t('Insert image url');
        labeledInput.inputView.placeholder = this.t('Insert image url');
        return labeledInput;
    }
}
//# sourceMappingURL=insertimage-form-view.js.map