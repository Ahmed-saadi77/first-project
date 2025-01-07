import { useRef, useState } from 'react'

export default function Js() {
  const ref = useRef()

  const [image, setImage] = useState(null);

  // Handle the image selection
  const handleImageChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      // Generate a file URL and set it in the state
      const fileUrl = URL.createObjectURL(file);
      console.log(fileUrl)
      setImage(fileUrl); // Store the file URL in state
    }
  };
  

  // Trigger the file input when the button is clicked
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();  // Programmatically click the hidden file input
  };
  


  return (
    <form>
      <div className="hero">
        <div className="card">
          <label className="La1">First Name</label>
          <input className="IN1" type='Name' placeholder='Enter Name'></input>
          <label className="La2">Last Name</label>
          <input className='IN2' type='Name' placeholder='Enter Name'></input>
          <p></p>

        </div>
        {!image &&(
        <button  className="bu"type="button"  onClick={triggerFileInput} >

          <div className="img-area">
            <i className='bx bxs-cloud-upload icon'></i>
          </div>
          {/* Display the selected image inside the button */}
   
        </button>
)}

       {image ? (
        <div style={{ display: "flex", justifyContent: "center"}} onClick={triggerFileInput} >
            <img className='IMG' src={image} alt="Uploaded"  />
            </div>
          ) : (
            <span className='ss'>Upload Image</span>
          )}
        {/* Hidden file input */}
        <input
          id="fileInput"
          type="file"
          ref={ref}
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        {image && (
          <button type="button" onClick={triggerFileInput}  className='bb' >
            change Image
          </button>
        )}
      </div>
    </form>
  
  );
};

