import React from 'react';
import { Container, Title, Subtitle, AlbumsGrid, AlbumCard, AlbumImage } from './styles';

const albums = [
    {
        id: 1,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Nirvana - Nevermind
    },
    {
        id: 2,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Daft Punk - Random Access Memories
    },
    {
        id: 3,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' // Pink Floyd - The Dark Side of the Moon
    },
    {
        id: 4,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png' // Kendrick Lamar - To Pimp a Butterfly
    },
    {
        id: 5,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png' // Taylor Swift - 1989
    },
    {
        id: 6,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Racionais MC's - Sobrevivendo no Inferno
    },
    {
        id: 7,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Caetano Veloso - Transa
    },
    {
        id: 8,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png' // Arctic Monkeys - AM
    },
    {
        id: 9,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Chico Buarque - Construção
    },
    {
        id: 11,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
    {
        id: 12,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
    {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    },
      {
        id: 13,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' // Jorge Ben Jor - A Tábua de Esmeralda
    }
];

const Trending: React.FC = () => {
    return (
        <Container>
            <Title>Em alta</Title>
            <Subtitle>Álbuns que estão bombando no momento:</Subtitle>
            <AlbumsGrid>
                {albums.map(album => (
                    <AlbumCard key={album.id}>
                        <AlbumImage src={album.imageUrl} alt={`Album ${album.id}`} />
                    </AlbumCard>
                ))}
            </AlbumsGrid>
        </Container>
    );
};

export default Trending;
