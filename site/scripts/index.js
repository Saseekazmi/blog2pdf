const convertForm = document.querySelector('#pdf-generator');
const formFeedback = convertForm.querySelector('#formFeedback');

// this can be written as utility function to handle all error cases and moved to separate module in future.
function handleError(e) {
  throw new Error(e);
}

// function to call txtPaperApi
async function convertAndSendMail(url, email) {
  const baseEndPoint = '/.netlify/functions/convertpage';
  const fetchOptions = {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({url, email}),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const res = await fetch(baseEndPoint, fetchOptions).catch(handleError);

  //Userfeedback codes.
  const responseStatus = (res && res.ok && res.status == 200) ? 'success' : 'failed';
  formFeedback.innerHTML = `<span class =${responseStatus}>Sending mail to ${email} is ${responseStatus ==='success'? 'successfull, Please check the mail.': 'failed, Sorry for any inconvinience caused.'} </span>`;
}

function handleBtnClick(e) {
  //preventing form defaults 
  e.preventDefault();
  const [email, urlAddress] = [
    e.currentTarget.email,
    e.currentTarget.blogAddress,
  ];

  //Delegating form button click events 
  switch (e.type) {
    case 'submit':
      convertAndSendMail(urlAddress.value, email.value);
      break;
    case 'reset':
      email.value = null;
      urlAddress.value = null;
      break;
    default:
      throw new Error('Invalid event triggered' + e.type);
  }
}

//Submit event listner
convertForm.addEventListener('submit', handleBtnClick);
//Reset event listner
convertForm.addEventListener('reset', handleBtnClick);