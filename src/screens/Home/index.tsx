import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Image,
    Content,
    Title,
    Description,
    Button,
    ButtonText
} from './styles';

import imageHQ from '../../assets/hq.png';

export function Home({ navigation }: any) {
    const theme = useTheme();

    function handleExplore() {
        navigation.navigate('ListCharacters');
    }

    return (
        <Container>
            <Image
                source={imageHQ}
                from={{ opacity: 0, left: 300 }}
                animate={{ opacity: 1, left: 9 }}
                transition={{
                    type: 'timing',
                    duration: 1000
                }}
            />

            <Content
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: 'timing',
                    duration: 600
                }}
            >
                <Title>
                    AVENGERS
                </Title>

                <Description>
                    Meet the main{'\n'}
                    characters that{'\n'}
                    marked issue #1
                </Description>

                <Button
                    onPress={handleExplore}
                >
                    <ButtonText>
                        Explore
                    </ButtonText>

                    <MaterialIcons
                        name="arrow-right-alt"
                        size={24}
                        color={theme.colors.background}
                    />
                </Button>
            </Content>
        </Container>
    );
}