import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
export declare class InsertImageUi extends Plugin<EditorWithUI> {
    private button;
    private form;
    private balloon;
    init(): void;
    private readonly _isVisible;
    private attachEvents;
    private _createButton;
    private _createForm;
    private _showForm;
    private _hideForm;
    private _getBalloonPositionData;
}
