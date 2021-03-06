import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import BalloonPanelView from '@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import { InsertImageFormView } from '../ui/insertimage-form-view';
export class InsertImageUi extends Plugin {
    init() {
        this.balloon = this.editor.plugins.get(ContextualBalloon);
        this.button = this._createButton();
        this.form = this._createForm();
        this.attachEvents();
    }
    get _isVisible() {
        return this.balloon.visibleView === this.form;
    }
    attachEvents() {
        const command = this.editor.commands.get('insertImage');
        this.listenTo(command, 'change:isEnabled', (e, eventName, isEnabled) => {
            if (!isEnabled) {
                this._hideForm();
            }
        });
        this.listenTo(this.button, 'execute', () => this._showForm());
        this.listenTo(this.form, 'cancel', () => {
            this._hideForm();
            this.editor.editing.view.focus();
        });
        this.listenTo(this.form, 'submit', () => {
            this.editor.execute('insertImage', this.form.labeledInput.inputView.element.value);
            this._hideForm();
            this.editor.editing.view.focus();
        });
        clickOutsideHandler({
            emitter: this.form,
            activator: () => this._isVisible,
            contextElements: [
                this.form.element,
                this.button.element,
            ],
            callback: () => this._hideForm(),
        });
    }
    _createButton() {
        const editor = this.editor;
        const command = editor.commands.get('insertImage');
        const button = new ButtonView(editor.locale);
        button.set({
            label: editor.t('Insert image'),
            icon: imageIcon,
        });
        button
            .bind('isEnabled')
            .to(command, 'isEnabled');
        button
            .bind('isOn')
            .to(this.balloon.view, 'isVisible');
        button
            .bind('tooltip')
            .to(button, 'isOn', (isOn) => !isOn);
        button.render();
        editor
            .ui
            .componentFactory
            .add('insertImage', () => this.button);
        return button;
    }
    _createForm() {
        const form = new InsertImageFormView(this.editor.locale);
        // Render the form so its #element is available for clickOutsideHandler.
        form.render();
        return form;
    }
    _showForm() {
        if (this._isVisible) {
            this.form.labeledInput.focus();
            return;
        }
        if (!this.balloon.hasView(this.form)) {
            this.balloon.add({
                view: this.form,
                position: this._getBalloonPositionData(),
            });
        }
        this.form.labeledInput.focus();
    }
    _hideForm() {
        if (!this._isVisible) {
            return;
        }
        this.form.labeledInput.inputView.element.value = '';
        this.balloon.remove(this.form);
    }
    _getBalloonPositionData() {
        const { defaultPositions } = BalloonPanelView;
        return {
            target: this.button.element,
            positions: [
                defaultPositions.northArrowSouth,
                defaultPositions.northArrowSouthWest,
                defaultPositions.northArrowSouthEast,
                defaultPositions.southArrowNorth,
                defaultPositions.southArrowNorthWest,
                defaultPositions.southArrowNorthEast,
            ],
        };
    }
}
//# sourceMappingURL=insertimage-ui.js.map