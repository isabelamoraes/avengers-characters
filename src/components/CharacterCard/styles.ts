import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 20px;

    flex-direction: row;
    margin-bottom: 20px;
`;

export const Image = styled.Image`
    width: 130px;
    height: 180px;

    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

export const Content = styled.View`
    padding: 15px;

    justify-content: space-between;
`;

export const Title = styled(Text).attrs({
    numberOfLines: 1,
    lineBreakMode: 'clip'
})`
    width: 150px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(20)}px;
`;

export const Description = styled(Text).attrs({
    numberOfLines: 3,
    lineBreakMode: 'clip'
})`
    width: 160px;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;

    position: relative;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TextFooter = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
`;