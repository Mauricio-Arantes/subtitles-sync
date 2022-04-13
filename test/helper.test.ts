import * as path from 'path';
import { OutputFile, ValidatePath, ValidateProps } from '../src/helpers';

describe('Helper operations', () => {
  describe('OutputFile', () => {
    it('should output the path to the temp folder if any path has ben passed', () => {
      const pathFolder = new OutputFile().getUploadConfig().directory;
      expect(pathFolder).toBe(path.join(__dirname, '../test/temp'));
    });

    it('should output the same path to if a path has ben passed', () => {
      const pathFolder = new OutputFile(__dirname).getUploadConfig().directory;
      expect(pathFolder).toBe(__dirname);
    });
  });

  describe('ValidatePath', () => {
    it('should return true if the path is valid', () => {
      const pathFolder = ValidatePath.pathExists(__dirname);
      expect(pathFolder).toBe(true);
    });

    it('should return false if the path is not valid', () => {
      const path = 'non-existing-path';
      const pathFolder = () => {
        ValidatePath.pathExists(path);
      };
      expect(pathFolder).toThrowError(`Path ${path} does not exist`);
    });
  });

  describe('ValidateProps', () => {
    it('should be called if the path is valid', () => {
      const spy = jest.spyOn(ValidateProps, 'paramsValidate');
      ValidateProps.paramsValidate(__dirname);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return false if the path is not valid', () => {
      const path = 'non-existing-path';
      const pathFolder = () => {
        ValidatePath.pathExists(path);
      };
      expect(pathFolder).toThrowError(`Path ${path} does not exist`);
    });
  });
});
