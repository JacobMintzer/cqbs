/**
 * Mission Page
 */

import Mission from "@/components/Mission/Mission";

// if you don't follow these types and structure, it will cause an error
interface missionDataStructure {
    title: string; // title of the mission page
    missionStatement: Array<string>; //mission statement, array of paragraphs
    imgAlt: string; // describe the image for visually impaired
};

// EDIT HERE
const mission : missionDataStructure = {
    title: "Our Mission",
    missionStatement: ["The Columbia Queer Business Society (CQBS) is the" +
        " first pre-professional LGBTQ community at Columbia University" +
        " established in 2011, bringing together students interested in" +
        " fields such as consulting, finance, technology, and public-sector" +
        " business. We strive to de-stigmatize being “out” in the industry" +
        " by fostering a supportive community and providing networking" +
        " opportunities. We thrive on collaboration and frequently partner" +
        " with companies and organizations, primarily within the banking," +
        " consulting, and technology sectors. Some of our past partners" +
        " include Goldman Sachs, McKinsey & Company, Google, and Bain &" +
        " Company."],
    imgAlt: "Columbia Library with Pride Colors"
}
// path of the image
import imgSrc from "@/public/columbiaRainbow.webp";
// EDIT END

export default function AboutPage() {
    return (
        <Mission
            title={mission.title}
            missionStatement={mission.missionStatement}
            imgSrc={imgSrc}
            imgAlt={mission.imgAlt}
        />
    );
}
