import Command from '@ckeditor/ckeditor5-core/src/command';
import { isImage } from '@ckeditor/ckeditor5-image/src/image/utils';
import { getUrlWithoutQuery, isImageUrl, } from '../utils';
export class ChangeImageCommand extends Command {
    refresh() {
        this.value = this._getValue();
        this.isEnabled = this._checkEnabled();
        console.log('refresh');
    }
    execute(imageUrl) {
        const urlWithoutQuery = getUrlWithoutQuery(imageUrl);
        if (isImageUrl(urlWithoutQuery)) {
            this._changeImage(urlWithoutQuery);
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
        return isImage(element);
    }
    _changeImage(imageUrl) {
        const { model } = this.editor;
        const imageElement = model.document.selection.getSelectedElement();
        model
            .change(writer => {
            writer.setAttribute('src', imageUrl, imageElement);
        });
    }
}
export default ChangeImageCommand;
//# sourceMappingURL=changeimage-command.js.map