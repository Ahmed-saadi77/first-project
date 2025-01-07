import { useRef, useState } from 'react'

export default function Js() {

  const [image, setImage] = useState(null);

  // Handle the image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);  // Store the image URL in state
      };
      reader.readAsDataURL(file);  // Read the file as a data URL
    }
  };

  // Trigger the file input when the button is clicked
  const triggerFileInput = () => {
    document.getElementById('fileInput').click();  // Programmatically click the hidden file input
  };
  const resetImage = () => {
    setImage(null);
  }

  return (
    <form>
      <div class="hero">
        <div class="card">
          <label class="La1">First Name</label>
          <input className="IN1" type='Name' placeholder='Enter Name'></input>
          <label class="La2">Last Name</label>
          <input className='IN2' type='Name' placeholder='Enter Name'></input>
          <p></p>

        </div>
        <button  className="bu"type="button"  onClick={triggerFileInput} >
          <div class="img-area">
            <i class='bx bxs-cloud-upload icon'></i>
          </div>
          {/* Display the selected image inside the button */}
          {image ? (
            <img className='IMG' src={image} alt="Uploaded"  />
          ) : (
            <span className='ss'>Upload Image</span>
          )}
        </button>

        {/* Hidden file input */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        {image && (
          <button type="button" onClick={resetImage}  className='bb' >
            change Image
          </button>
        )}
      </div>
    </form>
  
  );
};

