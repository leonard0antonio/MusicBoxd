import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Plus } from "lucide-react";

const Wrapper = styled.section`
  max-width: 877px;
  height: 149px;
  margin: auto;
  flex-shrink: 0;
  border-radius: 0 0 30px 30px;
  background: #292c41;
  display: flex;
  align-items: center;
  gap: 17px;
  position: relative;

  /* deixa espaço para as setas sem sobrepor os avatares */
  padding: 0 48px;
  overflow: hidden;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;

const Avatar = styled.div<{ img?: string }>`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: ${({ img }) =>
    img ? `url(${img}) center/cover no-repeat` : "#444"};
  border: 3px solid #4a4d62;
`;

const Label = styled.span`
  margin-top: 6px;
  font-size: 13px;
  color: #d3d6df;
  white-space: nowrap;
`;

const AddStory = styled(Avatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3b3e54;
  border: 2px dashed #5b5f75;

  svg {
    color: #fff;
  }
`;

/* Reaproveitamos um único componente de botão com prop `left` */
const ArrowButton = styled.button<{ left?: boolean; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.left ? "left: 10px" : "right: 10px")};
  border: none;
  background: none;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 10;
  transition: transform 0.12s ease, opacity 0.12s ease;
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};

  &:hover {
    transform: translateY(-50%) scale(1.05);
  }

  svg {
    width: 33px;
    height: 33px;
    display: block;
  }
`;

export default function StoriesBar() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const SCROLL_STEP = 200;

  const scroll = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const updateArrows = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 1);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // inicializa
    updateArrows();

    // atualiza enquanto o usuário faz scroll
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll);

    // atualiza ao redimensionar (p/ responsividade)
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const stories = [
    { name: "Leo Oliveira", img: "https://i.pravatar.cc/100" },
    { name: "Matuê", img: "https://i.pravatar.cc/101" },
    { name: "Orochi", img: "https://i.pravatar.cc/102" },
    { name: "Gil Nunes", img: "https://i.pravatar.cc/103" },
    { name: "Dom Dias", img: "https://i.pravatar.cc/104" },
    { name: "Nay Dias", img: "https://i.pravatar.cc/105" },
    { name: "Ivo Souza", img: "https://i.pravatar.cc/106" },
    { name: "Ivo Souza", img: "https://i.pravatar.cc/107" },
    { name: "Ivo Souza", img: "https://i.pravatar.cc/108" },
    { name: "Ivo Souza", img: "https://i.pravatar.cc/109" },
    { name: "Ivo Souza", img: "https://i.pravatar.cc/110" },
    { name: "Ivo Souza", img: "https://i.pravatar.cc/111" },
  ];

  return (
    <Wrapper>
      <Carousel ref={carouselRef}>
        {stories.map((s, idx) =>
          idx === 0 ? (
            <Story key={s.name}>
              <AddStory>
                <Plus size={24} />
              </AddStory>
              <Label>Você</Label>
            </Story>
          ) : (
            <Story key={s.name + idx}>
              <Avatar img={s.img} />
              <Label>{s.name}</Label>
            </Story>
          )
        )}
      </Carousel>

      {/* seta esquerda */}
      <ArrowButton
        left
        onClick={() => scroll(-SCROLL_STEP)}
        disabled={!canScrollLeft}
        aria-label="Scroll stories para a esquerda"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <circle cx="16.5" cy="16.5" r="16.5" fill="#E0E0E0" />
          {/* caminho da seta apontando para a esquerda */}
          <path
            d="M19 10L13 16.5L19 23"
            stroke="#1B1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ArrowButton>

      {/* seta direita */}
      <ArrowButton
        onClick={() => scroll(SCROLL_STEP)}
        disabled={!canScrollRight}
        aria-label="Scroll stories para a direita"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <circle cx="16.5" cy="16.5" r="16.5" fill="#E0E0E0" />
          <path
            d="M14 10L20 16.5L14 23"
            stroke="#1B1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ArrowButton>
    </Wrapper>
  );
}
