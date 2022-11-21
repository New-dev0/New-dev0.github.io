import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ghanim Al Muftah</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ghanim Al Muftah"/>
        <meta name="description" content="Trending News about Ghanim Al Muftah" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ghanim Al Muftah</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/637aa50c0cf2aea7857d514d/og/maisfutebol" alt="Ghanim Al Muftah"/>
            <h3>Recent News</h3>
            <a href='https://maisfutebol.iol.pt/mundial-2022/qatar/quem-e-ghanim-al-muftah-a-estrela-da-cerimonia-de-abertura-do-mundial-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Ghanim Al Muftah, a estrela da cerimónia de abertura do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKC6OxzXvq6Uot_507Ix4XRpidBluOaSSZjYDgryOtrO3oovuAnswzBdnGZa95QrqVRxsm9_ZV" alt="Quem é Ghanim Al Muftah, a estrela da cerimónia de abertura do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dono de uma cadeia de gelatarias, o jovem de 20 anos já escalou a montanha mais alta da Arábia e ambiciona participar nos Jogos Paralímpicos.</p></div>
            </div>
        </a><a href='https://valor.globo.com/empresas/noticia/2022/11/20/quem-e-ghanim-al-muftah-embaixador-da-copa-do-mundo-do-catar.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Ghanim Al Muftah, influenciador e embaixador da Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSk7mRerqJj__I5PQIrA1TiQt8TEIebF5pElkFAc3dhFTxdnsW5m6Tmb3K-V1tyXIsaQ_35bj-Q" alt="Quem é Ghanim Al Muftah, influenciador e embaixador da Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele nasceu com Síndrome de Regressão Caudal, condição que provoca má formação da coluna vertebral e de membros inferiores.</p></div>
            </div>
        </a><a href='https://g1.globo.com/mundo/noticia/2022/11/20/ghanim-al-muftah-quem-e-o-catari-que-foi-destaque-na-abertura-da-copa-do-mundo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghanim Al Muftah: quem é o catari que foi destaque na abertura da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7MXsdKE0IvwBzR8g0lxrMGQs7oinDLl856QNuB5nv46Wb6NFdOEZv_QRMkfn9QjqkP7wJD4_i" alt="Ghanim Al Muftah: quem é o catari que foi destaque na abertura da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jovem de 20 anos tem síndrome que ocorre em 0,01% da população e é uma das personalidades mais famosas do Catar. Empresário e influenciador, sonha em ser&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/rj/copa-do-mundo/noticia/2022/11/20/quem-e-ghanim-al-muftah-a-historia-do-influencer-da-abertura-da-copa-do-catar.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Ghanim Al Muftah? A história do influencer da abertura da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7MXsdKE0IvwBzR8g0lxrMGQs7oinDLl856QNuB5nv46Wb6NFdOEZv_QRMkfn9QjqkP7wJD4_i" alt="Quem é Ghanim Al Muftah? A história do influencer da abertura da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghanim Al Muftah, entre os diversos artistas e personagens que participaram da cerimônia de abertura da Copa do Mundo do Catar neste domingo (20),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nit.pt/cultura/televisao/a-vida-incrivel-do-miudo-sem-pernas-que-abriu-o-mundial-ao-lado-de-morgan-freeman'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A vida incrível do miúdo sem pernas que abriu o Mundial ao lado de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYNOErxsAtWfJbIlUZIIu-Ow0nu_Xa33xLMNtGNRpXiPn7gfLlsNNKtejAAebyMeagvB-mhfZy" alt="A vida incrível do miúdo sem pernas que abriu o Mundial ao lado de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chama-se Ghanim Al Muftah, tem 20 anos e é uma das maiores celebridades do Catar. O seu sonho é ser presidente do país.</p></div>
            </div>
        </a><a href='https://esportes.yahoo.com/noticias/quem-%C3%A9-ghanim-al-muftah-171700802.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Ghanim Al Muftah, youtuber sem pernas da abertura da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Quem é Ghanim Al Muftah, youtuber sem pernas da abertura da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SÃO PAULO, SP (UOL/FOLHAPRESS) - Considerado um dos principais influencers do Qatar, Ghanim Al Muftah tem três milhões de inscritos no YouTube,&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/20/ninguem-achava-que-ia-passar-dos-15-anos-tornou-se-empresario-de-sucesso-aos-20-ghanim-o-jovem-que-apareceu-ao-lado-de-morgan-freeman/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ninguém achava que ia passar dos 15 anos, tornou-se empresário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXDRJ4Is-9wt4JrEIQfKrKOOxtdO3jcoTD98LHiPPlKyUoDVm6W_yfjujAiGv89DOqZ05lxXX_" alt="Ninguém achava que ia passar dos 15 anos, tornou-se empresário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi a pergunta que todos fizeram assim que começou a cerimónia de abertura do Mundial do Qatar: quem era o rapaz que estava a falar com Morgan Freeman no centro&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}