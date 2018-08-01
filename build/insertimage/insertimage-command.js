import Command from '@ckeditor/ckeditor5-core/src/command';
import { isImage } from '@ckeditor/ckeditor5-image/src/image/utils';
import { getUrlWithoutQuery, isImageUrl, } from '../utils';
export default class InsertImageCommand extends Command {
    refresh() {
        this.value = this._getValue();
        this.isEnabled = this._checkEnabled();
    }
    execute(imageUrl) {
        const urlWithoutQuery = getUrlWithoutQuery(imageUrl);
        if (isImageUrl(urlWithoutQuery)) {
            this._insertImage(urlWithoutQuery);
        }
        else {
            alert('Don`t do that!');
        }
    }
    _getValue() {
        const selectedElement = this.editor.model.document.selection.getSelectedElement();
        if (isImage(selectedElement)) {
            return selectedElement.getAttribute('src');
        }
        return '';
    }
    _checkEnabled() {
        const element = this.editor.model.document.selection.getSelectedElement();
        return !isImage(element);
    }
    _insertImage(imageUrl) {
        const { model } = this.editor;
        model
            .change(writer => {
            const imageElement = writer.createElement('image', {
                src: imageUrl,
            });
            // Insert the image in the current selection location.
            model.insertContent(imageElement, model.document.selection);
        });
    }
}
//# sourceMappingURL=insertimage-command.js.map