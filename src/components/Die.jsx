

export default function Die(props) {
    const styles = {
        backgroundColor: props.held ? "#59E391" : "white"
    }

    return (
        <button onClick={() => props.isHeld(props.id)} style={styles}>{props.value}</button>
    )
}