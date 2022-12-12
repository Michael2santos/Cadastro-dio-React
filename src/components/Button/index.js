import {ButtonContainer} from './styles';

const Button = ({title, onClick, variant} ) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
        {title}
    </ButtonContainer>
  )
}

export {Button};