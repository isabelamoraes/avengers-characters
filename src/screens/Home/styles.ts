import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { MotiImage, MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding-left: 43px;
    padding-bottom: 49px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled(MotiImage)`
    width: 456px;
    height: 731px;
    
    left: 9px;

    position: absolute;
    z-index: -1;
`;

export const Content = styled(MotiView)``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(28)}px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;

    margin-top: 12px;
    margin-bottom: 23px;
`;

export const Button = styled(RectButton)`
    width: 150px;
    height: 40px;
    border-radius: 20px;

    background-color: ${({ theme }) => theme.colors.secondary};

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(16)}px;
    
    margin-right: 12px;
`;
