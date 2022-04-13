import path from 'path';

export class OutputFile {
  public pathFolder: string;

  constructor(outputPath?: string) {
    if (outputPath) {
      this.pathFolder = outputPath;
    } else this.pathFolder = path.resolve('test/temp');
  }

  getUploadConfig() {
    return {
      directory: this.pathFolder,
    };
  }
}
