import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İzel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İzel"/>
        <meta name="description" content="Trending News about İzel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İzel</h1>
            <Image width={800} height={500} src="https://i.sonhaberler.com/2/1280/720/storage/files/images/2022/10/22/izel-celik-ercan-neden-ayrildi-kim-wAdg_cover.jpg" alt="İzel"/>
            <h3>Recent News</h3>
            <a href='https://www.sonhaberler.com/izel-celik-ercan-neden-ayrildi-ne-zaman-dagildi-haber-883413'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İzel Çelik Ercan neden ayrıldı? Ne zaman dağıldı?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxE0A46KyAAbKspOVrgyoc8jzy_IVMG3Rgwobyo_uC6XWiRWH3wb6CP21YElt-lyTIoZVXOU_Y" alt="İzel Çelik Ercan neden ayrıldı? Ne zaman dağıldı?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İzel Çelik Ercan müzik grubu 90&#39;lı yıllarında en çok dinlenen müzik grubuydu. Ancak o dönemler bilinmeyen nedenlerle bir anda ünlü müzik grubu dağıldı.</p></div>
            </div>
        </a>
        </Template></>;
}