import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView`
    flex: 1;
`;

export const BackButton = styled(TouchableOpacity).attrs({
    activeOpacity: .4
})`
    position: absolute;
    z-index: 1;

    top: 45px;
    left: 15px;
`;

export const Header = styled.Image`
    width: 100%;
    height: 330px;
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    margin-top: -30px;

    padding: 30px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(20)}px;

    text-transform: uppercase;
    text-align: center;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;

    text-align: justify;

    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Comics = styled.View`
    margin-top: 24px;
`;

export const ComicsHeader = styled.View`
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 14px;
`;

export const ComicsTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(20)}px;
`;

export const ComicsCount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

export const ComicsFooter = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;

    margin-top: 12px;

    text-align: center;
`;