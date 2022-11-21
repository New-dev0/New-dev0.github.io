import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DJ Sumbody</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DJ Sumbody"/>
        <meta name="description" content="Trending News about DJ Sumbody" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DJ Sumbody</h1>
            <Image width={800} height={500} src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/eoty0j2cvdaxxdcuires" alt="DJ Sumbody"/>
            <h3>Recent News</h3>
            <a href='https://ewn.co.za/2022/11/20/amapiano-sensation-dj-sumbody-has-died'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amapiano sensation, Dj Sumbody has died</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMhzc4A21XoSq8Bhj4OpvQsFt3O2oONE3Tkv8YOTPk9n3qm5kgHbTUAG2sedv7D86TeJ88TrHY" alt="Amapiano sensation, Dj Sumbody has died" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sumsounds Music released a statement saying the artist &quot;ran into an unfortunate incident that led to his passing&quot;.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/news/south-africa/gauteng/police-on-hunt-for-killers-after-musician-dj-sumbody-dies-78b92627-061f-4ea5-9de0-06cf77b23ae0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police on hunt for killers after musician DJ Sumbody dies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKp_stjfFCuaMUST17sZ_D_RnL14c97ll-90ht7yZYtaV5iuDbGoqkcQbmEukqYROsoGS7ksSX" alt="Police on hunt for killers after musician DJ Sumbody dies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artist and musician Oupa Johan Sefoka, better known as DJ Sumbody, in the entertainment industry has died, his family confirmed on Sunday.</p></div>
            </div>
        </a><a href='https://www.sowetanlive.co.za/news/south-africa/2022-11-20-dj-sumbody-and-one-other-person-die-in-a-hail-of-bullets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DJ Sumbody and one other person die in a hail of bullets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIyICzCzcgnlR6Mg1m4oFfJGnPc0w_axs-xBrSePl6ABYQ6IVTZJcE_g9juUec8IY9n1MbmQQp" alt="DJ Sumbody and one other person die in a hail of bullets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A third person who was travelling in a BMW X5 was rushed to hospital after suffering gunshot wounds. Gauteng police spokesperson Lt-Col Mavela Masondo told&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/citypress/news/amapiano-producer-dj-sumbody-passes-away-20221120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amapiano producer DJ Sumbody allegedly dies in hail of bullets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMzkJbJvUYLoZXLojl5NZRkH25EhcbgJBZwIolMupPjaYo6yORV1UwHF4VvoZ-6-rF1w_AGNNm" alt="Amapiano producer DJ Sumbody allegedly dies in hail of bullets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NEWS. Amapiano music pioneer DJ Sumbody has passed away. The hitmaker, given name Oupa John Sefoka, allegedly died in a hail of bullets in the early hours&nbsp;...</p></div>
            </div>
        </a><a href='https://www.enca.com/news/dj-sumbodys-all-white-picnic-cancelled-following-death'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DJ Sumbody&#39;s All White picnic cancelled following death</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStbGtr9f5WU93Z4Qv6cni2gUZ4Y19LAOpQk8-tNbZlvquoqoetuHDXUMGfi18GSCgdqFRe3VcV" alt="DJ Sumbody&#39;s All White picnic cancelled following death" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DJ Sumbody died in the early hours of Sunday morning in Johannesburg.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/south-africa-in-shock-as-amapiano-artist-dj-sumbody-dies/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa in shock as Amapiano artist, DJ Sumbody dies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbFhbnIZms4UjQdmpDlmEhL6xr58RSvQtPl87TMHqNecYb-ykoelXcf5otstR4zpWv2t6OR3Nc" alt="South Africa in shock as Amapiano artist, DJ Sumbody dies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Artist and musician DJ Sumbody has died. Details of his untimely death cannot be released, but the artist named Oupa John Sefoka allegedly ran into an&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}