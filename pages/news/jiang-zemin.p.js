import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jiang Zemin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jiang Zemin"/>
        <meta name="description" content="Trending News about Jiang Zemin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jiang Zemin</h1>
            <Image width={800} height={500} src="https://eco.imgix.net/uploads/2022/11/cropped-jiang_zemin_2002-1.jpg?mark64=aHR0cHM6Ly9lY28uaW1naXgubmV0L0VDT193YXRlcm1hcmsucG5nP2ZtPXBuZw%3D%3D&markscale=33&markalign=center,left&w=1200" alt="Jiang Zemin"/>
            <h3>Recent News</h3>
            <a href='https://eco.sapo.pt/2022/11/30/ex-presidente-chines-jiang-zemin-morre-aos-96-anos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-presidente chinês Jiang Zemin morre aos 96 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYd_Om7Ms9CB3DO0P8DoA1tVz8rBFEZABnLG6ERvHXX_h7zi90o4B9WaoeXWkZZxZUj9xgKVBr" alt="Ex-presidente chinês Jiang Zemin morre aos 96 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-Presidente chinês Jiang Zemin, que liderou a China após os protestos pró-democracia de Tiananmen, em 1989, até ao início da década de 2000,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundo/jiang-zemin-presidente-do-boom-economico-da-china-morreu-aos-96-anos_n1450720'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jiang Zemin, presidente do &quot;boom&quot; económico da China, morreu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTTK388-9ejXz_DwWwvNm0m5ZaHS5hPlbKkEX1Q07YfR0Qmuh3OUoG3AJ92M7SDEmFGH-B_Xz98" alt="Jiang Zemin, presidente do &quot;boom&quot; económico da China, morreu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi o presidente chinês que assumiu a liderança do Partido Comunista chinês após o massacre na Praça de Tiananmen, em 1989. Jiang Zemin liderou o país entre&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/30/morreu-o-antigo-presidente-chines-jiang-zemin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o antigo Presidente chinês, Jiang Zemin, o rosto do &quot;boom ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsLbBoW8NO0F8ZeG-KvgEDL37DXyC-MTqp64wuBoGjcB8Irf7oXlaWjzxAovzX5eQq4I7vwonJ" alt="Morreu o antigo Presidente chinês, Jiang Zemin, o rosto do &quot;boom ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jiang Zemin, ex-Presidente chinês, morreu em Xangai, aos 96 anos. Lutava contra uma leucemia e foi um dos rostos da abertura da China ao mercado.</p></div>
            </div>
        </a><a href='https://www.jornaldenegocios.pt/economia/mundo/asia/detalhe/jiang-zemin-ex-presidente-da-china-morre-aos-96-anos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jiang Zemin, ex-presidente da China, morre aos 96 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwFyD1ZpKEwdpgnXy5rWiM7Cgi883gUvhS61BRsQLAvdgFWBcV6z0aWMRJoAyXATT_Ygerk4O7" alt="Jiang Zemin, ex-presidente da China, morre aos 96 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jiang Zemin - que esteve à frente do país entre 1993 e 2003 - liderou o crescimento da China após a crise de Tianmenn. Morreu esta quarta-feira no&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/internacional/2022-11-30-Morreu-Jiang-Zemin-ex-Presidente-da-China-88ddb33c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Jiang Zemin, ex-Presidente da China</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5BJE7qnjALHhx-HuNRMkCMUnmaZ_HrzrNxapmpduKZ0aoUh5Gq-DLNHRCMJffksmO0zHRLUlc" alt="Morreu Jiang Zemin, ex-Presidente da China" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jiang Zemin foi presidente da República Popular da China de 1993 a 2003 e secretário-geral do Partido Comunista chinês entre 1989 e 2002.</p></div>
            </div>
        </a>
        </Template></>;
}