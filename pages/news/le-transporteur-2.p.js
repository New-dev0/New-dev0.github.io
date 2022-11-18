import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Le Transporteur (2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Le Transporteur (2"/>
        <meta name="description" content="Trending News about Le Transporteur (2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Le Transporteur (2</h1>
            <Image width={800} height={500} src="https://fr.web.img3.acsta.net/img/98/4f/984faf7a4823ae8af4e52f7e69970bf6.jpg" alt="Le Transporteur (2"/>
            <h3>Recent News</h3>
            <a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000002730.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Transporteur 2 sur TFX : reverra-t-on un jour Jason Statham dans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJ9h_pJfVw3sDJk4xMOBVrGeHh4FB7msgRfMZjhdRMuJ1T7_0LksswZhshHHPVH_6LS3_IE4El" alt="Le Transporteur 2 sur TFX : reverra-t-on un jour Jason Statham dans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 2013, lors du marché du film du Festival de Cannes, Europacorp, la société de Luc Besson, annonce une nouvelle trilogie Le Transporteur en partenariat avec&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}