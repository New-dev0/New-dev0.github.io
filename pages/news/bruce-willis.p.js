import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Willis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Willis"/>
        <meta name="description" content="Trending News about Bruce Willis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Willis</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/wIgAPrgZn0Cy6oRl9swnog.jpg?width=1080&mode=crop&scale=both" alt="Bruce Willis"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/galeri/n-life/magazin/afazi-teshisi-konan-ve-durumu-kotuye-giden-bruce-willis-ailesiyle-daha-cok-zaman-gecirmek-istiyor,UOgOsDGBRkKkKObuu-uCug'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Afazi teşhisi konan ve durumu kötüye giden Bruce Willis ailesiyle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSue9oSU9omA-w9omQWskk_tsbCZezdr2rZrRsxlPGk7rJVdTPjFcupetbPVlwXFmTa5UJa7p-q" alt="Afazi teşhisi konan ve durumu kötüye giden Bruce Willis ailesiyle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Afazi&#39; hastalığı nedeniyle oyunculuğu bırakma kararı alan ABD&#39;li oyuncu Bruce Willis, eski eşi Demi Moore ve kızları ile bir araya geldi.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/bruce-willis-ten-endiselendiren-haber-afazi-teshisi-konulan-bruce-willis-in-durumu-kotuye-gidiyor-1112851'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Willis&#39;ten Endişelendiren Haber: Afazi Teşhisi Konulan Bruce ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYVoAPVCRti8Q9VsDuzhXyI3PVfgd-wdhzinwrFrf0dCvk8lkeNkjSCQA36NP30yqOQAYm7fgV" alt="Bruce Willis&#39;ten Endişelendiren Haber: Afazi Teşhisi Konulan Bruce ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünyaca ünlü ABD&#39;li oyuncu Bruce Willis&#39;in sağlık durumuyla ilgili gelişmeler var. Bruce Willis&#39;i ailesi ve eski eşi Demi Moore hiç yalnız bırakmıyor.</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/dunya/afazi-teshisi-konmustu-bruce-willisin-hastaligi-ilerledi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Afazi teşhisi konmuştu: Bruce Willis&#39;in hastalığı ilerledi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7gxQ27jPCasQLL28WOH4X-pILtaiUrcVUSfcSjBEhi-FDSfp9A-bOMeitgmqnXmKytyGRHdme" alt="Afazi teşhisi konmuştu: Bruce Willis&#39;in hastalığı ilerledi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>80&#39;ler ve 90&#39;larda aksiyon sineması denince akla ilk onun ismi gelirdi. Tamamen kazıttığı saçları, kocaman mavi gözleri ve sıcacık gülümsemesiyle kadınların&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/bruce-willisden-hayranlarina-kotu-haber-dunyaca-unlu-aktorun-durumu-kotuye-gidiyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Willis&#39;den hayranlarına kötü haber! Dünyaca ünlü aktörün ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4zDInAU-A0vozYKXuSu6Yj9ifMLOddpUWN1ENtxLHUiiB-UUA6Go4zNivc7P3poFEGPWPloSl" alt="Bruce Willis&#39;den hayranlarına kötü haber! Dünyaca ünlü aktörün ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Geçtiğimiz Mart ayında afazi hastalığı teşhisi konulan Amerikalı oyuncu Bruce Willis, oyunculuğu bıraktığını ve emekli olduğunu açıklamıştı.</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/magazin/afazi-hastaligi-teshisi-konan-bruce-willisten-haber-var-2591192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Afazi&#39; hastalığı teşhisi konan Bruce Willis&#39;ten haber var</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRa6FxjsHAQhMYF4BKKn1iJw4vRlKXeyzhX4Htf-T-BcpIkIyzEz1EzV2thAIKuaZ-o-xtu_eOU" alt="&#39;Afazi&#39; hastalığı teşhisi konan Bruce Willis&#39;ten haber var" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magazin Haberleri - Zor Ölüm filminin ikonik yıldızı Bruce Willis&#39;e afazi teşhisi konmuştu. Beynin dil ve konuşmadan sorumlu bölgelerinin tümünde ya da bir&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/hayatim/yasam-haberleri/hastaligi-ilerleyen-bruce-willisin-durumu-kotuye-gidiyor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hastalığı ilerleyen Bruce Willis&#39;in durumu kötüye gidiyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0tbmQFOMb29Ab2y99lPQoEv2YVYVIcNdPpU4tKujAgeJ24P0Q3y2K-bL_3G7LsrAb_tpicECO" alt="Hastalığı ilerleyen Bruce Willis&#39;in durumu kötüye gidiyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Willis, şu anda çocukları, eşi Emma Heming Willis ve eski eşi Demi Moore ile birlikte Idaho&#39;da tatil yaparken Emma da tatillerinden fotoğrafları Instagram&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetevatan.com/galeri/bruce-willisin-hastaligi-ilerledi-eski-esi-yalniz-birakmiyor-2073024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Willis&#39;in hastalığı ilerledi! Eski eşi yalnız bırakmıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-p22fFHjbnmVXDjodAabfk1CfNCa3ZNonjGwsqPDRZxC5Lt6fAKoaGXgUI3V8omgp28ig2EKo" alt="Bruce Willis&#39;in hastalığı ilerledi! Eski eşi yalnız bırakmıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Güncel Magazin Haberleri - Hastalığı nedeniyle oyunculuğu bırakma kararı alan Bruce Willis&#39;in bu dönemde en büyük destekçisi eski eşi Demi Moore oldu.</p></div>
            </div>
        </a>
        </Template></>;
}