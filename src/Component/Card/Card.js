import React from "react";
import styles from "./Card.module.css";
import image1 from "../../Images/Rectangle 5.png";
import image2 from "../../Images/image2.png";
import image3 from "../../Images/image3.png";
import profile1 from "../../Images/SarthakKamra.png";
import profile2 from "../../Images/SarahWest.png";
import profile3 from "../../Images/RonalJones.png";
import profile4 from "../../Images/Rectangle 6.png";

const Users = [
  {
    topImage: image1,
    name: "Sarthak Kamra",
    title: "✍️ Article",
    heading1: "What if famous brands had regular fonts? Meet RegulaBrands!",
    heading2:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profile: profile1,
  },
  {
    topImage: image2,
    name: "Sarah West",
    title: "🔬️ Education",
    heading1:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    heading2:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profile: profile2,
  },
  {
    topImage: image3,
    name: "Ronal Jones",
    title: "🗓️ Meetup",
    heading1: "Finance & Investment Elite Social Mixer @Lujiazui",
    heading2: "Fri, 12 Oct, 2018",
    profile: profile3,
  },
  {
    topImage: null,
    name: "Joseph Gray",
    title: "💼️ Job",
    heading1: "Software Developer",
    heading2: "Innovaccer Analytics Private Ltd.",
    profile: profile4,
  },
];

function Card() {
  return Users.map( ( e ) => {
    return(
    <div className={styles.cardMain}>
      <div>
        <img src={e.topImage} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{e.title}</h5>
          <h5 class="card-title">{e.heading1}</h5>
          <p class="card-text">{e.heading2}</p>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.left}>
            <img src={e.profile} alt="" />
            <p>{e.name}</p>
          </div>
          <div className={styles.right}>
            <h6>
              <i class="bi bi-eye"></i> 1.4k views
            </h6>
            <a className={styles.shareBtn} href="#">
              <i class="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>);
  });
}

export default Card;
