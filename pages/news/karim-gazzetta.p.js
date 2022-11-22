import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Karim Gazzetta</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Karim Gazzetta"/>
        <meta name="description" content="Trending News about Karim Gazzetta" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Karim Gazzetta</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/01e8e0a6-9248-4f0f-bd36-cdb8320a2530/1200x630" alt="Karim Gazzetta"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/fussball/2022/11/schweizer-profi-karim-gazzetta-stirbt-mit-27-jahren'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schweizer Profi Karim Gazzetta stirbt mit 27 Jahren</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzBBx-FcNCxsfe-AgylzaiSIxogrHJ0PCwWOozEkRL0QZbmtpkyIu15SvDLHUG9TpKfHYm57mk" alt="Schweizer Profi Karim Gazzetta stirbt mit 27 Jahren" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Gazzetta stirbt im Alter von 27 Jahren. Der Schweizer lief einst für die U20-Nationalmannschaft auf.</p></div>
            </div>
        </a><a href='https://www.4-4-2.com/weitere/tragoedie-bosnien-schweizer-profi-karim-gazzetta-selbstmord/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tragödie in Bosnien: Schweizer Fussballprofi Karim Gazzetta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDp5kVtg1ewJgTYazMK4UcUnc5P6GzAxWF-73kSuT1fwt_CuQQgqd3EmT56YpLYKI6OboAsO-j" alt="Tragödie in Bosnien: Schweizer Fussballprofi Karim Gazzetta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sehr traurige Nachrichten erreichen uns aus Bosnien: Der Schweizer Fussballprofi Karim Gazzetta hat dort Selbstmord begangen. Dies bestätigt ein Sprecher seines&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football.ch/sfv/nationalteams/u-21/news/der-sfv-trauert-um-karim-gazzetta.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der SFV trauert um Karim Gazzetta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPHPIcVShj18_wFSXAjPrvakSzzSSk1gN1RL9s7psXFYPpWSCRd-y0oJAsCB8fh7kTJeEXgXHt" alt="Der SFV trauert um Karim Gazzetta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schweizerische Fussballverband hat die traurige Nachricht erhalten, dass sein ehemaliger Junioren-Nationalspieler Karim Gazzetta in Bosnien-Herzegowina&nbsp;...</p></div>
            </div>
        </a><a href='https://www.blick.ch/sport/fussball/challengeleague/tragoedie-in-bosnien-schweizer-fussball-profi-tot-aufgefunden-id18071797.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schweizer Fussball-Profi Karim Gazzetta tot in Bosnien aufgefunden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgpaYgKT3JmNx1v048xY0VBeApe5VZQlRtmL55yOBcJMk5MVzKMby5lh02VTDN2ts2vHflewEh" alt="Schweizer Fussball-Profi Karim Gazzetta tot in Bosnien aufgefunden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schock-Nachricht aus Bosnien. Der Schweizer Fussballer Karim Gazzetta (27) wurde leblos vor seinem Haus in Mostar aufgefunden.</p></div>
            </div>
        </a><a href='https://www.nau.ch/sport/fussball/karim-gazzetta-schweizer-fussballprofi-stirbt-mit-27-jahren-66345472'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Gazzetta: Schweizer Fussballprofi stirbt mit 27 Jahren</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcvP_ijh5L5u9A_DhkDg9crfoq9WJspnPJ_peUNijTxrIUPZDuD0A2E088c1OxBfPciT53Xsya" alt="Karim Gazzetta: Schweizer Fussballprofi stirbt mit 27 Jahren" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Alter von 27 Jahren stirbt der Schweizer Fussballer Karim Gazzetta. Am Montagmorgen vermeldet sein bosnischer Klub die Nachricht.</p></div>
            </div>
        </a><a href='https://www.srf.ch/sport/fussball/internationale-ligen/internationale-fussball-news-schweizer-gazzetta-im-alter-von-27-jahren-gestorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Internationale Fussball-News - Schweizer Gazzetta im Alter von 27 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUtrD-u4Ju5wFWsb7gpf3NrzsNR8oFeiiZSlG1n1kL6v36HLPcajEp8WxDYsUZuCGbwo9846l-" alt="Internationale Fussball-News - Schweizer Gazzetta im Alter von 27 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schweizer Fussballer Karim Gazzetta hat mit 27 Jahren Suizid begangen. Dies bestätigte ein Sprecher seines aktuellen Klubs Zrinjski Mostar in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.suedostschweiz.ch/sport/fussball/frueherer-junioren-internationaler-gazzetta-gestorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Früherer Junioren-Internationaler Gazzetta gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzPZAs2KsUjBuQJlLybsEAJDUC7UQLpViYR4YV8vYI6VdbyUrF1QsdtXFy4Qh0yUoWCtUFoXhJ" alt="Früherer Junioren-Internationaler Gazzetta gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der frühere Schweizer Junioren-Internationale Karim Gazzetta ist in Bosnien-Herzegowina ums Leben…</p></div>
            </div>
        </a>
        </Template></>;
}