import Plugin from '@ckeditor/ckeditor5-image/src/image';
import { ChangeImageEditing } from './changeimage/changeimage-editing';
export declare class ChangeImage extends Plugin {
    static readonly pluginName: string;
    static readonly requires: (typeof ChangeImageEditing)[];
}
