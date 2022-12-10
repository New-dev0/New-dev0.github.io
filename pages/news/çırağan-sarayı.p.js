import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Çırağan Sarayı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Çırağan Sarayı"/>
        <meta name="description" content="Trending News about Çırağan Sarayı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Çırağan Sarayı</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/12/9/2010322/kapak_113433.jpg" alt="Çırağan Sarayı"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/turkiye/son-dakika-ciragan-sarayinda-yangin-2010322'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika... Çırağan Sarayı&#39;nda yangın!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTboOLJhFwQnFaEVYVKGtkNmsbvSraSZXfYw340J7IsAjzIKiA0e2KWnAl1T9qGLIsFELE-icK7" alt="Son dakika... Çırağan Sarayı&#39;nda yangın!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi... İstanbul Beşiktaş&#39;ta bulunan Çırağan Sarayı&#39;nın otel bölümünün 4. katında yangın çıktı. Yangından etkilenen 3 işçi hastaneye kaldırıldı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/son-dakika-ciragan-sarayinda-yangin-cikti-42184744'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika... Çırağan Sarayı&#39;nın otel bölümünde yangın</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGZqn4N-7TfmxEmBvCoL2NQLJiSgs2cBjF7xTVD8-gTR-X0KAWF197zKS_e2SiLqwS-vzZeNfA" alt="Son dakika... Çırağan Sarayı&#39;nın otel bölümünde yangın" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yangına müdahale için çok sayıda itfaiye ve sağlık ekibi sevk edildi. Otelde kalanlar tahliye edildi, otelin bulunduğu cadde trafiğe kapatıldı. Yangın,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/turkiye/ciragan-sarayi-nerede-ne-zaman-ve-kim-tarafindan-yapildi-ciragan-sarayinin-tarihcesi,UBUJIVA0pkqsPdXkDiIQdA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çırağan Sarayı nerede, ne zaman ve kim tarafından yapıldı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSkarm-EwretQYuON9uZqZEV2QT-g-bOujfD26xfsludou8ExRm4MI30zoRi7y_ZZbe1priwVx" alt="Çırağan Sarayı nerede, ne zaman ve kim tarafından yapıldı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ÇIRAĞAN SARAYI NEREDE? Çırağan Sarayı, Türkiye&#39;nin İstanbul ilinin Beşiktaş ilçesinde, Çırağan Caddesi üzerinde bulunan tarihi saraydır. Çırağan&#39;ın bugün&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/son-dakika-haberi-ciragan-sarayi-nda-yangin-3545923'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: Çırağan Sarayı&#39;nda yangın! Cadde trafiğe kapatıldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAhV-ZuK-HEXMPiK6Ff-LZE_gGQSoB2V8hZhpJBWG1r8eBKKi-Jxu57jVG-gkOLk752qGVo6Wg" alt="Son dakika: Çırağan Sarayı&#39;nda yangın! Cadde trafiğe kapatıldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi! Çırağan Sarayı&#39;nın otel bölümünde yangın çıktı. Yangına müdahale için çok sayıda itfaiye ekibi sevk edildi. Yangın itfaiye ekiplerinin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/son-dakika-ciragan-sarayinin-otel-bolumunde-yangin-3894706'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika... Çırağan Sarayı&#39;nın otel bölümünde yangın</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrell2AyoKIAx5WazJJBclFDvoNDIgJzYJT4rhhBEMo6eXeUzc1ORxkJvg3xfIZI16BeIdnXgJ" alt="Son dakika... Çırağan Sarayı&#39;nın otel bölümünde yangın" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çırağan Caddesi&#39;ndeki 5 katlı Çırağan Palace Kempinski İstanbul&#39;un üst katlarında tadilat çalışmaları sırasında yangın çıktı. İhbar üzerine bölgeye çok sayıda&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/ciragan-sarayi-kimin-tarihi-18-yuzyila-lale-devrine-dayanan-ciragan-sarayi-kimlere-ev-sahipligi-yapti-1113067'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çırağan Sarayı Kimin? Tarihi 18. Yüzyıla Lale Devrine Dayanan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFBvp4-sbK4OAk-U57r5gA1duNCSqO_tCKjTeQbyYf6-oRzZYrDK3fnvj6rNPzhjZHcFV6I0ib" alt="Çırağan Sarayı Kimin? Tarihi 18. Yüzyıla Lale Devrine Dayanan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çırağan Sarayı eşsiz mimarisi, tarihi ve güzelliği ile şehrin en önemli sarayları arasında yer alıyor. Çırağan Sarayı, oteli ve tarihi hakkında ...</p></div>
            </div>
        </a>
        </Template></>;
}