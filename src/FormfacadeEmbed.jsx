import React from 'react';

const onSubmitFormHandlerDefault = () => {
    alert('Form submitted');
}
const FormfacadeEmbed = ({
    prefillFormFn = () => { return {}; },
    formFacadeEmbedURL,
    onSubmitFormHandler = onSubmitFormHandlerDefault
}) => {


    React.useEffect(() => {

        const script = document.createElement('script');

        // append prefill=prefillForm this at last, if already ? exist them append &prefill=prefillForm else append ?prefill=prefillForm
        formFacadeEmbedURL = formFacadeEmbedURL + (formFacadeEmbedURL.indexOf('?') > -1 ? '&' : '?') + 'prefill=ffPrefillForm';

        script.src = formFacadeEmbedURL;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // @ts-ignore
        window.facadeListener = {
            onChange: function (arg) {
                if (arg === 'submit') {
                    // @ts-ignore
                    const submitSeq = window.formFacade?.result && window.formFacade?.result?.submitSeq;

                    if (submitSeq) {
                        // @ts-ignore
                        let payload = {
                            type: 'FORM_SUBMITTED_SUCCESS',
                            // @ts-ignore
                            submitSeq: window.formFacade?.result?.submitSeq
                        };

                        onSubmitFormHandler(payload);
                    }

                } else if (arg === 'cart-product' || arg === 'cart-checkout') {
                    // TODO:
                }
            },
        };

        // @ts-ignore
        window.ffPrefillForm = () => {
            console.log('prefillFormFn');
            try {
                prefillFormFn();
            } catch (error) {
                console.error(error);
            }
        }

        return () => {
            document.body.removeChild(script);
        }
    }, [formFacadeEmbedURL]);

    return (
        <div id='ff-compose'></div>
    )
}

export default FormfacadeEmbed;