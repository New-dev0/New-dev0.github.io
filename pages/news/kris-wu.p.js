import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kris Wu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kris Wu"/>
        <meta name="description" content="Trending News about Kris Wu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kris Wu</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A4096%3A2307%3Anowe%3A0%3A250%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F25112129%2FGettyImages-1320609322-scaled.jpg" alt="Kris Wu"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/25/china-cantor-kris-wu-condenado-a-treze-anos-de-prisao-por-violacao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China. Cantor Kris Wu condenado a treze anos de prisão por violação</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-RlxR9tKcqVkZtqe35qLAvZ-3UT_2vETZLI4NVFILOAXmV8mVoHVHfYGsg-W_G4tmPazB5o6D" alt="China. Cantor Kris Wu condenado a treze anos de prisão por violação" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O tribunal condenou o cantor pop Kris Wu a 13 anos de prisão por ter abusado de três mulheres alcoolizadas e incentivar menores a participar de um grupo de&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/pop-arte/noticia/2022/11/25/cantor-kris-wu-ex-integrante-do-grupo-de-k-pop-exo-e-condenado-por-estupro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cantor Kris Wu, ex-integrante do grupo de K-POP EXO, é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsDPK3Psr0mtiJmBkrCNjBl_Bdile54qQ1LmvGzmCUzzyDcga9T-DO5cfGTzg0T-AlLweaBNmn" alt="Cantor Kris Wu, ex-integrante do grupo de K-POP EXO, é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele tinha deixado o grupo em 2014 para seguir carreira solo. Após a acusação do ano passado, o artista perdeu contrato com marcas como Louis Vuitton,&nbsp;...</p></div>
            </div>
        </a><a href='https://radiocomercial.iol.pt/noticias/130816/cantor-kris-wu-condenado-a-13-anos-de-prisao-por-violacao-e-incentivo-em-atividades-promiscuas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cantor Kris Wu condenado a 13 anos de prisão por violação e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYCWS_YJfCHmx5g2IvVSL_P9TQRvf0reILvuWpodGk18w-gH3MyQl9kYTpJyMohmiwveAsVvuQ" alt="Cantor Kris Wu condenado a 13 anos de prisão por violação e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O artista, atualmente com 32 anos, foi condenado por um tribunal em Pequim, China.</p></div>
            </div>
        </a><a href='https://lifestyle.sapo.pt/fama/noticias-fama/artigos/cantor-kris-wu-condenado-a-13-anos-de-prisao-na-china-por-violacao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cantor Kris Wu condenado a 13 anos de prisão na China por violação</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT3fFlCg9uXj8e4lHpBqnss67qDSiG-knTw7qKJURMYxhkjk2-j8K0jBItDv3Wp4ApIRE80dWgU" alt="Cantor Kris Wu condenado a 13 anos de prisão na China por violação" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O popular cantor e ator sino-canadiano Kris Wu foi hoje condenado por um tribunal chinês a 13 anos de prisão, por violar uma adolescente e &quot;organizar um&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/entretenimento/china-condena-ex-integrante-de-grupo-de-k-pop-kris-wu-a-13-anos-de-prisao-por-estupro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China condena ex-integrante de grupo de K-pop Kris Wu a 13 anos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvEvasbQgPb4ncpEFZIqhqn4o_BgF8o40lz7ZNxpg6Gb69uti7svhF3t1isMSqFH3CLtaSMCtm" alt="China condena ex-integrante de grupo de K-pop Kris Wu a 13 anos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um tribunal de Pequim condenou o cantor canadense Kris Wu nesta sexta-feira (25) a 13 anos de prisão após considerá-lo culpado de crimes como estupro,&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.globo.com/tv-e-lazer/astro-de-pop-kris-wu-ex-exo-condenado-13-anos-de-prisao-por-estupro-25615654.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Astro de K-pop Kris Wu, ex-EXO, é condenado a 13 anos de prisão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdZmiOalN2GsWmWLFFzO78mHgVX58ZN_vbeKR-pucM3w1K1UHzThCEubRDHMJipR1SK7jSCisG" alt="Astro de K-pop Kris Wu, ex-EXO, é condenado a 13 anos de prisão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-astro pop sino-canadense Kris Wu foi condenado a 13 anos de prisão após ser considerado culpado de estupro, informou um tribunal chinês nesta&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}