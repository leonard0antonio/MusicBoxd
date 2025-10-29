import React from "react";
import {
  Container,
  Title,
  Subtitle,
  AlbumsGrid,
  AlbumCard,
  AlbumImage,
} from "./styles";

const albums = [
  {
    id: 1,
    imageUrl:
      "https://cdn-images.dzcdn.net/images/cover/033a271b5ec10842c287827c39244fb5/1900x1900-000000-80-0-0.jpg", 
  },
  {
    id: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg", 
  },
  {
    id: 3,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png", 
  },
  {
    id: 4,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png", 
  },
  {
    id: 5,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png", 
  },
  {
    id: 6,
    imageUrl: "https://i.ytimg.com/vi/dl0Dp_FRMo4/maxresdefault.jpg", 
  },
  {
    id: 7,
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02eaf3178d5ebb408fab56f6b8", 
  },
  {
    id: 8,
    imageUrl:
      "https://akamai.sscdn.co/uploadfile/letras/albuns/7/0/d/b/1161711134726.jpg", 
  },
  {
    id: 9,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvO_ePmtzSYKXm13tnvf184wAGngM2oeMzPA&s", 
  },
  {
    id: 11,
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2739c4d1878fc63363c556efa46", 
  },
  {
    id: 12,
    imageUrl:
      "https://images.suamusica.com.br/moyFv-puvfbfF7Y20ycICpSlOzI=/500x500/filters:format(webp)/43392365/3713377/cd_cover.jpg",
  },
  {
    id: 14,
    imageUrl:
      "https://images.suamusica.com.br/viF3mM1s_kstQhN0QMw6UV1e_vU=/500x500/filters:format(webp)/28433116/2063494/cd_cover.jpg", 
  },
  {
    id: 15,
    imageUrl:
      "https://akamai.sscdn.co/uploadfile/letras/albuns/f/e/e/9/27901749844650.jpg", 
  },
  {
    id: 16,
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273bdab327ceda7f3f61187e962", 
  },
  {
    id: 17,
    imageUrl:
      "https://m.media-amazon.com/images/I/51EnjsW5bNL._UXNaN_FMjpg_QL85_.jpg", 
  },
  {
    id: 18,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQaNjTG28uQtQsWi7UUrwo40L8TdiSbsbQw&s",
  },
  {
    id: 19,
    imageUrl:
      "https://i.ytimg.com/vi/h1GW660cpQg/maxresdefault.jpg",
  },
  {
    id: 20,
    imageUrl:
      "https://i.ytimg.com/vi/2tt0cRFTIdE/maxresdefault.jpg", 
  },
  {
    id: 21,
    imageUrl:
      "https://cdn-images.dzcdn.net/images/cover/844348f23f993bc49ec1517027bea355/0x1900-000000-80-0-0.jpg", 
  },
  {
    id: 22,
    imageUrl:
      "https://images.suamusica.com.br/AaTHVftxg_xkR_ipSq8ctGTkVIg=/500x500/filters:format(webp)/33499949/3195428/cd_cover.jpg", 
  },
  {
    id: 23,
    imageUrl:
      "https://images.suamusica.com.br/q_fqCueywxeijYr4OsG7P7eAFWM=/500x500/filters:format(webp)/44177480/3888486/cd_cover.jpg", 
  },
  {
    id: 24,
    imageUrl:
      "https://images.suamusica.com.br/pNgBbt4oYvg2E8I961koC75A3u4=/500x500/filters:format(webp)/425979/2347119/cd_cover.jpg", 
  },
];

const Trending: React.FC = () => {
  return (
    <Container>
      <Title>Em alta</Title>
      <Subtitle>Álbuns que estão bombando no momento:</Subtitle>
      <AlbumsGrid>
        {albums.map((album) => (
          <AlbumCard key={album.id}>
            <AlbumImage src={album.imageUrl} alt={`Album ${album.id}`} />
          </AlbumCard>
        ))}
      </AlbumsGrid>
    </Container>
  );
};

export default Trending;
