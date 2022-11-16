import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>De ferias com o Ex</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,De ferias com o Ex"/>
        <meta name="description" content="Trending News about De ferias com o Ex" /></Head><Template>
            <h1 style={{fontSize: "30"}}>De ferias com o Ex</h1>
            <Image width={800} height={500} src="https://www.rbsdirect.com.br/imagesrc/35779132.jpg?w=1200&h=630&a=c&version=1575255600" alt="De ferias com o Ex"/>
            <h3>Recent News</h3>
            <a href='https://gauchazh.clicrbs.com.br/cultura-e-lazer/tv/noticia/2022/11/foi-incrivel-poder-sair-da-seca-diz-lumena-sobre-o-de-ferias-com-o-ex-clafj1jkb002e0170gbd742ln.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Foi incrível poder sair da seca&quot;, diz Lumena sobre o &quot;De Férias com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYbfVzaREdQJD80parpofaVpfxoa-UuYT0QY5ETGiJBKE-svZ2JlTPXp9twEWLO4fnAyrdetEN" alt="&quot;Foi incrível poder sair da seca&quot;, diz Lumena sobre o &quot;De Férias com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>É assim que Lumena Aleluia aterrissa em mais um reality show. A baiana, famosa por participar do Big Brother Brasil 21, da Globo, poderá ser vista no De Férias&nbsp;...</p></div>
            </div>
        </a><a href='https://gente.ig.com.br/colunas/gabriel-perline/2022-11-15/lipe-ribeiro-deixa-o-de-ferias-com-o-ex-namorando-pela-3-vez--conheca.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lipe Ribeiro deixa o De Férias com o Ex namorando pela 3ª vez ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTA5fZ06pXUbnZfHV_fYdhhcgqetoNHDW-lVPWNTpmbjXh98C7mj36iiagNC-i_uPLK5OmtnF8e" alt="Lipe Ribeiro deixa o De Férias com o Ex namorando pela 3ª vez ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veterano no reality de pegação, ele deixou as gravações comprometido mais uma vez.</p></div>
            </div>
        </a><a href='https://gente.ig.com.br/colunas/gabriel-perline/2022-11-15/lumena-liberta-a-piranha-interior-no-de-ferias-com-o-ex---queria-sexo-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lumena liberta a piranha interior no De Férias com o Ex: &#39;Queria sexo&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRMtySF1Sjcw3h42wWHixL3bDNCuvz1GiYUSu2W45mY2eSoTNaY6TGsHdwV_Hjz9J7ttTeSknrl" alt="Lumena liberta a piranha interior no De Férias com o Ex: &#39;Queria sexo&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Preparem-se para conhecer uma nova Lumena Aleluia. Aquela mulher carrasca que o Brasil conheceu no BBB21 morreu. A partir desta terça-feira (15),&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}