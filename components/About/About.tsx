import classes from './About.module.css';

//TODO: CSS needs work

export default function About() {
    return (
        <div>
            <h1 className={classes.heading}>Our Mission</h1>
            <div className={classes.divTextImg}>
                <p className={classes.paragraph}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus
                    a consectetur est curae ultrices tellus. Pellentesque
                    sagittis vivamus vivamus nisi cras mus. Facilisis ultrices
                    montes dapibus interdum ultricies sociosqu auctor. Integer
                    nostra diam ullamcorper rhoncus nam dui cubilia. Cubilia
                    vehicula varius proin nisi feugiat nam donec. Vehicula eu
                    nisl sollicitudin placerat urna leo sit. Sodales efficitur
                    vehicula erat inceptos aptent quisque. Feugiat ipsum
                    convallis fermentum inceptos pulvinar elementum habitant ad.
                    Ridiculus cras semper maecenas sit consequat ullamcorper
                    maximus.
                    <br/>
                    Aliquam pulvinar orci accumsan sollicitudin posuere. Euismod
                    posuere purus pellentesque natoque, fusce natoque risus
                    phasellus. Torquent volutpat ut bibendum ornare nisl;
                    interdum nisl lacinia. Natoque finibus habitasse dictumst
                    tristique convallis aliquet hac pharetra. Sociosqu nostra
                    potenti iaculis egestas neque congue nisi. Urna tempor ipsum
                    hendrerit venenatis arcu vulputate. Faucibus est porta
                    laoreet ipsum porttitor at. Tempor posuere curabitur
                    accumsan nibh sollicitudin aenean amet enim.
                </p>
                <img className={classes.img} src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg" alt="Monkey 1"/>
            </div>
        </div>
    );
}
