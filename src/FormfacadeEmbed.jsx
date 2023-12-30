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

        formFacadeEmbedURL = formFacadeEmbedURL + (formFacadeEmbedURL.indexOf('?') > -1 ? '&' : '?') + 'prefill=ffPrefillForm';

        script.src = formFacadeEmbedURL;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.facadeListener = {
            onChange: function (arg) {
                if (arg === 'submit') {
                    const submitSeq = window.formFacade?.result && window.formFacade?.result?.submitSeq;

                    if (submitSeq) {
                        onSubmitFormHandler({
                            type: 'FORM_SUBMITTED_SUCCESS',
                            submitId: submitSeq
                        });
                    } else {
                        onSubmitFormHandler({
                            type: 'FORM_SUBMITTED_ERROR'
                        });
                    }

                } else if (arg === 'cart-product' || arg === 'cart-checkout') {
                    // TODO:
                }
            },
        };

        window.ffPrefillForm = () => {
            try {
                return prefillFormFn();
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

const areEqual = (prevProps, nextProps) => {
    return prevProps.formFacadeEmbedURL === nextProps.formFacadeEmbedURL;
}


export default React.memo(FormfacadeEmbed, areEqual);