import { Component } from "react";

const styles = {
    button: {
        backgroundColor: "transparent",
        padding: "15px 20px",
        borderRadius: '5px',
        border: '1px solid rgba(200, 200, 200, 0.5)',
        cursor: 'pointer'
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button;