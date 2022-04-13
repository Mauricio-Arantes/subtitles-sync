import * as fs from 'fs';

export class ValidatePath {
  public static pathExists(path: string): boolean {
    if (fs.existsSync(path)) {
      return true;
    } else {
      throw new Error(`Path ${path} does not exist`);
    }
  }
}
