function Tile(props) {
    if (props.type === "image") {
        return (
            <section>
               <img
               src={props.src}
               alt={props.title}
               />
            </section>
        );
    }

    return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </section>
    );
}
export default Tile;