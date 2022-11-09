export class FileUpload {
    key!: string;
    name!: string;
    title!: string;
    url!: string;
    file: File;
  
    constructor(file: File) {
      this.file = file;
    }
  }