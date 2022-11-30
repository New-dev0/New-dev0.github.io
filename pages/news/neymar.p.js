import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Neymar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Neymar"/>
        <meta name="description" content="Trending News about Neymar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Neymar</h1>
            <Image width={800} height={500} src="https://cdn.yenicaggazetesi.com.tr/news/2022/11/291120221701111563378.jpg" alt="Neymar"/>
            <h3>Recent News</h3>
            <a href='https://www.yenicaggazetesi.com.tr/herkes-onu-neymar-sandi-uyanik-garson-fifayi-ve-binlerce-insani-kandirdi-602645h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uyanık garson FIFA&#39;yı ve binlerce insanı kandırdı. Herkes onu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqZp_EbzKkCCsHWGMMVOXdCEslMag5pJwYv0NEXyfvWdkeOnuv73lbYPSkBQIVipbS2JZnJpUu" alt="Uyanık garson FIFA&#39;yı ve binlerce insanı kandırdı. Herkes onu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adı Eigon Oliveira. Brezilyalı fanatik bir taraftar. Rio de Jenario&#39;da garsonluk yapıyor. Ayrıca bir sosyal medya fenomeni, TikTok hesabınıda yarım&nbsp;...</p></div>
            </div>
        </a><a href='https://www.odatv4.com/spor/sahte-neymar-tribunleri-karistirdi-260308'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte Neymar tribünleri karıştırdı…</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMNMbvYAa2RHTV6RrBr6h3jqY0pm6rP3AdfoZZKBBOcml_m4n3kJq1W8E1HgpHxiI_c1RnnwG-" alt="Sahte Neymar tribünleri karıştırdı…" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da Dünya Kupası devam ederken Brezilya - İsviçre maçı sırasında ilginç anlar yaşandı. Bir anda hareketlenen tribünlerde yüzlerce kişi Neymar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/video/tv/izle/cakma-neymar-tribunu-karistirdi/788645'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Çakma&#39; Neymar tribünü karıştırdı | Video</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwuOnXIJp1nFgTSAjl0gZpxdZGe6dFt7PIGOQop6rs-qUWxNrvhxBuMrx_r1GTawjSSDv7PSLq" alt="&#39;Çakma&#39; Neymar tribünü karıştırdı | Video" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DÜNYA KUPASI, ADINA YARAŞIR ŞEKİLDE, RENKLİ GÖRÜNTÜLERLE DEVAM EDİYOR. BREZİLYA-İSVİÇRE MAÇI SIRASINDA NEYMAR&#39;A BENZEYEN BİR KİŞİ TRİBÜNÜ KARIŞTIRDI.</p></div>
            </div>
        </a><a href='https://haberglobal.com.tr/spor/sahte-neymarin-tribunu-karistirdigi-anlar-sosyal-medyada-gundem-oldu-216326'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte Neymar&#39;ın tribünü karıştırdığı anlar sosyal medyada gündem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_9_H4FezvY7VKxUSXnaS-otcIepb8CGOmrSx0Tzz8FkwVv8QuZYj0laiRyYTMdG3zNtBuMmtU" alt="Sahte Neymar&#39;ın tribünü karıştırdığı anlar sosyal medyada gündem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da Dünya Kupası devam ederken, maç esnasında bir anda Neymar&#39;a olan benzerliği ile dikkat çeken bir kişi seyircilerin arasına karıştı.</p></div>
            </div>
        </a>
        </Template></>;
}