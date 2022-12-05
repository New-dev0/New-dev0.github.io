import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tadic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tadic"/>
        <meta name="description" content="Trending News about Tadic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tadic</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/12/02/1590589574-638a2a86af49d.jpeg" alt="Tadic"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/craque-da-servia-tadic-ja-teve-penis-engessado-apos-choque-com-a-trave,917c261c55b0cd4b06518a621894ef18qai47hn5.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Craque da Sérvia, Tadic já teve pênis &#39;engessado&#39; após choque ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSB0RKsDwtjDXDkgKp5CUKxXNguOfPST-EsMKR2Xx_EbPToVVPKD-dm09XE_IeCSYAJThdodJEI" alt="Craque da Sérvia, Tadic já teve pênis &#39;engessado&#39; após choque ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Principal jogador da Sérvia nesta edição de Copa do Mundo, Dusan Tadic, já virou notícia no ano passado após marcar um gol, colidir suas partes íntimas com&nbsp;...</p></div>
            </div>
        </a><a href='https://www.acessa.com/esporte/2022/12/113786-meia-da-servia-ja-virou-noticia-por-lesao-curiosa-e-penis-engessado.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meia da Sérvia já virou notícia por lesão curiosa e &#39;pênis engessado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Meia da Sérvia já virou notícia por lesão curiosa e &#39;pênis engessado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SÃO PAULO, SP (UOL - FOLHAPRESS) - Dusan Tadic, meia da seleção da Sérvia que está disputando a Copa do Mundo do Qatar, muito provavelmente será titular na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sambafoot.com/br/noticias/penis-engessado-dusan-tadic-meia-da-servia-ja-teve-lesao-inusitada-repercutida-no-mundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Pênis engessado”: Dusan Tadic, meia da Sérvia, já teve lesão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3843oWCY7dS61FaVwyeJiSCadgtMVUJRn2Zb1NYF9K42o2GB9FhxPmYnKokoVyNbXTKCbD28C" alt="“Pênis engessado”: Dusan Tadic, meia da Sérvia, já teve lesão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador provavelmente será titular na partida contra a Suíça hoje, às 16h (de Brasília), pelo Grupo G.</p></div>
            </div>
        </a><a href='https://ecosdanoticia.net.br/2022/12/astro-da-servia-tadic-ja-teve-penis-engessado-apos-choque-com-a-trave/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Astro da Sérvia, Tadic já teve pênis &#39;engessado&#39; após choque com a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjmgaDZ0wm6ZjZ-Rw1jb_cre44X-7SMhwIDEbtJgCfAGWErxhbBeH0g2hQ9o6I9IMaehHfvIs6" alt="Astro da Sérvia, Tadic já teve pênis &#39;engessado&#39; após choque com a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quem pode fazer a diferença para o país eslavo é o meia Dusan Tadic, e ele já provou que faz o que for preciso para ver a rede balançar. Em novembro de 2021, no&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}