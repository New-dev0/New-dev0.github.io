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
                <p style={{marginLeft: "15px"}}>Shilton van Wyk crossed for two tries as South Africa beat Ireland 21-5 to win the second leg of the World Rugby Sevens Series in Dubai on Saturday while&nbsp;...</p></div>
            </div>
        </a><a href='https://www.world.rugby/sevens-series/news/777894/defending-champions-blutzboks-australia-reign-supreme-at-emirates-dubai-7s?lang=en'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Defending champions reign supreme at Emirates Dubai 7s - HSBC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQfA9sIZkBWL-CZClAfFYX-FSYziOFPyT7ZpVpbRxKHBPO9uGe3qEUMoUrDeEpCYscWc3oESdC" alt="Defending champions reign supreme at Emirates Dubai 7s - HSBC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia&#39;s women began their HSBC World Rugby Sevens Series title defence on a winning note as they claimed an unprecedented hat-trick of titles in Dubai&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sarugbymag.co.za/blitzboks-rally-book-dubai-final-spot/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blitzboks rally to book Dubai final spot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSFZh9y3JF5W_KyF8JK-mScMuo8EyvYLoagsVn1SNkzPuDGIsc6gf0NckMbmu-mBZt6-m3Yczma" alt="Blitzboks rally to book Dubai final spot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Defending champions South Africa will face Ireland in an exciting finale to the Dubai Sevens after an injury time try from Shilton van Wyk clinched victory&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/aussie-women-beat-nz-in-dubai-sevens-final/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aussie women beat NZ in Dubai Sevens final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXoqZzsVVz08DgD42WuNb9x2aG4hh66HmJDB0l99oZwybnwuNni357wPdjUwzUciSly4oSDSID" alt="Aussie women beat NZ in Dubai Sevens final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia&#39;s all-conquering rugby sevens women have crowned themselves “queens of the desert” after winning the Dubai Sevens for the third year in succession&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/rugby/sevens/watch-hot-stepper-ricardo-duarttee-heats-up-dubai-sevens-to-help-blitzboks-see-off-samoa-2ee88453-6843-4ecf-8788-f5d3891ac31d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Hot-stepper Ricardo Duarttee heats up Dubai Sevens to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEi6oCvT3Bnj8filLWige8c4zlcXIoaQ3wJht0qWDX3wM0C5BAa_h_NA_gMv_3n3S2vH6CPeU0" alt="WATCH: Hot-stepper Ricardo Duarttee heats up Dubai Sevens to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cape Town – Ricardo Duartee was the star of the show as the Blitzboks hit back from 12-0 down to pull off a hard-fought 24-19 victory over Samoa in the&nbsp;...</p></div>
            </div>
        </a><a href='https://rugby.ca/en/news/2022/12/canada-s-sevens-teams-conclude-campaign-in-dubai-prepare-for-cape-town'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Canada&#39;s Sevens Teams conclude campaign in Dubai, prepare for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5cJg3h7LReq6JO5QaLrXOMiMfCc1FNS7qnLBLa9bdqpe-CsyHTVVMVx_WwaM91nUzNNEaYZNI" alt="Canada&#39;s Sevens Teams conclude campaign in Dubai, prepare for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dubai Sevens tournament concluded on Saturday morning with Canada&#39;s Women&#39;s Sevens Team finishing in ninth place and Canada Men&#39;s Sevens Team finishing&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}