// @ts-ignore
import subsrt from 'subsrt';
import {IDateChange} from "../interfaces";

export class DateTransformer {
    public static timeChange(captions: [IDateChange], ms: number): [IDateChange] {
        try {
            if (Math.sign(captions[0].start + ms) === -1) {
                throw new Error('Its not possible to change time before the start of the video');
            }
            return subsrt.resync(captions, {offset: ms});
        } catch (error) {
            let message = 'Error changing date';
            if (error instanceof Error) message = error.message;
            throw new Error(message);
        }   
    }
}
