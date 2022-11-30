import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Papa Bouba Diop</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Papa Bouba Diop"/>
        <meta name="description" content="Trending News about Papa Bouba Diop" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Papa Bouba Diop</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/le-numero-19-de-papa-bouba-diop-etait-sur-le-brassard-du-senegal-j-lorenzini-reuters/1500000001717834/0:0,1782:1188-640-427-75/c7e8e.jpg" alt="Papa Bouba Diop"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/Senegal-un-brassard-en-hommage-a-papa-bouba-diop-contre-l-equateur/1367541'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sénégal : un brassard en hommage à Papa Bouba Diop contre l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTxit0v54QwLYs64G4KblwSfb1ZDiqWBYVzUTi2rdGw2POK4A_siZAEClfsNjIsOC4v6bvc8DGl" alt="Sénégal : un brassard en hommage à Papa Bouba Diop contre l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le capitaine du Sénégal Kalidou Koulibaly a porté un brassard hommage à Papa Bouba Diop, ce mardi, contre l&#39;Équateur.</p></div>
            </div>
        </a><a href='https://www.rfi.fr/fr/afrique-foot/20221129-mondial-2022-le-s%C3%A9n%C3%A9gal-entre-joie-d-%C3%AAtre-en-huiti%C3%A8mes-et-hommage-%C3%A0-papa-bouba-diop'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022: le Sénégal entre joie d&#39;être en huitièmes et hommage ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvtj5WbdVYHcF68wrYn-FCvHU2uZgyN_tgG9Lp17IphdG55pPCfg0L_Tgburp2uzDb6MEEf4eA" alt="Mondial 2022: le Sénégal entre joie d&#39;être en huitièmes et hommage ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soirée d&#39;allégresse pour les Sénégalais, ce 29 novembre 2022 au Qatar : ils ont décroché une place en huitièmes de finale de la Coupe du monde,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pausefoot.com/video/%F0%9F%99%8F%F0%9F%87%B8%F0%9F%87%B3-lhommage-de-koulibaly-a-papa-bouba-diop-apres-la-qualification-du-senegal/?utm_source=pausefoot&utm_medium=recirculated_sidebar&utm_campaign=u18-france-italie-2-0-le-resume'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;hommage de Koulibaly à Papa Bouba Diop après la qualification ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTv1OE5mgNPCgWAeRabo663MwYGAnol70qc5vwylIEdemisoWnGMgEKu0W6MM91DqwtoFVmKt9n" alt="L&#39;hommage de Koulibaly à Papa Bouba Diop après la qualification ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;hommage de Kalidou Koulibaly à Papa Bouba Diop après la qualification du Sénégal contre l&#39;Equateur ! Résumés, buts, articles, vidéos, … ➡️ www.beinsports&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/senegal-equateur-le-superbe-hommage-de-koulibaly-a-papa-bouba-diop-aliou-cisse-salue-sadio-mane--808421'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sénégal – Equateur : le superbe hommage de Koulibaly à Papa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPFxQxAE-2aQROrG8iRdQlvE5jm3WTCH9p7U332BoclYRGDD3X6AhDBUqcTls8joY0UezyWEAT" alt="Sénégal – Equateur : le superbe hommage de Koulibaly à Papa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kalidou Koulibaly et Aliou Cissé se sont exprimés après la victoire du Sénégal face à l&#39;Equateur et la qualification en huitième de finale.</p></div>
            </div>
        </a><a href='https://rmcsport.bfmtv.com/football/coupe-du-monde/coupe-du-monde-2022-le-bel-hommage-de-koulibaly-et-du-senegal-a-papa-bouba-diop_AV-202211290691.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022: le bel hommage de Koulibaly et du Sénégal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1YRbTCpAmhkvVJ7Vxb6QPvSCzKuYMfYhi3LKdhJBTesfBPz8HFdpvFGTriY4XXiwBImFxBRdV" alt="Coupe du monde 2022: le bel hommage de Koulibaly et du Sénégal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lors de la victoire contre l&#39;Équateur ce mardi (2-1), le Sénégal a rendu hommage à son ancien héros Papa Bouba Diop, décédé il y a deux ans jour pour jour.</p></div>
            </div>
        </a><a href='https://www.africatopsports.com/2022/11/29/mondial-2022-le-senegal-a-rendu-hommage-papa-bouba-diop/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022: Le Sénégal a rendu hommage à Papa Bouba Diop</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsbnC2BiR-pg1STgxxkI2xo_-yOvNqzXxrk3LIUezgtx11NdjTvHsbxGOKvhcOvU9QITmGFGKX" alt="Mondial 2022: Le Sénégal a rendu hommage à Papa Bouba Diop" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Décédé il y a exactement 2 ans jour pour pour, Papa Bouba Diop n&#39;a pas été oublié le 29 novembre 2022, jour de match du Sénégal, en Coupe.</p></div>
            </div>
        </a><a href='https://www.afriquesports.net/afrique/mondial-2022-lhommage-appuye-des-senegalais-a-papa-bouba-diop-apres-la-qualification-en-8es'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022 : L&#39;hommage appuyé des Sénégalais à Papa Bouba ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXZXmEAqNA-KkMqr-DvzSXn9e2o5tsCCkJ2irgIKIJucDs6xwNt_fL1TbRJo2ECCNDYI5ftwBY" alt="Mondial 2022 : L&#39;hommage appuyé des Sénégalais à Papa Bouba ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>D&#39;abord, Kalidou Koulibaly a porté un brassard avec le numéro 19 de Papa Bouba Diop. Et après la victoire, les joueurs ont soulevé tous ensemble, une photo de l&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}