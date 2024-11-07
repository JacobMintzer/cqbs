import classes from "@/components/Team/Team.module.css";

export default function Students() {

    return (
        <div>
            <h1 className={classes.head}>Prospective Students</h1>
            <p className={classes.sub}>Fill out the interest form!</p>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeQKmVT55ym5MCe7GX-uIF8KRKHXKg5sFIo4u1D6okGWbdT_A/viewform?embedded=true"
                width="640" height="686">Loading…
            </iframe>
        </div>
    );
}
