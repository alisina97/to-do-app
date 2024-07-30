import { useState } from "react";
import styles from "../../styles/Header.module.css"


const Header = () => {
    const {searched, setSearched} = useState({});
    return (
        <div className={`mb-4 ${styles.outerContainer}`}>
            <header className={`pt-4 pb-4 container ${styles.innerContainer}`}>
                <div className={`col-4 ${styles.logo}`} >
                    <img src="./logo.svg"></img>
                </div>
                <div className={`col-5 ${styles.search}`} >
                    {/* onChange={ (e) => {setSearched(e.target.value)}} */}
                    <input type="text" className={styles.input} placeholder="Start searching here…"  />
                </div>
                <div className={` col-3 ${styles.userContainer}`}>
                    <div className={`mr-4 ${styles.profilePicture}`}>
                        <img src="./profile-pic.svg"></img>
                    </div>
                    <div className={`${styles.userName}`}>
                        <h5>Marisa Pereira</h5>
                        <p>User</p>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header;