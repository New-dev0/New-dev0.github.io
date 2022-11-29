import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Justin Fields</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Justin Fields"/>
        <meta name="description" content="Trending News about Justin Fields" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Justin Fields</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/edckaxnsoasbyw81vygp" alt="Justin Fields"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/bears-qb-justin-fields-left-shoulder-inactive-trevor-siemian-to-start-vs-jets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears QB Justin Fields (left shoulder) inactive vs. Jets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS28-MjqmDa2YrHcPTlVK3-HP2T4pVgyFFOmdn4rwlEfmdDIZh0xYmbSGK_gXncsdsNZ1q90prx" alt="Bears QB Justin Fields (left shoulder) inactive vs. Jets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Justin Fields is officially inactive for the Bears&#39; game Sunday against the host Jets. ﻿Trevor Siemian will start for Chicago.</p></div>
            </div>
        </a><a href='https://chicago.suntimes.com/bears/2022/11/27/23481056/bears-justin-fields-trevor-siemian-shoulder-packers-aaron-rodgers-what-next-matt-eberflus-jets-31-10'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What&#39;s next for Justin Fields is all that matters after Bears fall to Jets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKefXdrTEV8SwAdKC3n14HxaNTXZzWQrA-_9hjNmoYd_Pxyl_SaymlNoXMhEoHjO4elPLmveA8" alt="What&#39;s next for Justin Fields is all that matters after Bears fall to Jets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Might Fields face Aaron Rodgers and the Packers? “That&#39;s a good question,” Bears coach Matt Eberflus said.</p></div>
            </div>
        </a><a href='https://theathletic.com/3942274/2022/11/27/chicago-bears-without-justin-fields/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears without Justin Fields: Pregame QB drama, followed by the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTGTrOUWCjwnB4hZmX6Sl7-4GVHYd9WbHMUjvLn1x5O_LBsbYDnvMZQQ1zdrz5zqjmhYkIju72" alt="Bears without Justin Fields: Pregame QB drama, followed by the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bears were undermanned and overmatched in the Meadowlands with backups in at several positions, most notably, quarterback.</p></div>
            </div>
        </a><a href='https://www.nationalfootballpost.com/nfl/bears-justin-fields-inactive-trevor-siemian-to-start-vs-jets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears&#39; Justin Fields inactive, Trevor Siemian to start vs. Jets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTE-R1hNoKKedw61EYajobnyAohwVGASN-MJ9L6Sh-5EFmlyNC1uEpQP75BYFUtySJtdChbJJO" alt="Bears&#39; Justin Fields inactive, Trevor Siemian to start vs. Jets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chicago Bears quarterback Justin Fields was listed as inactive for Sunday&#39;s game against the host New York Jets in East Rutherford, N.J. Trevor.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/2022/11/27/bears-justin-fields-inactive-week-12-jets-shoulder-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears&#39; Justin Fields Ruled Out For Week 12 With Shoulder Injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3Wdrbv3sRZt2j0q9Ho5T6QJXroJmhP8WZnGqlHknIdlt18cHGhJ2xw_HVE4JXVAilKrabYy7v" alt="Bears&#39; Justin Fields Ruled Out For Week 12 With Shoulder Injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chicago had listed the second-year QB as questionable coming into Sunday&#39;s game against New York.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/bears/news/justin-fields-impact-never-more-clear'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Justin Fields&#39; Impact Never So Clear</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTqQs0HYtTiKGvQ0bpwcbrY7hEI02nH_SV238HLisVYHi1I4t-boq2MBDTjsnP48X86B4ab6yk" alt="Justin Fields&#39; Impact Never So Clear" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Analysis: A 31-10 loss to the New York Jets without Justin Fields running for first downs and TDs said a good deal about his importance to the entire team.</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/11/27/matt-eberflus-justin-fields-getting-better-couldnt-protect-himself-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Eberflus: Justin Fields getting better, couldn&#39;t protect himself today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXKHpLvyczqtk4-RGp8d7Wpnl2N7Zjq7rkAM9Y_v_eq5qjB2f1uH6Pp7acjtwU2NLrD7EcGCHx" alt="Matt Eberflus: Justin Fields getting better, couldn&#39;t protect himself today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bears quarterback Justin Fields did not play in Sunday&#39;s 31-10 loss to the Jets because of a left shoulder injury, but the Bears aren&#39;t ready to make any&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}