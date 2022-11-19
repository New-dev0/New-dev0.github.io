import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bluesky</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bluesky"/>
        <meta name="description" content="Trending News about Bluesky" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bluesky</h1>
            <Image width={800} height={500} src="https://tm.ibxk.com.br/2022/11/18/18092745145122.jpg" alt="Bluesky"/>
            <h3>Recent News</h3>
            <a href='https://www.tecmundo.com.br/redes-sociais/254554-bluesky-app-criador-do-twitter-iniciar-testes.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bluesky: app do criador do Twitter vai iniciar testes em breve</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtGzOlDYTVOfIoHe4YKtDDe4Aj_pu7MW5Gt6rl2muwZd65mMw53e_XliwtjFJJUT22DvcmiOFq" alt="Bluesky: app do criador do Twitter vai iniciar testes em breve" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saiba como se registrar para os testes beta da nova rede social do mesmo criador do Twitter.</p></div>
            </div>
        </a><a href='https://www.colunatech.com.br/bluesky-twitter-46453/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bluesky: Conheça a nova rede social do ex-chefe do Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-QzbALVVauAhmS0qefsECIY8Uhs21ICa-1DxksHCbOP_s-E3W_NjQWMSKmuXDAML0dTjVVPXx" alt="Bluesky: Conheça a nova rede social do ex-chefe do Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Já falamos anteriormente do Microblog Koo, que tem ganhado força nas redes socias, mas há outro nome com força ainda maior, a Bluesky.</p></div>
            </div>
        </a>
        </Template></>;
}