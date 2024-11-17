/**
 * Team Page
 */

import Team from '../../../components/Team/Team';

// This is how you should format each member
interface MemberType {
    name: String; // name of the member
    role: String; // role of the member
    about: String; // about or major
    pic: String; // source of the image, can be url or image from public folder
}

// Array of MemberType
const title : string = "Members of the Board";
const subtitle : string = "Meet your current board members!";
const team : Array<MemberType> = [
    {
        name: "Enzo Kim",
        role: "President",
        about: "Economics and Creative Writing",
        pic: "/monkey1.png"
    },
    {
        name: "Bobby Veiham",
        role: "Vice President",
        about: "Computer Science",
        pic: "/bobby.jpg"
    },
    {
        name: "Sai Sai",
        role: "Secretary",
        about: "Psychology",
        pic: "/avatar2.png"
    },
    {
        name: "A.J. Lebenns",
        role: "Advisor",
        about: "Economics",
        pic: "/avatar2.png"
    },
    {
        name: "Artemis Edison",
        role: "Treasurer",
        about: "Financial History",
        pic: "/avatar2.png"
    }
];

export default function TeamPage() {

    return (
        <Team
            title={title}
            subtitle={subtitle}
            team={team}
        />
    );
}
