import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Traiskirchen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Traiskirchen"/>
        <meta name="description" content="Trending News about Traiskirchen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Traiskirchen</h1>
            <Image width={800} height={500} src="https://www.noen.at/image/1920x1080-c-jpg/4273115/202211251738_121_680682_221124_Traisk_Spendenuebergabe_000.jpg" alt="Traiskirchen"/>
            <h3>Recent News</h3>
            <a href='https://www.noen.at/video/noen-n1-tv-spendensammlung-fuer-fluechtlinge-in-traiskirchen-traiskirchen-noen-n1-tv-redaktion-344816779'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spendensammlung für Flüchtlinge in Traiskirchen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROirhPDSzK8JRpFmvamJ_dEv9hGE_hmJQrjS2kArarg6dcGzplRQj7thXu8JSPWYpmH6xRJovF" alt="Spendensammlung für Flüchtlinge in Traiskirchen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Stadt Traiskirchen organisierte eine Spendensammlung für die Kinder und ihren Familien im Flüchtlingslager. Vor allem Kinderschuhe, Schals,&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/chronik/niederoesterreich/rechte-kundgebung-vor-erstaufnahmestelle-traiskirchen/402237999'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rechte Kundgebung vor Erstaufnahmestelle Traiskirchen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWvLI-jY8KB4wwLxGGt0OYhhHHth8xxsvPCPqEsSa5_mcDTMa0Q8pyfyBU7aaLbPYPdvRI2uaA" alt="Rechte Kundgebung vor Erstaufnahmestelle Traiskirchen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor dem Erstaufnahmezentrum Traiskirchen (Bezirk Baden) sollen am Freitag Vermummte demonstriert und Pyrotechnik gezündet haben. Bei Eintreffen der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/baden/c-lokales/rechte-zuenden-pyrotechnik-vor-fluechtlingslager-traiskirchen_a5734009'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mini-Demo: Rechte zünden Pyrotechnik vor Flüchtlingslager ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSD9FU6y0Sx5fisjZp1t4cmpvQ30uNRmCwxLS9PbV6VTK25QjmbDpk8TcnyF88TF_LH__KyTqjj" alt="Mini-Demo: Rechte zünden Pyrotechnik vor Flüchtlingslager ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freitag Abend sollen rund 20 vermummte Personen vor dem Eingang des Erstaufnahmezentrums Traiskirchen (Bezirk Baden) demonstriert haben.</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141235595/rechte-kundgebung-vor-der-erstaufnahmestelle-traiskirchen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rechte Kundgebung vor der Erstaufnahmestelle Traiskirchen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQsI3qpLl_WaNkzIkI5Gi5krINibFwvq4EApn0X4hNig8-PQOn44yDgmJUQIFpUfZmaSAE9eQcX" alt="Rechte Kundgebung vor der Erstaufnahmestelle Traiskirchen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laut dem Innenministerium besteht der Verdacht auf eine Aktion der Identitären. Der Verfassungsschutz hat die Ermittlungen aufgenommen.</p></div>
            </div>
        </a>
        </Template></>;
}