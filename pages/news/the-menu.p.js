import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Menu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Menu"/>
        <meta name="description" content="Trending News about The Menu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Menu</h1>
            <Image width={800} height={500} src="https://media.architecturaldigest.com/photos/6377b6f02642cac6fb87c454/16:9/w_1280,c_limit/011_TM_SG_08904.jpg" alt="The Menu"/>
            <h3>Recent News</h3>
            <a href='https://www.architecturaldigest.com/story/the-menu-tasting-menu-gorgeous-restaurant'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Menu&#39;: We&#39;d Brave a Terrifying Tasting Menu to Eat at This ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0kBK1XER-Ujd5BYYedoNO9R7msnFImBRmYEp8CHbwnuDFrCYFHuzHLpRY3uona3W-HM7rAkmG" alt="&#39;The Menu&#39;: We&#39;d Brave a Terrifying Tasting Menu to Eat at This ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If only the austere eatery in “The Menu,” a dark satire starring Anya Taylor-Joy and Ralph Fiennes, were real.</p></div>
            </div>
        </a><a href='https://www.bonappetit.com/story/the-menu-movie-creators-interview'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Menu&#39; Movie Creators on What&#39;s Wrong With &#39;Foodie&#39; Culture</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqzBOnbVz3cpilmZ9Z04EJV9s_qYDiRn8jkQRVS7z5XHSI_P3N44nez23rgLvJ1rQIWj120gHm" alt="&#39;The Menu&#39; Movie Creators on What&#39;s Wrong With &#39;Foodie&#39; Culture" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In an interview with Bon Appétit, &#39;The Menu&#39; screenwriters Will Tracy and Seth Reiss discuss bad dinner guests.</p></div>
            </div>
        </a><a href='https://www.vulture.com/article/the-menu-review-a-deliciously-mean-satire.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Menu Is Deliciously Mean</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQIXOpmFpjVLlGOryCuwAtAxNvGMAL7OJIJ1b0Bhx6MYvBLQuOlFX8xPpEM695Nm80nHFZ1RYzqFA" alt="The Menu Is Deliciously Mean" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ralph Fiennes and Anya Taylor-Joy star in Mark Mylod&#39;s &#39;The Menu,&#39; a culinary culture satire as funny as it is dark.</p></div>
            </div>
        </a><a href='https://www.rogerebert.com/reviews/the-menu-movie-review-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Menu movie review &amp; film summary (2022) | Roger Ebert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfmRWcNAjwb2GvJwaRySmqEI9Ggf0KsixL12DqKA-ZS8iQyrcHFYnCm7A_fYxoY3f4hLF5gVnF" alt="The Menu movie review &amp; film summary (2022) | Roger Ebert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Director Mark Mylod satirizes a very specific kind of elitism here with his wildly over-the-top depiction of the gourmet food world.</p></div>
            </div>
        </a><a href='https://www.denofgeek.com/movies/the-menu-ending-explained/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Menu Ending Explained</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSME0W22Pd6r9YnpmOofaVMr6p7FBA6NAqKyqSIdUwj2Dm0JHH9SEGKFXku0yIz0mBYbR3gHRB_" alt="The Menu Ending Explained" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Director Mark Mylod helps us examine how the The Menu challenges you to think outside the prefix options.</p></div>
            </div>
        </a><a href='https://www.rollingstone.com/tv-movies/tv-movie-reviews/menu-review-anya-taylor-joy-1234630882/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Menu&#39; Serves Up the Last Supper of Class Warfare</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMEictu5wvcv5Vdnj1lRfetRV4FYcJjY5gC8JMRHpPMMdH_BXF-_JS-U-k1RLHPs6kuIDWC5jz" alt="&#39;The Menu&#39; Serves Up the Last Supper of Class Warfare" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Part scalpel-sharp satire and part medium-rare horror flick, this fine-dining thriller relies on a hot cast and a dish that&#39;s best served cold.</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/11/succession-director-mark-mylod-has-something-to-prove-with-the-menu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Succession&#39; Director Mark Mylod Has Something to Prove With &#39;The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRB8QiGDFjCIxiQb-FMdv_Odi7WcY4oDxuXZukEkZC9NFvTSFmKkqamhP4Z3bduIwHBRdEfx9vr" alt="&#39;Succession&#39; Director Mark Mylod Has Something to Prove With &#39;The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(From L-R): Aimee Carrero, Mark Mylod, and John Leguizamo on set of the film THE MENU. Photo by Eric Zachanowich. Courtesy of Searchlight Pictures.</p></div>
            </div>
        </a><a href='https://www.independent.ie/regionals/kerryman/news/guests-enjoy-delicious-taste-menu-at-cahernane-house-42154772.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guests enjoy delicious taste menu at Cahernane House</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4qDD1iq1Ds4bvb2dEg16tYTSMkABe1ejq5Sja_UQqLQu-psSM2I2rd4v6d_RoKj5K7FXmCQhX" alt="Guests enjoy delicious taste menu at Cahernane House" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cahernane House Hotel - under the watchful eye of its General Manager, Emer Corridan - recently played host to what was described as a “fabulous”&nbsp;...</p></div>
            </div>
        </a><a href='https://www.screendaily.com/news/uk-ireland-box-office-preview-cinemas-serve-up-the-menu-aftersun/5176665.article'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UK-Ireland box office preview: cinemas serve up &#39;The Menu&#39;, &#39;Aftersun&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTT1JjkJWqXaTiAMIlL8BO0MMwfaeA6xBsg2Ha3ZREMcJijN6gbGCIRUPsxG95Qfbg0r1nPN8T6" alt="UK-Ireland box office preview: cinemas serve up &#39;The Menu&#39;, &#39;Aftersun&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disney comedy-horror The Menu and Mubi awards favourite Aftersun are among the new titles at the UK-Ireland box office this weekend.</p></div>
            </div>
        </a><a href='https://www.image.ie/editorial/social-pictures-the-irish-premiere-of-the-menu-at-the-stella-cinema-615148'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Social Pictures: The Irish premiere of &#39;The Menu&#39; at The Stella ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIskj3JSiMtYUvY4onR5AMuGRo8AWevF4foFhauxt_r315d72EEg0r_2s6LtiQByiRVwr4dklL" alt="Social Pictures: The Irish premiere of &#39;The Menu&#39; at The Stella ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dublin food elite stepped out to join familiar faces on the red carpet for a special preview screening of Mark Mylod&#39;s &#39;The Menu&#39;</p></div>
            </div>
        </a>
        </Template></>;
}