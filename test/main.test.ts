import { subtitleSync } from '../src';
import * as path from 'path';
import fs from 'fs';
import { OutputFile } from '../src/helpers';

describe('Conversion operation', () => {
  const filePath = path.join(__dirname, '../test/temp/example.srt');
  const outputPath = new OutputFile().getUploadConfig().directory;

  it('should create a srt file', async () => {
    await subtitleSync(filePath, 3000);

    expect(fs.existsSync(`${outputPath}/example.output.srt`)).toBe(true);
  });

  afterAll(() => {
    fs.unlinkSync(`${outputPath}/example.output.srt`);
  });
});
