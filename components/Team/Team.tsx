import classes from './Team.module.css';

export default function Team() {

    return (
        <div>
            <h1 className={classes.head}>Team</h1>
            <p className={classes.sub}>Meet the team</p>
            <div className={classes.team}>
                <div className={classes.member}>
                    <div className={classes.imgBorder}>
                        <img
                            className={classes.teamImg}
                            src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
                            alt="Monkey 1"/>
                    </div>
                    <h2>Monkey 1</h2>
                    <p>President</p>
                </div>
                <div className={classes.member}>
                    <div className={classes.imgBorder}>
                        <img
                            className={classes.teamImg}
                            src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
                            alt="Monkey 1"/>
                    </div>
                    <h2>Monkey 2</h2>
                    <p>Vice President</p>
                </div>
                <div className={classes.member}>
                    <div className={classes.imgBorder}>
                        <img
                            className={classes.teamImg}
                            src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
                            alt="Monkey 1"/>
                    </div>
                    <h2>Monkey 3</h2>
                    <p>Secretary</p>
                </div>
            </div>
        </div>
    );
}
