import * as fs from "fs";
// @ts-ignore
import subsrt from 'subsrt';
import {IDateChange} from "../interfaces";

export class ParseFile {

    public static async srtToArray(file: string): Promise<[IDateChange]> {
        try {
            const data = fs.readFileSync(file, 'utf8');
            const options = {verbose: true};
            return subsrt.parse(data, options);
        } catch (error) {
            let message = 'Error parsing file';
            if (error instanceof Error) message = error.message;
            throw new Error(message);
        }
    }

    public static async arrayToSrt(captions: [IDateChange], outputPath: string, fileName: string): Promise<void> {
        try {
            const options = {format: 'srt'};
            const content = subsrt.build(captions, options);
            fs.writeFileSync(`${outputPath}/${fileName}.output.srt`, content, {});
        } catch (error) {
            let message = 'Error creating file';
            if (error instanceof Error) message = error.message;
            throw new Error(message);
        }
    }
}