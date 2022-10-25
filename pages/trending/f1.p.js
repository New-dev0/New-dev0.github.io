import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1"/>
        <meta name="description" content="Trending News about F1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1023%2Fr1080255_1296x729_16%2D9.jpg" alt="F1"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/f1/story/_/id/34861450/red-bull-claims-first-f1-constructors-title-2013-dedicates-dietrich-mateschitz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Bull claims first F1 constructors&#39; title since 2013, dedicates it to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBrcpzt3ZslZ7PsLpQp5zLekeOmvho0i8oMY8Wk48an2U-1r2QfufEuxCFB8KeBPmK_z92_NFB" alt="Red Bull claims first F1 constructors&#39; title since 2013, dedicates it to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Red Bull has clinched its first Formula One constructors&#39; championship since 2013, one day after the death of company co-founder and owner Dietrich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.formula1.com/en/latest/article.villeneuves-1997-championship-winning-williams-show-car-up-for-sale-on-f1.5tWbXYux5HZMmH31k0oWLZ.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Villeneuve&#39;s 1997 championship-winning Williams show car up for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSErl4pyS_NiGBIKCMnLZ7qbsPy54Q6jGRuvrwedDbb_RpZAY0hGtD9VdyFfoHuHO3TZQghwnlf" alt="Villeneuve&#39;s 1997 championship-winning Williams show car up for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 1997 Williams FW19 show car, which features the original wheels, brakes, pedals and steering wheel that propelled Jacques Villeneuve to his first and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxsports.com.au/motorsport/formula-one/aussie-rising-star-set-for-first-f1-outing-this-weekend/news-story/5d29aa40075a2c0042cb964657665929'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aussie rising star set for first F1 outing this weekend</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTerhrtd7XiE0u1_J9D_60cQr139T3a6ic7_rzGlzwIGuvLRE-mhGI2rzGX7KvP83rSNLP8ZEqW" alt="Aussie rising star set for first F1 outing this weekend" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doohan, the son of motorcycling legend Mick, is now the Alpine driver academy&#39;s most senior prospect after the sudden defection of fellow Australian Oscar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/united-states-f1-grand-prix-max-verstappen-gets-record-tying-13th-victory-in-pics-photos-232212'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>United States F1 Grand Prix: Max Verstappen Gets Record-Tying ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcIIX1xqy6YXMboDhPaDxnSRXbuCMeMMpOROCHqCeecnMPOPvw9er3MEC3NYTf-0lgbAfqlUkt" alt="United States F1 Grand Prix: Max Verstappen Gets Record-Tying ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen and Red Bull started the United States Grand Prix determined to honor the memory of founder and team owner Dietrich Mateschitz and the racing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/10-things-we-learned-from-the-2022-united-states-grand-prix/10389972/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ten things we learned from the 2022 United States Grand Prix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfkJ9rswJVhx0C4Psb-UaLl0nIO_fFiayRAiPOdoVYVKqYGVRoUMAZmHuyHs3pEtwFRON3YYlK" alt="Ten things we learned from the 2022 United States Grand Prix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Formula 1&#39;s second trip to the United States in 2022 resulted in another win for Max Verstappen - but Lewis Hamilton gave him a run for his money in a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/racing/f1briefings/news/f1-fan-compares-drivers-to-top-gear-presenters-in-hysterical-tweet-lm22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 Fan Compares Drivers To Top Gear Presenters In Hysterical Tweet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQy0qmOSL-LJaJb6twhlbS5EdnZk3lIHeSn1vq7q8ORnAVnoFGoTFdFRp9KG-BFpEXxLA4cqBHz" alt="F1 Fan Compares Drivers To Top Gear Presenters In Hysterical Tweet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>First of all, they have likened Alpine driver, Fernando Alonso, to Jeremy Clarkson. One argument for this is that Alonso &quot;loves chaos and POWER&quot;, and just this&nbsp;...</p></div>
            </div>
        </a><a href='https://www.autosport.com/f1/news/autosport-podcast-f1-united-states-grand-prix-review/10389750/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autosport Podcast: F1 United States Grand Prix review</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcvX4-3o77Dw-ViZWwuXHovgOP4ewaFChGQwW5cbQ4Jd-4g4zCxdzpkXyLdgiW_6inhvCwKPiC" alt="Autosport Podcast: F1 United States Grand Prix review" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a frantic race, two safety car periods disguised how dominant Verstappen could have been, and then a slow pitstop meant the 2022 F1 world champion had to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/doohan-set-for-mexico-abu-dhabi-f1-free-practice-runs-with-alpine/10389894/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doohan set for Mexico, Abu Dhabi F1 free practice runs with Alpine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbx1xl2IoeKFZZCjVp0xFKETxNor7TsV5_11GRnN8w2oQzdSE6-hI_DrCApWdrs7N8298VdDny" alt="Doohan set for Mexico, Abu Dhabi F1 free practice runs with Alpine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Doohan is set to run rookie FP1 sessions for Alpine in Mexico and Abu Dhabi, marking the Australian&#39;s public Formula 1 debut.</p></div>
            </div>
        </a><a href='https://punemirror.com/sports/others/Red-bull-F1-team-clinch-constructor%E2%80%99s-title-in-US/cid8965561.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red bull F1 team clinch constructor&#39;s title in US</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLlsvsXfo4ynlvqFrctmXws7O9U4J6-_zqRn6jGIeM74oPr96B3LfHawV_GnLoFk_sOCYCjBXo" alt="Red bull F1 team clinch constructor&#39;s title in US" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dutch Formula 1 driver and 2022 champion Max Verstappen emerged victorious at the end of an action-packed United States Grand Prix, fending off Mercedes&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.carandbike.com/news/f1-red-bull-win-first-constructor-s-title-in-9-years-as-verstappen-prevails-at-cota-3203178'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: Red Bull Win First Constructor&#39;s Title In 9 Years As Verstappen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTimtY__b7mHUimU8FiLPqmLffKca7o1BixUL8Di1MN76E0u6nogRNHA5OcHf9sNmYxi8VGhBlc" alt="F1: Red Bull Win First Constructor&#39;s Title In 9 Years As Verstappen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Verstappen came back to win after a botched pitstop meant he found himself behind the Ferrari of Charles Leclerc.</p></div>
            </div>
        </a>
        </Template></>;
}