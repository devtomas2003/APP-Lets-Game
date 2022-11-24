import { useNavigate } from "react-router-dom";

import {
    Container,
    HeaderLogin,
    LogoLP,
    LoginSub,
    BoxLogin,
    LoginInpBox,
    LoginIcon,
    InputType,
    FormLogin,
    LinkHelp,
    RVBox,
    BoxBtns,
    BntAction,
    ActionText,
    BoxCoyprights,
    TxtCopyright,
    InstLogin
} from "./style";

import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";

import LP from "../../assets/lp.png";

export default function Login(){
    const navigate = useNavigate();
    return (
        <Container>
            <HeaderLogin>
                <LogoLP src={LP} title="Let's Play" alt="Let's Play" />
                <LoginSub>Ready To Play?</LoginSub>
            </HeaderLogin>
            <BoxLogin>
                <FormLogin>
                    <InstLogin>Faça login na plataforma</InstLogin>
                    <LoginInpBox>
                        <LoginIcon>
                            <AiOutlineUser className="icons" size={25} color="#fff" />
                        </LoginIcon>
                        <InputType type="text" autoComplete="email" autoCapitalize="off" autoCorrect="off" placeholder="E-Mail" />
                    </LoginInpBox>
                    <LoginInpBox>
                        <LoginIcon>
                            <MdPassword className="icons" size={25} color="#fff" />
                        </LoginIcon>
                        <InputType type="password" autoComplete="password" autoCapitalize="off" autoCorrect="off" placeholder="Password" />
                    </LoginInpBox>
                    <RVBox>
                        <LinkHelp href="#">Recuperar password</LinkHelp>
                    </RVBox>
                    <BoxBtns>
                        <BntAction isMain={true}>
                            <ActionText>Entrar</ActionText>
                        </BntAction>
                        <BntAction isMain={false} onClick={() => { navigate('/nova-conta') }}>
                            <ActionText>Criar uma conta</ActionText>
                        </BntAction>
                    </BoxBtns>
                </FormLogin>
                <BoxCoyprights>
                    <TxtCopyright>© 2022 - 2022 IMM, Lda.</TxtCopyright>
                </BoxCoyprights>
            </BoxLogin>
        </Container>
    );
}