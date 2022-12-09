import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kırık Bir Aşk Hikayesi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kırık Bir Aşk Hikayesi"/>
        <meta name="description" content="Trending News about Kırık Bir Aşk Hikayesi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kırık Bir Aşk Hikayesi</h1>
            <Image width={800} height={500} src="https://i.hbrcdn.com/haber/2022/12/08/kirik-bir-ask-hikayesi-nerede-cekildi-kirik-bir-15482600_4825_amp.jpg" alt="Kırık Bir Aşk Hikayesi"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/haberler/kirik-bir-ask-hikayesi-nerede-cekildi-kirik-bir-15482600-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kırık Bir Aşk Hikayesi nerede çekildi? Kırık Bir Aşk Hikayesi konusu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGmA1TfKUibcRE8l0mGsN63HAYYYat17719kIQLOT3-Mnn6GowAVB-rEoPdU3_baCtSOAhTR4r" alt="Kırık Bir Aşk Hikayesi nerede çekildi? Kırık Bir Aşk Hikayesi konusu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kırık Bir Aşk Hikayesi, yönetmenliğini Ömer Kavur&#39;un üstlendiği, Selim İleri&#39;nin özgün senaryosunun Kavur tarafından uyarladığı 1981 çıkışlı Türk filmidir.</p></div>
            </div>
        </a>
        </Template></>;
}