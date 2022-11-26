import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mamak Belediye Başkanı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mamak Belediye Başkanı"/>
        <meta name="description" content="Trending News about Mamak Belediye Başkanı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mamak Belediye Başkanı</h1>
            <Image width={800} height={500} src="https://img-s1.onedio.com/id-638080b09425615b19f5e553/rev-0/raw/s-5acaa7aa2f4d57489db9cff1b604511e738ef1a2.jpg" alt="Mamak Belediye Başkanı"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/mamak-belediye-baskani-murat-kose-kimdir-kac-yasinda-nereli-murat-kose-hangi-partiden-1109729'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mamak Belediye Başkanı Murat Köse Kimdir, Kaç Yaşında, Nereli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSYiI1DY_zk_X4056T15TU8uEDNpZslUZ0fNP7WFUa_ai78yOXFBIxn6pvrYWsTrlrhd2LlgFZFQ" alt="Mamak Belediye Başkanı Murat Köse Kimdir, Kaç Yaşında, Nereli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2015 senesinde yapılan genel seçimlerine AK Parti&#39;den Ankara milletvekili adayı olarak katıldı. Bir sene ABD Chicago, Illinois Üniversitesi&#39;nin sosyoloji&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/mamak-belediye-baskani-murat-kose-kim-nereli-kac-yasinda-daha-once-hangi-gorevlerde-bulundu-3541851'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mamak Belediye Başkanı Murat Köse kimdir, nereli, kaç yaşında ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUXfdGuRj0NhcC_9D_dlKCRAs0uUv0Io-DIVPvamudFHaYqmW-0-jOyouTZ5Au8aZ-6K87TUaL" alt="Mamak Belediye Başkanı Murat Köse kimdir, nereli, kaç yaşında ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı Recep Tayyip Erdoğan tarafından Mamak Belediyesi başkan adayı olarak gösterilen Murat Köse, 2019 yılından bu yana görevini sürdürüyor.</p></div>
            </div>
        </a><a href='https://www.yozgatcamlik.com/ankara/ankara-mamak-belediye-baskani-murat-kose-genclerin-dusuncelerini-h361372.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ankara Mamak Belediye Başkanı Murat Köse: Gençlerin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpEL3mvIleAGPT4QJh1WoRqF6OXqmxUXHZhqlciOG6PCBOl_bhu_oJT-g_2rf65HOj3lRn_94B3g" alt="Ankara Mamak Belediye Başkanı Murat Köse: Gençlerin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gençleri ihmal etmeyen, onları dinleyen, görüşlerine önem veren Başkan Murat Köse, gençlerle Üreğil Millet Bahçesi&#39;nde kahvaltı programında buluştu.</p></div>
            </div>
        </a><a href='https://haberlerankara.com/haber/12597425/ankara-haber-baskan-murat-kose-genclerle-bulustu-genclere-hediye-internet-karti-dagitti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ankara Haber; Başkan Murat Köse Gençlerle Buluştu! Gençlere ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTAW_GUlubIocVFHcIyOJKaxQJsfoe-vK-swv3fFtdBHfEOKUHrVRttQXzkBXAj3Xq5HVBXTs1" alt="Ankara Haber; Başkan Murat Köse Gençlerle Buluştu! Gençlere ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mamak Belediye Başkanı Murat Köse, hayata geçirdiği vizyon projelerle özellikle gençlerin gönlünde taht kurdu. İşte Haber Detayı ve Resimler...</p></div>
            </div>
        </a>
        </Template></>;
}