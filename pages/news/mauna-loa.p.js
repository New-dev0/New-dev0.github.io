import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mauna Loa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mauna Loa"/>
        <meta name="description" content="Trending News about Mauna Loa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mauna Loa</h1>
            <Image width={800} height={500} src="https://www.zdf.de/assets/hawaii-mauna-loa-ausbruch-100~1280x720?cb=1669672707294" alt="Mauna Loa"/>
            <h3>Recent News</h3>
            <a href='https://www.zdf.de/nachrichten/panorama/hawaii-vulkan-mauna-loa-ausbruch-lava-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vulkan Mauna Loa auf Hawaii bricht aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTR7OUOOLA8j4ptYwpEY0QWk_FjCe0PPgDQy0LuTmz2yAheyaeKyFjsOeZ1jAhxetbhNsDTIi6i" alt="Vulkan Mauna Loa auf Hawaii bricht aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor knapp 40 Jahren brach der Mauna Loa auf Hawaii das letzte Mal aus - jetzt spuckt der größte aktive Vulkan der Welt wieder Lava.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/gesellschaft/ungluecke/mauna-loa-auf-hawaii-hoechster-aktiver-vulkan-der-welt-ausgebrochen-18494992.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mauna Loa auf Hawaii: Höchster aktiver Vulkan der Welt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHZ83N0-6KF1hyhgcHg8uktqT8LSPs3S2VQRTCeAk1LDXjRq2cxJ5UD1gFbVSSp_RfifK9VSos" alt="Mauna Loa auf Hawaii: Höchster aktiver Vulkan der Welt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am späten Sonntagabend ist auf Hawaii der Vulkan Mauna Loa ausgebrochen – erstmals seit fast 40 Jahren. Gefahr durch Lavaströme besteht...</p></div>
            </div>
        </a><a href='https://www.derstandard.de/story/2000141304965/mauna-loa-groesster-aktiver-vulkan-der-welt-auf-hawaii-ausgebrochen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mauna Loa: Größter aktiver Vulkan der Welt auf Hawaii ausgebrochen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQti0PAk1-uLIw5OzmCS9-DDMihCCFyOiBydJ4k7s96UEwzx1QVEb8pT4HQSIQqDRU2F_QcvGbY" alt="Mauna Loa: Größter aktiver Vulkan der Welt auf Hawaii ausgebrochen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lava trete aus dem Schildvulkan Mauna Loa auf der größten hawaiianischen Insel Big Island aus, die Ortschaften an den Hängen des Vulkans seien derzeit nicht&nbsp;...</p></div>
            </div>
        </a><a href='https://tri-mag.de/szene/ausbruch-des-mauna-loa-auf-hawaii-der-stand-der-dinge/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ausbruch des Mauna Loa auf Hawaii: Der Stand der Dinge</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTY8U-34snTq64qxOThpJ-PrH6Mjxktxhrf30h7QLfMg1DMdHbVEgAZ4GRCymK0YrekjUexygx2" alt="Ausbruch des Mauna Loa auf Hawaii: Der Stand der Dinge" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der größte Vulkan der Welt spuckt wieder Feuer. Was hat es mit dem Ausbruch des Mauna Loa auf sich, was bedeutet das für Kailua-Kona und ist der Ironman&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/ausland/amerika/vulkanausbruch-mauna-loa-101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mauna Loa auf Hawaii: Größter Vulkan der Welt ist ausgebrochen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQk_x59mQsMnL_6nfP4UN_mtKwgbtm9vDn2mIGJtjG8OU7EUQDQeibIcS6pHDHkgNe2VCFrKCD" alt="Mauna Loa auf Hawaii: Größter Vulkan der Welt ist ausgebrochen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Asche und Gestein schleudert der hawaiianische Mauna Loa auf seine Hänge herab. Damit ist nach US-Angaben der weltweit größte Vulkan ausgebrochen.</p></div>
            </div>
        </a><a href='https://de.euronews.com/2022/11/28/hawaii-vulkan-mauna-loa-ausgebrochen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hawaii: Vulkan Mauna Loa ausgebrochen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiJo-oCF9gb4uKN7lG0tLbj1EKIGombl2-7oCFuAPlwTQV3DzM3MusYRVWQuobYJOqzEKpoHw0" alt="Hawaii: Vulkan Mauna Loa ausgebrochen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fast 40 Jahre lang war der höchste aktive Vulkan der Welt ruhig.</p></div>
            </div>
        </a><a href='https://www.zeit.de/wissen/umwelt/2022-11/hawaii-vulkan-mauna-loa-ausbruch-erdbeben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hawaii: Vulkan Mauna Loa ausgebrochen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFF7Nmgg5ab12jGoyUHqlCg0GQb88zzMNYSTuuzed19YiyH5FYy88068-LRrmC53ZwYK_MMp-g" alt="Hawaii: Vulkan Mauna Loa ausgebrochen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>40 Jahre lang hat der höchste aktive Vulkan der Welt auf Hawaiis größter Insel stillgelegen. Begleitet von mehreren kleinen Erdbeben hat es nun eine&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}