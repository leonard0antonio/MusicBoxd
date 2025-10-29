import React from "react";
import {
  CardsGrid,
  GenreCard,
  GenreName,
  GenreImage,
} from "../explore_screen/styles";

const genres = [
  {
    name: "Sertanejo",
    color: "#e0912b",
    img: "https://thebackstage-deezer.com/wp-content/uploads/2023/11/dia-do-sertanejo.jpg",
  },
  {
    name: "Forró",
    color: "#b9375e",
    img: "https://cdn.folhape.com.br/upload/dn_arquivo/2023/11/14333227146-c60f381b92-c-1.jpg",
  },
  {
    name: "Samba",
    color: "#1ca2a9",
    img: "https://play-lh.googleusercontent.com/ZvhcwCnV4ttsgrNXhyiC0R4Jp54BTN0tPwzIjlsCrQZwlTjEHgSzZuMNy-CC9EN9N64V",
  },
  {
    name: "Pagode",
    color: "#2c9b5e",
    img: "https://www.pida.com.br/fotos/pida_noticias/4378/IMAGEM_NOTICIA_2.jpg?v=cb06247b37cc57f",
  },
  {
    name: "Funk",
    color: "#a02d55",
    img: "https://cdn-images.dzcdn.net/images/artist/d7571e8e528d33cffa43faebcbfe53d4/1900x1900-000000-81-0-0.jpg",
  },
  {
    name: "MPB",
    color: "#46c155",
    img: "https://img.vagalume.fm/1470154983100588/featured",
  },
  {
    name: "Axé",
    color: "#e6cb3c",
    img: "https://www.costadosauipe.com.br/images/news/0474/axe-cultura-baiana_2_1.jpg",
  },
  {
    name: "Reggae",
    color: "#f39028",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_gAI9wAlnBrGW5nTdeqwzcY5Q4_r-g23YA&s",
  },
  {
    name: "Eletrônica",
    color: "#b36bf4",
    img: "https://lifestyle.uai.com.br/wp-content/uploads/sites/9/2021/12/aaaa.jpg",
  },
  {
    name: "Hip hop",
    color: "#444",
    img: "https://img.freepik.com/vetores-premium/ilustracao-vetorial-de-hip-hop-t-shirt-ou-arte-de-parede-legal-em-estilo-graffiti_675911-519.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Pop",
    color: "#299be4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAWp-zFkGjxReKja8rAZcF-QTNROUFG0f4g&s",
  },
  {
    name: "Trap",
    color: "#4c77b3",
    img: "https://agenciamural.org.br/wp-content/uploads/2018/11/05-Raffa-Moreira-tamb%C3%A9m-conhecido-como-Lil-Raff-%C3%A9-hoje-um-dos-principais-nomes-do-trap-no-Brasil.jpg",
  },
  {
    name: "Rock",
    color: "#333",
    img: "https://img.freepik.com/vetores-premium/poster-de-rock-colorido-com-guitarras_153969-9467.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Jazz",
    color: "#69b79c",
    img: "https://media.gazetadopovo.com.br/rodrigo-constantino/2016/10/blog-232-956598aa.png",
  },
  {
    name: "Clássica",
    color: "#b8a7a5",
    img: "https://opopular.com.br/image/policy:1.3005133:1677951319/image.jpg?f=3x2",
  },
  {
    name: "Blues",
    color: "#2164b2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8a2FcZzzPvrCuoz8gS3xkbj7nIxRr6V9rrw&s",
  },
];

const ExploreCards: React.FC = () => {
  return (
    <CardsGrid>
      {genres.map((genre) => (
        <GenreCard key={genre.name} $color={genre.color}>
          <GenreName>{genre.name}</GenreName>
          <GenreImage src={genre.img} alt={genre.name} />
        </GenreCard>
      ))}
    </CardsGrid>
  );
};

export default ExploreCards;
