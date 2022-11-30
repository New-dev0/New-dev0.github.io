import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogadores de Copa do Mundo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogadores de Copa do Mundo"/>
        <meta name="description" content="Trending News about Jogadores de Copa do Mundo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogadores de Copa do Mundo</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/O4RqUKE-6QOf0yT1rz58b1GRy14=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/p/0/DEGr8XTeAMUI00WNPoFg/001-800507-p04-ho22-gfb-generation-pack-group-product-nikecom-desktop-20copiar.jpg" alt="Jogadores de Copa do Mundo"/>
            <h3>Recent News</h3>
            <a href='https://valor.globo.com/empresas/noticia/2022/11/29/copa-do-mundo-2022-chuteiras-dos-jogadores-do-brasil-estao-mais-tecnologicas-e-coloridas.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo 2022: Chuteiras dos jogadores do Brasil estão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcST1h0IzAs7o1DhxonnuyxlsF7Dnrp584VKIdrDbh6UbG6rNyCOtf8AC8f4Q6Ibp_yI1vTLgAPY" alt="Copa do Mundo 2022: Chuteiras dos jogadores do Brasil estão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novos modelos da Nike, Adidas e Puma oferecem firmeza em movimentos bruscos, impulso para corridas e no apoio no contato com a bola.</p></div>
            </div>
        </a>
        </Template></>;
}