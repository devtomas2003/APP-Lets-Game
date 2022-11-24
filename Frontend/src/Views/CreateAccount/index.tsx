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
    BoxBtns,
    BntAction,
    ActionText,
    BoxCoyprights,
    TxtCopyright,
    InstLogin,
    TopBg
} from "./style";

import { AiOutlineUser, AiOutlineIdcard, AiFillMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";

import LP from "../../assets/lp.png";

export default function CreateAccount(){
    const navigate = useNavigate();
    return (
        <Container>
            <TopBg />
            <HeaderLogin>
                <LogoLP src={LP} title="Let's Play" alt="Let's Play" />
                <LoginSub>Ready To Play?</LoginSub>
            </HeaderLogin>
            <BoxLogin>
                <FormLogin>
                    <InstLogin>Crie uma conta</InstLogin>
                    <LoginInpBox>
                        <LoginIcon>
                            <AiOutlineUser className="icons" size={25} color="#fff" />
                        </LoginIcon>
                        <InputType type="text" autoComplete="name" autoCapitalize="off" autoCorrect="off" placeholder="Nome Completo" />
                    </LoginInpBox>
                    <LoginInpBox>
                        <LoginIcon>
                            <AiOutlineIdcard className="icons" size={25} color="#fff" />
                        </LoginIcon>
                        <InputType type="text" autoComplete="off" autoCapitalize="off" autoCorrect="off" placeholder="Cartão de Cidadão" />
                    </LoginInpBox>
                    <LoginInpBox>
                        <LoginIcon>
                            <AiFillMail className="icons" size={25} color="#fff" />
                        </LoginIcon>
                        <InputType type="text" autoComplete="email" autoCapitalize="off" autoCorrect="off" placeholder="E-Mail" />
                    </LoginInpBox>
                    <LoginInpBox>
                        <LoginIcon>
                            <MdPassword className="icons" size={25} color="#fff" />
                        </LoginIcon>
                        <InputType type="password" autoComplete="off" autoCapitalize="off" autoCorrect="off" placeholder="Password" />
                    </LoginInpBox>
                    <LoginInpBox>
                        <LoginIcon>
                            <MdPassword className="icons" size={25} color="#fff" />
                        </LoginIcon>
                        <InputType type="password" autoComplete="off" autoCapitalize="off" autoCorrect="off" placeholder="Repita a password" />
                    </LoginInpBox>
                    <BoxBtns>
                        <BntAction isMain={true}>
                            <ActionText>Criar conta</ActionText>
                        </BntAction>
                        <BntAction isMain={false} onClick={() => { navigate('/') }}>
                            <ActionText>Já tenho uma conta</ActionText>
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