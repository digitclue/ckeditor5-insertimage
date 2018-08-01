import Plugin from '@ckeditor/ckeditor5-image/src/image';
import { InsertImageEditing } from './insertimage/insertimage-editing';
export declare class InsertImage extends Plugin {
    static readonly pluginName: string;
    static readonly requires: (typeof InsertImageEditing)[];
}
