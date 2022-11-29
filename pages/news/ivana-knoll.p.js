import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ivana Knoll</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ivana Knoll"/>
        <meta name="description" content="Trending News about Ivana Knoll" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ivana Knoll</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/28/2006944/kapak_132809.jpg" alt="Ivana Knoll"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/ivana-knoll-dunya-kupasinda-giydigi-kiyafetler-sebebiyle-hapis-cezasiyla-karsi-karsiya-2006944'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivana Knoll, Dünya Kupası&#39;nda giydiği kıyafetler sebebiyle hapis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_4nU3UT2NJmX5y50KAUnk0B_S6MSOQquCrF7aY64G8bPcfyJOFuoC-JB0DF7VAxA5IAW0jNQt" alt="Ivana Knoll, Dünya Kupası&#39;nda giydiği kıyafetler sebebiyle hapis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen 2022 FIFA Dünya Kupası&#39;nda flaş bir gelişme yaşandı. Hırvatistanlı ünlü model Ivana Knoll, stadyumda giydiği kıyafetler yüzünden hapis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/ivana-knoll-kimdir-kac-yasinda-nereli-meslegi-15459516-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivana Knoll kimdir? Kaç yaşında, nereli, mesleği ne? Model İvana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQe2LosNC1oxg-gp1J0XLgspHy1ul4k1B5AMLuq6_IHguwqF8kC2AHqnA8E348CP3ZbrpqZ8GAh" alt="Ivana Knoll kimdir? Kaç yaşında, nereli, mesleği ne? Model İvana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vatandaşlar tarafından merak edilen isimler arasında ünlü model Ivana Knoll geliyor. Peki, Ivana Knoll kimdir, aslen nereli, mesleği ne, kaç yaşında,&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/2022-dunya-kupasi-nda-guzelligiyle-tribunleri-atese-veren-hirvat-model-ivana-knoll-katar-in-ilgi-odagi-oldu-1110369'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 Dünya Kupası&#39;nda Güzelliğiyle Tribünleri Ateşe Veren Hırvat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7cDTuQJLNdMQr4v5mKGL_4quPzGTTtcujg4kxUobtSMPpcqi8Y_M5u8GlWmcJeu7yJsRDC4A-" alt="2022 Dünya Kupası&#39;nda Güzelliğiyle Tribünleri Ateşe Veren Hırvat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hırvatistan&#39;ı 2014 ve 2018 Dünya Kupası&#39;nda destekleyen Ivana Knoll, Katar&#39;daki 2022 Dünya Kupası&#39;nda da tribünlerdeki yerini aldı. Hırvatistan ile Katar&#39;a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/sporarena/galeri-hirvatistanin-unlu-modeli-ivana-knoll-dunya-kupasinda-giydigi-kiyafet-yuzunden-hapse-girebilir-42178429'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hırvatistan&#39;ın ünlü modeli Ivana Knoll, Dünya Kupası&#39;nda giydiği ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_HBDsQcrklpBHGrZtlntD0O9PkuH--RFqnKidc7ZHQ5tz99eGFxSbob0thc17-CJJHZv-dtcp" alt="Hırvatistan&#39;ın ünlü modeli Ivana Knoll, Dünya Kupası&#39;nda giydiği ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HAPİS CEZASI ALABİLİR ... Goal İngiltere&#39;nin haberine göre; Knoll giydiği dekolte kıyafetler nedeniyle hapis cezası alabilir. ... Katar yasaları, kadınların&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/dunya-kupasi-tribunlerinde-giydigi-kiyafetiyle-gundem-olmustu-hirvat-mankenin-basi-fena-halde-derde-girdi-3542737-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası tribünlerinde giydiği kıyafetiyle gündem olmuştu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGrgNLtINzHRANxEg2C2QwnEs2WV4BDWA2c_No5ND8pPolvyaXg0n72hxDnG6XUH3LHh9euGc-" alt="Dünya Kupası tribünlerinde giydiği kıyafetiyle gündem olmuştu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;ın Dünya Kupası için getirdiği yasaklar gündem olmuştu. Getirilen yasakların arasında açık giyinmekte vardı fakat Hırvat model Ivana Knoll bu yasağı&nbsp;...</p></div>
            </div>
        </a><a href='https://tele1.com.tr/hirvat-model-dunya-kupasinda-giydigi-kiyafetler-sebebiyle-hapis-cezasi-alabilir-745145/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hırvat model Dünya Kupası&#39;nda giydiği kıyafetler sebebiyle hapis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4TBYZXNdVVAs8QsT0eOysZOv4zbJgK9rOSBWIfT49Qo_L5-gkOgvZLm8tmMZlQx2HY_fXjm9N" alt="Hırvat model Dünya Kupası&#39;nda giydiği kıyafetler sebebiyle hapis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Dünya Kupası&#39;nın düzenlediği Katar&#39;da gerici yasaklar hız kesmeden devam ediyor. Stadyumlarda insanların içki içmesini...</p></div>
            </div>
        </a>
        </Template></>;
}