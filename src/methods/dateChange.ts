// @ts-ignore
import subsrt from 'subsrt';
import {IDateChange} from "../interfaces";

export class DateTransformer {
    public static timeChange(captions: [IDateChange], ms: number): [IDateChange] {
        return subsrt.resync(captions, {offset: ms});
    }
}
