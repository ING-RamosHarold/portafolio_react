import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
    const postUrl = `${process.env.React_APP_MAILCHIMP_URL}?u=${process.env.React_APP_MAILCHIMP_U}&id=${process.env.React_APP_MAILCHIMP_ID}`;

   return(
    <>
     <MailchimpSubscribe
       url={postUrl}
       render={({ subscribe, status, message }) => (
        <Newsletter 
           status={status}
           message={message}
           onValidated={(formData) => subscribe(formData)}
        />
       )}
     />
    </>
   )
}
