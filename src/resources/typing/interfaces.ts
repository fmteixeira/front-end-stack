export interface Example {
    readonly name: string;
    readonly age?: number;
}
export interface Message {
    readonly id: string;
    readonly date: string;
    readonly userId: number;
    readonly text: string;
}

export interface MessageFile {
    readonly id: string;
    readonly date: string;
    readonly userId: number;
    readonly text?: string;
    readonly file: SentFile;
}
export interface SentFile {
    readonly fileEncoded: string;
    readonly fileName: string;
    readonly fileType: string;
    readonly fileSize: string;
}

export interface Messages {
    readonly username: string | undefined;
    readonly date: string | undefined;
    readonly message: string | undefined;
}

export interface ChatMessages {
    readonly id: number;
    readonly name: string;
    readonly img: string;
    readonly online?: string;
    readonly unreadMessageCounter: number;
    readonly messages: Array<Message | MessageFile>;
}
