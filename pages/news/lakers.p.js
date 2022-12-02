import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lakers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lakers"/>
        <meta name="description" content="Trending News about Lakers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lakers</h1>
            <Image width={800} height={500} src="https://www.lakersbrasil.com/site/../data/posts/banner-principal_6388951b3c9fe_grande.jpg" alt="Lakers"/>
            <h3>Recent News</h3>
            <a href='https://www.lakersbrasil.com/site/noticias/2022/12/nba_lakers_dispensa_jogador_e_aquece_rumores_de_troca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Lakers dispensa jogador e aquece rumores de troca</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxZS68cqd1eh2l87XT5cpcXKw1qsUYT3tbScRSSDJIPIsHPoyZ9Wx-_dYJSrL1SPPNTK_jDRAB" alt="NBA: Lakers dispensa jogador e aquece rumores de troca" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Lakers fez um anúncio de certa forma surpreendente na noite desta quarta-feira, ao dispensar o jogador especialista de três pontos Matt Ryan.</p></div>
            </div>
        </a><a href='https://jumperbrasil.lance.com.br/trocas-lakers-dispensa-matt-ryan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por futuras trocas, Lakers surpreende e dispensa revelação Matt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRI1yy_qz_PydoEarKredW2w6QdNkwzR1z3gdh8PZea4S1Q9wZwoDp4_SbhWMXVJhwJ82ZyDT9T" alt="Por futuras trocas, Lakers surpreende e dispensa revelação Matt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E, por isso, uma das poucas boas histórias da franquia até agora na temporada teve um final precoce. O jogador que era considerado a revelação do time despediu-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}