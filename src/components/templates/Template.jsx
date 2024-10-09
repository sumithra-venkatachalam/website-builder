import styles from "./Template.module.css";
import working from "../../assets/pot.jpg";

function Template() {
  return (
    <div>
      <div className={styles.Header}>
        <div className={styles.LeftContainer}>
          <span className={styles.AppTitle}>App Name</span>
        </div>
        <div className={styles.RightContainer}>
          <span className={styles.MenuItem}>Menu 1</span>
          <span className={styles.MenuItem}>Menu 2</span>
          <span className={styles.MenuItem}>Menu 3</span>
        </div>
      </div>
      <div className={styles.MainContent}>
        <div className={styles.LeftContainer}>
          <h1 className={styles.Title}>Grow your skills,</h1>
          <h1 className={styles.Title}>define your future</h1>
          <p className={styles.SubTitle}>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
          <div className={styles.ButtonContainer}>
            <button className={styles.ExploreButton}>Explore Courses</button>
            <button className={styles.LearnButton}>Learn More</button>
          </div>
        </div>
        <img src={working} className={styles.PotImg} />
      </div>
      <div className={styles.Footer}>Footer</div>
    </div>
  );
}

export default Template;
