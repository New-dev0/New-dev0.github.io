import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SCS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SCS"/>
        <meta name="description" content="Trending News about SCS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SCS</h1>
            <Image width={800} height={500} src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA153CZ0.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg" alt="SCS"/>
            <h3>Recent News</h3>
            <a href='https://www.msn.com/de-at/nachrichten/other/us-beauty-kette-er%C3%B6ffnet-in-wien-2-shops-scs-und-dz/ar-AA153YFJ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US-Beauty-Kette eröffnet in Wien 2 Shops: SCS und DZ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-hfxN3iFWJ3zGs7PPjxoQAljAT5ezBU_Mo8I50TF0xEvODszJojE_VN3r0ifK-_YGsrHxory-" alt="US-Beauty-Kette eröffnet in Wien 2 Shops: SCS und DZ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>... © Amarla In der SCS und im Donauzentrum kann man jetzt erstmals bei der US-Kette Bath &amp; Body Works nach passenden Geschenken shoppen.</p></div>
            </div>
        </a>
        </Template></>;
}