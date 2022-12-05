import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mundial Qatar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mundial Qatar"/>
        <meta name="description" content="Trending News about Mundial Qatar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mundial Qatar</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1124%3Anowe%3A0%3A104%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F16121323%2Festadio-ahmad-bin-ali-12.jpg" alt="Mundial Qatar"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/12/02/depois-do-mundial-qatar-olha-para-candidatura-aos-jogos-olimpicos-de-2036/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depois do mundial, Qatar olha para candidatura aos Jogos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSypyHrVJYnk5iuCdiXZEZUuhLVBxBGqtznQ7JE5Eqy-NtyDOnwtl6kXu6nkB3RxYbiZMH1abGU" alt="Depois do mundial, Qatar olha para candidatura aos Jogos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Qatar estará mais otimista com uma candidatura aos Jogos Olímpicos de 2036, devido ao mundial de futebol. Ainda não há data para o anúncio.</p></div>
            </div>
        </a><a href='https://observador.pt/newsletters/observadores-premium/nem-uma-bolha-no-pe-nos-trava-no-qatar-as-correrias-de-um-enviado-especial-ao-mundial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nem uma bolha no pé nos trava no Qatar. As correrias de um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5xpfuTn5qwUfy36FrmC6PKVKN4ochvhPwsmGolZig4yvRqcZOMYQox9gNmeaf66apLyOrcz2R" alt="Nem uma bolha no pé nos trava no Qatar. As correrias de um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bruno Roseiro, editor de Desporto do Observador, corre de jogo para jogo, de entrevista para entrevista, de conferência de imprensa em conferência de imprensa e&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}