import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>John Aniston</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,John Aniston"/>
        <meta name="description" content="Trending News about John Aniston" /></Head><Template>
            <h1 style={{fontSize: "30"}}>John Aniston</h1>
            <Image width={800} height={500} src="https://static01.nyt.com/images/2022/11/16/world/15xp-aniston-01/15xp-aniston-01-facebookJumbo.jpg" alt="John Aniston"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/2022/11/15/arts/television/john-aniston-dead.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Aniston, &#39;Days of Our Lives&#39; Actor, Dies at 89</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLXcxCTQ5eTmrhY438TKMGEY4f-iZcyk8lhnSqnVdkWzL_tJZvJR1Vk4tC1qkFrPr0XW5Oa4fi" alt="John Aniston, &#39;Days of Our Lives&#39; Actor, Dies at 89" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr. Aniston, the father of the actor Jennifer Aniston, played a suave villain on the soap opera “Days of Our Lives” for more than three decades.</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/14/american-actor-victor-kiriakis-dies-aged-89'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>American actor John Aniston dies aged 89</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSlavF08uxXFO_E7-vG0HZYhCh7sBM9IhJ8rRBr_Wj77Ap5Y1wQehnWforUdlWjsYrXBhc9h_ae" alt="American actor John Aniston dies aged 89" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>News of his death was announced by his daughter, actress Jennifer Aniston on Monday.</p></div>
            </div>
        </a><a href='https://www.eonline.com/news/1354703/how-days-of-our-lives-will-pay-tribute-to-john-aniston-in-his-final-episode'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Days of Our Lives Will Pay Tribute to John Aniston In His Final ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTm6iQ6S9hIVQwBz7u2PVX4TKNBCvrA-4Xguz9ZSsZmxKeRcMZvFQXVw9WwUboicHCt5ocmCArJ" alt="How Days of Our Lives Will Pay Tribute to John Aniston In His Final ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of John Aniston&#39;s final episode on Dec. 26, Days of Our Lives explained how they&#39;ll honor the late actor. Find out all the details here.</p></div>
            </div>
        </a><a href='https://www.news24.com/channel/celebrities/legendary-days-of-our-lives-actor-john-aniston-dead-at-89-20221114'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Legendary Days of Our Lives actor John Aniston dead at 89</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIYP7GyH1hp-H_C3gvaREUEst01XI4brkrTB6aY8JliOdiSJABKzRrL9KSi1G92peGOIMeCXBX" alt="Legendary Days of Our Lives actor John Aniston dead at 89" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>John Aniston, the father of Jennifer Aniston and Days of Our Lives star, has died. He was 89 years old.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/14/1136525975/john-aniston-died-jennifer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Aniston, who starred in &#39;Days of Our Lives,&#39; has died at 89</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyIQ-9KZz2GHzBzmBsZ6mE2v_xPPh5cklowQwKNdUjrYY7XpYG38pC4Hjg18LjXkbxc65M11FT" alt="John Aniston, who starred in &#39;Days of Our Lives,&#39; has died at 89" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Sweet papa... John Anthony Aniston,&quot; his daughter Jennifer Aniston wrote in a tribute to the actor. &quot;You were one of the most beautiful humans I ever knew.</p></div>
            </div>
        </a><a href='https://globalnews.ca/news/9276162/john-aniston-death-dad-jennifer-aniston/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Aniston, &#39;Days of Our Lives&#39; star and dad to Jennifer Aniston ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-wN7s5Oj7Tu8YdBTIBbH2Ad1PxgyRaOACFaPNbluHLpUEW-4I9RicLVOdmP7pxww3xYtMLdEu" alt="John Aniston, &#39;Days of Our Lives&#39; star and dad to Jennifer Aniston ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last year John Aniston, father of Jennifer Aniston, was honoured with a Daytime Emmy Lifetime Achievement Award. He died on Nov. 11.</p></div>
            </div>
        </a>
        </Template></>;
}