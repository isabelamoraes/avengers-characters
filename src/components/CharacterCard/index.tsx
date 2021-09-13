import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Image,
    Content,
    Title,
    Description,
    Footer,
    TextFooter
} from './styles';

interface Collection{
    name: string;
}

interface Comics {
    available: number;
    items: Collection[];
}

export interface Character {
    id: number;
    image: string;
    title: string;
    description: string;
    comics: Comics;
}

interface Props {
    character: Character;
    onPress: (item: Character) => void;
}

export function CharacterCard({
    character,
    onPress
}: Props){
    const theme = useTheme();

    return(
        <Container
            onPress={() => onPress(character)}
        >
            <Image
                source={{uri: `${character.image}/standard_amazing.jpg`}}
            />

            <Content>
                <Title>
                    {character.title}
                </Title>

                <Description>
                    {character.description}
                </Description>

                <Footer>
                    <TextFooter>
                        More info
                    </TextFooter>

                    <MaterialIcons
                        name="chevron-right"
                        size={24}
                        color={theme.colors.primary}
                    />
                </Footer>
            </Content>
        </Container>
    );
}