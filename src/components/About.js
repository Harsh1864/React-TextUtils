// import React,{useState}from 'react'

export default function About(props) {
  
//   const [myStyle, setMyStyle] = useState({
//     color : 'white',
//     backgroundColor : 'darkblue',
//   }
// )
 
//   const [btnText,setBtnText] = useState("Enable light mode")

//   const toggleStyle = () =>{
//      if(myStyle.color ===  'white'){
//       setMyStyle({
//         color : 'black',
//         backgroundColor : 'white',
//       })
//       setBtnText("Enable Dark Mode")
//      }
//      else{
//       setMyStyle({
//         color : 'white',
//         backgroundColor : 'darkblue',
//       })
//       setBtnText("Enable Light Mode")
//      }
//  }

  return (
    <>
    <div className="container my-3"  >
    <h1 className={`${props.mode === 'dark' ? 'text-white' : ''}`}>About Us</h1>
<div className="accordion" id="accordionExample"  >
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className={`accordion-button  ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}  type="button" data-bs-toggle="collapse"   data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        Analyze the text 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show " data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul>
      <li>Clarity: Identifying areas where the text could be clearer or more concise.</li>
      <li>Tone: Ensuring the tone matches your brand's voice.</li>
      <li>Engagement: Suggesting ways to make the content more engaging.</li>
      <li>SEO: Improving keyword usage for better search engine visibility.</li>
      <li>Structure: Offering recommendations on the flow and organization of the content.</li>
      </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light'}`} type="button"   data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You can use a free tool like TextUtils to count characters, words, or analyze the readability of your text. It's simple, quick, and effective for optimizing content for any purpose.
      </div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light'}`} type="button"   data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Browser compatibility refers to the ability of a website or web application to function correctly across different web browsers (like Chrome, Firefox, Safari, Edge) and their versions. Ensuring browser compatibility is crucial because users may access your site from various platforms. 
      </div>
    </div>
  </div>
</div>

  {/* <div className="container">
    <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
  </div> */}

</div>
    </>
  )
}
