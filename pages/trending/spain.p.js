import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spain</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spain"/>
        <meta name="description" content="Trending News about Spain" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spain</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/8bca70c7cf5e349bdc1d8dbc0337097b71c50b59/0_339_5150_3089/master/5150.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=45a762965e120519a9a05152c869ce1e" alt="Spain"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/world/2022/sep/25/spain-plans-digital-nomad-visa-scheme-to-attract-remote-workers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain plans &#39;digital nomad&#39; visa scheme to attract remote workers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuSAPKt7RejbYcXS4HnJ-oLVLzNNM6z5K-TkA8wOziH33X_eD3vMWz7nWhiEuZq6veXFPiD7Wi" alt="Spain plans &#39;digital nomad&#39; visa scheme to attract remote workers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scheme includes tax breaks and gives Britons and other non-EU citizens chance to stay up to five years.</p></div>
            </div>
        </a><a href='https://www.globaltimes.cn/page/202209/1276036.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain upset by Switzerland - Global Times</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTM-9ApJ7SfQ4_14fIeFYA3K8dpvBvTaDgwvLFtWrzkEJ8LQgqfsIK7Ij28sptPSwDpeWhqk-eV" alt="Spain upset by Switzerland - Global Times" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Switzerland earned a 2-1 win over Spain in the Nations League on Saturday in Zaragoza, Spain to drag Luis Enrique&#39;s side off top spot in the group.</p></div>
            </div>
        </a><a href='https://www.dailypioneer.com/2022/sports/swiss-shock-for-spain.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Swiss shock for Spain</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Swiss shock for Spain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal went top of Group A2 with a comfortable 4-0 win in the Czech Republic as Diogo Dalot struck twice with Bruno Fernandes and Diogo Jota also on target.</p></div>
            </div>
        </a><a href='https://www.schengenvisainfo.com/news/spain-japan-sign-a-memorandum-of-cooperation-for-tourism/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain &amp; Japan Sign a Memorandum of Cooperation for Tourism ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzxGKKxkBLigAjuVVYf89FlyPJJAX-L3rGSbTAVN609d6H6OQAXzDPwFgR9Gydtbt1ls-wPp3q" alt="Spain &amp; Japan Sign a Memorandum of Cooperation for Tourism ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At the same time, the agreement aims to identify smart tourist destinations, tourism development programs, air connectivity, and the promotion of public and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/spain-stutter-in-world-cup-preparation-as-switzerland-hand-la-roja-rare-home-defeat/bltb22b1aa775651f52'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain stutter in World Cup preparation as Switzerland hand La Roja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSat9bpqVoBaBGY8clSHr9RQunonyM3m8pNfjKmzPGr3UO29LMP3kpvD2JbBd5aNbVKoEZisRAx" alt="Spain stutter in World Cup preparation as Switzerland hand La Roja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain were handed just their second home defeat in 57 games as Switzerland avoided Nations League relegation with a 2-1 win in Zaragoza.</p></div>
            </div>
        </a><a href='https://timesofoman.com/article/121635-switzerland-make-historic-win-over-spain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland make historic win over Spain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxe5ovPq5QA2x7MuT-BYxwe1l2Uv4i8tgIr8Lb_wj1QuHaS-QPT9ZZpAMwPGTGvRKaDoa54W-V" alt="Switzerland make historic win over Spain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shortly before the break, the Athletic Club goalkeeper did well to deny Xherdan Shaqiri a goal which would have doubled the Swiss lead. The attacker waltzed&nbsp;...</p></div>
            </div>
        </a><a href='https://english.mathrubhumi.com/sports/football/switzerland-beat-spain-in-nations-league-portugal-thrash-czech-republic-4-0-1.7904402'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland beat Spain in Nations League; Portugal thrash Czech ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ22EVPW2NEDAZVeN6e1Y-7NzK3334rfGeDL8hrlVigz_W6K0vg3sDkH3VTBWsP3AkoeLrJxYep" alt="Switzerland beat Spain in Nations League; Portugal thrash Czech ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zaragoza: Switzerland earned a 2-1 win over Spain in the Nations League on Saturday in Zaragoza to drag Luis Enrique&#39;s side off top spot in the group.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/spain-suffers-shock-2-1-loss-against-switzerland-in-nations-league/article65933396.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain upset 2-1 at home by Switzerland in Nations League</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfOSEGXrM1-0h_tPTEiYqaVxD3_zUpn6w_dBWjDyQkb93Gr5iJQWc8Ovi9erIuuVUoGUHbjaOF" alt="Spain upset 2-1 at home by Switzerland in Nations League" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last year&#39;s finalist is now second on eight points having been leapfrogged by Portugal, which breezed past Czech Republic 4-0 away to reach 10 points.</p></div>
            </div>
        </a>
        </Template></>;
}