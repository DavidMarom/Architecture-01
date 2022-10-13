import PropTypes from "prop-types"
import { Button2 } from "./Button.style"

export const Button = ({
    label,
    backgroundColor = "#3576cc",
    onClick,
    width = 700,
    size = "medium",
    rounded = false,
}) => {

    return (
        <Button2
            onClick={onClick}
            backgroundColor={backgroundColor}
            width={width}
            size={size}
            rounded={rounded}
        >
            {label}
        </Button2>
    )
}

Button.propTypes = {
    onclick: PropTypes.func,
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    rounded: PropTypes.bool
}

export default Button