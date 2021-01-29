import React, { useState }  from "react";
import "../styles/boxModel.less"
import * as Text from "../Utils/Text"

const BoxModel = () => {

    const [boxSizing, setBoxSizing] = useState("content");

    const handleOptionChange = (changeEvent) =>  {
        setBoxSizing(changeEvent)
      }


    return (<>
        <div class="pageHeader">
            <h2>CSS </h2>
            </div>
            <h2>Box Model </h2>
            <div> Todos os elementos de uma página são uma caixa (box). 
                O CSS Box Model é a maneira que permite calcular o tamanho final do elemento utilizando as propriedades width, height, border, padding e margin.</div>
            
            <div class="examples"> 
            <Text.Orange>width: </Text.Orange><Text.Blue>300px;</Text.Blue><br></br>
            <Text.Orange>border: </Text.Orange><Text.Blue>15px solid green;</Text.Blue><br></br>
            <Text.Orange>padding: </Text.Orange><Text.Blue>50px;</Text.Blue><br></br>
            <Text.Orange>margin: </Text.Orange><Text.Blue>20px;</Text.Blue><br></br>
            </div>
            
            <div id="boxModel">
            <div id ="margin" class="square"> MARGIN </div> 
            <div id ="border" class="square"> BORDER </div> 
            <div id ="padding" class="square"> PADDING </div>
            <div id ="content" class="square">CONTENT </div>
            </div>

            <h3>Propriedade Box Sizing</h3>

            <list>
                <ul><b>content-box</b> gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px. </ul>
                <ul><b>border-box</b> tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.</ul>
            </list>

            <div class="examples"> 
            <input type="radio" onMouseLeave={() => handleOptionChange("content")} name="box-sizing" value="content"></input><Text.Orange>box-sizing: </Text.Orange><Text.Blue>content-box;</Text.Blue><br></br>
            <input type="radio" onMouseLeave={() => handleOptionChange("border")} name="box-sizing" value="border"></input><Text.Orange>box-sizing: </Text.Orange><Text.Blue>border-box</Text.Blue><br></br>
            <Text.Orange>border: </Text.Orange><Text.Blue>solid #5B6DCD 10px;</Text.Blue><br></br>
            <Text.Orange>padding: </Text.Orange><Text.Blue>5px;</Text.Blue><br></br>
            </div>

            <div id="father"> PARENT CONTAINER
            <div id={`son ${ boxSizing }`}></div>
            </div>

           


        
            </>
    )

}


export default BoxModel 