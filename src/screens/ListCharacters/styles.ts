import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';
import { ActivityIndicator } from 'react-native';

export const Container = styled(LinearGradient).attrs({
    colors: [theme.colors.background, theme.colors.shape],
})`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(LinearGradient).attrs({
    colors: [theme.colors.background, 'transparent'],
    locations: [0.7, 1]
})`
    flex-direction: row;

    width: 100%;
    padding: 30px;
    padding-top: 60px;
    padding-bottom: 60px;

    justify-content: space-between;
    align-items: center;

    position: absolute;
    z-index: 1;
`;

export const Heading = styled.Text`
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(28)}px;
`;

export const BackButton = styled(TouchableOpacity).attrs({
    activeOpacity: .4
})`
    flex-direction: row;
`; 

export const BackButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(16)}px;

    margin-right: 12px;
`;

export const Empty = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;
`;

export const Loading = styled(ActivityIndicator)`    
    margin-top: 160px;

    align-items: center;
    justify-content: center;
`;
