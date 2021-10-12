const convertForm = document.querySelector('#pdf-generator');
const formFeedback = convertForm.querySelector('#formFeedback');

// this can be written as utility function to handle all error cases and moved to separate module in future.
function handleError(e) {
  console.log(e);
}

// function to call txtPaperApi
async function convertAndSendMail(url, email) {
  const baseEndPoint = 'http://localhost:3333/generate-pdf/';
  const fetchOptions = {
      // Adding method type
      // mode:'no-cors',
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({"url":url,"email":email,headers: {
        "Content-type": "application/json"
    }})
    }

    console.log(fetchOptions);
    
  // const res = await fetch(
  //   `${baseEndPoint}?url=${url}&format=pdf&email=${email}`,
  // ).catch(handleError);

  const res = await fetch(baseEndPoint,fetchOptions).catch(handleError);

  // Code to userfeedback .
  formFeedback.insertAdjacentHTML(
    'afterbegin',
    `<span class =${res ? 'success' : 'failed'}>Sending mail to ${email} is ${
      res
        ? 'successfull, Please check the mail'
        : 'failed, Sorry for any inconvinience caused.'
    } </span>`
  );
}
function handleSubmit(e) {
  e.preventDefault();
  const [email, urlAddress] = [
    e.currentTarget.email.value,
    e.currentTarget.blogAddress.value,
  ];
  convertAndSendMail(urlAddress, email);
}

convertForm.addEventListener('submit', handleSubmit);
