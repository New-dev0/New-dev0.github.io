import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pablo Milanés</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pablo Milanés"/>
        <meta name="description" content="Trending News about Pablo Milanés" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pablo Milanés</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1753564?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Ipsilon.png" alt="Pablo Milanés"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/11/22/culturaipsilon/noticia/morreu-cantor-compositor-cubano-pablo-milanes-2028649'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Pablo Milanés, um revolucionário com uma voz privilegiada</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNb72Q4hPAtO3Xfrwz9w9eRNwOsWxLIpv_2xym-7kHtts8MYMOXXutCbjNct139lrgp35PKU5Q" alt="Morreu Pablo Milanés, um revolucionário com uma voz privilegiada" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Músico de 79 anos estava hospitalizado em Madrid há mais de uma semana. Motor do movimento de renovação da música cubana e da redescoberta dos seus&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsf.pt/mundo/foi-um-livre-pensador-luis-represas-e-a-influencia-de-pablo-milanes-15375379.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Foi um livre pensador.&quot; Luís Represas e a influência de Pablo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTH0-uUygLS_NadyuG3ju-GsvyWDtRkQysJYItfDoemywu5Pk8SHteZ-R_yZqg2Jj3HVca1lRhM" alt="&quot;Foi um livre pensador.&quot; Luís Represas e a influência de Pablo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois do final dos Trovante, Luís Represas confessa à TSF que Pablo Milanés o ajudou a encontrar um rumo a solo. Em 1992, em Havana, nasceu o disco Represas e&nbsp;...</p></div>
            </div>
        </a><a href='https://pt.euronews.com/cultura/2022/11/22/morreu-pablo-milanes-uma-das-vozes-mais-sonantes-de-cuba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Pablo Milanés uma das vozes mais sonantes de Cuba</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRE-lOAIZs1tIs4BWjDFUV361Aara10yzSxM_8QE2rqRAEVKwwIB7LVOS-0Nif3M5zfI3h38zwU" alt="Morreu Pablo Milanés uma das vozes mais sonantes de Cuba" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morreu Pablo Milanés, o cantor cubano estava internado há mais de uma semana num hospital em Madrid.</p></div>
            </div>
        </a><a href='https://www.jn.pt/artes/morreu-o-cantor-cubano-pablo-milanes-15374982.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o cantor cubano Pablo Milanés</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiLO1_gXmpOhlSolKFsq_FU87mw4FlFa9FMNyIoXPIL_wo6GUXgWCFfoP-MUAm6F0j8881ApcJ" alt="Morreu o cantor cubano Pablo Milanés" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O cantor e compositor cubano Pablo Milanés morreu, na segunda-feira à noite, aos 79 anos, depois de estar hospitalizado em Madrid, Espanha, durante mais de&nbsp;...</p></div>
            </div>
        </a><a href='https://sol.sapo.pt/artigo/786079/lenda-da-m-sica-cubana-pablo-milanes-morre-aos-77-anos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lenda da música cubana Pablo Milanés morre aos 77 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgsU1_2Y7ygRTRvRLVghNr3QDAL7KU_6GrmP8N5ucb2kf6hkV1xgyG5Ex9fBv63onAFJVF48IS" alt="Lenda da música cubana Pablo Milanés morre aos 77 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>É o autor do êxito &quot;Yolanda&quot;. Nos anos 90 participou no primeiro disco a solo de Luís Represas. Recorde a colaboração dos dois músicos.</p></div>
            </div>
        </a><a href='https://www.esquerda.net/artigo/pablo-milanes-1943-2022/83947'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pablo Milanés (1943-2022)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSItMWgTOfwfyJI9pfyNL78nSD7-fLA7iPnzNvKNSXJyjYr12EjIwvNyvtj7wKKQv49Y1xzEDij" alt="Pablo Milanés (1943-2022)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Faleceu esta segunda-feira em Madrid o cantautor que foi uma das referências da Nueva Trova Cubana e dos artistas cubanos mais consagrados&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}