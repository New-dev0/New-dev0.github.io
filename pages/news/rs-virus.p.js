import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RS-Virus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RS-Virus"/>
        <meta name="description" content="Trending News about RS-Virus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RS-Virus</h1>
            <Image width={800} height={500} src="https://p6.focus.de/img/fotos/id_180405650/gettyimages-1291294433.jpg?im=Crop%3D%280%2C75%2C2121%2C1061%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=dd41ac0535e17fe16799043c9e32ae493cb789bea13518f007bcf5769a0e0621" alt="RS-Virus"/>
            <h3>Recent News</h3>
            <a href='https://www.focus.de/gesundheit/news/mediziner-beklagen-katastrophenzustaende-faelle-nehmen-rapide-zu-daran-erkennen-sie-ob-ihr-kind-das-rs-virus-hat_id_180405220.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus bei Kindern: Auf diese Alarmzeichen müssen Eltern achten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyqtL49z4tkRCFgDdyqI3S2Gs4u5O1kdu0G9DtR2lKKc5ZaDrdVd_LK2a94yJpG2OSiMS8_Fa8" alt="RS-Virus bei Kindern: Auf diese Alarmzeichen müssen Eltern achten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für Erwachsene ist die Krankheit ungefährlich - für Säuglinge und Kleinkinder kann RSV jedoch lebensgefährlich werden. Mediziner beklagen aktuell einen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Viele-Kleinkinder-mit-RS-Infektion-in-Krankenhaeusern-im-Land,atemwegserkrankungen100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viele Kleinkinder mit RS-Infektion in Krankenhäusern im Land</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOY4DKCZ387sik6TX23XptpUbGS2JRKapnkdturCujgrEnruWcs_CZF4ziP8j8aHuUriv8V3T-" alt="Viele Kleinkinder mit RS-Infektion in Krankenhäusern im Land" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dabei sind besonders zwei Erreger zu finden: die Influenza, also Grippe-Viren und das Respiratorischen Synzytial-Virus (RSV), das &quot;insbesondere bei Kleinkindern&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kreiszeitung.de/deutschland/rs-virus-rsv-deshalb-gibt-es-in-deutschland-so-viele-infektionen-91943721.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus (RSV): Deshalb gibt es in Deutschland so viele Infektionen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRl6B_uKdifZ8JjPi7PwkOkkZqqotKZKpMVS981oLqHUEo7vbRWr_zMTrLxsTRij5CxifaZfnEL" alt="RS-Virus (RSV): Deshalb gibt es in Deutschland so viele Infektionen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aktuell geht in Deutschland das RS-Virus um, Kinder und Babys sind besonders betroffen. Doch, warum gibt es gerade jetzt so viele Infektionen mit RSV?</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/heute-19-uhr/kinderkliniken-ueberlastung-rs-virus-video-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kinderkliniken: Hohe Belastung durch RS-Virus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmILrOsJp0Ms4Ammorv66GNE1sdEWSKXgeYQQxd0Arc1JJLU1i37_46QAWTi3HdqcJHdB070HB" alt="Kinderkliniken: Hohe Belastung durch RS-Virus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Weil mehr Atemwegserkrankungen bei Kindern auftreten, wird vor wachsender Belastung der Kliniken gewarnt. Große Sorge bereitet vor allem das RS-Virus.</p></div>
            </div>
        </a><a href='https://www.br.de/nachrichten/bayern/rsv-welle-bei-kindern-das-virus-schlaegt-zu,TOTdyzR'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RSV-Welle bei Kindern: &quot;Das Virus schlägt zu&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeROtwk74Jrl5CooheY8hcrMFadGeCaCDl367z-up3f3G0DbknSHj_bgJiYazrlx3nRCw7kXB8" alt="RSV-Welle bei Kindern: &quot;Das Virus schlägt zu&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wegen des RS-Virus sind Bayerns Kinderkliniken überlastet. Die Zustände seien &quot;katastrophal&quot;. In Bayreuth gibt es bereits jetzt doppelt so viele Fälle wie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.suedtirolnews.it/chronik/rs-virus-so-erkennt-man-eine-infektion-bei-kindern'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus: So erkennt man eine Infektion bei Kindern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZYifFFc5d16JHcetgpLFjZt87PJrXiCs_uI-RS45lt8S6_twqZks-dkkmcIV1QdM6m8RIoDL0" alt="RS-Virus: So erkennt man eine Infektion bei Kindern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei Erwachsenen verlaufen Infektionen mit dem RS-Virus meist harmlos. Doch gerade für Säuglinge und Kleinkinder kann eine Erkrankung manchmal lebensbedrohlich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.infranken.de/ratgeber/gesundheit/kinderkliniken-ueberlastet-so-gefaehrlich-ist-rsv-art-4013430'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Katastrophenzustände&#39; drohen: So gefährlich ist das RS-Virus - und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTgyT8DCU_UTo7SEUbBQ_PJPN4W40Hwub3AswDyXuIG4cvudtK5lKM9XIEBlYT1mwSSHmqLW66C" alt="&#39;Katastrophenzustände&#39; drohen: So gefährlich ist das RS-Virus - und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Symptome sind Grippe-typisch: Husten, Schnupfen und Fieber - in schwereren Fällen dann Bronchitis und sogar Lungenentzündung. Eine RSV-Infektion kann man&nbsp;...</p></div>
            </div>
        </a><a href='https://www.volksstimme.de/sachsen-anhalt/rs-virus-breitet-sich-rasch-in-sachsen-anhalt-aus-3494981'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus breitet sich rasch in Sachsen-Anhalt aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBWCySHjaMzDKIEpi4SA5BV3hEd95Qt5r2JWMMiz7DrSdi23fNOWMY0pSOmZYcRkLl7g5_Pxhd" alt="RS-Virus breitet sich rasch in Sachsen-Anhalt aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Atemwegserkrankung RSV sorgt in Sachsen-Anhalt für volle Kinderkliniken und Arztpraxen. Besonders eine Entwicklung macht einem Experten Sorgen.</p></div>
            </div>
        </a><a href='https://www.fnp.de/deutschland/rsv-virus-kinder-symptome-therapie-kliniken-deutschland-impfstoff-zr-91943244.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus und Kinder: Symptome und Therapie – die wichtigen Fakten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuU6kCY4a1nTdAg4owxPZ3eQ6x1eb8NNIms2y_Dwrr7CBa4xRKg5WVf69BjHijuNtFzxY50eCE" alt="RS-Virus und Kinder: Symptome und Therapie – die wichtigen Fakten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Deutschland grassiert das RS-Virus, besonders Kleinkinder sind gefährdet. Lesen Sie hier, was die Symptome sind und wie man sich schützen kann.</p></div>
            </div>
        </a>
        </Template></>;
}