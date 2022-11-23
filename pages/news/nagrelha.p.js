import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nagrelha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nagrelha"/>
        <meta name="description" content="Trending News about Nagrelha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nagrelha</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=29c438aa-adde-425a-9792-4ef1d2a277e8&w=800&h=420&watermark=true&t=20221122145700" alt="Nagrelha"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/internacional/sangue-suor-e-lagrimas-no-funeral-de-nagrelha-o-estado-maior-do-kuduro-angolano--15376182.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sangue, suor e lágrimas no funeral de &quot;Nagrelha&quot;, o &#39;Estado-maior ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTD0VAPqq8uYC75DFqoFMIsrdL8qPfzIFRqqB2zr8TK4NNtPMHjfhudndTKoVe5o2SMWAwPYBX7" alt="Sangue, suor e lágrimas no funeral de &quot;Nagrelha&quot;, o &#39;Estado-maior ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O artista &quot;Nagrelha&quot; morreu aos 36 anos, devido a um cancro no pulmão. Foram mobilizados 800 agentes para acompanhar o cortejo e funeral. Um jovem morreu e&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsf.pt/mundo/caos-em-funeral-de-musico-angolano-nagrelha-policia-dispersa-multidao-com-gas-lacrimogeneo-15375502.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Nunca vimos nada assim.&quot; Caos em funeral de músico angolano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2G22cIilZTgGe2ZVIiMGQzAnWbqaJKe2PMOIfbm_QeErB1n0RWOrXOB-u1LrbxtKkS00ZAT-w" alt="&quot;Nunca vimos nada assim.&quot; Caos em funeral de músico angolano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Nunca vimos nada assim.&quot; Caos em funeral de músico angolano &#39;Nagrelha&#39; só comparado ao de Agostinho Neto. À TSF, o repórter de imagem da agência Lusa Marcos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundo/um-morto-e-mais-de-30-feridos-no-funeral-do-musico-nagrelha-em-luanda_n1448773'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Um morto e mais de 30 feridos no funeral do músico &quot;Nagrelha&quot; em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmTRpr447wACBv5KcTVMSCqg-g4W9p-ijxQ5GIFvTtcErgTtYfgaAxY6fYR3huFfa9L6dgUVM_" alt="Um morto e mais de 30 feridos no funeral do músico &quot;Nagrelha&quot; em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um jovem morreu e 33 pessoas ficaram feridas durante o funeral do músico angolano &quot;Nagrelha&quot;, incluindo 16 polícias, dois dos quais esfaqueados com&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/22/policia-angolana-dispersa-com-gas-lacrimogeneo-tumulto-em-funeral-de-musico-nagrelha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polícia angolana dispersa com gás lacrimogéneo tumulto em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLw1WpFvZdTQaOpdMrVj5_DqWqehmGXv7a7vO8MRrleGhT7Nq94N-tU0LrSCZlEBwrabrGg1gg" alt="Polícia angolana dispersa com gás lacrimogéneo tumulto em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As cerimónias fúnebres do músico &quot;Nagrelha&quot; atraíram milhares de angolanos, naquele que será o maior funeral de sempre em Luanda. A grande concentração de&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/internacional/2022-11-22-Um-morto-e-mais-de-30-feridos-apos-intervencao-policial-no-funeral-do-musico-angolano-Nagrelha-94bc2043'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Um morto e mais de 30 feridos após intervenção policial no funeral ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQU8VibnTUzuLb7SwQjT64GJjLy_HR3eSURq3pthaiSKppLITRkEjtDxgJfymBrfg5zK2akdgUw" alt="Um morto e mais de 30 feridos após intervenção policial no funeral ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um jovem morreu e 33 pessoas ficaram feridas durante o funeral do artista, especializado no estilo kuduro. Partidos angolanos destacaram o contributo para a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}