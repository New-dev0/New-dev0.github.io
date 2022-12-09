import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry Potter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry Potter"/>
        <meta name="description" content="Trending News about Harry Potter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry Potter</h1>
            <Image width={800} height={500} src="https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/12/harry-potter-les-acteurs-avaient-besoin-damis-en-dehors-de-la-saga-min.jpg" alt="Harry Potter"/>
            <h3>Recent News</h3>
            <a href='https://mcetv.ouest-france.fr/mon-mag-culture/mon-mag-serie-tv/harry-potter-les-acteurs-avaient-besoin-damis-en-dehors-de-la-saga-08122022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Potter: les acteurs avaient besoin d&#39;amis en dehors de la saga !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3FBBbIIvpnSa8zePvTq4Wb5QD0SVg6dWiR3MwLbEFSx2g9IUAbaDA4mHgogL1nxlMWwtU7_uS" alt="Harry Potter: les acteurs avaient besoin d&#39;amis en dehors de la saga !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il y a déjà 21 ans que les fans de Harry Potter découvraient au cinéma les acteurs principaux de la saga dans le film Harry Potter à l&#39;école des sorciers. Pour&nbsp;...</p></div>
            </div>
        </a><a href='https://actu.fr/occitanie/perpignan_66136/pres-de-perpignan-un-grand-evenement-autour-de-l-univers-harry-potter-organise-tres-bientot_55788767.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Événement près de Perpignan : Plongez dans l&#39;univers Harry Potter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvO_wgMYEqOMaj1JuIXkolim4cfh5W1XLzReztNLBT9ZrALYkHFMz8iFeszB6lVrbluN51PoOt" alt="Événement près de Perpignan : Plongez dans l&#39;univers Harry Potter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les samedi 7 et dimanche 8 janvier 2023, deux jours d&#39;immersion attendent les fans d&#39;Harry Potter, près de Perpignan. Petits et grands ont rendez-vous à&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}