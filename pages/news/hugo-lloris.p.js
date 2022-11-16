import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hugo Lloris</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hugo Lloris"/>
        <meta name="description" content="Trending News about Hugo Lloris" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hugo Lloris</h1>
            <Image width={800} height={500} src="https://images.midilibre.fr/api/v1/images/view/6373bd7d2c485f500a03f849/large/image.jpg?v=4" alt="Hugo Lloris"/>
            <h3>Recent News</h3>
            <a href='https://www.midilibre.fr/2022/11/15/coupe-du-monde-2022-hugo-lloris-confirme-renoncer-au-brassard-inclusif-au-qatar-10804659.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Hugo Lloris confirme renoncer au brassard ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0B9PISCiTvfyS6AvuYjmirhAt1aYKtddSsBPFrrtkA9r1DRrH4dvbW-7_OFtEZADh2C2cF1lk" alt="Coupe du monde 2022 : Hugo Lloris confirme renoncer au brassard ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le capitaine de l&#39;équipe de France a confirmé mardi à l&#39;AFP qu&#39;il ne porterait pas de brassard en faveur de l&#39;inclusion lors du Mondial-2022 au Qatar,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/sport/coupe-du-monde-2022-hugo-lloris-ne-portera-pas-le-brassard-arc-en-ciel-en-faveur-de-l-inclusion-lgbt-2238740.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Hugo Lloris ne portera pas le brassard en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRsFePPLS-QOHy6BEyj-I8k3E7-U-1JvLcWoeXA7k_H6FxCXyGeh_UE2cmV0kiJMvKPSZxx6ek" alt="Coupe du monde 2022 : Hugo Lloris ne portera pas le brassard en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Le capitaine des Bleus Hugo Lloris ne portera pas un brassard en faveur de l&#39;inclusion lors des rencontres de la Coupe du monde,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.europe1.fr/sport/brassard-inclusif-a-la-coupe-du-monde-hugo-lloris-entend-montrer-du-respect-au-qatar-4147849'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brassard inclusif à la Coupe du monde : Hugo Lloris entend ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtg481l5jd9PK3rck_NPp4Va9jHky91zmUZwrG3QtACmkgvyN01DoDCp4vpmbsjqLVkln5WMXP" alt="Brassard inclusif à la Coupe du monde : Hugo Lloris entend ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Interrogé sur le port d&#39;un brassard en faveur de l&#39;inclusion durant le Mondial au Qatar, le capitaine de l&#39;équipe de France, Hugo Lloris, a déclaré qu&#39;il&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/sport/20221115.OBS65946/hugo-lloris-confirme-qu-il-ne-portera-pas-de-brassard-arc-en-ciel-au-qatar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hugo Lloris confirme qu&#39;il ne portera pas de brassard arc-en-ciel au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBEyJkC3cMknJmgbGGYjomZ4jPjiSCRZTf022XwFrpLsFysAuIj8hTsJsBKjE5Et59P4cVVFgE" alt="Hugo Lloris confirme qu&#39;il ne portera pas de brassard arc-en-ciel au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le brassard de capitaine du gardien des Bleus ne comportera pas de symbole de protestation contre les atteintes aux droits de l&#39;homme au Qatar.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/coupe-du-monde/coupe-du-monde-c-est-une-honte-yoann-lemaire-s-indigne-des-propos-de-lloris-sur-la-cause-lgbt-6bf0f3dc-64ed-11ed-921e-4ba615c3f69c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. « C&#39;est une honte » : Yoann Lemaire s&#39;indigne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVYRsmMrWHp9rGka5ufU2WH19gj9G0oV3VT20MEQcQk9hp7Qa8QnCdkyEP4LkIObJcQml_waN5" alt="Coupe du monde. « C&#39;est une honte » : Yoann Lemaire s&#39;indigne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yoann Lemaire, ancien footballeur, président de l&#39;association Foot Ensemble et symbole de la lutte contre l&#39;homophobie en France, ne décolère pas après les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/coupe-du-monde/video-coupe-du-monde-hugo-lloris-capitaine-des-bleus-ne-compte-pas-porter-de-brassard-aux-couleurs-lgbt-au-qatar_5477247.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. Coupe du monde : Hugo Lloris, capitaine des Bleus, ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqU2dd9pM95AcnOvyzj-BscoY7RSkf_mw0udxT90cZhNPDVU1TkmM3eu41uz5OZcl8KwbvAupL" alt="VIDEO. Coupe du monde : Hugo Lloris, capitaine des Bleus, ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le capitaine de l&#39;équipe de France s&#39;est exprimé lors d&#39;une conférence de presse à huit jours du premier match des tricolores, face à l&#39;Australie.</p></div>
            </div>
        </a>
        </Template></>;
}