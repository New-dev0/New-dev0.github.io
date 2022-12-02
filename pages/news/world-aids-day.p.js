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
            <Image width={800} height={500} src="" alt="World AIDS Day"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/12/world-aids-day-2-7m-young-people-living-with-hiv-unicef/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World AIDS Day: 2.7m young people living with HIV – UNICEF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqSzZb5SPXas-DzY99Ax4DpNQJWsB-_Vx1l-pwWKbNKVQemgpzkn7rJSsOXcx7fP5GlfH9o3qF" alt="World AIDS Day: 2.7m young people living with HIV – UNICEF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the world marked International AIDS Day on Thursday, UNICEF has raised alarm over the neglect of HIV/AIDS treatment in children, saying the battle&nbsp;...</p></div>
            </div>
        </a><a href='https://leadership.ng/world-aids-day-addressing-structural-barriers-to-ending-the-epidemic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Aids Day: Addressing Structural Barriers to Ending The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlYWtqkBlw9qKMUctkpj2Oy98Arjlkmap93p7AB_YwsU8wINn9gLiRs_RfDJhOuGMZnuuvR6Rm" alt="World Aids Day: Addressing Structural Barriers to Ending The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Nigeria joins the global community to commemorate this year&#39;s World AIDS Day, the country has been urged to address the inequalities which pose barriers&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terracestandard.com/news/hiv-activists-hope-world-aids-day-marks-an-end-to-backsliding-on-infections-stigma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HIV activists hope World AIDS Day marks an end to backsliding on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuezSRA6CxFKmlUlWjf_iUv5FOlq_YEQZXDGjYTULXTbkRBSqvfOodjjAlpECq4joV8n2YkhDD" alt="HIV activists hope World AIDS Day marks an end to backsliding on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Public Health Agency of Canada estimated 62790 Canadians were living with HIV in 2020.</p></div>
            </div>
        </a><a href='https://www.thedispatch.in/on-world-aids-day-advisor-bhatnagar-talks-of-equality-human-rights-drug-abuse/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On World AIDS Day, Advisor Bhatnagar talks of equality, human ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgzzvBRpIJWKRVusGkpSmBG6CW0rsR1OXWirp7E6mW7C7OpoAdiC6k1QtzE4nq8Sz0Zx1fF1yi" alt="On World AIDS Day, Advisor Bhatnagar talks of equality, human ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jammu: Advisor to Lieutenant Governor, Rajeev Rai Bhatnagar remarked that that on this World AIDS Day we all should reiterate our commitment towards&nbsp;...</p></div>
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
        </a>
        </Template></>;
}