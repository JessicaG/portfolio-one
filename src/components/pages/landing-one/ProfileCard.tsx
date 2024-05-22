import LinkPrimary from "@/components/shared/LinkPrimary";
import { Xrp, People } from "iconsax-react";
import ProfileIcon from "./ProfileIcon";

const ProfileCard = () => {
  return (
    <div className="card-style profile-card">
      <div className="profile-icons">
        <ProfileIcon icon={<Xrp size="40" />} socialLink="https://x.com/jessicaewest" />
        <ProfileIcon icon={<People size="40" />} socialLink="https://www.linkedin.com/in/jessicagwest/" />
      </div>
      <LinkPrimary link="/about" linkText="Profiles" />
    </div>
  );
};

export default ProfileCard;
