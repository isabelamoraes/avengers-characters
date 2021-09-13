import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: 29px;
    border-radius: 20px;

    padding-left: 10px;
    padding-right: 10px;

    background-color: ${({ theme }) => theme.colors.shape};
    margin-bottom:12px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;