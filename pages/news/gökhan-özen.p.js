import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gökhan Özen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gökhan Özen"/>
        <meta name="description" content="Trending News about Gökhan Özen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gökhan Özen</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/6373bbf4c8c373201813c08b" alt="Gökhan Özen"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/magazin/gokhan-ozen-yillara-meydan-okuyor1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gökhan Özen yıllara meydan okuyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQo2qL1PBcyxHENRhuthfx2gOD9S4FQ0ibVMHD1L6KkUcZyX1Ufo62_nELSla6n_4Vt-A5OKJlC" alt="Gökhan Özen yıllara meydan okuyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gökhan Özen, bir süredir gözlerden bir hayat sürüyor. Yurt dışında yaşayan ünlü şarkıcı, adeta yıllara meydan okuyor.</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/magazin/gokhan-ozen-son-hali-ile-gundem-oldu-yillara-meydan-okuyor/haber-1319739'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gökhan Özen son hali ile gündem oldu! Yıllara meydan okuyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkel_OozTS2CdtdB6IzTsoN2vuCRrWCtUWHu1YBd3X0JKVzSZzs50id7VD2NKVhq2dtft90-Eo" alt="Gökhan Özen son hali ile gündem oldu! Yıllara meydan okuyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2000&#39;li yılların en popüler isimlerinden olan Gökhan Özen, bir süredir ekranlardan uzak bir yaşam sürüyor. Yurt dışına yerleşen Gökhan Özen&#39;in son hali&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/turkiyeyi-terk-etmisti-gokhan-ozenin-son-hali-gundem-oldu-597678h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gökhan Özen&#39;in son hali gündem oldu. Türkiye&#39;yi terk etmişti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8GEOBWn88hjkkuORmylkkSLaFpNTuxcFJaCbJBe5IzRqGmrUeJnB7ohKRdD95NWGHHXekWT24" alt="Gökhan Özen&#39;in son hali gündem oldu. Türkiye&#39;yi terk etmişti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ülkeyi sessiz sedasız terk eden Gökhan Özen, 7 yıldır Los Angeles&#39;ta yaşıyor. 2010 yılında Selen Sevigen ile evlenen Gökhan Özen, kızları Ada ve Derin&#39;i görmek&nbsp;...</p></div>
            </div>
        </a><a href='https://haberlerankara.com/foto/12548258/sarkici-gokhan-ozeni-goren-taniyamiyor-yillar-sana-ne-yapti-boyle-genc-kizlarin-buyuk-askiydi-gorenlerin-nutku-tutuldu-neler-oluyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Şarkıcı Gökhan Özen&#39;i Gören Tanıyamıyor! “Yıllar Sana Ne Yaptı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeIVP9RofON6OO4jelwg4ESqBq0nni98Mij9MndeIOcMmP6BvWH4x0_l1fmyC4Rd_07XuapF5B" alt="Şarkıcı Gökhan Özen&#39;i Gören Tanıyamıyor! “Yıllar Sana Ne Yaptı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Öte yandan Yasak Elma dizisinin yayından kaldırılıp kaldırılmadığı da bu açıklama sonrası netleşti. Peki, Yasak Elma dizisi yayından mı kaldırıldı? Yasak Elma&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/video/magazin-videolari/gokhan-ozenin-son-halini-gorenler-sasirdi-iste-42-yasindaki-unlu-sarkicinin-yeni-hali'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gökhan Özen&#39;in son halini görenler şaşırdı! İşte 42 yaşındaki ünlü ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfsEb5oyQOgZsAs-1D43JYIsr3VwkbPQjcw6vR40pBlbTamHXa7GzABNFaeQZhmf3NYx8wW2rF1g" alt="Gökhan Özen&#39;in son halini görenler şaşırdı! İşte 42 yaşındaki ünlü ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2000&#39;li yılların altın çocuklarından biriydi Gökhan Özen. Aramazsan Arama, Benim İçin N&#39;apardın, Civciv, Dayanamam gibi şarkılarla hafızalara kazınmış,...</p></div>
            </div>
        </a><a href='https://www.bursadabugun.com/haber/gokhan-ozen-in-son-hali-1561494.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gökhan Özen&#39;in son hali</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGpLad2tctsaiiQf9W6NBt8UQEL1GtBJpcP6q2DyQPXhaLlZAffTtKd8cPBSl5_hOJJl-qQWt9" alt="Gökhan Özen&#39;in son hali" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2010 yılında Selen Sevigen ile evlenen Gökhan Özen, kızları Ada ve Derin&#39;i görmek için zaman zaman Türkiye&#39;ye geliyor. Gökhan Özen ve Selen Sevigen çifti, 2016&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}