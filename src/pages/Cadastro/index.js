import { Button } from "../../components/Button"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {MdEmail, MdLock, MdPerson} from "react-icons/md";
import {Column,Container,Row,SubTitleCadastro,Title,TitleCadastro,Wrapper} from "./styles"



const Cadastro = () => {
    return (<>
        <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
                        <form>
                            <Input name="Nome completo" placeholder="Nome completo" leftIcon={<MdPerson/>} />
                            <Input name="email" placeholder="E-mail" leftIcon={<MdEmail/>} />
                            <Input name="password" type="password" placeholder="Password" leftIcon={<MdLock/>} />
                            <Button title="Criar minha conta" variant="secondary"  type="submit"/>        
                        </form>
                        <Row>
                            <SubTitleCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da Dio.</SubTitleCadastro>
                            
                        </Row>
                        <p>Já tenho uma conta. <span>Fazer login</span></p>
                    </Wrapper>
                </Column>
            </Container>
            
        </>)
    
}

export {Cadastro};

//<EsqueciText>Esqueci minha senha</EsqueciText>
//<CriarText></CriarText>