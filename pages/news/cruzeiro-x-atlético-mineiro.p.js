import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cruzeiro x Atlético Mineiro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cruzeiro x Atlético Mineiro"/>
        <meta name="description" content="Trending News about Cruzeiro x Atlético Mineiro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cruzeiro x Atlético Mineiro</h1>
            <Image width={800} height={500} src="https://i.superesportes.com.br/d2ebHD4gg_xz-4GHPk9sq7LOO7I=/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2022/11/19/3980122/cruzeiro-x-atletico_1_45943.jpg" alt="Cruzeiro x Atlético Mineiro"/>
            <h3>Recent News</h3>
            <a href='https://www.mg.superesportes.com.br/app/noticias/futebol-feminino/2022/11/19/noticia_futebol_feminino,3980122/cruzeiro-x-atletico-assista-a-final-do-mineiro-feminino-no-mineirao.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cruzeiro x Atlético: assista à final do Mineiro Feminino no Mineirão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1k61Xmk2vSpAnM1E0TfBTlwT2NtS_XCW2uVWMkgbrSW3DkFyn3fZuDpYvFYGhsdZ6Wuc76yfx" alt="Cruzeiro x Atlético: assista à final do Mineiro Feminino no Mineirão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Cruzeiro recebe o Atlético neste sábado (19/11), às 11h, no Mineirão, pela final do Campeonato Mineiro Feminino. A disputa que define a equipe campeã será&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/mg/futebol/noticia/2022/11/19/nos-penaltis-atletico-mg-vence-o-cruzeiro-e-conquista-o-mineiro-feminino-pelo-terceiro-ano-seguido.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nos pênaltis, Atlético-MG vence o Cruzeiro e conquista o Mineiro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiQaj1BC6dEh5MumvpLQ9_9UZhXjo_w9kyf_AnDswPHPP2rhNOSlaENgcyVr3Y_3Kqo6ZKOL9t" alt="Nos pênaltis, Atlético-MG vence o Cruzeiro e conquista o Mineiro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Atlético-MG é campeão mineiro de futebol feminino de 2022. Jogando no Mineirão, neste sábado, o time bateu o Cruzeiro nos pênaltis (4 a 1),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/torcidas-do-cruzeiro-e-atletico-mineiro-entram-em-confronto-em-bairro-de-bh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcidas do Cruzeiro e Atlético Mineiro entram em confronto em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStp-F5mXhA_I83gvi2xVHBiLtAyYG8R6uCqASLC-4maqxNB3Bd-CsNUmzvGWvKH1bCDq5zDwAh" alt="Torcidas do Cruzeiro e Atlético Mineiro entram em confronto em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Polícia Militar confirmou que houve um conflito entre as torcidas organizadas Galoucura e Máfia Azul na avenida Pedro II, na altura do bairro Bonfim.</p></div>
            </div>
        </a><a href='https://www.itatiaia.com.br/editorias/esportes/2022/11/19/cruzeiro-x-atletico-itatiaia-transmite-com-imagens-final-do-campeonato-mineiro-feminino'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cruzeiro x Atlético: Itatiaia transmite com imagens final do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHQ1Vr6b-J0rFjH0ECcwQMOqolUbcyAQjTgAmoA7Xxl1YHuVei3I9SgH8aH83Z2p-OT4gQ0yga" alt="Cruzeiro x Atlético: Itatiaia transmite com imagens final do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acontece a partir das 11h deste sábado a final do Campeonato Mineiro Feminino entre Cruzeiro e Atlético. Por ter tido melhor campanha na primeira fase,&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/mg/minas-gerais/noticia/2022/11/19/torcidas-organizadas-de-atletico-mg-e-cruzeiro-se-enfrentam-em-avenida-de-bh-video.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcidas organizadas de Atlético-MG e Cruzeiro se enfrentam em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSLxpPLMIQ7KytCBxP0zDkkeY1g6XixOzVtpH1_zRtMJXQH8qLJF7VUrWS6HtKIdHB7dlC85uZy" alt="Torcidas organizadas de Atlético-MG e Cruzeiro se enfrentam em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Policiais flagraram torcedores com pedaços de madeira e outros objetos que seriam usados como arma. Os dois times disputaram a final feminina do Campeonato&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/19/torcidas-do-atletico-mg-e-do-cruzeiro-brigam-apos-final-do-mineiro-feminino.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcidas do Atlético-MG e do Cruzeiro brigam após final do Mineiro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMxtFlivukjPIIw5TwxSbH646QUmPoN-EFpDgxxY8ibg9V0o7qn-9fS6LYb_2Venzr6GMGA9XY" alt="Torcidas do Atlético-MG e do Cruzeiro brigam após final do Mineiro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os vídeos da briga circulam nas redes sociais e mostram torcedores com paus e pedras. Do outro lado estava a Máfia Azul, que é a principal torcida organizada do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}