export interface Example {
    readonly name: string;
    readonly age?: number;
}
export interface Message {
    readonly id: number;
    readonly text: string;
    readonly date: Date;
}

export interface MessageFile{
    readonly id:number;
    readonly date: Date;
    readonly text?: string;
    readonly fileName: string;
    readonly fileSize: string;
}