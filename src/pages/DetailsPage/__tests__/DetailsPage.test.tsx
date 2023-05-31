import { fireEvent, render } from '@testing-library/react';
import { DetailsPage } from '@pages';
import { act } from 'react-dom/test-utils';
import { MockProvider } from '@helpers';

describe('Testing Details Page', () => {
  it('Should render component correctly', async () => {
    const { container } = await act(async () =>
      render(
        <MockProvider>
          <DetailsPage />
        </MockProvider>,
      ),
    );

    expect(container).toBeInTheDocument();
  });

  it('Should set the product state correctly', async () => {
    const { container } = await act(async () =>
      render(
        <MockProvider>
          <DetailsPage />
        </MockProvider>,
      ),
    );

    const input = container.querySelector('input[name="name"]') as HTMLInputElement;

    act(() => {
      fireEvent.change(input, {
        target: { value: 'full name' },
      });
    });

    expect(input.value).toBe('full name');
  });

  it('Should render notification when have error and after that click button close to close', async () => {
    const { getByText } = await act(async () =>
      render(
        <MockProvider>
          <DetailsPage />
        </MockProvider>,
      ),
    );

    const button = getByText('Close');
    const notification = getByText('Ooops!');

    act(() => {
      fireEvent.click(button);
    });

    expect(notification).not.toBeInTheDocument();
  });
});
