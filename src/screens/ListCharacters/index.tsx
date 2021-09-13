import React, { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import { Alert, FlatList } from 'react-native';

import api from '../../services/api';

import {
    Container,
    Header,
    Heading,
    BackButton,
    BackButtonText,
    Empty,
    Loading
} from './styles';
import { CharacterCard, Character } from '../../components/CharacterCard';

const { TS } = process.env
const { APIKEY } = process.env
const { HASH } = process.env

export function ListCharacters({ navigation }: any) {
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    async function loadData() {
        try {
            const response = await api.get(`/comics/67002/characters?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`);

            const dataResponse = response.data.data.results;

            const dataFormatted = dataResponse
                .map((item: any) => {
                    return {
                        id: item.id,
                        image: item.thumbnail.path,
                        title: item.name,
                        description: item.description,
                        comics: item.comics
                    }
                });

            setData(dataFormatted);
        } catch {
            Alert.alert('Atenção', 'Não foi possível carregar os personagens');
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        loadData();
    }, []);

    function handleDetails(item: Character) {
        navigation.navigate('DetailsCharacter', { item });
    }

    return (
        <Container>
            <Header>
                <Heading>
                    AVENGERS
                </Heading>

                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <BackButtonText>
                        Back
                    </BackButtonText>
                </BackButton>
            </Header>

            {
                loading ?
                    <Loading
                        size="large"
                        color={theme.colors.secondary}
                        testID="loading"
                    />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 30,
                            paddingTop: 150
                        }}
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) =>
                            <CharacterCard
                                character={item}
                                onPress={() => handleDetails(item)}
                            />
                        }
                        ListEmptyComponent={(
                            <Empty>Nenhum personagem encontrado</Empty>
                        )}
                        testID="flatListCharacters"
                    />
            }
        </Container>
    );
}