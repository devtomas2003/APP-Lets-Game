import {
    Container,
    HeaderApp,
    LogoApp,
    TxtWellcome,
    BoxApp,
    IconLine,
    TxtServiceName,
    TextServices,
    LineCounter,
    RemainCounter,
    TxtRemain,
    LineCounterMetadata,
    SaldoQtd,
    ProfileMeta,
    QtdBP,
    BoxServiceSelected,
    IconDrop,
    ServiceName
} from "./style";

import LP from "../../assets/lp.png";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaEuroSign, FaArrowAltCircleDown } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { MdSms } from "react-icons/md";

export default function Home(){
    return (
        <Container>
            <HeaderApp>
                <LogoApp src={LP} title="Let's Play" alt="Let's Play" />
                <TxtWellcome>Boa tarde, Tomás</TxtWellcome>
            </HeaderApp>
            <BoxApp>
                <BoxServiceSelected>
                    <IconLine>
                        <BsFillTelephoneFill size={20} color="#fff" />
                        <TxtServiceName>967492692</TxtServiceName>
                    </IconLine>
                    <IconDrop>
                        <FaArrowAltCircleDown size={20} color="#fff" />
                    </IconDrop>
                </BoxServiceSelected>
            </BoxApp>
            <TextServices>Perfil</TextServices>
            <ProfileMeta>
                <BoxApp>
                    <IconLine>
                        <FaEuroSign size={20} color="#fff" />
                        <TxtServiceName>Saldo</TxtServiceName>
                    </IconLine>
                    <SaldoQtd>15,24€</SaldoQtd>
                </BoxApp>
                <BoxApp>
                    <IconLine>
                        <BiGame size={20} color="#fff" />
                        <TxtServiceName>Play Game</TxtServiceName>
                    </IconLine>
                    <QtdBP>2 Battle Pass</QtdBP>
                </BoxApp>
            </ProfileMeta>
            <TextServices>Contadores</TextServices>
            <BoxApp>
                <IconLine>
                    <AiOutlineGlobal size={20} color="#fff" />
                    <TxtServiceName>Internet no Telemóvel</TxtServiceName>
                </IconLine>
                <LineCounter>
                    <RemainCounter />
                </LineCounter>
                <LineCounterMetadata>
                    <TxtRemain>124,25GB de 125GB</TxtRemain>
                    <TxtRemain>120 dias restantes</TxtRemain>
                </LineCounterMetadata>
            </BoxApp>
            <BoxApp>
                <IconLine>
                    <AiOutlineGlobal size={20} color="#fff" />
                    <TxtServiceName>Let's Summer</TxtServiceName>
                </IconLine>
                <LineCounter>
                    <RemainCounter />
                </LineCounter>
                <LineCounterMetadata>
                    <TxtRemain>124,25GB de 125GB</TxtRemain>
                    <TxtRemain>120 dias restantes</TxtRemain>
                </LineCounterMetadata>
            </BoxApp>
            <BoxApp>
                <IconLine>
                    <BsFillTelephoneFill size={20} color="#fff" />
                    <TxtServiceName>VOZ</TxtServiceName>
                </IconLine>
                <LineCounter>
                    <RemainCounter />
                </LineCounter>
                <LineCounterMetadata>
                    <TxtRemain>20000 MINS de 20000 MINS</TxtRemain>
                    <TxtRemain>120 dias restantes</TxtRemain>
                </LineCounterMetadata>
            </BoxApp>
            <BoxApp>
                <IconLine>
                    <MdSms size={20} color="#fff" />
                    <TxtServiceName>SMS</TxtServiceName>
                </IconLine>
                <LineCounter>
                    <RemainCounter />
                </LineCounter>
                <LineCounterMetadata>
                    <TxtRemain>20000 MINS de 20000 MINS</TxtRemain>
                    <TxtRemain>120 dias restantes</TxtRemain>
                </LineCounterMetadata>
            </BoxApp>
            <TextServices>Outros</TextServices>
            <BoxApp>
                <IconLine>
                    <MdSms size={20} color="#fff" />
                    <TxtServiceName>Tarifário</TxtServiceName>
                </IconLine>
                <ServiceName>LET's 5GB</ServiceName>
            </BoxApp>
        </Container>
    );
}