import React from 'react';
import styles from "../styles/banner.module.css"
import Image from 'next/image';
import Link from 'next/link';
import shapeStyles from "../styles/common.module.css"
const Banner = ({ title, imgURL }) => {
    return (
        <div className={styles.container}>
            <div className={` ${styles.innerContainer} grid gap-10 grid-cols-1 md:grid-cols-2 items-center`}>
                <div>
                    <h1 className={styles.title}>{title}</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. geMaker including versions of Lorem Ipsum.</p>
                    <Link href={"/movie"}><button className={styles.btn}>Explore Movies</button></Link>
                </div>
                <div>
                    <Image src={imgURL} alt='watching movie' height={500} width={500} />
                </div>
            </div>
            <div className={shapeStyles['custom-shape-divider-bottom-1685528473']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={shapeStyles['shape-fill']}></path>
                </svg>
            </div>
        </div>

    );
};

export default Banner;