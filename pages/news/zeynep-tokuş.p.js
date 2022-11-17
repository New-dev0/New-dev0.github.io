import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zeynep Tokuş</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zeynep Tokuş"/>
        <meta name="description" content="Trending News about Zeynep Tokuş" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zeynep Tokuş</h1>
            <Image width={800} height={500} src="https://i2.milimaj.com/i/milliyet/75/0x0/6374829e86b24a5afc1ec821.gif" alt="Zeynep Tokuş"/>
            <h3>Recent News</h3>
            <a href='https://www.milliyet.com.tr/cadde/zeynep-tokus-cocuklariyla-dogum-gunu-kutladi-6857964'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeynep Tokuş çocuklarıyla doğum günü kutladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBN5PP6txmKhVHPyll9nXDXwnG_O8fQod_jFB1-68v80GXFWgrrRE1CYE_VOXlyYRTjtVMqbuJ" alt="Zeynep Tokuş çocuklarıyla doğum günü kutladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magazin - Uzun süre önce oyunculuğu bırakan ve yoga eğitmenliğine başlayan Zeynep Tokuş, özel hayatına dair paylaşımlarını sürdürüyor.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/magazin/deli-yurekle-hafizalara-kazinan-zeynep-tokus-oglunun-dogum-gununu-kutladi-zeynep-tokusun-cocuklarini-gorenler-sasti-kaldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deli Yürek&#39;le hafızalara kazınan Zeynep Tokuş oğlunun doğum ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNixHSZXkc8NEYkMAvy2cwdgWm9nFmYb2t9zs5Cc0npiFdm8IEEcv10WrnaRQqjUdbvg9s8bty" alt="Deli Yürek&#39;le hafızalara kazınan Zeynep Tokuş oğlunun doğum ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deli Yürek dizisinde Kenan İmirzalıoğlu ile geniş kitlelere ulaşan ünlü oyuncu Zeynep Tokuş, oyunculuğu bıraktı ve yoga eğitmenliğine başladı.</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/zeynep-tokus-kimdir-kac-yasinda-nereli-meslegi-15431476-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeynep Tokuş kimdir? Kaç yaşında, nereli, mesleği ne, hangi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWnwKJ4n5xk0LEFaWCethNCrGcEOjVZmqaK1jqxLnDqXrylFd-_U7ata1jPiwS4_zUMd-ovxvc" alt="Zeynep Tokuş kimdir? Kaç yaşında, nereli, mesleği ne, hangi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zeynep Tokuş kimdir? Kaç yaşında, nereli, mesleği ne, hangi dizilerde rol aldı? Zeynep Tokuş&#39;un hayatı ve biyografisi! 16 Kasım 2022 00:25. Gündem Haberleri.</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/-deli-yurek-dizisi-ile-hafizalarda-yer-edinen-unlu-isim-sosyal-medya-paylasimlari-ile-gundeme-gelmeye-devam-ediyor-598160h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeynep Tokuş&#39;un çocukları ile paylaşımı olay oldu. Görenler ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfBT-uIJeR3D19LaMvfTjzpV_yWCAut7v19BUxU0b9Z2PAr3sJ081bdjRolj6FSAVGttY6xilf" alt="Zeynep Tokuş&#39;un çocukları ile paylaşımı olay oldu. Görenler ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bir döneme damgasını vuran Deli Yürek dizisi ile hafızalarda yer edinen Zeynep Tokuş, sosyal medya paylaşımları ile gündeme gelmeye devam ediyor.</p></div>
            </div>
        </a><a href='https://www.turkiyegazetesi.com.tr/fotogaleri/deli-yurek-ile-hafizalara-kazinan-zeynep-tokus-cocuklariyla-fotograf-paylasti-31114'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deli Yürek ile hafızalara kazınan Zeynep Tokuş çocuklarıyla fotoğraf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVd3eOPbDJD3X8LN4G5QBSXGYb02LVoV7yXSCo_8XFChPLvOg71OvxczunMxvjVJ_6H4w3YfUH" alt="Deli Yürek ile hafızalara kazınan Zeynep Tokuş çocuklarıyla fotoğraf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1999-2002 yılları arasında yayınlanan Deli Yürek dizisinde canlandırdığı Zeynep karakteri ile hafızalara kazınan Zeynep Tokuş, sosyal medyada paylaştığı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yasemin.com/magazin/haber/2993748-deli-yurek-dizisinin-yildizi-zeynep-tokus-degisimiyle-dudak-ucuklatti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deli Yürek dizisinin yıldızı Zeynep Tokuş değişimiyle dudak uçuklattı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKj5jfnGWXkGuVet-LJDw12YIRfawKtIAwdMsLpITnFeqFEULwvj4oBBUTSLOZwVZIwOz4AHeo" alt="Deli Yürek dizisinin yıldızı Zeynep Tokuş değişimiyle dudak uçuklattı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deli Yürek dizisinde rol arkadaşı Kenan İmirzalıoğlu ile hafızalara kazınan Zeynep Tokuş, oyunculuğu bırakarak gözlerden uzak yaşam sürmeye başladı.</p></div>
            </div>
        </a>
        </Template></>;
}