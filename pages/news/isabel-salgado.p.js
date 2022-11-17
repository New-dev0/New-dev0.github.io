import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Isabel Salgado</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Isabel Salgado"/>
        <meta name="description" content="Trending News about Isabel Salgado" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Isabel Salgado</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/--jK5tcFjR1FL0IuvxO97YFbS_M=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11129719.jpg" alt="Isabel Salgado"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/rj/rio-de-janeiro/noticia/2022/11/16/corpo-de-isabel-salgado-sera-velado-nesta-quinta-feira-no-rio.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corpo de Isabel Salgado será velado nesta quinta-feira no Rio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkv42rZlnloOYITyS9rb2aAMfctgoYRp7gVgU6XEYv7hjo8lGqNt2FSyB2uhelXgZH-nm0Cl9D" alt="Corpo de Isabel Salgado será velado nesta quinta-feira no Rio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Corpo de Isabel do Vôlei, ícone do esporte, será cremado no Crematório e Cemitério da Penitência.</p></div>
            </div>
        </a><a href='https://ge.globo.com/volei/noticia/2022/11/16/isabel-salgado-um-dos-icones-do-volei-brasileiro-morre-aos-62-anos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isabel Salgado, um dos ícones do vôlei brasileiro, morre aos 62 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs1ycuutnRysuMUyvWTeZsKVThym-qpgXX8DZfalRlzbewJCJt5egI4YOTfAKTSTfANReBHzqZ" alt="Isabel Salgado, um dos ícones do vôlei brasileiro, morre aos 62 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-jogadora ajudou a abrir as portas do vôlei feminino nos anos 1980 e assumiu papel importante para novas gerações de mulheres no esporte; causa da morte&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/colunas/olhar-olimpico/2022/11/16/isabel-do-volei-morre-dois-dias-apos-entrar-no-grupo-de-transicao.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Olhar Olímpico - Ícone do vôlei, Isabel Salgado morre aos 62 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHANB6JwjKlyZLCsCu__g0z83nNcGt6MYNLfHWx2dMLflZpglm_fAjw7bWoNCknNZcFgcme1Eh" alt="Olhar Olímpico - Ícone do vôlei, Isabel Salgado morre aos 62 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morreu nesta quarta-feira (16) a ex-jogadora de vôlei e vôlei de praia Isabel Salgado, a Isabel do Vôlei, aos 62 anos.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/ela/gente/noticia/2022/11/filhos-de-isabel-salgado-estao-reunidos-e-voltam-para-o-rio-de-janeiro-para-resolverem-enterro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isabel Salgado: Juntos, filhos voltam ao Rio de Janeiro para o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRC2L_OXofevqplE_zPJzcocniZC2d6iPzXIZT0OMFoohIgNz8pLWgaHBoBjiGYiEuxwsQLc5u_" alt="Isabel Salgado: Juntos, filhos voltam ao Rio de Janeiro para o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Falecida nesta quarta-feira, aos 62 anos, Isabel Salgado deixou cinco filhos: Maria Clara, Pedro e Carol Solberg, Pilar e Alison, adotado aos 14 anos.</p></div>
            </div>
        </a><a href='https://noticias.r7.com/saude/condicao-grave-que-causou-a-morte-de-isabel-salgado-e-rara-diz-especialista-16112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Condição grave que causou a morte de Isabel Salgado é rara, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7BqpFm1xxZpR1xAf8scCahcPf_Q1XqcLDNiTTXkbdWuQId3Feus2gljdrtikltpjVTByU6mWL" alt="Condição grave que causou a morte de Isabel Salgado é rara, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A ex-atleta teve um quadro de síndrome da angústia respiratória aguda, causada por pneumonia bacteriana.</p></div>
            </div>
        </a><a href='https://www12.senado.leg.br/radio/1/noticia/2022/11/16/icone-do-volei-brasileiro-isabel-salgado-morre-aos-62-anos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ícone do vôlei brasileiro, Isabel Salgado morre aos 62 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0_GeAwzfVEB_Wo2KTlmuYjsbCRWvU_MBDxRaULSdK4TQKQdFjXxBNg_XvgFx2Ui96b0PGXs8D" alt="Ícone do vôlei brasileiro, Isabel Salgado morre aos 62 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma das maiores referências do vôlei brasileiro, Isabel Salgado morreu nesta quarta-feira (16) em São Paulo. A atleta disputou as Olimpíadas de Moscou em&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}