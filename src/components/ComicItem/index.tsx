import React from 'react';

import {
    Container,
    Title
} from './styles';

interface Props{
    title: string
}

export function ComicItem({title}: Props){
    return(
        <Container>
            <Title
                numberOfLines={1}
            >
                {title}
            </Title>
        </Container>
    );
}