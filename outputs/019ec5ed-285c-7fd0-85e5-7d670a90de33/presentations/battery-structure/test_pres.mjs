import { PresentationFile } from 'file:///C:/Users/18054/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';

const pres = new PresentationFile();
const slide = pres.slides.add();
console.log('Slide methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(slide)).join(', '));

const bg = slide.background;
console.log('Background:', typeof bg);
console.log('Background props:', Object.getOwnPropertyNames(bg).join(', '));

const shapes = slide.shapes;
console.log('Shapes methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(shapes)).join(', '));

const shape = shapes.add('rectangle');
console.log('Shape methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(shape)).join(', '));

const textShape = shapes.add('text');
console.log('Text shape props:', Object.getOwnPropertyNames(textShape).join(', '));

console.log('textFrame type:', typeof textShape.textFrame);
if (textShape.textFrame) {
  console.log('textFrame props:', Object.getOwnPropertyNames(textShape.textFrame).join(', '));
  if (textShape.textFrame.paragraphs) {
    console.log('paragraphs type:', typeof textShape.textFrame.paragraphs);
    console.log('paragraphs length:', textShape.textFrame.paragraphs.length);
    if (textShape.textFrame.paragraphs.length > 0) {
      const p = textShape.textFrame.paragraphs.item(0);
      console.log('paragraph props:', Object.getOwnPropertyNames(p).join(', '));
      console.log('paragraph font type:', typeof p.font);
      if (p.font) {
        console.log('font props:', Object.getOwnPropertyNames(p.font).join(', '));
      }
    }
  }
}
