"use client";
import { IconBrandWebflow } from "@tabler/icons-react";
import { JavaScript, Brodcast, Chart, CloudConnection, People, Trello } from "iconsax-react";

const sliderOneData = [
  "Developer Experience",
  "Product Strategy",
  "Marketing Campaigns",
  "Developer Community",
  "Customer Analysis",
  "Developer Onboarding",
  "Data Analysis",
  "Executive Direction",
  "Developer Experience",
  "Product Strategy",
  "Marketing Campaigns",
  "Developer Community",
  "Customer Analysis",
  "Developer Onboarding",
  "Data Analysis",
  "Executive Direction",
  "Developer Experience",
  "Product Strategy",
  "Marketing Campaigns",
  "Developer Community",
  "Customer Analysis",
  "Developer Onboarding",
  "Data Analysis",
  "Executive Direction",
];

export const sliderTwo = [
  {
    icon: <JavaScript size="32" />,
  },
  {
    icon: <Brodcast size="32" />,
  },
  {
    icon: <Chart size="32" />,
  },
  {
    icon: <CloudConnection size="32" />,
  },
  {
    icon: <People size="32" />,
  },
  {
    icon: <Trello size="32" />,
  },
  {
    icon: <JavaScript size="32" />,
  },
  {
    icon: <Brodcast size="32" />,
  },
  {
    icon: <Chart size="32" />,
  },
  {
    icon: <CloudConnection size="32" />,
  },
  {
    icon: <People size="32" />,
  },
  {
    icon: <Trello size="32" />,
  },
  {
    icon: <JavaScript size="32" />,
  },
  {
    icon: <Brodcast size="32" />,
  },
  {
    icon: <Chart size="32" />,
  },
  {
    icon: <CloudConnection size="32" />,
  },
  {
    icon: <People size="32" />,
  },
  {
    icon: <Trello size="32" />,
  },
];

const SkillsCardAnimationOne = () => {
  return (
    <div className="card-style skills-card">
      <span className="heading-4 skills-card__title">Skills & Tools</span>
      <div className="skills-card__slider-aria ">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {sliderOneData.map((item) => (
                  <span key={item} className="skills-card__slider-text">
                    {item}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="marquee-wrapper-icon-slider">
          <div className="marquee-inner to-right">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {sliderTwo.map(({ icon }, index) => (
                  <span
                    key={`skill-slider-two${index}`}
                    className="skills-card__slider-two__box"
                  >
                    {icon}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardAnimationOne;
