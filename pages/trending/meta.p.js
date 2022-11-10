import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Meta</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Meta"/>
        <meta name="description" content="Trending News about Meta" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Meta</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95403778,width-1070,height-580,imgsize-32432,overlay-ettech/photo.jpg" alt="Meta"/>
            <h3>Recent News</h3>
            <a href='https://about.fb.com/news/2022/11/mark-zuckerberg-layoff-message-to-employees/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mark Zuckerberg&#39;s Message to Meta Employees</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mark Zuckerberg&#39;s Message to Meta Employees" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Zuckerberg shares some of the most difficult changes we&#39;ve made in Meta&#39;s history.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/tech/technology/meta-to-layoff-11000-employees-says-mark-zuckerberg/articleshow/95403793.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Facebook parent Meta to lay off over 11000 employees: CEO Mark ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSN6a_x5eQMjqXsLkszd_5tcec8bOmM2EwvOyK7fzmQLchxq28OJulgDHa1WEMaJS-USjYiPXY4" alt="Facebook parent Meta to lay off over 11000 employees: CEO Mark ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meta layoffs will impact about 13% or over 11000 of the company&#39;s employees, CEO Mark Zuckerberg said. Meta said it would pay 16 weeks of base pay plus two&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/09/meta-to-lay-off-more-than-11000-thousand-employees.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meta laying off more than 11000 employees: Read Zuckerberg&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSv05Oi-jucAz1hpqrk4-R5XCg-rxNddMsi9hNt-D-vSqoT7jLIj73JvOCKzBVsTVRAA1BeEOcz" alt="Meta laying off more than 11000 employees: Read Zuckerberg&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meta is laying off 13% of its staff, or more than 11000 employees, CEO Mark Zuckerberg told employees on Wednesday.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/business/Industry/facebook-owner-meta-lays-off-13-per-cent-of-its-employees-announces-hiring-freeze-for-q1/article66115274.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Facebook owner Meta lays off 13% of its employees, announces ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStwKvUYNpfdnZguwH46KglfIjHg2Qy3vbJtzu_Xwkb3Q4RjUDxl4E0DawPvRkywcESw1og0RM_" alt="Facebook owner Meta lays off 13% of its employees, announces ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Facebook parent Meta is laying off 13% of its employees as it contends with faltering revenue and broader tech industry woes.</p></div>
            </div>
        </a><a href='https://www.livemint.com/companies/news/facebook-owner-meta-to-cut-more-than-11-000-jobs-in-one-of-biggest-us-layoffs-this-year-11667992229693.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Facebook owner Meta to cut more than 11000 jobs in one of biggest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRe0PgXu6LQ3BeCyI6FsxZKmZQnRwkCtF5WzNC23W1IpKXitZcBqPoPcdz0RMClLEFwQiF_q_ur" alt="Facebook owner Meta to cut more than 11000 jobs in one of biggest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In one of the biggest tech layoffs of 2022, Facebook parent Meta Platforms Inc on Wednesday said that it will let go of 13% of its workforce, or more than&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/business/business-diary/meta-ceo-mark-zuckerberg-confirms-laying-off-employees-today'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meta Layoffs: मेटा से बाहर किए जाएंगे 11000 कर्मचारी, जकरबर्ग ने माफी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8XflwUWfQ0v4XrDe4tqIQHf3_a56LIVqhWZviPf8MFRSR6iCOxK9EePi1cAXiEvSwqhQcAyts" alt="Meta Layoffs: मेटा से बाहर किए जाएंगे 11000 कर्मचारी, जकरबर्ग ने माफी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zuckerberg confirms Meta Layoffs: फेसबुक की पेरेंट कंपनी मेटा अपने एक हजार कर्मचारियों को बाहर&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/explained/meta-to-fire-11000-people-why-facebook-parent-is-cutting-jobs-what-next-8259364/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meta to fire 11000 people: Why Facebook parent is cutting jobs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQa4JqWtyjqcAo856rejxqu1U2exsaSmGCRaw8uxDRU2RDADNkt83Xl40ZZWfCK4VsWDBZciqJP" alt="Meta to fire 11000 people: Why Facebook parent is cutting jobs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Why was Meta forced to fire thousands of its employees, and what does this signal about the economy? How will Indian workers be affected? We explain.</p></div>
            </div>
        </a><a href='https://www.abplive.com/business/facebook-parent-company-meta-sacked-11000-employees-and-freezes-new-hiring-2255775'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Facebook Meta Layoffs: 11000 कर्मचारियों को Meta ने नौकरी से निकाला ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzr2BZixKV_00QPUCvnfyNQIiEOY6ZQtqtWbSHgi72ktrtA4avRIR7cRAgctv1u3Ph39Y1AQUq" alt="Facebook Meta Layoffs: 11000 कर्मचारियों को Meta ने नौकरी से निकाला ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meta Sacks Employees: मेटा की सीईओ मार्क जुबरबर्ग ने 11000 कर्मचारियों की गई छंटनी के लिए माफी&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/world/america-facebook-lays-off-11-thousand-staffs-23192638.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meta Job Cut: फेसबुक की पैरेंट कंपनी मेटा में 11 हजार कर्मचारियों की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFjc8NVpak8w9QglYNJSSLHaxxLTQcHJh6PEdaeJSz3vvZcRUFVp_IQuSkqZIFXVSoe2tWpNQd" alt="Meta Job Cut: फेसबुक की पैरेंट कंपनी मेटा में 11 हजार कर्मचारियों की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एलन मस्क की ट्विटर समेत दिग्गज टेक कंपनियों में नौकरी की कटौती हुई है लेकिन मेटा के 18&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/india/trends/i-got-this-wrong-mark-zuckerberg-message-to-meta-employees-after-layoff-of-11000-employees-875921.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meta के 11000 कर्मचारियों की छंटनी का ऐलान, CEO मार्क जकरबर्ग बोले ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKGYriKWCUxXDI5xYDsiyNEnAlAx1fcQ0RcxQdw6iIXjH7eyFhY1yrID-2zV63hHsJMFXPDwzg" alt="Meta के 11000 कर्मचारियों की छंटनी का ऐलान, CEO मार्क जकरबर्ग बोले ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Facebook की पैरेंट कंपनी मेटा के CEO मार्क जकरबर्ग ने कहा, &quot;मैंने अपनी कंपनी में कर्मचारियों&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}