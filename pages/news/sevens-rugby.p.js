import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sevens Rugby</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sevens Rugby"/>
        <meta name="description" content="Trending News about Sevens Rugby" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sevens Rugby</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7847/73a9f3c6c03049c592e45d8a418470e4.jpg" alt="Sevens Rugby"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/sport/rugby/sevens/desert-kings-blitzboks-power-over-ireland-to-win-record-10th-dubai-sevens-crown-20221203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Desert kings! Blitzboks power over Ireland to win record 10th Dubai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6d5J9oSJ_woHRqxwmA0U1tvzkFYCBckM0CYkCgZPLVWwV7XYnKusZgCl71r1yMfYi2mbkCvRT" alt="Desert kings! Blitzboks power over Ireland to win record 10th Dubai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Blitzboks put on a dominate performance against Ireland to power their way to a 21-5 victory to be crowned champions in the Dubai Sevens final on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/capetimes/news/sevens-rugby-tournament-is-set-to-make-a-grand-comeback-7c76ef73-0daa-4942-aa41-12ac9d9a215d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sevens rugby tournament is set to make a grand comeback</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTClEnD_WvPDgwwPvXwNohqoKVsrCZtbSED42c-wDjlL9b9bG3hrOwOgZRB2cTdMxlqdjhCKZ5j" alt="Sevens rugby tournament is set to make a grand comeback" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The countdown to the return of the popular HSBC Cape Town Sevens has reached fever pitch, with just a week to go before the 2022 edition kicks off.</p></div>
            </div>
        </a><a href='https://www.world.rugby/sevens-series/news/777894/defending-champions-blutzboks-australia-reign-supreme-at-emirates-dubai-7s?lang=en'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Defending champions reign supreme at Emirates Dubai 7s - HSBC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQfA9sIZkBWL-CZClAfFYX-FSYziOFPyT7ZpVpbRxKHBPO9uGe3qEUMoUrDeEpCYscWc3oESdC" alt="Defending champions reign supreme at Emirates Dubai 7s - HSBC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia&#39;s women began their HSBC World Rugby Sevens Series title defence on a winning note as they claimed an unprecedented hat-trick of titles in Dubai&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/rugby/sevens/watch-hot-stepper-ricardo-duarttee-heats-up-dubai-sevens-to-help-blitzboks-see-off-samoa-2ee88453-6843-4ecf-8788-f5d3891ac31d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Hot-stepper Ricardo Duarttee heats up Dubai Sevens to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEi6oCvT3Bnj8filLWige8c4zlcXIoaQ3wJht0qWDX3wM0C5BAa_h_NA_gMv_3n3S2vH6CPeU0" alt="WATCH: Hot-stepper Ricardo Duarttee heats up Dubai Sevens to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cape Town – Ricardo Duartee was the star of the show as the Blitzboks hit back from 12-0 down to pull off a hard-fought 24-19 victory over Samoa in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/aussie-women-beat-nz-in-dubai-sevens-final/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aussie women beat NZ in Dubai Sevens final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXoqZzsVVz08DgD42WuNb9x2aG4hh66HmJDB0l99oZwybnwuNni357wPdjUwzUciSly4oSDSID" alt="Aussie women beat NZ in Dubai Sevens final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia&#39;s all-conquering rugby sevens women have crowned themselves “queens of the desert” after winning the Dubai Sevens for the third year in succession&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/rugby/sevens/blitzboks-drawn-with-fiji-for-cape-town-sevens-20221204'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blitzboks drawn with Fiji for Cape Town Sevens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPzIwNeTHMLUjGXxJHgGXCoqy3SojlcjQNcE3xrjZx6YNYRG_MaVx2EgzJLeB0VT8wM41E1xCw" alt="Blitzboks drawn with Fiji for Cape Town Sevens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dubai Sevens champions South Africa return home this coming weekend for the Cape Town Sevens and will contest a tough Pool A which includes Fiji.</p></div>
            </div>
        </a><a href='https://www.sarugbymag.co.za/blitzboks-rally-book-dubai-final-spot/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blitzboks rally to book Dubai final spot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSFZh9y3JF5W_KyF8JK-mScMuo8EyvYLoagsVn1SNkzPuDGIsc6gf0NckMbmu-mBZt6-m3Yczma" alt="Blitzboks rally to book Dubai final spot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Defending champions South Africa will face Ireland in an exciting finale to the Dubai Sevens after an injury time try from Shilton van Wyk clinched victory&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insidethegames.biz/articles/1131217/rugby-sevens-dubai-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia and South Africa win World Rugby Sevens Series titles in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQC8ocnasGCEdkFK0NbPPCXobn3K5IBZtFVMoP0HH2ZoAPWnnvBB9u-Waol7bnP7SintKrqwEke" alt="Australia and South Africa win World Rugby Sevens Series titles in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the women&#39;s tournament Australia continued their stellar form in a year that has already seen them take Commonwealth Games and Rugby World Cup sevens gold&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newshub.co.nz/home/sport/2022/12/rugby-sevens-all-blacks-sevens-cult-hero-kurt-baker-steps-down-after-dubai-tournament.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby Sevens: All Blacks Sevens cult hero Kurt Baker steps down ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAGqlyNjHB9gKi_3T4F5tYHZgqnO4UEtaABM5JX4N84e7F4q49yK4rRuAH9KgOlLxpawb2FEZf" alt="Rugby Sevens: All Blacks Sevens cult hero Kurt Baker steps down ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The NZ veteran became known for his unique celebration ritual.</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/sport/rugby/sevens/blitzboks-handed-tough-draw-cape-town-sevens-result-breaking-4-december-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blitzboks handed tough draw at Cape Town Sevens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRBg_csSzkB2YK2NjnQrkVePabi2pHWwOA4PwWWWDKrHAlZtT41MGhEOKqt0sU5Sffosf0Whqj" alt="Blitzboks handed tough draw at Cape Town Sevens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Springbok Sevens side have been handed a tough assignment ahead of next weekend&#39;s Cape Town Sevens in the Mother City.</p></div>
            </div>
        </a>
        </Template></>;
}