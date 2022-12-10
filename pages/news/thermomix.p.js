import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thermomix</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thermomix"/>
        <meta name="description" content="Trending News about Thermomix" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thermomix</h1>
            <Image width={800} height={500} src="https://i.ds.at/1gE_zw/rs:fill:1200:600/plain/2022/12/01/thermomixmontage.jpg" alt="Thermomix"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141412582/der-thermomix-und-die-skeptikerin-kann-der-doch-was'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der Thermomix und die Skeptikerin: Kann der doch was?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6arwgpH_aXOD4NhAbShK_FOd9LQfmpzPuWthiAI8PnMVTyP1Rpy4WS095IQCKyywkJI_gMTIC" alt="Der Thermomix und die Skeptikerin: Kann der doch was?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trotz des stolzen Preises wollen viele den Thermomix haben. Die Autorin war überzeugt, dass er nie in ihre Küche kommt. Lässt sie sich von Profis umstimmen?</p></div>
            </div>
        </a><a href='https://www.imtest.de/320036/kaufberatung/bosch-cookit-oder-vorwerk-thermomix-kuechenmaschinen-test-duell-kochen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cookit oder Thermomix? Testduell der Küchenmaschinen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT01WP8A5bFoLBpPJzEL9eo6e1qs4AMRZEFM-AIuZt6crjPhrEcsFPe8z2145WbD87fZ_NsK33-" alt="Cookit oder Thermomix? Testduell der Küchenmaschinen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das größte Versprechen, das der Cookit von Bosch und der Thermomix TM6 von Vorwerk abgeben, ist so einfach wie genial: Frische Mahlzeiten bei minimalem Koch-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}