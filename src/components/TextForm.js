//EVENT HANDELING AND PROPS
import PropTypes from 'prop-types'
import React, {useState} from 'react'


export default function TextForm(props) {
      
      const [text , setTest] = useState('Enter text here via react hook');//react hook
      //function need to be made with const
      const handleUpperClick = () => {
            console.log("uppercase was clicked"+text);
            //changes on onclick
            const newText = text.toUpperCase();
            setTest(newText);// whenever the state is changed for the button its setTest to its new value
            props.showalert("Text changed to UPPERCASE" , "success"); // this was to show the alert which was passed from the app.js as a prop
      }

      //practice create a button for lower case
      const handleLowerCase = (event) => {
            console.log("lowercase was clicked");
            const newText = text.toLowerCase();
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Text changed to lowercase" , "success");
      }
      const handleCapitalizeClick = (event) => {
            console.log("lowercase was clicked");
            const newText =  text.toLowerCase().split(' ').map(word => {
                  return word.charAt(0).toUpperCase() + word.slice(1);
              }).join(' ');
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Text changed to Capitalise case" , "success");
      }
      const handleAlternateClick = (event) => {
            console.log("lowercase was clicked");
            let newText = '';
            
            let toUpperCase = true;

            for (let i = 0; i < text.length; i++) {
                  const char = text[i];
                  if (toUpperCase) {
                        newText += char.toUpperCase();
                  } else {
                        newText += char.toLowerCase();
                  }

                  // Toggle the toUpperCase flag for the next character
                  toUpperCase = !toUpperCase;
            }
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Text changed to aLTeRnAtE CaSe" , "success");
      }
      const handleTitleClick = (event) => {
            console.log("lowercase was clicked");
            const newText = text.toLowerCase().replace(/(^|\s)\S/g, function(match) {
                  return match.toUpperCase();
              });;
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Text changed to Title case" , "success");
      }
      const handleClearClick = (event) => {
            console.log("lowercase was clicked");
            const newText = '';
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Text cleared !" , "success");
      }
      const handleExtraSpaceClick = (event) => {
            console.log("lowercase was clicked");
            const newText = text.replace(/\s+/g, ' ').trim();
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Extra Spaces have been removed" , "success");
      }
      const handleInverseClick = (event) => {
            console.log("lowercase was clicked");
            let newText = '';

            for (let i = 0; i < text.length; i++) {
                  const char = text[i];
                  if (char === char.toLowerCase()) {
                        newText += char.toUpperCase();
                  } else {
                        newText += char.toLowerCase();
                  }
            }
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Text is inversed" , "success");
      }
      const handleCopytoClipbrdClick = (event) => {
            console.log("lowercase was clicked");
            const newText =text;
            const textArea = document.createElement("textarea");
            textArea.value = newText;

            // Append the textarea to the document
            document.body.appendChild(textArea);

            // Select the text in the textarea
            textArea.select();

            // Execute the copy command
            document.execCommand("copy");

            // Remove the textarea from the document
            document.body.removeChild(textArea);

            // Optionally, provide user feedback
            setTest(newText);// whenever the state is changed for the button
            props.showalert("Text copied to clipboard !" , "success");
      }


      // text = ("new text") //right way using  a function
      const handleOnChange = (event) => {
            console.log("on change");
            setTest(event.target.value);
      }

      
      return (
            <>
                  <div>
                        <div className={`mb-3 my-5 text-${props.mode ==='light'? 'dark':'light'}`}>
                              <h1>{props.heading }</h1>
                              {/* text is  #ced4da */}
                              <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'? 'white':'#495057',color:props.mode==='light'? 'black':'white'}} rows="10"></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" onClick= {handleUpperClick} >UPPERCASE TEXT</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleLowerCase} >lowercase text</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleCapitalizeClick} >Capitalise Text</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleAlternateClick} >AlTeRnAtE TeXt</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleTitleClick} >Title Case</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleInverseClick} >iNVERSE cASE</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleCopytoClipbrdClick} >Copy to ClipBoard</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleClearClick} >Clear text</button>
                        <button type="submit" className="btn btn-primary mx-2 my-2" onClick= {handleExtraSpaceClick} >Remove extra space</button>
                  </div>
                  <div className={`container my-3 text-${props.mode ==='light'? 'dark':'light'}`}>
                        {/* adding summary */}
                        <h2>This is the summary of your input Text</h2> 
                        {/* adding words count */}
                        <p>Number of words entered are {text.split(" ").filter( (elem) =>{return elem.length !== 0}).length}</p>
                        {/* adding chars count */}
                        <p>Number of Characters entered are {text.length}</p>
                        {/* adding time taken to read the whole text */}
                        <p>Time taken to read {0.008 *text.split(" ").filter( (elem) =>{return elem.length !== 0}).length}</p>
                        {/* adding preview of text*/}
                        <h2>Preview: </h2>
                        <p>{text.length>0? text:"Enter something in above text Box to preview here."}</p>
                        {/* Capitalized Case aLtErNaTiNg cAsE Title Case InVeRsE CaSe Download Text Copy to Clipboard */}
                  </div>
            </>
      )
}

TextForm.propTypes = {
      heading: PropTypes.string
}
