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
                <p style={{marginLeft: "15px"}}>The championship was secured at the U.S. Grand Prix, with three races to spare, a day after company founder and team owner Dietrich Mateschitz died aged 78. Max&nbsp;...</p></div>
            </div>
        </a><a href='https://www.autosport.com/f1/news/hamilton-will-take-mercedes-to-the-top-in-2023-f1-title-fight-rallying-cry/10389418/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hamilton &quot;will take Mercedes to the top&quot; in 2023 F1 title fight rallying ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSF6GFnReuD93ViV4yocOKsbdZVJVgBpP9Ry7JbvsnmASWSY15UfR-8IeRrnbV_FO18YTkg-DZb" alt="Hamilton &quot;will take Mercedes to the top&quot; in 2023 F1 title fight rallying ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lewis Hamilton has sent out a rallying cry to Mercedes and says &#39;when they build the car I will take it to the top&#39; after defeat to Max Verstappen in the US&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/united-states-gp-verstappen-passes-hamilton-for-13th-win-of-f1-2022/10389337/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>United States GP: Verstappen passes Hamilton for 13th win of 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQb-4JaxRzovWNdFx59qejRT4aG1efe8ukRnVhHa-CPV0k8YGqE2DiVf4duAT7tLyiySCyErVfS" alt="United States GP: Verstappen passes Hamilton for 13th win of 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen overcame a botched pitstop to hunt down and defeat Mercedes&#39; Lewis Hamilton late on in Formula 1&#39;s 2022 US Grand Prix, sealing Red Bull&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://racingnews365.com/2022-f1-united-states-grand-prix-race-results'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 F1 United States Grand Prix Race results</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRF_15fy-RawKZvw6PCPDkq3kM6c59Tpho2MKEW-YHBp84CS-QZG9YW6_4aUaa70ahDxyTNuOUM" alt="2022 F1 United States Grand Prix Race results" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are the full race results from an enthralling United States Grand Prix, where Max Verstappen took a remarkable comeback victory over Lewis Hamilton.</p></div>
            </div>
        </a><a href='https://www.formula1.com/en/latest/article.its-a-new-approach-to-sports-reporting-how-will-arnett-is-bringing-comedy-to.6NnCOq3QF1XCeo0AjwM1J8.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;It&#39;s a new approach to sports reporting&#39; – How Will Arnett is bringing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSB7jLQnY5Cm2y8rsyCG5nMfu5S4YG4vDdrFnsoAZl6tJD2aIpv_YxL5zXhNB4dwfLaZqh42dhQ" alt="&#39;It&#39;s a new approach to sports reporting&#39; – How Will Arnett is bringing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But with the Toronto-born actor now the star of Amp radio show Fast &amp; Loose, in which he – along with co-hosts Michelle Beadle, Katie Osborne, The Kid Mero and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/live/2022/oct/23/us-grand-prix-f1-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Max Verstappen wins US Grand Prix for 13th victory of F1 season ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQclEQG_D7hNsKCtaJhKHCSwGrahVuu6_hBSZprTSqV201hk9v-FVd7lMmb8n1PXwOKu-iI1zWm" alt="Max Verstappen wins US Grand Prix for 13th victory of F1 season ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lap-by-lap report: Carlos Sainz was on pole but was out of the race early as world champion Max Verstappen notched yet another victory.</p></div>
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