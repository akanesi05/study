export const ColourMessage = (props) => {
    console.log("--ColourMessage--")
    const { color ,children} = props;
    const contentStyleA = {
        color: color,
        backgroundColor: 'lightgray',
};
return <p style={contentStyleA}>{children}</p>;
}
