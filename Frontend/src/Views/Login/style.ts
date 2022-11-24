import styled from 'styled-components';

interface BtnsActions {
    isMain?: boolean;
}

export const Container = styled.div`
    background: #121214;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HeaderLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoLP = styled.img`
    width: 88%;
`;

export const LoginSub = styled.h1`
    text-align: center;
    font-size: 20px;
    margin-top: 25px;
    color: rgba(255, 255, 255, 1);
`;

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const LoginInpBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background: #121214;
    &:not(:first-child){
        margin-top: 15px;
    }
`;

export const LoginIcon = styled.div`
    display: flex;
    flex-direction: row;
    opacity: 0.7;
`;

export const InputType = styled.input`
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    margin-left: 8px;
    color: rgba(255,255,255,0.70);
    font-size: 15px;
    font-family: 'Bungee', cursive;
    &::placeholder{
        color: rgba(255,255,255,0.70);
        font-size: 15px;
        font-family: 'Bungee', cursive;
    }
    &:-webkit-autofill{
        box-shadow: 0 0 0 15px #121214 inset;
        -webkit-text-fill-color: #b8b8b9;
    }
`;

export const FormLogin = styled.form`
    background: #202024;
    width: 93%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px;
`;

export const LinkHelp = styled.a`
    color: #8257E5;
    text-decoration: none;
    font-size: 12px;
`;

export const RVBox = styled.div`
    margin-top: 2px;
`;

export const BoxBtns = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    gap: 15px;
`;

export const BntAction = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${(props: BtnsActions) => props.isMain ? '#8257E5': 'transparent'};
    border: 1px solid #8257E5;
    padding: 10px;
`;

export const ActionText = styled.p`
    color: #fff;
`;

export const BoxCoyprights = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #202024;
    width: 93%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 15px;
`;

export const TxtCopyright = styled.p`
    color: #fff;
`;

export const InstLogin = styled.p`
    color: #fff;
    font-size: 14px;
`;