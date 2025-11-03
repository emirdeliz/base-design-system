
import { render } from '@testing-library/react';
import { FormGroup } from './FormGroup';

describe('FormGroup component test', () => {
  it('Have FormGroup', async () => {
    const { container: formgroupNode } = render(
      <FormGroup label="Test Label" target="test-input">
        <input id="test-input" type="text" />
      </FormGroup>
    );
    expect(typeof formgroupNode).toEqual(typeof (<FormGroup label="Test Label" target="test-input">
      <input id="test-input" type="text" />
    </FormGroup>));
  });

  it('Have FormGroup input', async () => {
    const { container: formGroupNode } = render(
      <FormGroup label="Entre com o nome" target="name-input">
        <input id="name-input" type="text" />
      </FormGroup>
    );
    
    const input = formGroupNode.querySelector('input') as HTMLInputElement;
    const label = formGroupNode.querySelector(
      `[for='${input.id}']`
    ) as HTMLLabelElement;

    expect(label).toBeDefined();
    expect(label.innerHTML).toEqual('Entre com o nome');

    expect(input).toBeDefined();
    expect(input.value).toBeFalsy();
  });

  it('Have FormGroup textarea', async () => {
    const { container: formGroupNode } = render(
      <FormGroup label="Entre com a descrição" target="desc-input">
        <textarea id="desc-input" />
      </FormGroup>
    );
    
    const textarea = formGroupNode.querySelector(
      'textarea'
    ) as HTMLTextAreaElement;
    const label = formGroupNode.querySelector(
      `[for='${textarea.id}']`
    ) as HTMLLabelElement;

    expect(label).toBeDefined();
    expect(label.innerHTML).toEqual('Entre com a descrição');

    expect(textarea).toBeDefined();
    expect(textarea.value).toBeFalsy();
  });
});
