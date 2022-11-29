import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ohio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ohio"/>
        <meta name="description" content="Trending News about Ohio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ohio</h1>
            <Image width={800} height={500} src="https://www.cleveland.com/resizer/afRMiKho03gMXbOWmVUneDogVgc=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/C7CHLZOZEJGU7GIIETPFLP3JJY.jpg" alt="Ohio"/>
            <h3>Recent News</h3>
            <a href='https://www.cleveland.com/open/2022/11/report-ohio-state-president-expected-to-step-down-tuesday.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report: Ohio State president expected to step down Tuesday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAy8dZzllPqGbsgEbVmD0tTpK1hluf2kTROI4N2apg5x6E9zL_ZGGQzIumqjhove_04gcprHr0" alt="Report: Ohio State president expected to step down Tuesday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COLUMBUS, Ohio -- Ohio State University President Kristina M. Johnson is expected to announce her resignation Tuesday, the Columbus Dispatch reported.</p></div>
            </div>
        </a><a href='https://nationalpost.com/pmn/news-pmn/editorial-roundup-ohio-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Editorial Roundup: Ohio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPcCdQaGb94N8YJDIJDHQNTbrZPSWtIFrpSWojnDwsf1G3dmzPb1zhBkEPscVeLczw76-bGQ-T" alt="Editorial Roundup: Ohio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The fitness website Total Shape rates Ohio as out of shape in a nationwide health ranking. Ohio is ranked as the 45th healthiest state, or if you like to score&nbsp;...</p></div>
            </div>
        </a><a href='https://president.osu.edu/story/leadership-transition'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leadership transition - Office of the President | Ohio State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI2NMBlIlSDmX_fY3ORlxhGYdpdu9smRGKM4Lcx_GyvfyF8FQm1ryzMxXhSu7aShfG-GSSnLTl" alt="Leadership transition - Office of the President | Ohio State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The following message was shared with all Ohio State students, faculty and staff on Monday, November 28, 2022. Dear Buckeye Community,.</p></div>
            </div>
        </a><a href='https://odh.ohio.gov/wps/portal/gov/odh/media-center/odh-news-releases/odh-news-release-11-28-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>State of Ohio Announces Partnership to Provide COVID-19 Testing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="State of Ohio Announces Partnership to Provide COVID-19 Testing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio Department of Health and Opportunities for Ohioans with Disabilities announce partnership with Be My Eyes and Accessible Pharmacy Services to offer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ohio.edu/housing/extension'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2023-24 Academic Year River Park Apartments Opportunity | Ohio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="2023-24 Academic Year River Park Apartments Opportunity | Ohio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In response to exceptionally high interest in OHIO for the 2022-23 academic year resulting in a larger than typical upcoming second year class,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cleveland.com/news/2022/11/ohio-recreational-marijuana-backers-eye-2023-ballot-as-legislature-looks-at-expanding-medical-marijuana.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio recreational marijuana backers eye 2023 ballot, as legislature ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTByXlR0jJ95v4YoZjUQcIX5_QrgSPyJF8x0xPl-dVYm38DLToi1U5BwbFb7YGOFZL3TBAur6qN" alt="Ohio recreational marijuana backers eye 2023 ballot, as legislature ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio Senate Bill 261 and the recreational proposal come as patients have expressed frustration over the state&#39;s current medical marijuana program.</p></div>
            </div>
        </a><a href='https://www.dispatch.com/story/news/education/2022/11/28/ohio-state-president-kristina-johnson-to-resign/69646772007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State President Kristina Johnson confirms she&#39;s made &#39;difficult ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3jXN5X4y9tAbqCPXoq8DAW9Pg8-Nt_QOK85x87I8HkAXBACa13tYn8KddUV7wJ8tr2kWKZez9" alt="Ohio State President Kristina Johnson confirms she&#39;s made &#39;difficult ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio State President Kristina M. Johnson confirmed Monday evening a Dispatch report that she will resign her position after academic year.</p></div>
            </div>
        </a><a href='https://www.elevenwarriors.com/the-ohio-state-university/2022/11/135518/ohio-state-president-kristina-johnson-reportedly-expected-to-announce-resignation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State President Kristina Johnson Announces Resignation at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSiysr9TqGX3oIYwnBZ3Qz-zh21yVUSIzoJkGqp7HIWCTph06-V-eqL74F5glKn_TWd-h2o2om8" alt="Ohio State President Kristina Johnson Announces Resignation at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio State president Kristina Johnson announced her resignation Monday, though she will continue to lead the university through the end of the academic&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/ohiostate/news/ohio-state-university-president-kristina-johnson-expected-to-resign-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State President Kristina M. Johnson Announces Resignation At ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmmxWDZK6TVSof1z0QOeQq6aZv9PBqm9PzSSfdwmdEemwTuSAXFAkXgQ1Lo13V_oR--FhgV_06" alt="Ohio State President Kristina M. Johnson Announces Resignation At ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Johnson&#39;s resignation was reportedly requested by the board of trustees &quot;following an investigation conduced by an outside firm into concerns about her that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.10tv.com/article/news/local/draft-sources-ohio-state-president-kristina-johnson-resign/530-25cf71b5-b51b-429e-ab13-9e0a79eb5bc5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kristina Johnson to step down as Ohio State&#39;s president</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvNIqtXSCnmHYgbay5IanAIJ3_yMwr3z3ztVI8l7bmv6tzD5AuVv1h149AjOgtccD8APXcUWjb" alt="Kristina Johnson to step down as Ohio State&#39;s president" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Columbus Dispatch reported late Monday afternoon that Johnson is expected to announce her resignation on Tuesday. Author: 10TV Web Staff. Published: 6:11 PM&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}