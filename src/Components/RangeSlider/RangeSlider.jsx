import { useRanger } from "react-ranger";
import {useState} from 'react'
import {RSContainer} from './styles'
function ReactRanger() {
  const [values, setValues] = useState([0, 100]);

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 100,
    stepSize: 5,
    values,
    onChange: setValues
  });

  return (
    <div className="App">
      <div
        {...getTrackProps({
          style: {
            height: "4px",
            background: "#3F464E",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
            borderRadius: "2px"
          }
        })}
      >
        {handles.map(({ getHandleProps }, i) => {
          if(i===0){
            
            return (
              <button
                {...getHandleProps({
                  style: {
                    width: "10px",
                    height: "16px",
                    outline: "none",
                    borderRadius: "100%",
                    background: "#A6ADB5",
                    borderRadius: "4px 0px 0px 4px"
                  }
                })}
              />
            )
          }else{
            return (
              <button
                {...getHandleProps({
                  style: {
                    width: "10px",
                    height: "16px",
                    outline: "none",
                    borderRadius: "100%",
                    background: "#A6ADB5",
                    borderRadius: "0px 4px 4px 0px"
                  }
                })}
              />
            )
          }
          })}
      </div>
      {/* <pre
        style={{
          display: "inline-block",
          textAlign: "left"
        }}
      >
        <code>
          {JSON.stringify({
            values
          })}
        </code>
      </pre> */}
    </div>
  );
}

export default ReactRanger;