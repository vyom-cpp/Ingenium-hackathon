const stringToHTML = (str) => {
  // Create a new div element
  const wrapper = document.createElement('div');
  wrapper.id = 'root'
  // Set the inner HTML of the div to the string
  wrapper.innerHTML = str;

  // Return the newly created element
  return wrapper;
}

const draft = document.querySelector('.draft') 

setTimeout(() => {
  draft.style.display = "block"
}, 3400);

const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownItems.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    const selectedOption = item.textContent.trim();
    dropdownToggle.textContent = selectedOption;
  });
});


// Get reference to the div where dynamic content will be displayed
const dynamicContent = document.getElementById('dynamicContent');

// Add event listener to each dropdown item
dropdownItems.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of anchor tag

    // Get the data-option attribute value
    const option = item.dataset.option;

    // Depending on the selected option, replace the dynamic content
    switch (option) {
      case 'option1':
        dynamicContent.innerHTML = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body><h3>Employment Agreement</h3><form id="myForm" method="" action=""> <div class="mb-3"> <label for="date" class="form-label text-bg-dark">Date</label> <input required type="date" class="form-control text-bg-dark" id="date"> </div> <div class="mb-3"> <label for="employeeName" class="form-label text-bg-dark">Employee Name:</label> <input required type="text" class="form-control text-bg-dark" id="employeeName"> </div> <div class="mb-3"> <label for="employer" class="form-label text-bg-dark">Employer:</label> <input required type="text" class="form-control text-bg-dark" id="employer"> </div> <div class="mb-3"> <label for="jobTitle" class="form-label text-bg-dark">Job Title:</label> <input required type="text" class="form-control text-bg-dark" id="jobTitle"> </div> <div class="mb-3"> <label class="form-label text-bg-dark">Full/Part Time:</label><br> <div class="form-check form-check-inline"> <input required class="form-check-input text-bg-dark" type="radio" name="employmentType" id="fullTime" value="Full Time"> <label class="form-check-label text-bg-dark" for="fullTime">Full Time</label> </div> <div class="form-check form-check-inline"> <input required class="form-check-input text-bg-dark" type="radio" name="employmentType" id="partTime" value="Part Time"> <label class="form-check-label text-bg-dark" for="partTime">Part Time</label> </div> </div> <div class="mb-3"> <label for="responsibilities" class="form-label text-bg-dark">Employers Responsibilities:</label><br> <textarea required class="form-control text-bg-dark" id="prompt" rows="4"></textarea> </div> <div class="mb-3"> <div class="form-check"> <input required class="form-check-input text-bg-dark" type="checkbox" id="fixedTerm"> <label class="form-check-label text-bg-dark" for="fixedTerm">Fixed Term</label> </div> <div class="row"> <div class="col"> <label for="startDate" class="form-label text-bg-dark">Start Date:</label> <input required type="date" class="form-control text-bg-dark" id="startDate"> </div> <div class="col"> <label for="endDate" class="form-label text-bg-dark">End Date:</label> <input required type="date" class="form-control text-bg-dark" id="endDate"> </div> </div> </div> <div class="mb-3"> <div class="form-check"> <input required class="form-check-input text-bg-dark" type="checkbox" id="atWill"> <label class="form-check-label text-bg-dark" for="atWill">At Will</label> </div> <div class="mb-3"> <label for="atWillStartDate" class="form-label text-bg-dark">Start Date:</label> <input required type="date" class="form-control text-bg-dark" id="atWillStartDate"> </div> </div> <div class="mb-3"> <label for="baseSalary" class="form-label text-bg-dark">Base Salary:</label> <input required type="number" class="form-control text-bg-dark" id="baseSalary" min="0"> </div> <button type="submit" class="btn btn-secondary" onclick="handleSubmit(event)">Submit</button> </form></body> </html>';
        break;
      case 'option2':
        dynamicContent.innerHTML = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body><h3>Will format</h3> <form id="myForm"> <div class="mb-3"> <label for="testatorName" class="form-label">Name of Testator</label> <input required type="text" class="form-control text-bg-dark" id="testatorName" placeholder="Enter name"> </div> <div class="mb-3"> <label for="fatherName" class="form-label">Father Name</label> <input required type="text" class="form-control text-bg-dark" id="fatherName" placeholder="Enter fathers name"> </div> <div class="mb-3"> <label for="age" class="form-label">Age</label> <input required type="number" class="form-control text-bg-dark" id="age" min="0" placeholder="Enter age"> </div> <div class="mb-3"> <label for="address" class="form-label">Address</label> <textarea required class="form-control text-bg-dark" id="address" rows="3" placeholder="Enter address"></textarea> </div> <div class="mb-3"> <label for="executorName" class="form-label">Name of Executor</label> <input required type="text" class="form-control text-bg-dark" id="executorName" placeholder="Enter executors name"> </div> <div class="mb-3"> <label for="wifeName" class="form-label">Wife Name</label> <input required type="text" class="form-control text-bg-dark" id="wifeName" placeholder="Enter wifes name"> </div> <div class="mb-3"> <label for="numChildren" class="form-label">Number of Children</label> <input required type="number" class="form-control text-bg-dark" id="numChildren" min="0" placeholder="Enter number of children"> </div> <div id="childNamesContainer"></div> <div class="mb-3"> <label for="propertyAddress" class="form-label">Property Address</label> <textarea required class="form-control text-bg-dark" id="propertyAddress" rows="3" placeholder="Enter property address"></textarea> </div> <div class="mb-3"> <label for="jewelleryDetails" class="form-label">Jewellery Details</label> <input required type="text" class="form-control text-bg-dark" id="jewelleryDetails" placeholder="Enter jewellery details"> </div> <div class="mb-3"> <label for="nomineeName" class="form-label">Nominee Name</label> <input required type="text" class="form-control text-bg-dark" id="nomineeName" placeholder="Enter nominees name"> </div> <div class="mb-3"> <label for="willDate" class="form-label">Will Agreement Date</label> <input required type="date" class="form-control text-bg-dark" id="willDate"> </div> <div class="mb-3"> <label for="witnessName" class="form-label">Witness Name</label> <input required type="text" class="form-control text-bg-dark" id="witnessName" placeholder="Enter witnesss name"> </div> <button type="submit" class="btn btn-secondary" onclick="handleSubmit(event)">Submit</button> </form></body> </html>';
        break;
      case 'option3':
        dynamicContent.innerHTML = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body><h3>Rental/Lease Agreement format</h3> <form id="myForm"> <div class="mb-3"> <label for="agreementCity" class="form-label text-bg-dark">Agreement City</label> <input required type="text" class="form-control text-bg-dark" id="agreementCity"> </div> <div class="mb-3"> <label for="agreementState" class="form-label text-bg-dark">Agreement State</label> <input required type="text" class="form-control text-bg-dark" id="agreementState"> </div> <div class="mb-3"> <label for="dateOfAgreement" class="form-label text-bg-dark">Date of Agreement</label> <input required type="date" class="form-control text-bg-dark" id="dateOfAgreement"> </div> <div class="mb-3"> <label for="landlordsName" class="form-label text-bg-dark">Landlords Name</label> <input required type="text" class="form-control text-bg-dark" id="landlordsName"> </div> <div class="mb-3"> <label for="address" class="form-label text-bg-dark">Address</label> <textarea required class="form-control text-bg-dark" id="address" rows="3"></textarea> </div> <div class="mb-3"> <label for="tenantName" class="form-label text-bg-dark">Tenant Name</label> <input required type="text" class="form-control text-bg-dark" id="tenantName"> </div> <div class="mb-3"> <label for="tenantAddress" class="form-label text-bg-dark">Tenant Address</label> <textarea required class="form-control text-bg-dark" id="tenantAddress" rows="3"></textarea> </div> <div class="mb-3"> <label for="propertyType" class="form-label text-bg-dark">Type of Property</label> <input required type="text" class="form-control text-bg-dark" id="propertyType"> </div> <div class="mb-3"> <h5 class="text-bg-dark">Details about House</h5> </div> <div class="mb-3"> <label for="numBedrooms" class="form-label text-bg-dark">No. of Bedrooms</label> <input required type="number" class="form-control text-bg-dark" id="numBedrooms"> </div> <div class="mb-3"> <label for="numBathrooms" class="form-label text-bg-dark">No. of Bathrooms</label> <input required type="number" class="form-control text-bg-dark" id="numBathrooms"> </div> <div class="mb-3"> <label for="numParking" class="form-label text-bg-dark">No. of Parking</label> <input required type="number" class="form-control text-bg-dark" id="numParking"> </div> <div class="mb-3"> <label for="squareFootArea" class="form-label text-bg-dark">Square Foot Area of House</label> <input required type="number" class="form-control text-bg-dark" id="squareFootArea"> </div> <button type="submit" class="btn btn-secondary" onclick="handleSubmit(event)">Submit</button> </form></body> </html>';
        break;
      case 'option4':
        dynamicContent.innerHTML = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body><h3>Non Disclosure Agreement</h3><form id="myForm" id="myForm"> <div class="mb-3"> <label for="dateInput" class="form-label text-bg-dark">Date:</label> <input required type="date" class="form-control text-bg-dark" id="dateInput"> </div> <!-- Disclosing Party --> <h5 class="text-bg-dark">Disclosing Party (check one):</h5> <div class="mb-3 form-check"> <input required type="checkbox" class="form-check-input text-bg-dark" id="corporationCheckbox"> <label class="form-check-label text-bg-dark" for="corporationCheckbox">Corporation</label> </div> <div class="mb-3 form-check"> <input required type="checkbox" class="form-check-input text-bg-dark" id="individualCheckbox"> <label class="form-check-label text-bg-dark" for="individualCheckbox">Individual</label> </div> <!-- Add other checkboxes here --> <!-- Receiving Party --> <h5 class="text-bg-dark">Receiving Party (check one):</h5> <div class="mb-3 form-check"> <input required type="checkbox" class="form-check-input text-bg-dark" id="corporationReceivingCheckbox"> <label class="form-check-label text-bg-dark" for="corporationReceivingCheckbox">Corporation</label> </div> <div class="mb-3 form-check"> <input required type="checkbox" class="form-check-input text-bg-dark" id="individualReceivingCheckbox"> <label class="form-check-label text-bg-dark" for="individualReceivingCheckbox">Individual</label> </div> <!-- Add other checkboxes here --> <div class="mb-3"> <label for="detailsTextarea" class="form-label text-bg-dark">Mention details for contract:</label> <textarea required class="form-control text-bg-dark" id="prompt" rows="3"></textarea> </div> <button type="submit" class="btn btn-secondary" onclick="handleSubmit(event)">Submit</button> </form></body> </html>';
        break;
      case 'option5':
        dynamicContent.innerHTML = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body><h3>Power of Attorney</h3><form id="myForm"> <div class="mb-3"> <label for="ownerName" class="form-label">Owner Name:</label> <input required type="text" class="form-control text-bg-dark" id="ownerName" placeholder="Enter owner name"> </div> <div class="mb-3"> <label for="ownerAddress" class="form-label">Owner Address:</label> <textarea required class="form-control text-bg-dark" id="ownerAddress" rows="3" placeholder="Enter owner address"></textarea> </div> <div class="mb-3"> <label for="receiverName" class="form-label">Receiver Name:</label> <input required type="text" class="form-control text-bg-dark" id="receiverName" placeholder="Enter receiver name"> </div> <div class="mb-3"> <label for="receiverAddress" class="form-label">Receiver Address:</label> <textarea required class="form-control text-bg-dark" id="receiverAddress" rows="3" placeholder="Enter receiver address"></textarea> </div> <div class="mb-3"> <label for="successorAgentName" class="form-label">Successor Agent Name:</label> <input required type="text" class="form-control text-bg-dark" id="successorAgentName" placeholder="Enter successor agent name"> </div> <div class="mb-3"> <label for="successorAgentAddress" class="form-label">Successor Agent Address:</label> <textarea required class="form-control text-bg-dark" id="successorAgentAddress" rows="3" placeholder="Enter successor agent address"></textarea> </div> <div class="mb-3 parent"> <div class="loading">Loading...</div> <button type="submit" class="btn btn-secondary" id="sub-btn" id="btn-submit" onclick="handleSubmit(event)">Submit</button></div> </form></body></html>';
        break;
      default:
        dynamicContent.innerHTML = ''; // Clear content if no option matches
    }
  });
});


