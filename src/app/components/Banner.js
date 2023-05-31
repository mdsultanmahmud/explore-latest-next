import React from 'react';
import styles from "../styles/banner.module.css"
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={` ${styles.innerContainer} grid gap-10 grid-cols-1 md:grid-cols-2 items-center`}>
                <div>
                    <h1 className={styles.title}>Let us watch movie together</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. geMaker including versions of Lorem Ipsum.</p>
                    <Link href={"/movie"}><button className={styles.btn}>Explore Movies</button></Link>
                </div>
                <div>
                    <Image src={"/banner.png"} alt='watching movie' height={500} width={500}/>
                </div>
            </div>  
        </div>

    );
};

export default Banner;