import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World AIDS Day</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World AIDS Day"/>
        <meta name="description" content="Trending News about World AIDS Day" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World AIDS Day</h1>
            <Image width={800} height={500} src="https://leadership.ng/wp-content/uploads/2022/12/Osinbajo-2022-12-01T171817.892.png" alt="World AIDS Day"/>
            <h3>Recent News</h3>
            <a href='https://leadership.ng/world-aids-day-addressing-structural-barriers-to-ending-the-epidemic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Aids Day: Addressing Structural Barriers to Ending The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlYWtqkBlw9qKMUctkpj2Oy98Arjlkmap93p7AB_YwsU8wINn9gLiRs_RfDJhOuGMZnuuvR6Rm" alt="World Aids Day: Addressing Structural Barriers to Ending The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Nigeria joins the global community to commemorate this year&#39;s World AIDS Day, the country has been urged to address the inequalities which pose barriers&nbsp;...</p></div>
            </div>
        </a><a href='https://www.state.gov/34th-commemoration-of-world-aids-day/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>34th Commemoration of World AIDS Day - United States ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkSSLDYsG4tUttyVs19yfRzBQsT8jKxchkUej_dBektCVZjtZDv3tX7c145HzM9BMU2DMlF8tc" alt="34th Commemoration of World AIDS Day - United States ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World AIDS Day reminds us that HIV/AIDS continues to pose a threat to global health and global health security. With 650,000 people having lost their lives&nbsp;...</p></div>
            </div>
        </a><a href='https://patient.info/news-and-features/hiv-where-are-we-now'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World AIDS Day: Where are we now with HIV?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZsKKsf-SYFnnD_J6US0LxwKFWTXg3xLCzc5iypgxeXEeAApQ0nv9NDjRw1Cv_2RtnxAYQFD59" alt="World AIDS Day: Where are we now with HIV?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From a HIV vaccine to an implant to deliver medications, research into HIV treatments is gaining pace - Reviewed by a GP.</p></div>
            </div>
        </a><a href='https://guardian.ng/news/world-aids-day-inequalities-hampering-efforts-to-end-aids-pandemic-says-unaids/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World AIDS Day: Inequalities hampering efforts to end AIDS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRawYkyxNjqOa8XyzydBmVRpmv0INaPw8u5a7ZzyywIuCHWVi_uc5QwWkfssD0vkSd4pewBxOaO" alt="World AIDS Day: Inequalities hampering efforts to end AIDS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As 650 000 persons died of AIDS in 2021, 1.5 million people newly acquired HIV infection The Joint United Nations Programme on HIV/AIDS (UNAIDS) has said&nbsp;...</p></div>
            </div>
        </a><a href='https://www.justice.gov/opa/pr/world-aids-day-justice-department-highlights-efforts-protect-civil-rights-people-living-hiv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On World AIDS Day, Justice Department Highlights Efforts to Protect ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="On World AIDS Day, Justice Department Highlights Efforts to Protect ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On World AIDS Day 2022, the Justice Department reaffirms its commitment to protecting the rights of people living with Human Immunodeficiency Virus (HIV)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diplomatie.gouv.fr/en/french-foreign-policy/development-assistance/priority-sectors/health/news/article/world-health-world-aids-day-01-12-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World health – World AIDS Day (01.12.22)</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="World health – World AIDS Day (01.12.22)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today, World AIDS Day, France is reiterating its unwavering commitment to this fight. The French President provided further proof of this (…)</p></div>
            </div>
        </a>
        </Template></>;
}