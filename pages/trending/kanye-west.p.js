import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kanye West</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kanye West"/>
        <meta name="description" content="Trending News about Kanye West" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kanye West</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/adidas_1-one_to_one-one_to_one-sixteen_nine.jpg" alt="Kanye West"/>
            <h3>Recent News</h3>
            <a href='https://www.businesstoday.in/latest/world/story/why-was-adidas-under-pressure-to-cut-ties-with-rapper-kanye-west-350737-2022-10-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why was Adidas under pressure to cut ties with rapper Kanye West?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkE2t2hmrAIYcrTT_aDgBfeQnyvJx2j-eLszcrdcqiSJUj2malvdLtltpADvOQNvjf5FOvi-A9vw" alt="Why was Adidas under pressure to cut ties with rapper Kanye West?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>German sportswear major Adidas has reportedly decided to snap its ties with rapper Kanye West (now Ye) following his offensive and anti-semitic remarks he&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/business/adidas-terminates-deal-with-kanye-west-over-anti-semitic-remarks/articleshow/95080622.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adidas terminates deal with Kanye West over anti-Semitic remarks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaoo5KxnDsU1JnUOCpd-2kZodYn4_oVjNa9nsTttM9VuL1XxkBMiuWmplQlOcTijS78aIULryn" alt="Adidas terminates deal with Kanye West over anti-Semitic remarks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>German sportswear giant Adidas said Tuesday it was ending its partnership with Kanye West after a series of anti-Semitic outbursts by the controversial&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/business-63387607'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adidas cuts ties with rapper Kanye West over anti-Semitism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTejUGYElXf2LO9A8OA3YfhVjyYJ8ajvFPIc17XvP1Z_Ol4wfdff5fEW4vXAWJtWKmjHAldoAWu" alt="Adidas cuts ties with rapper Kanye West over anti-Semitism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The fashion giant said it does &quot;not tolerate antisemitism&quot; after the rapper&#39;s recent remarks.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/10/25/1131285970/adidas-ye-kanye-west-antisemitic'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adidas cuts ties with Ye over antisemitic remarks that caused an ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSG-jB1bD7pz-90c3k9b-QAU2T0gWjH66_e_OcIzGLo0N4vHSVfDoeK6iRi0e8cTQrcUAiy9iCF" alt="Adidas cuts ties with Ye over antisemitic remarks that caused an ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The decision follows a nearly decade-long relationship between the German sneaker giant and the rap superstar, also known as Kanye West.</p></div>
            </div>
        </a><a href='https://www.livemint.com/companies/news/adidas-terminates-partnership-with-kanye-west-over-rapper-s-anti-semitic-remarks-11666703129928.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adidas terminates partnership with Kanye West over rapper&#39;s anti ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHUyw0fY1iKsY-XPukgaW0dVpOzxPNzhneM8_Z9phJsqHTz8z6RqHj0WS6aP66blVWvA71tJus" alt="Adidas terminates partnership with Kanye West over rapper&#39;s anti ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Move ends a lucrative arrangement that has produced the popular Yeezy collection of sneakers.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/music/2022/oct/25/kanye-west-ye-billionaire-companies-cut-ties-adidas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West reportedly no longer a billionaire as companies cut ties</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwB7G0WT5CZFLvrT65foNsNi8gSqtCLH43sSkX_qcoltbHGhIttw9x-JsZIxXFeRCE-pMzADSm" alt="Kanye West reportedly no longer a billionaire as companies cut ties" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For years critics have denounced Ye for his rightwing views and comments – but only now are they costing him his career.</p></div>
            </div>
        </a>
        </Template></>;
}