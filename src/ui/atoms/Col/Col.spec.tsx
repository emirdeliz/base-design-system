import { render } from '@testing-library/react';
import { Col } from './Col';

const ColSimple = () => (
  <>
    <Col.C1 />
    <Col.C2 />
    <Col.C3 />
    <Col.C4 />
    <Col.C5 />
    <Col.C6 />
    <Col.C7 />
    <Col.C8 />
    <Col.C9 />
    <Col.C10 />
    <Col.C11 />
    <Col.C12 />
    <Col.Auto />
  </>
);

describe('Col component test', () => {
  it('Have Col', async () => {
    const { baseElement: colNode } = render(<ColSimple />);
    expect(typeof colNode).toEqual(typeof (<ColSimple />));
  });

  it('Have Col c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, auto', async () => {
    const { baseElement: colNode } = render(<ColSimple />);
    const cols = (colNode.children[0].children ||
      []) as HTMLCollectionOf<HTMLDivElement>;

    // Verificar se todos os elementos estão presentes
    expect(cols[0]).toBeDefined();
    expect(cols[1]).toBeDefined();
    expect(cols[2]).toBeDefined();
    expect(cols[3]).toBeDefined();
    expect(cols[4]).toBeDefined();
    expect(cols[5]).toBeDefined();
    expect(cols[6]).toBeDefined();
    expect(cols[7]).toBeDefined();
    expect(cols[8]).toBeDefined();
    expect(cols[9]).toBeDefined();
    expect(cols[10]).toBeDefined();
    expect(cols[11]).toBeDefined();
    expect(cols[12]).toBeDefined();
  });
});
