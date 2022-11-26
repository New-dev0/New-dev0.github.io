import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Timothy Weah</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Timothy Weah"/>
        <meta name="description" content="Trending News about Timothy Weah" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Timothy Weah</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/25/gettyimages-1443479524_wide-bb01411a4cbc2d45cfd9b0161ec9f7f8d05fa198-s1400-c100.jpg" alt="Timothy Weah"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/25/1139179876/tim-weah-world-cup-qatar-george-weah-wales-england'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>For Tim Weah, a World Cup goal capped a family journey. Now he&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvb2ZMt6vedaUZTjmu_NHwH5yP5cHDmeRoB_VvgfOjgHwb9t7nUZEK95uf-JQyAgINcdlSxH1v" alt="For Tim Weah, a World Cup goal capped a family journey. Now he&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The U.S. will play England at 2 p.m. ET on Friday in Qatar, with Weah&#39;s parents in the stands. His father, George Weah, was a star player in the &#39;90s but&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derryjournal.com/sport/is-usa-world-cup-2022-player-timothy-weah-related-to-president-of-liberia-ex-ac-milan-striker-george-weah-3932454'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is USA World Cup 2022 player Timothy Weah related to President of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIr6S9xaeuziPuJDD-x2Yb4NIcHdQh_HvXdkgIoskbPOtXzlc6Htuq47qmxDy7Z1HHMBkCXYsl" alt="Is USA World Cup 2022 player Timothy Weah related to President of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>George Weah is the incumbent President of Liberia but before entering into the world of politics he was a professional footballer and played for AC Milan,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.scotsman.com/sport/is-usa-world-cup-2022-player-timothy-weah-related-to-president-of-liberia-ex-ac-milan-striker-george-weah-3932454'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is USA World Cup 2022 player Timothy Weah related to President of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIr6S9xaeuziPuJDD-x2Yb4NIcHdQh_HvXdkgIoskbPOtXzlc6Htuq47qmxDy7Z1HHMBkCXYsl" alt="Is USA World Cup 2022 player Timothy Weah related to President of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>George Weah is the incumbent President of Liberia but before entering into the world of politics he was a professional footballer and played for AC Milan,&nbsp;...</p></div>
            </div>
        </a><a href='https://football-italia.net/difference-and-comparison-between-timothy-weah-and-milan-legend-george/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Difference and comparison between Timothy Weah and Milan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCaX3SI6162F8lKgo6osGKBnJjdTeHQ5YvAU776AY4hkf0VOxigVXjNCcTwsHHmfJJf2mM8VWX" alt="Difference and comparison between Timothy Weah and Milan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ballon d&#39;Or-winning Milan legend George is one of the best African players of all time yet never featured in the tournament with Liberia. The two-time Serie A&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}