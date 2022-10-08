import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hero Vida</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hero Vida"/>
        <meta name="description" content="Trending News about Hero Vida" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hero Vida</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-94702568,width-1070,height-580,imgsize-1930605,overlay-economictimes/photo.jpg" alt="Hero Vida"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/industry/renewables/hero-motocorp-launches-vida-v1-with-prices-starting-at-rs-1-45-lakh/articleshow/94702442.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hero Moto will bring in more affordable e-bikes in future: Pawan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-yNTxzz_ZlLyDFxdAFFppeMph_yJTOcF5YPvBU79hWF-SaM_8SiyRe_CoqhFVqQRr23J05xrR" alt="Hero Moto will bring in more affordable e-bikes in future: Pawan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Vida V1 Plus and Pro will offer top speed of 80 km/hr and a range of 143 km and 165 km respectively. The scooter has a removable battery and also with a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/photo-gallery/automobiles/hero-motocorp-vida-electric-scooter-launched-in-india-know-range-price-features-specs-news-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hero MotoCorp Vida Electric Scooter: हीरो मोटोकॉर्प का पहला ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Hero MotoCorp Vida Electric Scooter: हीरो मोटोकॉर्प का पहला ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>हीरो मोटोकॉर्प का पहला इलेक्ट्रिक स्कूटर Vida V1 भारतीय बाजार में 1.45 लाख रुपये की शुरुआती&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/auto-news/vida-v1-first-ever-hero-motocorp-ev-scooter-launched-in-india-all-details-11665132601328.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vida V1, first-ever Hero MotoCorp EV scooter, launched in India: All ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6Gi0063frH3FVz2YL0LARL0RU2kKtkatVAC-wHbOF0GN4ht3XZHVL8lQG3dAeL8pBpfYk9lvr" alt="Vida V1, first-ever Hero MotoCorp EV scooter, launched in India: All ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Vida V1 would be first launched in New Delhi, Jaipur and Bangalore. Deliveries of this electric scooter will commence from the second week of December.</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/tech/auto/hero-motocorp-launches-its-first-electric-scooter-hero-vida-v1-check-price-specifications-range-and-other-details-816721.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hero Vida V1: हीरो मोटोकॉर्प ने लॉन्च की अपनी पहली इलेक्ट्रिक-स्कूटर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFuSVJFwb0Cv-tyDAO6xAxiZZ5hdueS2mhAcbvmQLbPcuE98AxNddMiqlXL2E8fFYFx94GXz1r" alt="Hero Vida V1: हीरो मोटोकॉर्प ने लॉन्च की अपनी पहली इलेक्ट्रिक-स्कूटर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>हीरो के ई-स्कूटर को 2 वेरिएंट में लॉन्च किया गया है- Vida V1 pro और vida V1 Plus. देश की सबसे बड़ी&nbsp;...</p></div>
            </div>
        </a><a href='https://auto.hindustantimes.com/auto/electric-vehicles/hero-motocorp-s-vida-v1-electric-scooter-officially-revealedlaunched-41665116328233.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>First-ever Hero MotoCorp electric scooter launched. Check details</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlZnaNc9tsGYK4QDndFED1FdSU057uygKnRLknSIVa-Y1FoZnkWG6O8dnq_1GDNqCGdwBmG-pZ" alt="First-ever Hero MotoCorp electric scooter launched. Check details" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vida, a new EV brand under Hero MotoCorp has launched its first electric scooter, V1. It will take on rivals such as Bajaj Chetak, TVS iQube, Ather 450X,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zigwheels.com/news-features/ev-news/hero-vida-v1-plus-vs-vida-v1-pro-variants-explained/47298/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hero Vida V1 Variants Explained: Plus vs Pro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRf-gbshZW34FzFgtUfS8ycGEpxOOs8mclM31EqffnAEPL-O37y4dHN2JqdD18YwaPlQBRcLV-N" alt="Hero Vida V1 Variants Explained: Plus vs Pro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While the two variants of the e-scoot look similar, there are quite a few differences under the skin.</p></div>
            </div>
        </a><a href='https://www.abplive.com/auto/hero-first-electric-scooters-launched-know-all-about-these-scooters-2232787'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hero Vida Electric Scooter: हीरो मोटोकॉर्प का पहला इलेक्ट्रिक स्कूटर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhiGiaZsL8UvPK_paCZ5syeV-BePLnjecbIMRonRFeGw_FKM3Dl8ZVWuXeFQw0GZA40QiAhYN-" alt="Hero Vida Electric Scooter: हीरो मोटोकॉर्प का पहला इलेक्ट्रिक स्कूटर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>हीरो के नए इलेक्ट्रिक स्कूटर्स को दो वेरिएंट्स Vida V1 Plus and Vida V1 Pro. में पेश किया गया है. हीरो&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/story/hero-motocorp-forays-into-e-scooters-launches-vida-v1-priced-at-rs-15-lakh-349262-2022-10-07'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hero Motocorp forays into e-scooters, launches VIDA V1 priced at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRm6dETsmBfCPKcyDd3WkXhP6VMFSZorEvh9xbgjIfQV4-X7imeWluAaPjIEUA81VjbHu-fY9we" alt="Hero Motocorp forays into e-scooters, launches VIDA V1 priced at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two variants of the e-scooters, called VIDA V1 PRO and VIDA V1 PLUS, were launched on Friday at an event.</p></div>
            </div>
        </a><a href='https://www.aajtak.in/auto/news/story/hero-launches-vida-v1-electric-scooter-know-about-its-features-and-price-tutc-1551497-2022-10-07'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>लॉन्च हुआ Hero का पहला इलेक्ट्रिक स्कूटर, इतनी है कीमत, मिलेंगे ये फीचर्स</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBlUGAf7uChWtMifIJ2etLjoCHS7rqIrSQCSeP6pg8CgBQ5KTw3uV9XGo7xnCdO60uhRMgi8qy" alt="लॉन्च हुआ Hero का पहला इलेक्ट्रिक स्कूटर, इतनी है कीमत, मिलेंगे ये फीचर्स" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hero VIDA V1 E-scooter: हीरो इलेक्ट्रिक स्कूटर के दोनों वेरिएंट की टॉप स्पीड 80 किलोमीटर प्रति&nbsp;...</p></div>
            </div>
        </a><a href='https://e-vehicleinfo.com/hero-vida-v1-electric-scooter-launched-price/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hero VIDA V1 Electric Scooter Launched, Price, Range and More ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_pB5TFR12fBs8lQOrmsbaGNA1dxqcC0niKeAk1qrHCZ9MU5px5hFaxRqDLMKN6eho_jOezbL_" alt="Hero VIDA V1 Electric Scooter Launched, Price, Range and More ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hero VIDA V1 Electric Scooter Launched at a starting price of 1,45000 in India, here is range and delivery date.</p></div>
            </div>
        </a>
        </Template></>;
}