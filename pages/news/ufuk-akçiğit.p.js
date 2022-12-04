import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ufuk Akçiğit</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ufuk Akçiğit"/>
        <meta name="description" content="Trending News about Ufuk Akçiğit" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ufuk Akçiğit</h1>
            <Image width={800} height={500} src="https://im.haberturk.com/2022/12/03/ver1670106013/3544385_1200x627.jpg" alt="Ufuk Akçiğit"/>
            <h3>Recent News</h3>
            <a href='https://www.haberturk.com/ufuk-akcigit-kimdir-kac-yasinda-ve-ne-is-yapiyor-ufuk-akcigit-hayati-ve-kariyeri-3544385'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ufuk Akçiğit kimdir, kaç yaşında ve mesleği nedir? Ufuk Akçiğit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhQaiSMo4ugiON2soTnmc456oMis3gdypUQDjPesMcF5SS8tdwPsM69fFYNUX7oKGR3J4PY1ox" alt="Ufuk Akçiğit kimdir, kaç yaşında ve mesleği nedir? Ufuk Akçiğit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP lideri Kemal Kılıçdaroğlu &quot;İkinci Yüzyıla Çağrı&quot; başlıklı vizyon belgesinin tanıtım toplantısında uluslararası alanda tanınan ekonomi profesörleri de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.akilligundem.com/prof-dr-ufuk-akcigit-kimdir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prof. Dr. Ufuk Akçiğit kimdir? – Akıllı Gündem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkA6cP9M_9V2tqMbymgZ9hMBCSIs2nzbSJBm3uc7PskyXqzobV2i3UAeEgfNaACwz5hqoh7i7b" alt="Prof. Dr. Ufuk Akçiğit kimdir? – Akıllı Gündem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prof. Dr. Ufuk Akçiğit , IMF, OECD, Türkiye Cumhuriyet Merkez Bankası ve Danimarka Bilim ve Eğitim Bakanlığı&#39;na danışmanlık hizmetleri vermiştir. Prof.</p></div>
            </div>
        </a><a href='https://www.sonhaberler.com/ufuk-akcigit-kimdir-nerelidir-prof-dr-ufuk-akcigit-biyografisi-haber-887623'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ufuk Akçiğit kimdir, nerelidir? Prof. Dr. Ufuk Akçiğit Biyografisi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTd8Ci6wqJVHDnInLYjIe4T_DFtc6zcsDl07K9wxBz75g0HNpDUrsoDhFsamWh1pykJ3FNQJIFj" alt="Ufuk Akçiğit kimdir, nerelidir? Prof. Dr. Ufuk Akçiğit Biyografisi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ufuk Akçiğit adı CHP tarafından düzenlenen &quot;İkinci Yüzyıla Çağrı&quot; programında sunum yapan ekonomistler listesinde yer alınca tekrar gündem oldu.</p></div>
            </div>
        </a><a href='https://www.kayseritempo.org/chpnin-ekonomi-a-takimi-ufuk-akcigit-kimdir-76447.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CHP&#39;nin Ekonomi A Takımı | Ufuk Akçiğit kimdir?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEuTQG9ZsXzWhSXH9-bY8m6NhcXxaQFcEL94mglXutxxVsObuJz0S1E4DGBwP3UrKnv0Ku6UW9" alt="CHP&#39;nin Ekonomi A Takımı | Ufuk Akçiğit kimdir?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Halen Chicago Üniversitesi&#39;nde iktisat bölümünde ders veriyor. Ufuk Akçiğit FED, TCMB, IMF, Danimarka Sanayi ve Teknoloji Bakanlığı&#39;na danışmanlık yapıyor.</p></div>
            </div>
        </a>
        </Template></>;
}