function handleSubmit(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form element
  const form = document.getElementById('myForm');
  const contract_value = document.getElementById('dropdownMenuButton').innerText;

  // Create object to hold form data
  const formData = {
    contract_type: contract_value,
    general_info: '',
    prompt: ''
  };

  console.log(form);
  const button = document.querySelector('#sub-btn');
  const loading = document.querySelector('.loading');

  button.style.display = "none";
  loading.style.display = "block";

  // Loop through form elements
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (element.tagName === 'INPUT' || element.type === 'radio' || element.type === 'checkbox') {
      // Exclude textarea with id "prompt"
      if (element.type !== 'textarea' || element.id !== 'prompt') {
        formData.general_info += `${element.id}: ${element.value}\n`;
      }
    } else if (element.tagName === 'TEXTAREA') {
      // Handle textarea with id "prompt"
      if (element.id === 'prompt') {
        formData.prompt = element.value;
      } else {
        formData.general_info += `${element.id}: ${element.value}\n`;
      }
    }
  }

  // Display form data
  console.log(formData);

  // Send form data to server (POST request)
  // fetch('http://localhost:8000/api/post_data', {
  fetch('https://tourmaline-outstanding-rifle.glitch.me/api/post_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      response.json().then(data => {
        const newWindow = window.open('https://vyom-cpp.github.io/Ingenium-hackathon/src/pdf.html')
        newWindow.addEventListener('DOMContentLoaded', () => {
          const newWindowDocument = newWindow.document;
          newWindowDocument.write(`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>pdf</title> </head> <body id="body" style="background-color: white; color: black"> <div > ${data} <div>  </body> </html>`);

          const element = newWindowDocument.getElementById('body');

          console.log(element);

          // Options for PDF generation
          const opt = {
            margin: 1,
            filename: 'document.pdf',
            // image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
              unit: 'in',
              format: 'letter',
              orientation: 'portrait',
              background: '#ffffff' // Set background color to white
            }
          };

          html2pdf().from(element).set(opt).save();
        });
      })
    })

    .catch(error => {
      console.error(error);
    });
}