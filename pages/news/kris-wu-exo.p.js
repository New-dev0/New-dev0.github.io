import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kris Wu EXO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kris Wu EXO"/>
        <meta name="description" content="Trending News about Kris Wu EXO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kris Wu EXO</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/d5SRPCf16TYsmXeh0vzvw-KTh28=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/r/a/D7fPOWRCmt0uBAjgH0xA/cantor-e-ator-sino-canadense-kris-wu-do-grupo-de-k-pop-exo-e-condenado-por-estupro.jpg" alt="Kris Wu EXO"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/pop-arte/noticia/2022/11/25/cantor-kris-wu-ex-integrante-do-grupo-de-k-pop-exo-e-condenado-por-estupro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cantor Kris Wu, ex-integrante do grupo de K-POP EXO, é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsDPK3Psr0mtiJmBkrCNjBl_Bdile54qQ1LmvGzmCUzzyDcga9T-DO5cfGTzg0T-AlLweaBNmn" alt="Cantor Kris Wu, ex-integrante do grupo de K-POP EXO, é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele tinha deixado o grupo em 2014 para seguir carreira solo. Após a acusação do ano passado, o artista perdeu contrato com marcas como Louis Vuitton,&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.globo.com/tv-e-lazer/astro-de-pop-kris-wu-ex-exo-condenado-13-anos-de-prisao-por-estupro-25615654.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Astro de K-pop Kris Wu, ex-EXO, é condenado a 13 anos de prisão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdZmiOalN2GsWmWLFFzO78mHgVX58ZN_vbeKR-pucM3w1K1UHzThCEubRDHMJipR1SK7jSCisG" alt="Astro de K-pop Kris Wu, ex-EXO, é condenado a 13 anos de prisão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-astro pop sino-canadense Kris Wu foi condenado a 13 anos de prisão após ser considerado culpado de estupro, informou um tribunal chinês nesta&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ofuxico.com.br/polemica/kris-wu-ex-cantor-membro-grupo-exo-condenado-estupro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cantor de K-pop Kris Wu, ex-membro do EXO, é condenado por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoH1ZpVWh0LE6u6zTlhfHHjMDvajo1LSWC2IFICkY41VrfnDZmg6wM426g4IoOvSp0T0QiW8_M" alt="Cantor de K-pop Kris Wu, ex-membro do EXO, é condenado por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kris Wu, cantor de K-pop canadense e ex-membro do grupo EXO, foi condenado por estupro em um tribunal na China. Confira em OFuxico.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/cultura/2022/11/15128664-kris-wu-do-exo-saiba-quem-e-o-astro-do-kpop-preso-por-estupro.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KRIS WU do EXO: Saiba quem é o astro do KPOP condenado por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStLIJqiy9XRDE-qKT12ZPXTvqeTVGN5-oZ2Isl0WBo3V2dnndi4wToB2WrRK5rG8X9w78nHiQO" alt="KRIS WU do EXO: Saiba quem é o astro do KPOP condenado por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-membro do EXO, cantor e ator sino-canadense foi condenado a 13 anos de prisão após ser considerado culpado de estupro.</p></div>
            </div>
        </a><a href='https://tangerina.uol.com.br/mix/kris-wu-exo-condenado-prisao-estupro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kris Wu: Ex-membro do EXO é condenado a 13 anos de prisão por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQh8z-IWq5v7utw2EyyihwQMoFPynB96x3Pel3ACoehtl3Y-cIFpS5uZTwG1_sqIs_3If5EKju7" alt="Kris Wu: Ex-membro do EXO é condenado a 13 anos de prisão por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-membro do fenômeno do k-pop EXO, Kris Wu foi sentenciado por ter estuprado três mulheres na China quando eram menores de idade.</p></div>
            </div>
        </a>
        </Template></>;
}