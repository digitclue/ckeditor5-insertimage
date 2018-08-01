import Command from '@ckeditor/ckeditor5-core/src/command';
export default class InsertImageCommand extends Command {
    value: string;
    refresh(): void;
    execute(imageUrl: string): void;
    private _getValue;
    private _checkEnabled;
    private _insertImage;
}
