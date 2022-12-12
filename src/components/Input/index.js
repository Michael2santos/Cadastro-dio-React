import {IconContainer,InputText,InputContainer} from './styles';


const Input = ({leftIcon, name,placeholder}) => {
  return (<>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText placeholder={placeholder}/>
    </InputContainer>
    </>)
}

export {Input};