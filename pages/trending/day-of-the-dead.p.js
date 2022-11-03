import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Day of the Dead</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Day of the Dead"/>
        <meta name="description" content="Trending News about Day of the Dead" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Day of the Dead</h1>
            <Image width={800} height={500} src="https://www.aljazeera.com/wp-content/uploads/2022/11/2022-10-30T011519Z_1841116858_RC2CBX9PSCA2_RTRMADP_3_MEXICO-DAYOFTHEDEAD-PARADE.jpg?resize=1920%2C1440" alt="Day of the Dead"/>
            <h3>Recent News</h3>
            <a href='https://www.aljazeera.com/gallery/2022/11/2/photos-mexicans-celebrate-the-day-of-the-dead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Mexicans celebrate the Day of the Dead – Dia de Muertos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7XQEP2PamMahLTISlKwSeldFElfzm08CjWioBxRWSYGZTHsXCHGOD_mP4aPW0orbzrXQzvgfy" alt="Photos: Mexicans celebrate the Day of the Dead – Dia de Muertos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adults and children dress as skeletons and celebrate the lives of the departed in annual joy-filled festivities.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/day-of-the-dead-google-doodle-celebrates-traditional-festival/articleshow/95262800.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Day of the Dead: Google Doodle celebrates traditional festival</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQorJ402sYBMaB6feNwLfXsjvldQPV-5wURVBAfVtUT1WcX2pGkV493XTIjfNxGUXao72Dh6W3Z" alt="Day of the Dead: Google Doodle celebrates traditional festival" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On November 2, Google Doodle honoured Day of the Dead or Dia de los Muertos, the most significant yearly celebration in Mexico.</p></div>
            </div>
        </a><a href='https://www.theatlantic.com/photo/2022/11/photos-celebrating-day-dead-2022/671971/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Celebrating the Day of the Dead, 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfoD1yKlDxedP4oLSVls0u0g4rA88K8xeTSX-Rt0bLHCKgEBCnKlVEkv2Amf46F5zN0JohyFl_" alt="Photos: Celebrating the Day of the Dead, 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The parades feature representations of the character La Catrina, frightful skeletons, and other icons of death and the underworld. Gathered here are a few&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/2/what-is-day-of-the-dead-a-celebration-of-the-dead-and-the-living'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is Day of the Dead? A celebration of the dead and the living</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTS8UXW2bRhVMJhKPT4DH0D_hXmZtbNQG8cziwqAhzunrEgMcNjlrRBdiQtJixPKLbrPgSlqvIu" alt="What is Day of the Dead? A celebration of the dead and the living" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to tradition, on the Day of the Dead the heavens open, and departed souls return to earth, briefly.</p></div>
            </div>
        </a><a href='https://www.upi.com/Top_News/World-News/2022/11/02/google-doodle-day-of-the-dead/8831667387612/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google celebrates Day of the Dead with a Doodle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFfMkGhZP3r_EiYwxTPUk1dzm1t7gRvKWHzMkhXe_-NZaU25DuVlHsKwewzTJ7HdHgatB_RLCz" alt="Google celebrates Day of the Dead with a Doodle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wednesday is one of Mexico&#39;s most important holidays -- Dia de los Muertos -- also known as Day of the Dead.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/lifestyle/2022/11/02/6362a8cbca4741ad6f8b45b1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Day of the Dead: What do the colors of the skulls mean?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThD_7E106KrTYavXDNyg7EoUzWWtM7qRpsf7VzCmYrpxP1eFJE8F3EGSjLdtnV6d7qqXcEXLUP" alt="Day of the Dead: What do the colors of the skulls mean?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is a two-day festival which originates from Aztec rituals to honor those that have passed away. Families gather to hold vigils and parties in honor of those&nbsp;...</p></div>
            </div>
        </a><a href='https://en.as.com/latest_news/google-doodle-for-day-of-the-dead-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Doodle for Day of the Dead</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSr2qeiArkAs6KEv2uWbpVFXyiYi1MKe5vnjqelRCg9v2rhTE7oiwusbT2aGUlizUjwINASkwBM" alt="Google Doodle for Day of the Dead" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wednesday 2 November 2022 saw a familiar looking graphic greet any internet searches going through the world&#39;s biggest engine.</p></div>
            </div>
        </a><a href='https://www.parkrapidsenterprise.com/news/local/crowd-turns-out-for-areas-first-day-of-the-dead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crowd turns out for area&#39;s first Day of the Dead</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGFifEc3FfhED1OnM8HJ4Yt3sJc_pZl4Xc0wJUHBAQuKCnM2Mw-G4v4MSfDGKa8B2TkjAY3ZPe" alt="Crowd turns out for area&#39;s first Day of the Dead" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The downtown Park Rapids event combined the announcement of an upcoming museum of Indigenous treaty and civil rights with a celebration of Latino culture&nbsp;...</p></div>
            </div>
        </a><a href='https://in-cyprus.philenews.com/news/international/bolivians-celebrate-day-of-the-dead-with-traditional-child-shaped-bread-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolivians celebrate Day of the Dead with traditional child-shaped ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdHJLtlYzsm566eMiD2r1Co4R9uDso6t4h1kpWA2-9zZ5XBGDys94l-yuBRPvMWjymckUbhTav" alt="Bolivians celebrate Day of the Dead with traditional child-shaped ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On the Day of the Dead (November 2), bakers in Bolivia are helping those remembering loved ones by creating loaves in the likeness of the departed.</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/news/world/americas/day-of-the-dead-google-doodle-2022-b2216036.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Day of the Dead: What is the Mexican festival honouring lost ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYBgH9hfDA9PWmG_ruk8flat9kJTF4bPUryGBIR9rfCm-QygU2Odw7o9Nq9WsCe46hpeo0_agR" alt="Day of the Dead: What is the Mexican festival honouring lost ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dia de los Muertos marries Aztec and Catholic customs to remember the spirits of deceased loved ones.</p></div>
            </div>
        </a>
        </Template></>;
}