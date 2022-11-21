import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Estrela</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Estrela"/>
        <meta name="description" content="Trending News about Estrela" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Estrela</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/tsf/image.jpg?brand=TSF&type=generate&guid=fad9f4d2-3b16-41d8-a4dd-0884daadbdc1&w=800&h=420&watermark=true&t=20221120180500" alt="Estrela"/>
            <h3>Recent News</h3>
            <a href='https://www.tsf.pt/desporto/estrela-da-amadora-benfica-relato-tsf-direto-taca-da-liga-15369450.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reações do Estrela não chegaram para as ações do Benfica ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-_th2BloNLG4PrwvFimJTaJ77ZtyFQ_NzmMuod9p9STN4IybcLBITdlq5-LBp87h3hTecRMb7" alt="Reações do Estrela não chegaram para as ações do Benfica ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Benfica venceu este domingo o Estrela da Amadora por 3-2 em jogo da primeira jornada da fase de grupos da Taça da Liga. Em Leiria, casa emprestada do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/taca-liga/noticias/benfica-inicia-taca-da-liga-com-vitoria-sobre-o-estrela-15371193.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica inicia Taça da Liga com vitória sobre o Estrela</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSot9w-_Un6eG_0utgery2pJQgyv6VgvzUZlRzA9JwBmtFJqjAMYZY2_COEqKG89bSuGPHtkICl" alt="Benfica inicia Taça da Liga com vitória sobre o Estrela" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Benfica venceu oo Estrela da Amadora, por 3-2, em Leiria, no seu primeiro jogo na Taça da Liga, igualando o Moreirense na liderança do Grupo C.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/taca-da-liga/artigos/acompanhe-o-estrela-amadora-benfica-ao-minuto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Acompanhe o Estrela Amadora-Benfica AO MINUTO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxGkJH8XfjFczH3bdqyosoqZPxZJZNZdtEORcXCoErX5nadngASQ4Rfg8CE7mkxGbbld8kLNzh" alt="Acompanhe o Estrela Amadora-Benfica AO MINUTO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Benfica estreia-se na Taça da Liga 2022/23 em Leiria, casa emprestada do Estrela da Amadora, da II Liga....</p></div>
            </div>
        </a><a href='https://observador.pt/liveblogs/estrela-da-amadora-benfica-brooks-e-joao-victor-sao-titulares-no-eixo-defensivo-diogo-goncalves-esta-no-onze/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica vence Estrela da Amadora em Leiria e entra a ganhar na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSM2nOoikppHM-7qyEMDv8SOtSGm5pI7Jto6AbLLcO4cD4l9-a36KI0wW-4eQH7cMxyg2BVTsZB" alt="Benfica vence Estrela da Amadora em Leiria e entra a ganhar na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os encarnados foram a Leiria vencer o Estrela da Amadora e entrar a ganhar na Taça da Liga. Musa abriu o marcador, Chiquinho e Draxler também marcaram,&nbsp;...</p></div>
            </div>
        </a><a href='https://bolanarede.pt/nacional/benfica/cf-estrela-da-amadora-2-3-sl-benfica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CF Estrela da Amadora 2-3 SL Benfica: Muda a competição, não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwqGudQkNq55R4PzEGhn2xry3W_kgSY5TsxQrFwXeNjQMYgMZETbwdgALIbZhihgCi4c4ysO3d" alt="CF Estrela da Amadora 2-3 SL Benfica: Muda a competição, não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Num jogo em que a organização do Estrela foi bastante competente e compacta, o defesa revelou alguma ansiedade e falta de concentração.</p></div>
            </div>
        </a><a href='https://www.slbenfica.pt/pt-pt/agora/media-list/videos/2022/11/20/futebol-estrela-amadora-benfica-jogada-rafa-28-minutos-taca-liga-1-jornada-grupo-c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>E. Amadora-Benfica: 28&#39; jogada de Rafa (1-1)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvkOaKD2McjGs0xwWlgrpOFRWKpQCA3SGMyIL3RV2aAq0vhSISDS2im0P7XlZZe3sZoXW-L4pk" alt="E. Amadora-Benfica: 28&#39; jogada de Rafa (1-1)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veja a jogada do Rafa contra o Estrela da Amadora, a contar para o jogo da 1.ª jornada da Taça da Liga.</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/benfica/benfica-entra-a-vencer-na-taca-da-liga-frente-ao-estrela-da-amadora_d1448386'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica entra a vencer na Taça da Liga frente ao Estrela da Amadora</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0EODyDhL6B-IhHy2AYMY6Lq0gnf-YJnzy3yqrZXKdRFOhHQed267oQQOKyEvXIDtmZm9D_eXd" alt="Benfica entra a vencer na Taça da Liga frente ao Estrela da Amadora" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Benfica venceu esta noite no terreno do Estrela da Amadora, por 3-2, em Leiria, no seu primeiro jogo na Taça da Liga de futebol, igualando o Moreirense na&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/20/roger-e-uma-prenda-de-natal-antecipada-rafa-ficou-a-cronica-do-estrela-da-amadora-benfica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roger e uma prenda de Natal antecipada: Rafa ficou (a crónica do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROHPYdQntwgjIUz6t-Tu0PyNihJvrsl7ahsG6VZkXKfG-JIl4hV5MsrXplgIKNl-z_bGZBy0lB" alt="Roger e uma prenda de Natal antecipada: Rafa ficou (a crónica do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Num jogo da Taça de Liga em pleno Mundial, o Benfica venceu o Estrela e entrou a ganhar na competição (2-3). Rafa foi titular, capitão, fez uma assistência&nbsp;...</p></div>
            </div>
        </a><a href='https://universoracionalista.org/colisao-de-estrelas-de-neutrons-criou-um-objeto-que-pensavamos-ser-pesado-demais-para-existir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Colisão de estrelas de nêutrons criou um objeto que pensávamos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKo4EZ-HJm1aGKI_UIfGqLz0vyKoI2vmvn2TlhbTca2rapP9nSXoqL3UcFHroB0EfOfjuVEZ8X" alt="Colisão de estrelas de nêutrons criou um objeto que pensávamos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A análise da curta erupção de raios gama cuspida quando as duas estrelas se fundiram revelou que, em vez de formar um buraco negro, como esperado, o produto&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tecmundo.com.br/ciencia/254614-nasce-estrela.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como nasce uma estrela?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQztZWAH_QzK_O0OdsMXSsXZpkl5XzhbaKQEls8dRLQ-qjIZhJMkqwVKX_3geGcvFn1i0DXaJSR" alt="Como nasce uma estrela?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Telescópio Espacial James Webb continua a surpreender com novas imagens de um sistema recém-nascido.</p></div>
            </div>
        </a>
        </Template></>;
}