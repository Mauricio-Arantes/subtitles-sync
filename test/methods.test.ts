import * as path from 'path';
import {ParseFile, DateTransformer} from "../src/methods";
import {OutputFile} from "../src/helpers";
import {IDateChange} from '../src/interfaces';
import * as fs from "fs";

jest.useFakeTimers();

describe('Method operations', () => {
    let pathToExampleFile: string;
    let arrayFile: [IDateChange];
    const outputPath = new OutputFile().getUploadConfig().directory;

    describe('ParseFile', () => {
        it('should transform a .srt file into a object array', async () => {
            pathToExampleFile = path.join(__dirname, '../test/temp/example.srt');
            arrayFile = await ParseFile.srtToArray(pathToExampleFile);
            expect(typeof arrayFile).toBe('object');
        });

        it('should throw a error if a .srt file is not found', async () => {
            const path = 'non-existing-path';
            await expect(ParseFile.srtToArray(path)).rejects.toThrow();
        });

        it('should transform a array into .srt file', async () => {

            await ParseFile.arrayToSrt(arrayFile, outputPath, 'jest.test');
        });

        it('should throw a error if not receive the correct params', async () => {
            await expect(ParseFile.arrayToSrt(arrayFile, 'nope', 'nope')).rejects.toThrow();
        });
    });

    describe('DateChange', () => {
        it('should change the subtitle time', () => {
            const fileWithUpdatedTime = DateTransformer.timeChange(arrayFile, 100);
            const verifyUpdateInTimestamp = (oldCaption: [IDateChange], newCaption: [IDateChange]) => {
                const {start: oldStart, end: oldEnd} = oldCaption[0]
                const {start: newStart, end: newEnd} = newCaption[0]

                if (newStart !== oldStart) return true
                return newEnd !== oldEnd;
            }
            expect(verifyUpdateInTimestamp(arrayFile, fileWithUpdatedTime)
            ).toBe(true);
        });
    });

    afterAll(() => {
        fs.unlinkSync(`${outputPath}/jest.test.output.srt`);
    });
});
