export const ColourMessage = (props) => {
    const { color ,children} = props;
    const contentStyleA = {
        color: color,
        backgroundColor: 'lightgray',
};
return <p style={contentStyleA}>{children}</p>;
}
