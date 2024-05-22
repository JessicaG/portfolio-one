"use client";
import { motion } from "framer-motion";
import { Import } from "iconsax-react";
import MyExperienceItem from "./MyExperienceItem";

const AboutMyExperience = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card my-experience p-32px"
    >
      <div className="d-flex align-items-center justify-content-between">
        {" "}
        <p className="heading-4">My Experience</p>
        <div className="download-icon">
          <Import />
        </div>
      </div>

      <div className="my-experience__content">
      <MyExperienceItem
          time="2023 // present"
          title="Consultant"
          company="West Star Consulting"
        />
      <MyExperienceItem
          time="2024 // present"
          title="Co-Founder"
          company="DevEx Institute"
        />
        <MyExperienceItem
          time="2022 // 2023"
          title="Head of Developer Relations"
          company="Temporal"
        />
        <MyExperienceItem
          time="2021 // 2022"
          title="VP of Developer Experience and Customer Education"
          company="Lacework"
        />
        <MyExperienceItem
          time="2019 // 2020"
          title="Head of Developer Relations"
          company="LaunchDarkly"
        />
        <MyExperienceItem
          time="2019 // 2019"
          title="Director of Advocacy"
          company="MongoDB"
        />
        <MyExperienceItem
          time="2017 // 2019"
          title="Lead Developer Advocate"
          company="Algolia"
        />
        <MyExperienceItem
          time="2016 // 2017"
          title="Engineering Team Lead"
          company="ParkiFi"
        />
        <MyExperienceItem
          time="2014 // 2016"
          title="Senior Software Engineer"
          company="Redsson"
        />
        <MyExperienceItem
          time="2013 // 2017"
          title="Community and Sponsorships Lead"
          company="Colorado Secretary of States Office"
        />        
        <MyExperienceItem
          time="2011 // 2012"
          title="Senior Data Analytics"
          company="Oracle"
        />                
        <MyExperienceItem
          time="2012 // 2013"
          title="Jr Software Engineer"
          company="Commerce Kitchen"
        />        
        <MyExperienceItem
          time="2009 // 2011"
          title="Director of E-Commerce Marketing"
          company="Orion and Prestige Financial Services"
        />        
        <MyExperienceItem
          time="2007 // 2009"
          title="Director of Marketing"
          company="Destination Hotels and Resorts"
        />        
        <MyExperienceItem
          time="2005 // 2007"
          title="Group Sales Manager, West Coast"
          company="Durango Mountain Resort"
        />        
      </div>
    </motion.div>
  );
};

export default AboutMyExperience;
