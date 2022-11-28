import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lionel Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lionel Messi"/>
        <meta name="description" content="Trending News about Lionel Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lionel Messi</h1>
            <Image width={800} height={500} src="https://bolanarede.pt/wp-content/uploads/2022/11/Lionel-Messi.jpeg" alt="Lionel Messi"/>
            <h3>Recent News</h3>
            <a href='https://bolanarede.pt/especial-bola-na-rede/ultima-hora/lionel-messi-perto-de-rumar-a-novo-campeonato/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi perto de rumar a novo campeonato</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJwGjqHbnlYNrngAbIbstMCf0SdjzZzwFU-btXA_tP0huAn_bx3NT17gRiFqD73z-FHH6ghXn4" alt="Lionel Messi perto de rumar a novo campeonato" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O craque argentino Lionel Messi, jogador do Paris Saint-Germain FC, está perto de assinar contrato num novo clube.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/major-league-soccer/artigos/lionel-messi-apontado-ao-futebol-norte-americano'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi apontado ao futebol norte-americano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmcIvSQ7yU202PEPHNzgK5WiKJUHML2pgE5Y44Iyi5XcBrmCz08YTKFe80-vJdhXMtPf0hT4Ob" alt="Lionel Messi apontado ao futebol norte-americano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De Inglaterra chegam este domingo notícias que associam Lionel Messi ao Inter Miami, clube propriedade do inglês David Beckham. Segundo o jornal &#39;The Times&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2122092/lionel-messi-nao-e-argentino-cristiano-ronaldo-nao-e-portugues'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Lionel Messi não é argentino, Cristiano Ronaldo não é português...&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIqqilbIHIIomrpPX7CPzOrNpA6Qxft03Z-OAI4rdCvcagvC-l69YFDZdOJLQlYnQmQXIaOFEQ" alt="&quot;Lionel Messi não é argentino, Cristiano Ronaldo não é português...&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Eles vão para além disso. São um privilégio para o futebol&quot;, referiu Marquinhos.</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/argentina/detalhe/a-carta-emocionante-de-enzo-fernandez-a-messi-quando-tinha-15-anos?ref=HP_Ultimas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A carta em forma de reflexão de Enzo Fernández a Messi quando ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSr7bDHEhrt1KxpnhWwqRmeVWGsaci3sZdAhsuaPYluUaF7ltCRi3j7d3W_0MLeaVf1nOAgevD" alt="A carta em forma de reflexão de Enzo Fernández a Messi quando ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A imprensa argentina recordou, este domingo, uma carta aberta publicada por Enzo Fernández a Lionel Messi, quando o médio do Benfica tinha apenas.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/futebol-internacional/lionel-messi-esta-proximo-de-fechar-com-clube-da-mls-diz-jornal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi está próximo de fechar com clube da MLS, diz jornal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStXHU7hHAqh28S72a8U4birTOEELJ4Znfhqb4igfk1Uq_-E657HjJNxLNCFa6DZ-3qeJ4llNuV" alt="Lionel Messi está próximo de fechar com clube da MLS, diz jornal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Astro argentino estaria negociando com equipe de David Beckham nos EUA para se juntar ao fim da temporada.</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/messi-esta-proximo-de-assinar-pelo-inter-miami-de-david-beckham-15393139.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi está próximo de assinar pelo Inter Miami de David Beckham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXNXQpg3EPKYFY8KhpChPOfHLyuUKWuzQh8xuKYH_wRsaD8EB76qscfa_fozrO3Zp_FAdWlSr0" alt="Messi está próximo de assinar pelo Inter Miami de David Beckham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi poderá estar próximo de reforçar do clube norte-americano Inter Miami, cujo proprietário é a lenda inglesa David Beckham, no próximo verão.</p></div>
            </div>
        </a><a href='https://www.goal.com/br/not%C3%ADcias/lionel-messi-vai-trocar-psg-pelo-inter-miami/blt527efbc4ae680c0b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi vai trocar PSG pelo Inter Miami?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPIPycUpz_W5YmriFSYtz__s5UlKhgeE8BHHeSwejKrgYln5LMrnGNTRTmNK3NnMHAv8CtjBjU" alt="Lionel Messi vai trocar PSG pelo Inter Miami?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi de malas prontas novamente? É o que tudo indica. O craque, que trocou o Barcelona pelo PSG em 2021, pode, agora, estar indo para o futebol dos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/esportes/futebol/jornal-lionel-messi-esta-perto-de-trocar-psg-por-time-dos-eua'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jornal: Lionel Messi está perto de trocar PSG por time dos EUA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvOXR3NXDy8M5bkOjGI1WhVS2LhfvAtMmNX_ov8XhXrjNNxCSDLbdV7UtK6b5QKoqGICCmVQ49" alt="Jornal: Lionel Messi está perto de trocar PSG por time dos EUA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com contrato perto do fim com o time francês, Lionel Messi pode deixar a Europa para assinar com o clube de David Beckham.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/mundial-2022/argentina/o-dia-em-que-enzo-fernandez-escreveu-uma-carta-aberta-a-messi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O dia em que Enzo Fernández escreveu uma carta aberta a Messi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQlwFh3nTUZrnvM9vIY10AreycGjZU6gIMfnrd-zIkyKoxlrzAluE6HjjK18QFkzQ_7VG4QCF_P" alt="O dia em que Enzo Fernández escreveu uma carta aberta a Messi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em publicação de 2016, Enzo pedia para Messi não renunciar à seleção. Agora, médio do Benfica estreou-se a marcar pela Argentina no Mundial 2022 ao lado de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-27/argentina-a-emocionante-carta-que-enzo-fernandez-escreveu-a-messi/966341'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A emocionante carta que Enzo Fernández escreveu a <b>Messi</b></h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5VTNTCJbX8kCFJvJl10VLgwplqF1j3VTcyYKNsjWBSVQLUd7hF50Ftr95-kCkHW_APXeCbLxa" alt="A emocionante carta que Enzo Fernández escreveu a <b>Messi</b>" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cumplicidade entre <b>Lionel Messi</b> e Enzo Fernández no jogo com o México, no final mas sobretudo logo após o médio do Benfica ter feito o 2-0 com que terminou a partida, levou a imprensa argentina a recordar curioso episódio entre ambos.</p></div>
            </div>
        </a>
        </Template></>;
}