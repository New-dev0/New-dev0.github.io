import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Richarlison</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Richarlison"/>
        <meta name="description" content="Trending News about Richarlison" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Richarlison</h1>
            <Image width={800} height={500} src="https://im.haberturk.com/2022/11/29/ver1669725308/3543059_1200x627.jpg" alt="Richarlison"/>
            <h3>Recent News</h3>
            <a href='https://www.haberturk.com/richarlison-macin-yildizi-oldu-brezilya-nin-yildiz-oyuncusuna-eski-sevgiliden-gonderme-geldi-3543059-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Richarlison maçın yıldızı oldu! Brezilya&#39;nın yıldız oyuncusuna eski ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQOZfTxWXO2Xb5VQlMEVM2E0mmBOr3OuI__As0AqWSFib-5DEzRtO45iUVD-_Vo6tjd-GU7-Ki" alt="Richarlison maçın yıldızı oldu! Brezilya&#39;nın yıldız oyuncusuna eski ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sırbistan - Brezilya maçında gösterdiği performansıyla dikkatleri üzerine çeken yıldız futbolcu Richarlison, başarılı futbolculuk kariyerinin yanında özel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/bana-neden-konusuyorsun-diye-soruyorlar-ama-dogru-soru-bu-degil-makale-1591418'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bana neden konuşuyorsun diye soruyorlar ama doğru soru bu değil!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGqQHOmsrOE-DP2zdX5vId5Ik50sn8hkX2RF4b75YUvLfpSsvaJeetBeRla6FNGlN2NzMeqFKh" alt="Bana neden konuşuyorsun diye soruyorlar ama doğru soru bu değil!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cruyff bir &#39;cins&#39;lik geleneğidir. Hikâyeciliktir. Üstelik çıtayı çok yükseğe koymuş olsa da Hollanda&#39;da yalnız değildir. Bir başka büyük futbolcuya, Ruud Gullit&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}