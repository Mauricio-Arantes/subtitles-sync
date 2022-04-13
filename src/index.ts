import { DateTransformer, ParseFile } from './methods';
import { OutputFile, ValidatePath, ValidateProps } from './helpers';
import path from 'path';

export const subtitleSync = async (
  filePath: string,
  ms: number,
  outputPath?: string
) => {
  try {
    ValidatePath.pathExists(filePath);
    ValidateProps.paramsValidate(filePath);
    if (outputPath) ValidateProps.paramsValidate(outputPath);

    const { directory } = new OutputFile(outputPath).getUploadConfig();
    const fileName = path.basename(filePath, path.extname(filePath));

    const captions = await ParseFile.srtToArray(filePath);
    const updateCaptions = DateTransformer.timeChange(captions, ms);

    return await ParseFile.arrayToSrt(updateCaptions, directory, fileName);
  } catch (error) {
    console.error(error);
  }
};
