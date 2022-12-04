import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Entre irmãos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Entre irmãos"/>
        <meta name="description" content="Trending News about Entre irmãos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Entre irmãos</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/jG_PuLfpQLErKITlkpVcZLP5tIY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/m/r/BiMfTVRDCKnN6YRrrNGg/moto-fogo.jpg" alt="Entre irmãos"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/mg/vales-mg/noticia/2022/12/03/dois-irmaos-morrem-apos-acidente-entre-motocicleta-e-caminhao-na-mg-409-em-teofilo-otoni.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dois irmãos morrem após acidente entre motocicleta e caminhão na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQA-Nr-UeFqIxvPY6zquSqwYGrcl2jmWG1-ZmU3pNu5rnIE49WgmJoNVVTNMlbiYffbQKGVrxPP" alt="Dois irmãos morrem após acidente entre motocicleta e caminhão na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo a Polícia Militar Rodoviária, eles seguiam de moto para a comunidade rural de Corgão, quando bateram de frente com um caminhão em uma curva.</p></div>
            </div>
        </a>
        </Template></>;
}