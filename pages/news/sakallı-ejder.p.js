import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sakallı ejder</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sakallı ejder"/>
        <meta name="description" content="Trending News about Sakallı ejder" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sakallı ejder</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/6388ffd24e3fe01d0059b5fb.jpg" alt="Sakallı ejder"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/gundem/aksarayda-1-kraliyet-pitonu-ile-10-sakalli-ejder-ele-gecirildi-42180621'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aksaray&#39;da 1 kraliyet pitonu ile 10 sakallı ejder ele geçirildi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbQ4aqUhKb4OwcT3Vh7L0Ot6uidMI8Q0TEa1w75y-oN9awdxPHvlOenHATB0ff3-xnn6-6i-Ju" alt="Aksaray&#39;da 1 kraliyet pitonu ile 10 sakallı ejder ele geçirildi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İl Emniyet Müdürlüğü Kaçakçılık ve Organize Suçlarla Mücadele Şubesi ile Doğa Koruma ve Milli Parklar Müdürlüğü ekipleri, Kurtuluş Mahallesi&#39;nde S.A.&#39;nın (45)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/turkiye/evde-piton-yilani-kaplumbaga-ve-sakalli-ejder-bulundu-727674.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evde piton yılanı, kaplumbağa ve sakallı ejder bulundu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhMyHetug_aWDGcLTUQBjSi6iIM56laGcr-yLsXAQS-JRdhJ6FVzqYYuiQePh8W4UKKx7cyE76" alt="Evde piton yılanı, kaplumbağa ve sakallı ejder bulundu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aksaray&#39;da bir evde ülkeye yasa dışı yollardan sokulan kraliyet piton yılanı, yumuşak kabuklu Çin kaplumbağası, sakallı ejder ile 9 yavrusu ele geçirildi.</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/yasam/2022/12/01/turkiyede-goruldu-beslemesi-yasak-kraliyet-pitonu-ve-sakalli-ejder-alarmi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye&#39;de görüldü! Beslemesi yasak! Kraliyet pitonu ve sakallı ejder ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTov3TiY892DwloevrYZGVcsVYLsn95bDaEKkk3__g5PB7e5ssc36rUpA__wX4gK6SYXEL6OnpY" alt="Türkiye&#39;de görüldü! Beslemesi yasak! Kraliyet pitonu ve sakallı ejder ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aksaray&#39;da bir evde ülkeye yasa dışı yollardan sokulan kraliyet piton yılanı, yumuşak kabuklu Çin kaplumbağası, sakallı ejder ile 9 yavrusu ele geçirildi.</p></div>
            </div>
        </a><a href='https://haberdairesi.com/guncel/ekiplerin-baskininda-kraliyet-pitonu-ve-10-sakalli-ejder-ele-gecirildi-85245h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ekiplerin baskınında kraliyet pitonu ve 10 sakallı ejder ele geçirildi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGDA3_L5Mi-lc4BJnPPmBEs7mpeB3XhSt5qF3Q9t3hPw4KagzCHUsGWXwZkD3X_MEW1ZM--z2o" alt="Ekiplerin baskınında kraliyet pitonu ve 10 sakallı ejder ele geçirildi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aksaray&#39;da bir evde ülkeye yasa dışı yollardan sokulan kraliyet piton yılanı, yumuşak kabuklu Çin kaplumbağası, sakallı ejder ile 9 yavrusu ele geçirildi.</p></div>
            </div>
        </a><a href='https://www.mynet.com/evden-cikanlar-pes-dedirtti-kraliyet-pitonu-sakalli-ejder-kaplumbaga-110107075642'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evden çıkanlar pes dedirtti! Kraliyet pitonu, sakallı ejder, kaplumbağa...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDGjgKiLeUpYYnzPMLQRHINVGN4ydcIwXEvSdOdpC8eit6dFfoiKTW1HAr_4pnlXkfkYiBmffK" alt="Evden çıkanlar pes dedirtti! Kraliyet pitonu, sakallı ejder, kaplumbağa..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aksaray&#39;da bir evden çıkan sürüngen hayvanlar şaşkına çevirdi. Gelen ihbar üzerine harekete geçen polis ekipleri, S.A.&#39;nın evine operasyon düzenledi.</p></div>
            </div>
        </a><a href='https://www.normhaber.com/beslemesi-yasak-kraliyet-pitonu-ve-sakalli-ejder-bulundu-413581'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beslemesi yasak kraliyet pitonu ve sakallı ejder bulundu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFjq4uGyrUyJeF4Q97JieCl9ZSXP2z9_BOGQiW1rWerAffnhJUfHZf_QxzVtMtDlPvwfS5lDhU" alt="Beslemesi yasak kraliyet pitonu ve sakallı ejder bulundu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aksaray&#39;da, beslemesi ve ticaretinin yapılması yasak olan 1 kraliyet pitonu, 1 sakallı ejder ve 9 yavrusu ile 1 kaplumbağa ele geçirildi.</p></div>
            </div>
        </a><a href='https://www.tgrthaber.com.tr/gundem/aksarayda-beslemesi-yasak-olan-10-sakalli-ejder-ele-gecirildi-2858505'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aksaray&#39;da beslemesi yasak olan 1 kraliyet pitonu ile 10 sakallı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbt86Z8cCmapSu8wvkbteSjdfM-tMrRL_1xSqL4UPUqA5i57aGEzf3ZUpLi5BZ5y0sBoIcvVD5" alt="Aksaray&#39;da beslemesi yasak olan 1 kraliyet pitonu ile 10 sakallı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aksaray&#39;da polis ekiplerinin yaptığı operasyonla bir evde, beslemesi yasak kraliyet piton yılanı, yumuşak kabuklu Çin kaplumbağası, sakallı ejder ile 9&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}