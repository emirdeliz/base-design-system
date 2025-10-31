import { render } from '@testing-library/react';
import { Row } from './Row';

describe('Row component test', () => {
  it('Have Row', async () => {
    const { container: rowNode } = render(<Row>Test Content</Row>);
    expect(typeof rowNode.firstChild).toEqual(typeof (<div />));
  });

  it('Renders children correctly', async () => {
    const { container: rowNode } = render(
      <Row>
        <div>Child 1</div>
        <div>Child 2</div>
      </Row>
    );
    expect(rowNode.firstChild).toBeDefined();
    expect(rowNode.textContent).toContain('Child 1');
    expect(rowNode.textContent).toContain('Child 2');
  });

  it('Has base classes applied', async () => {
    const { container: rowNode } = render(<Row>Test</Row>);
    const row = rowNode.firstChild as HTMLElement;
    expect(row.className).toContain('w-full');
    expect(row.className).toContain('flex');
    expect(row.className).toContain('flex-row');
    expect(row.className).toContain('flex-wrap');
    expect(row.className).toContain('row');
  });

  it('Applies margin props correctly', async () => {
    const { container: rowNode } = render(
      <Row m="2" mt="4" mr="3" mb="5" ml="1">
        Test
      </Row>
    );
    const row = rowNode.firstChild as HTMLElement;
    expect(row.className).toContain('m-2');
    expect(row.className).toContain('mt-4');
    expect(row.className).toContain('mr-3');
    expect(row.className).toContain('mb-5');
    expect(row.className).toContain('ml-1');
  });

  it('Applies margin x and y props correctly', async () => {
    const { container: rowNode } = render(
      <Row mx="2" my="4">
        Test
      </Row>
    );
    const row = rowNode.firstChild as HTMLElement;
    expect(row.className).toContain('mx-2');
    expect(row.className).toContain('my-4');
  });

  it('Applies padding props correctly', async () => {
    const { container: rowNode } = render(
      <Row p="2" pt="4" pr="3" pb="5" pl="1">
        Test
      </Row>
    );
    const row = rowNode.firstChild as HTMLElement;
    expect(row.className).toContain('p-2');
    expect(row.className).toContain('pt-4');
    expect(row.className).toContain('pr-3');
    expect(row.className).toContain('pb-5');
    expect(row.className).toContain('pl-1');
  });

  it('Applies padding x and y props correctly', async () => {
    const { container: rowNode } = render(
      <Row px="2" py="4">
        Test
      </Row>
    );
    const row = rowNode.firstChild as HTMLElement;
    expect(row.className).toContain('px-2');
    expect(row.className).toContain('py-4');
  });

  it('Applies combined margin and padding props', async () => {
    const { container: rowNode } = render(
      <Row m="3" p="2" mx="1" py="2">
        Test
      </Row>
    );
    const row = rowNode.firstChild as HTMLElement;
    expect(row.className).toContain('m-3');
    expect(row.className).toContain('p-2');
    expect(row.className).toContain('mx-1');
    expect(row.className).toContain('py-2');
  });

  it('Passes through additional props', async () => {
    const { container: rowNode } = render(
      <Row data-testid="row-test" id="row-id">
        Test
      </Row>
    );
    const row = rowNode.firstChild as HTMLElement;
    expect(row.getAttribute('data-testid')).toBe('row-test');
    expect(row.getAttribute('id')).toBe('row-id');
  });
});

