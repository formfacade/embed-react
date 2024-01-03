import React, { useEffect } from 'react';

const defaultSubmitHandler = () => {
    alert('Form submitted');
};

const FormFacadeEmbed = ({
    prefillForm = () => { return {}; },
    formFacadeURL,
    onSubmitForm = defaultSubmitHandler
}) => {
    useEffect(() => {
        const script = document.createElement('script');

        formFacadeURL = formFacadeURL + (formFacadeURL.indexOf('?') > -1 ? '&' : '?') + 'prefill=ffPrefillForm';

        script.src = formFacadeURL;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.facadeListener = {
            onChange: function (arg) {
                if (arg === 'submit') {
                    const submitSeq = window.formFacade?.result && window.formFacade?.result?.submitSeq;

                    if (submitSeq) {
                        onSubmitForm({
                            type: 'FORM_SUBMITTED_SUCCESS',
                            submitId: submitSeq
                        });
                    } else {
                        onSubmitForm({
                            type: 'FORM_SUBMITTED_ERROR'
                        });
                    }
                } else if (arg === 'cart-product' || arg === 'cart-checkout') {
                    // TODO: Handle cart related changes
                }
            },
        };

        window.ffPrefillForm = () => {
            try {
                return prefillForm();
            } catch (error) {
                console.error(error);
            }
        }

        return () => {
            document.body.removeChild(script);
        }
    }, [formFacadeURL]);

    return (
        <div id='ff-compose'></div>
    )
}

const areEqual = (prevProps, nextProps) => {
    return prevProps.formFacadeURL === nextProps.formFacadeURL;
}

export default React.memo(FormFacadeEmbed, areEqual);