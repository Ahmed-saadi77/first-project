 const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState("");

  // Handle file input change
  const handleImageChange = (event) => {
    console.log(event)
    const file = event.target.files[0]; // Get the first file
    if (file) {
      setImage(URL.createObjectURL(file));  // Create a URL for the image
      setImageName(file.name);  // Save the image name
    }
  };
  

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with image: ' + imageName);
  };

    return (
        <div className='bk'>
          <h1 className='nn'>first name :</h1>
          <input className='in'></input>
          <h1 className='nn2'>Last name :</h1>
          <input className='in2'></input>
          
      <h2 className='hh'>Profile Image :</h2>
      <form  className='ff' onSubmit={handleSubmit}>
        {<div className='d1'>
        <div class="container" >
           <input 
           type="file" 
            id="file" 
            accept="image/*"
            onChange={handleImageChange}
             />

           <div class="img-area">
           <i class='bx bxs-cloud-upload icon'></i>
                <h3>Upload Image</h3>
        </div>
        <button  class="select-image">Select Image</button>
                      <label htmlFor="imageUpload"> </label>
       </div>
        </div>}
        {image && (
          <div>
            <h3 className='nn3'></h3>
            <img 
              src={image} 
              alt="Selected" 
              style={{ width: '200px', height: 'auto', marginTop: '10px' }} 
            />
          <div>
          <button type="submit" disabled={!image}>Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
    )

    
