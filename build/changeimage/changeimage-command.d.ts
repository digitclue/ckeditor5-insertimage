import Command from '@ckeditor/ckeditor5-core/src/command';
export declare class ChangeImageCommand extends Command {
    value: string;
    refresh(): void;
    execute(imageUrl: string): void;
    private _getValue;
    private _checkEnabled;
    private _changeImage;
}
export default ChangeImageCommand;
