import * as fs from 'fs';

export class ValidateProps {
  public static paramsValidate(filepath: string) {
    if (!fs.existsSync(filepath)) {
      throw new Error(`${filepath} is not a valid filepath`);
    }
  }
}
