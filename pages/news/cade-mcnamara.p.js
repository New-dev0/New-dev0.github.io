import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cade McNamara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cade McNamara"/>
        <meta name="description" content="Trending News about Cade McNamara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cade McNamara</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0901%2Fr1055983_1296x729_16%2D9.jpg" alt="Cade McNamara"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/college-football/story/_/id/35131596/michigan-qb-cade-mcnamara-enters-transfer-portal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan QB Cade McNamara enters transfer portal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8iDfiK8nB8TL1jh7nPDIc73ibmEktNOZRej3QCzh2yLxIQKTh9uapKIbWqVaFjZX0CgsvTBWa" alt="Michigan QB Cade McNamara enters transfer portal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Michigan starting quarterback Cade McNamara has entered the transfer portal as a graduate transfer.</p></div>
            </div>
        </a><a href='https://www.nationalfootballpost.com/college-football/reports-ex-michigan-starting-qb-cade-mcnamara-enters-portal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reports: Ex-Michigan starting QB Cade McNamara enters portal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROxTNjRVKGzngv8PKbJTGvF8pZgNLjlqt8l7tNTC735AXrgwRkbWO6imsvCh_cesfb-cYuBsgd" alt="Reports: Ex-Michigan starting QB Cade McNamara enters portal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan quarterback Cade McNamara entered the transfer portal, multiple outlets reported Monday. McNamara, in his fourth season in Ann Arbor, led Mic.</p></div>
            </div>
        </a><a href='https://www.mlive.com/wolverines/2022/11/michigan-qb-cade-mcnamara-enters-transfer-portal-ahead-big-ten-title-game.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan QB Cade McNamara enters transfer portal ahead of Big ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNcewVz7DDBkgO4GE2-82kbi5y-mVRS13lO9Y3d26Ym_9OAz4KNkjvQjV_koCHHIq9hQ9hHGNZ" alt="Michigan QB Cade McNamara enters transfer portal ahead of Big ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cade McNamara, the centerpiece for a Michigan team that won a Big Ten championship and reached the College Football Playoff in 2021, is moving on.</p></div>
            </div>
        </a><a href='https://www.freep.com/story/sports/college/university-michigan/wolverines/2022/11/28/michigan-football-qb-cade-mcnamara-ncaa-transfer-portal/69682759007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan football QB Cade McNamara enters NCAA transfer portal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRz7n9L1VTlqANgnrTGV39llAgr2TnSWT6B5CIZHFn5_yGVMrHYfh0pg519Pkca9QFY35AWw40Q" alt="Michigan football QB Cade McNamara enters NCAA transfer portal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan football quarterback Cade McNamara has entered the transfer portal, the Free Press has confirmed.</p></div>
            </div>
        </a><a href='https://www.si.com/college/2022/11/28/michigan-wolverines-qb-cade-mcnamara-enters-transfer-portal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan QB Cade McNamara Enters Transfer Portal, per Reports</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmw03YyW-ZeB24Ta1QZ83k0J8pFtcgUR3DsNPUJuP5ayr0zxeSBPzxvZb0JlQNEwdgrY5EuT7W" alt="Michigan QB Cade McNamara Enters Transfer Portal, per Reports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>McNamara was the Wolverines&#39; starter in 2021 when the team made the College Football Playoff and finished the year 12–2. McNamara, a senior, competed with&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}