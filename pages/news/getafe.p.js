import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Getafe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Getafe"/>
        <meta name="description" content="Trending News about Getafe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Getafe</h1>
            <Image width={800} height={500} src="https://mauaagora.com.br/wp-content/uploads/2022/09/MAUA-AGORA.png" alt="Getafe"/>
            <h3>Recent News</h3>
            <a href='https://mauaagora.com.br/2022/12/08/getafe-x-chivas-guadalajara-onde-assistir-ao-vivo-com-imagens-palpites-escalacoes-amistoso-internacional/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Getafe x Chivas Guadalajara: ONDE ASSISTIR AO VIVO COM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTS0eWv2k0f2zrOVURFM9GzR_Xshr1QS_wnow47UDBsyVusu7Kafwp7odC0g551KjAjgQNEvsM" alt="Getafe x Chivas Guadalajara: ONDE ASSISTIR AO VIVO COM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida do Getafe x Guadalajara acontece hoje, HOJE (08/12) às 14 hs, confira os detalhes de transmissão e da partida amistoso. É HOJE Mais uma partida do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}