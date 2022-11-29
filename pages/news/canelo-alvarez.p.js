import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Canelo Alvarez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Canelo Alvarez"/>
        <meta name="description" content="Trending News about Canelo Alvarez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Canelo Alvarez</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/28/2006925/kapak_130007.jpg" alt="Canelo Alvarez"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/meksikali-boksor-canelo-alvarezden-messiye-tehdit-gibi-sozler-karsima-cikmasin-2006925'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meksikalı boksör Canelo Alvarez&#39;den Messi&#39;ye tehdit gibi sözler ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdZD_S75ba5aFOEY4L4Kry09-IZPtujOA41aAfY1XpcJlsTaxcZylse7cHmK1Plu4LmoNSRrDz" alt="Meksikalı boksör Canelo Alvarez&#39;den Messi&#39;ye tehdit gibi sözler ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası&#39;nda C Grubu ikinci maçında Arjantin, Meksika&#39;yı 2-0 mağlup etti. Meksikalı boksör Canelo Alvarez, karşılaşmanın ardından soyunma&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/galeri/spor/dunya-kupasinda-messi-ve-arkadaslarinin-sevinci-ortalik-karistirdi-canelo-alvarezden-tehdit-gibi-sozler-karsima-cikmasin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası&#39;nda Messi ve arkadaşlarının sevinci ortalık karıştırdı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSZGa10iYjqY30uohl0ORjzJjUAaptbZB_ezLGjHmmeg4aUmdlG49g7TTdy5rRJDay61upBa5seg" alt="Dünya Kupası&#39;nda Messi ve arkadaşlarının sevinci ortalık karıştırdı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi&#39;nin istemeden de olsa Meksika bayrağını ittiği görüldü. Bu sahne, Meksika&#39;nın ünlü boksörü Canelo Alvarez&#39;i de bir hayli sinirlendirdi. Alvarez, yaptığı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/spor/futbol/meksikali-boksor-canelo-alvarezden-lionel-messiye-gozdagi-2588716'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meksikalı boksör Canelo Alvarez&#39;den Lionel Messi&#39;ye gözdağı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ83NvFyAzTs4c-uyZTLCJMT3N9qrk3OexJjNlpeqakbFaX-Of6LGwAmc1QQwifSvGwEENh-fX3" alt="Meksikalı boksör Canelo Alvarez&#39;den Lionel Messi&#39;ye gözdağı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika Futbol Haberleri - Arjantin&#39;in Meksika&#39;yı 2-0 yendiği Dünya Kupası grup maçının ardından Meksika cephesinde ilginç bir iddia var.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/messi-meksika-formasini-yere-koydu-boksor-canelo-alvarez-cildirdi-onu-bulmamam-icin-tanri-ya-dua-etsin-1110392'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi Meksika Formasını Yere Koydu, Boksör Canelo Alvarez ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTx3dHa0x1WohqavwHoIt6HGr5bBeh9UQe5LzcJqEZUnN94CkPfQcfxhGm92Vbhlx2xo1oqmUZG" alt="Messi Meksika Formasını Yere Koydu, Boksör Canelo Alvarez ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arjantin&#39;in Messi&#39;nin golü ve asistiyle 2-0 yenmeyi başardığı Meksika maçının yankıları devam ediyor. Karşılaşmanın ardından formasını Meksikalı futbolcuyla&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/tr/haber/lionel-messi-nin-basi-meksikali-boksor-saul-canelo-alvarez-ile-belaya-girdi/blt16bb71d494372913'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi&#39;nin başı Meksikalı boksör Saul &#39;Canelo&#39; Alvarez ile ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThzBgCL4xYearTm9nSBWkqf5755xByBdUJ56OVyObcoPxCOkfa6HVpHii-xIDpggsREo7O8nrm" alt="Lionel Messi&#39;nin başı Meksikalı boksör Saul &#39;Canelo&#39; Alvarez ile ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Efsane futbolcunun soyunma odasındaki görüntüsü Meksikalı boksör Saul &#39;Canelo&#39; Alvarez&#39;i kızdırdı. Arjantin&#39;in Dünya Kupası&#39;ndaki en büyük umudu olan Lionel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/meksikali-boksor-canelo-alvarez-messi-ye-sinirlendi-3542668-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meksikalı boksör Canelo Alvarez, Messi&#39;ye sinirlendi! - Spor haberleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUpLlXpx2BkyePA6JK2ni-OuXzNe7mVAITa4aMHtMuuLYGiSDMgkW2E68LWTjelDpLJUz6RU3o" alt="Meksikalı boksör Canelo Alvarez, Messi&#39;ye sinirlendi! - Spor haberleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arjantin, 2022 Dünya Kupası&#39;ndaki ilk galibiyetini Meksika karşısında alırken Meksikalı boksör Canelo Alvarez, Messi&#39;ye sinirlendi!</p></div>
            </div>
        </a><a href='https://www.aspor.com.tr/dunya-kupasi-2022/haberler/2022/11/28/canelo-alvarezden-lionel-messiye-tehdit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Canelo Alvarez&#39;den Lionel Messi&#39;ye tehdit!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQD8JZtkhhNkqjc-i4wTTTHOpvB1btwT6vlHvxXrE8_4GlWMQA7EgjkU1s3Nuz3-jR8Q-U_5aTo" alt="Canelo Alvarez&#39;den Lionel Messi&#39;ye tehdit!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika spor haberi: Dünyaca ünlü Meksikalı boksör Canelo Alvarez, Arjantin - Meksika maçı sonrası soyunma odasında Meksika formasına basan Lionel...</p></div>
            </div>
        </a>
        </Template></>;
}