import PropTypes from "prop-types";
import styles from "./Button.module.css"; //independent style(indepdent class) for a single button

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
};


export default Button;