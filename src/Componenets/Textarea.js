import React, { useState } from 'react'

export default function Textarea(prop) {

    //create variable and function
    const [text, setText] = useState("")

    // convert into upper case
    const Changeupcase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        prop.showalert("Text converted into uppercase","success")
    }

    // convert to lower case
    const Changelocase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        prop.showalert("Text converted into lowercase","success")
    }

    //clean case
    const clearcase = () => {
        let newtext = '';
        setText(newtext);
        prop.showalert("remove spaces successfully","success")
    }

    //trim case
    const removespaces = () => {
        let newtext = text.split(/[ ]+/);
        let txt = newtext.join(" ");
        setText(txt.trim());
        prop.showalert("Extra spaces remove successfully","success")
    }

    // remove punc
    const removepunc = () => {
        // console.log("remove punc is clicked");
        let newtext = "";
        for (let index = 0; index < text.length; index++) {
            // const element = text[index];
            // console.log(`${element} ` + text.charCodeAt(index))
            if ((text.charCodeAt(index) === 32) || (text.charCodeAt(index) >= 48 && text.charCodeAt(index) <= 57) || (text.charCodeAt(index) >= 65 && text.charCodeAt(index) <= 90) || (text.charCodeAt(index) >= 97 && text.charCodeAt(index) <= 122)) {
                newtext = newtext + text[index];
            }
            else {
                continue;
            }
        }
        setText(newtext);
        prop.showalert("Remove punc successfully","success")
    }

    //copy text
    const Copytext = () => {
        navigator.clipboard.writeText(text)
        prop.showalert("Text copyed","success")
    }

    // append new test in text variable
    const onchangeevent = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div style={{color: `${prop.color}`}}>
                <div>
                    <div className="mb-3">
                        <h2 >Enter text here</h2>
                        <textarea className="form-control" style={{ backgroundColor: `${prop.bgcolor}`, color: `${prop.color}` }} value={text} onChange={onchangeevent} id="mybox" placeholder="Enter text here" rows="8"></textarea>
                        <button disabled={text.length===0} type="button" id="uppercase" onClick={Changeupcase} className="btn btn-primary my-2 mx-2">ToUpperCase</button>
                        <button disabled={text.length===0} type="button" id="lowercase" onClick={Changelocase} className="btn btn-primary my-2 mx-2">ToLowerCase</button>
                        <button disabled={text.length===0} type="button" id="clearcase" onClick={clearcase} className="btn btn-primary my-2 mx-2">cleanCase</button>
                        <button disabled={text.length===0} type="button" id="removepunc" onClick={removepunc} className="btn btn-primary my-2 mx-2">removePunc</button>
                        <button disabled={text.length===0} type="button" id="removepaces" onClick={removespaces} className="btn btn-primary my-2 mx-2">RemoveSpaces</button>
                        <button disabled={text.length===0} type="button" id="copytxt" onClick={Copytext} className="btn btn-primary my-2 mx-2">CopyText</button>
                    </div>
                </div>
                <div>
                    <center>
                        <h2> Text summry</h2>
                        <h5><li>{text.split(/\S+/).filter((element)=>{return element.length!==0}).length} words in the text box</li></h5>                  
                        <h5><li>{text.length} characters in the text box</li></h5>
                        <h5><li>You have to take {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes for read the entire text</li></h5>
                    </center>
                    <br />
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter your content"}</p>
                </div>
            </div>
        </>
    )
}
