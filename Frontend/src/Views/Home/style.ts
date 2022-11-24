import styled from "styled-components";

export const Container = styled.div`
    background: #121214;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const HeaderApp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const LogoApp = styled.img`
    width: 150px;
`;

export const TxtWellcome = styled.p`
    color: #fff;
    font-size: 12px;
`;

export const BoxApp = styled.div`
    background: #202024;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;

export const IconLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TxtServiceName = styled.p`
    color: #fff;
    margin-left: 10px;
`;

export const TextServices = styled.p`
    color: #fff;
    margin-top: 10px;
    font-size: 18px;
`;

export const LineCounter = styled.div`
    background: #121214;
    width: 100%;
    margin-top: 15px;
    height: 7px;
    border-radius: 5px;
`;

export const RemainCounter = styled.div`
    width: 50%;
    height: 100%;
    background: #8257E5;
    border-radius: 5px;
`;

export const TxtRemain = styled.p`
    color: #fff;
    margin-top: 15px;
    font-size: 11px;
`;

export const LineCounterMetadata = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SaldoQtd = styled.p`
    color: #fff;
    margin-top: 10px;
    font-size: 35px;
`;

export const ProfileMeta = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const QtdBP = styled.p`
    margin-top: 15px;
    color: #fff;
`;

export const BoxServiceSelected = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IconDrop = styled.div`
    display: flex;
`;

export const ServiceName = styled.p`
    color: #fff;
    margin-top: 10px;
    font-size: 35px;
`;