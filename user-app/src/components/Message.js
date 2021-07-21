export default function Message(props){
    let css;
    if (!props.message) {
        css = 'hidden';
    } else {
        css = "alert alert-";
        css += (props.message.type === 'error') ? 'danger' : 'success';
    }
    return(
        <div className={css}>{props.message?.text}</div>
    )
}

// class Message extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <div>{props.msg}</div>
//         )
//     }
// }