import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedri</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedri"/>
        <meta name="description" content="Trending News about Pedri" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedri</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2cb4f5a447174ff1/63835da841047811aeac09f1/Pedri_Spain_World_Cup_2022.jpg" alt="Pedri"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/tr/haber/xavi-pedri-takimlari-adina-fark-yaratabilecek-ozelliklere-sahip/blt15e813be175a7176'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Xavi: Pedri takımları adına fark yaratabilecek özelliklere sahip</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKU9XU78uuRv4477uWraD2D0s9FdmLqsx6E-3aJ3PL063TGCY8o65dWmHoKVznAQLA5ZneYbmg" alt="Xavi: Pedri takımları adına fark yaratabilecek özelliklere sahip" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona&#39;nın genç teknik direktörü, genç yaşına rağmen etkileyici bir performans sergileyen oyuncusunu övdü.</p></div>
            </div>
        </a>
        </Template></>;
}