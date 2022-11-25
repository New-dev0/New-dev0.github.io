import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Measles</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Measles"/>
        <meta name="description" content="Trending News about Measles" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Measles</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/11/24/600x338/INDIA-HEALTH-VACCINE-measles_1669248015179_1669303333326_1669303333326.jpg" alt="Measles"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/india/mumbai-measles-bmc-lists-high-risk-areas-as-cases-spike-details-here-11669302893502.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai measles: BMC lists &#39;high-risk&#39; areas as cases spike. Details ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYcrozRpXOfWUplltoAYlXZSSe3033ksB3JZ5ntGiclfEy4g7paDG5yB3fKLzPiJGvhZH3B4q5" alt="Mumbai measles: BMC lists &#39;high-risk&#39; areas as cases spike. Details ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The high-risk area is M-East &amp; few other parts of Mumbai that have reported a high number of cases.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/measles-outbreak-exposes-poor-immunisation-in-kerala-s-malappuram-101669293896779.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Measles outbreak exposes poor immunisation in Kerala&#39;s Malappuram</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTI7w_pmvjNBXexmkGP-LEIieEdYZ57mSxSmQON15JONtnb9GPkX6bZMGmVkEslN1IYYM-MUcdB" alt="Measles outbreak exposes poor immunisation in Kerala&#39;s Malappuram" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While experts believe that measles is not a life-threatening disease, it can turn into pneumonia, bronchitis and serious chest infections in some children&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/delhi-news/missed-shots-during-covid-19-behind-surge-in-measles-cases-101669313571338.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Missed shots during Covid-19 behind surge in measles cases</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9E-845mn3Mu_Q69Oh5AchWmDcVtuGxRs0v5LmLSvAhRTeWrRxF4baVfj9k5_tNeeqBBVXNHAu" alt="Missed shots during Covid-19 behind surge in measles cases" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In recent weeks, at least four states have reported a sharp surge in measles infections and deaths. The Union government has rushed teams to four states,&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/mumbai/one-more-child-dies-of-measles-in-govandi-toll-rises-to-13-in-mumbai-8288338/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>One more child dies of measles in Govandi, toll rises to 13 in Mumbai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvWAWLMNyxDMWZ3eeYC6UqNwGRB5NnKzvSLQqgAd7dGdbQzYMTepu0kbxxcDUca9RGwCcLtWKD" alt="One more child dies of measles in Govandi, toll rises to 13 in Mumbai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The child was admitted to a civic-run hospital on November 20 after he developed fever, cough, cold, maculopapular rash and respiratory problems.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/kerala/measles-cases-in-unvaccinated-children-rise-in-malappuram/article66179119.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Measles cases in unvaccinated children rise in Malappuram</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTz299AbzWMrEH4CqJK8mP9ufOqXh9tsuzH89k_JrQkXHC0LfeSqBhRpqFOcn8bsxbV6ehITcl0" alt="Measles cases in unvaccinated children rise in Malappuram" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>200-odd cases reported recently in the 5-17 age group; officials say most patients are from areas where local residents have resisted vaccination.</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/national/measles-outbreak-in-mumbai-12-patients-died-number-of-infected-reached-233-prt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Measles Outbreak: मुंबई में तेजी से फैल रहा खसरा, 12 मरीजों की मौत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvjhTuG_vD0DzBDSjksRFv01U1nrMMqeFDrufcHM7Aa2Ue0rTJJvmddSCX2SajoEuo3O1Sle61" alt="Measles Outbreak: मुंबई में तेजी से फैल रहा खसरा, 12 मरीजों की मौत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मुंबई और इसके आसपास के इलाकों में खसरे का प्रकोप बढ़ रहा है. गुरुवार को मुंबई में खसरे&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/current-affairs/mumbai-measles-outbreak-missed-vaccination-here-all-you-need-to-know-122112401456_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai measles outbreak, missed vaccination: Heres all you need ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRi5FQt4DSpkwSFozJY0M5but0uYjoaIplCHcGLXQDPy27ZPFvR2Iv51UgREEBYbpoQ0k1N81rz" alt="Mumbai measles outbreak, missed vaccination: Heres all you need ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to US Centers for Disease Control and Prevention (CDC) data, currently India has the highest number of cases in the world at 9489.</p></div>
            </div>
        </a><a href='https://www.who.int/news/item/23-11-2022-nearly-40-million-children-are-dangerously-susceptible-to-growing-measles-threat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nearly 40 million children are dangerously susceptible to growing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgrUHsy9c_7C1Eoz1zZNhqgalo4NrMU-omWM3OeWaS7DKSnfz4D_2XTGr6bE3TycUtmSsfQkaS" alt="Nearly 40 million children are dangerously susceptible to growing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Measles vaccination coverage has steadily declined since the beginning of the COVID-19 pandemic.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/measles-now-an-imminent-global-threat-as-millions-of-children-miss-vaccine-who-11669247050243.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Measles now an imminent global threat as millions of children miss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJqEAYqlt4oDJAG1-zSrHSI-Yen4i4Nftrzqk9mzhXjBDSn39-nKlchB3KOHemnLnPsR6q3KdL" alt="Measles now an imminent global threat as millions of children miss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Measles outbreak: In 2021, officials said there were about nine million measles infections and 128000 deaths worldwide.</p></div>
            </div>
        </a><a href='https://metrophiladelphia.com/who-cdc-40-million-kids-miss-measles-vaccine-dose/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WHO, CDC: A record 40 million kids miss measles vaccine dose ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyOtjOunfk-euk_k89Co1O5K0Q7Ce8EoaERBmIY3d0OzEYh3z9d6wFKkty8wykEVHAfnvnwkwb" alt="WHO, CDC: A record 40 million kids miss measles vaccine dose ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Health Organization and the U.S. Centers for Disease Control and Prevention say measles immunization has dropped significantly since the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}