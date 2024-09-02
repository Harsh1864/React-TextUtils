import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('')
    const handleUpClick = () => {
        // console.log('Uppercase clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleloClick = () => {
        // console.log('Lowercase clicked' + text);
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to Lower Case","success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Clear","success");
    }


    const handlerOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }

    const handleCopy = () =>{
       navigator.clipboard.writeText(text);
       props.showAlert("Text has been copied","success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove the extra spaces","success");
    }

    const wordCount = (text.split(/\s+/).filter((element)=>{return element.length!==0}).length);
    const charCount = (text.length);
    

    return (
        <>
        {/* text = "New Text";  wrong way to change the text */}
        {/* setText("New Text"); right way to change the text */}
        <div className="mb-3 mx-4 my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <label className="form-label"><h1>{props.heading}</h1></label>
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'black'}} rows="8" placeholder={'Enter text Here'} value={text} onChange={handlerOnChange} id="myTxt"></textarea>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{wordCount} Words an character is {charCount}</p>
            <p>{0.008 * wordCount} minutes to read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}