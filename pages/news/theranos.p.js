import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Theranos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Theranos"/>
        <meta name="description" content="Trending News about Theranos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Theranos</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7396155/46-192176234.jpg" alt="Theranos"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/wirtschaft/betrug-mit-bluttests-elf-jahre-haft-fuer-gefeierte-unternehmerin/402227385'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Betrug mit Bluttests: Elf Jahre Haft für gefeierte Theranos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzqG5WRJRlDhbu0uAseVYAyCsxj3djsroncgqBgjlwUcolz0Vb8_gpM8AiAY9CwgcEpCKOxKcS" alt="Betrug mit Bluttests: Elf Jahre Haft für gefeierte Theranos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elisabeth Holmes und ihr Biotech-Start-up Theranos galten als Revolutionäre der Gesundheitsbranche. Es war ein Bluff.</p></div>
            </div>
        </a><a href='https://t3n.de/news/elizabeth-holmes-wegen-theranos-betrugs-zu-ueber-11-jahren-haft-verurteilt-1514400/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes wegen Theranos-Betrugs zu über 11 Jahren Haft ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTaNrlTeA-ED4pvSVzIktzMzNakkEklcJda2E-YC5ZUblNfY_1XuiVS0frPzU1H00rK5q6FkPt5" alt="Elizabeth Holmes wegen Theranos-Betrugs zu über 11 Jahren Haft ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die einstige US-Vorzeigeunternehmerin Elizabeth Holmes ist wegen Betrugs zu einer Haftstrafe von mehr als elf Jahren verurteilt worden.</p></div>
            </div>
        </a><a href='https://www.manager-magazin.de/unternehmen/pharma/elizabeth-holmes-theranos-gruenderin-zu-ueber-elf-jahren-haft-verurteilt-a-2866d3ec-9440-4a18-9bc4-d7e3afed4113'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gescheiterte Bluttest-Firma Theranos: Ex-Starunternehmerin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRizbQdrwIj9lPgMx8pF92k7zsBbOHkoTtrVGkUeQzQzp05ru104AIXBspAU33EJLC8Rv_LVfiI" alt="Gescheiterte Bluttest-Firma Theranos: Ex-Starunternehmerin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit ihrem Unternehmen Theranos wollte Elizabeth Holmes Bluttests revolutionieren, doch ihre Tests funktionierten nicht. Bereits im Januar wurde Holmes als&nbsp;...</p></div>
            </div>
        </a><a href='https://www.badische-zeitung.de/ex-theranos-chefin-holmes-wegen-betrugs-zu-elf-jahren-haft-verurteilt--225582993.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Theranos-Chefin Holmes wegen Betrugs zu elf Jahren Haft ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQl-cGh7wx1UMTEh7NGb6bBi3u3xCg99hsyiaGZlcJx3DWeHJ3FYNsCc3AqxSan-Ngm3etE5uhO" alt="Ex-Theranos-Chefin Holmes wegen Betrugs zu elf Jahren Haft ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elizabeth Holmes war mit ihrem Bluttest-Unternehmen Theranos in Silicon Valley ein Star. Ihr Schuldspruch im Betrugsverfahren um die Firma stand seit Januar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.swp.de/panorama/elizabeth-holmes-urteil-gefaengnis-kinder-baby-schwanger-trennung-67705903.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes Urteil: Zwei Kinder wachsen ohne Mutter auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTRYkvhspexCYPfomYxocdrdRKbpb279rbBRKB6g_OJPDPKC51Dh4dfw3vdZG9ye4W99WGmTRD" alt="Elizabeth Holmes Urteil: Zwei Kinder wachsen ohne Mutter auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für die ehemalige Starunternehmerin war das Urteil ein Schock: Sie muss wegen Betrugs elf Jahre in Haft. Die sichtbar schwangere Frau wird von ihren Kindern&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bluewin.ch/de/news/wirtschaft-boerse/mehr-als-elf-jahre-haft-fuer-ex-starunternehmerin-holmes-1480252.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der Silicon Valley Star muss elf Jahre ins Gefängnis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSf_jZkU7BuQkKrqFtSlDHUL4n3WaKGi-XWnFzcVEFSshGClHwuWQEta4mWsH0_oZqcHdZsrOIt" alt="Der Silicon Valley Star muss elf Jahre ins Gefängnis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einst wurde Elizabeth Holmes als Selfmade-Milliardärin gefeiert. Jetzt ist ihr Kartenhaus in sich zusammengebrochen: Die 38-Jährige muss wegen Betrugs eine&nbsp;...</p></div>
            </div>
        </a><a href='https://de.euronews.com/2022/11/19/11-jahre-haft-fur-silicon-valleys-einstige-starunternehmerin-holmes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>11 Jahre Haft für Silicon Valleys einstige Starunternehmerin Holmes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1YuIdqbwQoODJ0Mr4G7x5xlgfkIopW-CZ_EKs12k-Xn-sFaK_N-uZ7XT_JANGK0WheLDHNloY" alt="11 Jahre Haft für Silicon Valleys einstige Starunternehmerin Holmes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie galt als Vorzeigeunternehmerin und schmückte Magazin-Cover: nun ist Elizabeth Holmes in Kalifornien zu einer Haftstrafe von 11 Jahren und 3 Monaten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}