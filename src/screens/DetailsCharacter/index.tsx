import React from 'react';
import { useTheme } from 'styled-components';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import {
    Container,
    BackButton,
    Header,
    Content,
    Title,
    Description,
    Comics,
    ComicsHeader,
    ComicsTitle,
    ComicsCount,
    ComicsFooter
} from './styles';

import { Character } from '../../components/CharacterCard';
import { ComicItem } from '../../components/ComicItem';

interface Params {
    item: Character;
}

export function DetailsCharacter({ navigation }: any) {
    const theme = useTheme();
    const routes = useRoute();

    const { item } = routes.params as Params;

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />

            <BackButton
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons
                    name="chevron-left"
                    size={30}
                    color={theme.colors.background}
                />
            </BackButton>

            <Header
                source={{ uri: `${item.image}.jpg` }}
                resizeMode="cover"
            />

            <Content>
                <Title>
                    {item.title}
                </Title>

                {item.description != '' &&
                    < Description >
                        {item.description}
                    </Description>
                }

                <Comics>
                    <ComicsHeader>
                        <ComicsTitle>
                            Comics
                        </ComicsTitle>

                        <ComicsCount>
                            Available {item.comics.available}
                        </ComicsCount>
                    </ComicsHeader>

                    {
                        item.comics.items.map((item) => {
                            return (
                                <ComicItem
                                    key={item.name}
                                    title={item.name}
                                />
                            )
                        })
                    }

                    <ComicsFooter>
                        And more {item.comics.available - 20} comics
                    </ComicsFooter>
                </Comics>
            </Content>
        </Container >
    );
}