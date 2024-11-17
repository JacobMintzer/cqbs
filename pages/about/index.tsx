/**
 * Mission Page
 */

import Mission from "@/components/Mission/Mission";

// if you don't follow these types and structure, it will cause an error
interface missionDataStructure {
    title: String; // title of the mission page
    missionStatement: Array<String>; //mission statement, array of paragraphs
    imgSrc: String; // source of the mission image can be url or image from
                    // public folder
    imgAlt: String; // describe the image for visually impaired
};

// EDIT HERE ONLY
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
    imgSrc: "https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2021/columbia-rainlow-pride-2021.png?itok=A1yDaEv9",
    imgAlt: "Columbia Library with Pride Colors"
}

export default function AboutPage() {
    return (
        <Mission
            title={mission.title}
            missionStatement={mission.missionStatement}
            imgSrc={mission.imgSrc}
            imgAlt={mission.imgAlt}
        />
    );
}
