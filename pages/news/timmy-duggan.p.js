import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Timmy Duggan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Timmy Duggan"/>
        <meta name="description" content="Trending News about Timmy Duggan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Timmy Duggan</h1>
            <Image width={800} height={500} src="https://img.resized.co/breaking-news/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5icmVha2luZ25ld3MuaWVcXFwvcHJvZFxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMDdcXFwvMTIxNzA5MTVcXFwvZ2VuZXJpY2NvdXJ0c2NhbGVzb2ZqdXN0aWNlLWxhcmdlLmpwZ1wiLFwid2lkdGhcIjoxMjAwLFwiaGVpZ2h0XCI6NjI3LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuYnJlYWtpbmduZXdzLmllXFxcL2ltYWdlc1xcXC9uby1pbWFnZS5wbmdcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiNjQxZGQ0ZDY2NjVhZWM0Mzg3ZjM1Y2I2Y2JlZmI5MTY2NTE2ZDAzYiJ9/ex-badminton-champion-who-paid-mothers-for-access-to-children-jailed-for-sexual-abuse-offences.jpg" alt="Timmy Duggan"/>
            <h3>Recent News</h3>
            <a href='https://www.breakingnews.ie/ireland/ex-badminton-champion-who-paid-mothers-for-access-to-children-jailed-for-sexual-abuse-offences-1398332.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-badminton champion who paid mothers for access to children ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSlDZywfhx76yrsWN6gWYjAtli_4evjXSDGrjACf0jPhI_hV2JbpqEZsa-kB3aMwIdUya6T0dYK" alt="Ex-badminton champion who paid mothers for access to children ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Timmy Duggan, (35), of Mountain Lodge, Annagh, Tralee, Co Kerry, originally from Moyvane, also tried to directly solicit sex acts from young children by&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/crime/paedophile-mother-who-sold-him-28602677'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paedophile and mother who sold him naked photos of her children ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrXb2pUqsycIIThuXWfpHmlW_8bItfQvDLLVK2MFLTM0D3F_HzZ3hTPH3N2tA9aOtD2q7ObtZm" alt="Paedophile and mother who sold him naked photos of her children ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Both of them have been added to sex offenders register indefinitely. Four-time Kerry badminton champion Duggan paid women to access their children for his own “&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rte.ie/news/courts/2022/1128/1338765-duggan-sentence/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-badminton champion jailed for child abuse offences</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyBPIXk32twIP_pkVffqgi-YHb_lieeVGk-3XT-WvtGSd3rhxQdJLGFvg0xo9jMF3HHxqFIXS6" alt="Ex-badminton champion jailed for child abuse offences" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 35-year-old man who paid women to let him sexually abuse their children has been sentenced to eight years in prison, with the final year suspended.</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/courtandcrime/arid-41016737.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Kerry badminton champion gets seven years for paying women ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2s2WwSiZ6f1gtuGi2COeKIv2aoxaCqCdhQgK7blP9awf30u3PIG1DOLEmwaktHF2JxA1bsOAJ" alt="Ex-Kerry badminton champion gets seven years for paying women ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A mother who sold naked photos of her children to Timmy Duggan jailed for three years with final 18 months suspended.</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/crime-law/courts/2022/11/28/former-badminton-champion-jailed-for-seven-years-for-sex-offences-against-children/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Co Kerry paedophile who paid women for access to children jailed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMySdCoweduNrdFalyvrmB7scZ9AU9cw7TiccG6HmA0Vfp4QLW2B-IVwnW2YgTsCQoB59tZcPy" alt="Co Kerry paedophile who paid women for access to children jailed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Woman who sold naked photographs of her children to Timmy Duggan given three-year sentence with 18 months suspended.</p></div>
            </div>
        </a><a href='https://www.limerickpost.ie/2022/11/28/paedophile-who-paid-women-to-access-their-children-handed-himself-over-to-limerick-gardai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paedophile who paid women to access their children handed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbPjogNt-TAVg7r8CYq6xoj0Di_SpNZdzT11UJvY6YhlJTl6UERTCc5z0zSACHY3agszUtEXQ4" alt="Paedophile who paid women to access their children handed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Timmy Duggan who pleaded guilty to 22 sample charges of child sexual exploitation, sexual assault and possession of child pornography. PAEDOPHILE Timmy Duggan,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiokerry.ie/news/kerry-man-sentenced-to-eight-years-with-one-suspended-for-22-crimes-including-child-sexual-assault-307608'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kerry man sentenced to eight years with one suspended for 22 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQO-Yr8kp7oTIWQj3_XiVauasnRAzVtKSCuiNS9jmhbh-JtFUBi9DtZVzP7eqm3mVjk1y65KApR" alt="Kerry man sentenced to eight years with one suspended for 22 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Kerry man has been sentenced to eight years in prison with the final year suspended after pleading guilty to 22 crimes, including sexual assault of a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}