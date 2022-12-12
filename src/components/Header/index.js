import {Button} from '../Button'
import logodio from "../../assets/logo-dio.png";

import {
        Container,
        MenuRight,
        Row,
        Wrapper
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logodio} alt="logo da dio" />
            </Row>
            <Row>
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
            </Row>
        </Container>
    </Wrapper>
    )
}

export {Header};
