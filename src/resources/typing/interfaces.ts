import { DownloadableFileFormats } from "./types";

export interface Example {
    readonly name: string;
    readonly age?: number;
}
export interface Message {
    readonly id: number;
    readonly text: string;
    readonly date: Date;
}

export interface MessageFile {
    readonly id: number;
    readonly date: Date;
    readonly text?: string;
    readonly file: SentFile;
}
export interface SentFile {
    readonly fileEncoded: string;
    readonly fileName: string;
    readonly fileType: DownloadableFileFormats;
    readonly fileSize: string;
}
