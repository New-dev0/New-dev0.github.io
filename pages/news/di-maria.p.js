import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Di Maria</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Di Maria"/>
        <meta name="description" content="Trending News about Di Maria" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Di Maria</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/FOTOSAP/ARGENTINA/2022/dimaria2.jpg" alt="Di Maria"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-30/argentina-di-maria-preocupa/966750'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3><b>Di María</b> preocupa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR65tUTLKGydPoA-R4ctxyqEIqFj7BZMe-C_fLRK5aC-FtNtwkQsgxR0yaB4M3BQz_nCDCyM8qs" alt="<b>Di María</b> preocupa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angel <b>Di María</b> teve de ser substituído aos 60 minutos na vitória frente à Polónia (2-0), em jogo do Grupo C do Mundial. «<b>Di María</b> sentiu algo na coxa e preferimos substituí-lo. Todos sabem o quanto ele é importante para nós.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/esportes/catar-2022/noticia/2022/11/di-maria-acusa-problemas-musculares-e-sera-reavaliado-pela-argentina-antes-das-oitavas-de-final.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Di María acusa problema muscular e será reavaliado pela Argentina ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRM4stxkk_mA5JIf477Kw-sGGPsM9hg1uiTGfZZiJSQ5NxCb0AAm9X2iAMsooC5K7ugFOo12VcS" alt="Di María acusa problema muscular e será reavaliado pela Argentina ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Scaloni confirmou que não quis arriscar um jogador com risco de lesionar no segundo tempo.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/30/mate-barra-brava-e-sosia-de-di-maria-argentinos-fazem-festa-em-copacabana.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mate, barra brava e sósia de Di Maria: argentinos fazem festa em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvmjwsqfUr9JHFCUe9347IEwE_rMJToYXUYZ-TpEUQSVjhpsEd2YE4ygfwgA2cxQY5xklosWsy" alt="Mate, barra brava e sósia de Di Maria: argentinos fazem festa em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Assim como em 2014, Copacabana viveu um dia de &quot;barrio&quot; argentino durante a partida contra a Polônia.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/lancepress/2022/11/30/astro-da-argentina-se-lesiona-e-preocupa-para-a-copa-do-mundo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Di María se lesiona e preocupa a Argentina para a Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsvYc2cN_ygxY0eo6fnX-vzuDrN46iKa5aYRhsBdL4f8emtFcQ7A3OCQq3HZ34Ez2zPWt1zpgp" alt="Di María se lesiona e preocupa a Argentina para a Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 15 minutos da segunda etapa, o camisa 11 foi substituído para a entrada de Leandro Paredes e o técnico Lionel Scaloni comentou sobre a lesão muscular do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}