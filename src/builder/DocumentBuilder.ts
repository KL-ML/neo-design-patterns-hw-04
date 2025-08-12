export class DocumentBuilder {
  private header: string = "";
  private body: string = "";
  private footer: string = "";

  addHeader(header: string): DocumentBuilder {
    this.header = `=== ${header} ===`;
    return this;
  }

  addBody(body: string): DocumentBuilder {
    this.body = body;
    return this;
  }

  addFooter(footer: string): DocumentBuilder {
    this.footer = footer;
    return this;
  }

  build(): string {
    return `${this.header}\n\n${this.body}\n\n${this.footer}`;
  }
}
