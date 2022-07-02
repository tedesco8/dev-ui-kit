import { render } from '@testing-library/react'
import DevButton from './'

describe('@components/dev-button', () => {
    it('Given a normal component call it should render component',  () => {
      //arrange
      const { getByRole } = render(
        <DevButton type="button" />
      );
      //act
      const buttonTest = getByRole('button')
      //assert
      expect(buttonTest).toBeDefined();
    });
  
    it('Given the Button, when the props provide width attribute then the component will take those style', () => {
      // arrange
      const { getByRole } = render(
          <DevButton role="button"  width={'100%'}/>
      );
  
      // act
      const ButtonStyleTest = getByRole('button');
  
      // assert
      expect(ButtonStyleTest).toBeDefined();
      expect(ButtonStyleTest).toHaveStyle(`width: 100%`);
    });
  
    it('Given the Button, when the props provide height attribute then the component will take those style', () => {
      // arrange
      const { getByRole } = render(
          <DevButton role="button"  height={'30px'}/>
      );
  
      // act
      const ButtonStyleTest = getByRole('button');
  
      // assert
      expect(ButtonStyleTest).toBeDefined();
      expect(ButtonStyleTest).toHaveStyle(`height: 30px`);
    });
  });