import {useState} from "react"
import Container from "../../Components/Container"

const First = (props) => {

    const [imgsrc,setImgSrc] = useState([props.imgsrc]);


    return (
        <>
            <div className="first">
            <Container>
                <div className="row mb-5">
                    <div className="col-8 card mt-5 text-center">
                        <h2 className="pt-5">{props.heading}</h2>
                        <p className="pb-2">{props.para}</p>
                       { imgsrc ? <img src={props.imgsrc} alt="img" style={{width: 300,marginLeft:30}} className="pb-3"/> :null}
                    </div>
                </div>
            </Container>
            </div>
        </>
    );
}

export default First;