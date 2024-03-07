import React, { useEffect } from 'react';

// Default submit handler
const defaultSubmitHandler = () => {
    console.log('Form submitted');
};

const defaultPrefillForm = () => {
    return {};
};

const defaultFormLoadHandler = () => {
    console.log('Form loaded');
};

const FormFacadeEmbed = ({
    prefillForm = defaultPrefillForm, // Default prefillForm function
    formFacadeURL,
    onSubmitForm = defaultSubmitHandler, // Default submit handler
    onFormLoad = defaultFormLoadHandler // Default onFormLoad function
}) => {

    useEffect(() => {
        const script = document.createElement('script');

        // Appending prefill and onload parameters to formFacadeURL
        formFacadeURL = formFacadeURL + (formFacadeURL.indexOf('?') > -1 ? '&' : '?') + 'prefill=ffPrefillForm&onload=ffOnLoadForm';

        script.src = formFacadeURL;
        script.async = true;
        script.defer = true;
        // Appending script to the body
        document.body.appendChild(script);

        // Defining listener for formFacade events
        window.facadeListener = {
            onChange: function (arg) {
                if (arg === 'submit') {
                    const submitSeq = window.formFacade?.result && window.formFacade?.result?.submitSeq;

                    // Handling form submission success or error
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

        // Function to prefill form
        window.ffPrefillForm = () => {
            try {
                // Calling prefillForm callback
                if (typeof prefillForm === 'function') {
                    return prefillForm();
                }
            } catch (error) {
                console.error(error);
            }
        }

        // Function to handle form load
        window.ffOnLoadForm = () => {
            try {
                // Calling onFormLoad callback
                if (typeof onFormLoad === 'function') {
                    return onFormLoad();
                }
            } catch (error) {
                console.error(error);
            }
        }

        // Cleanup function
        return () => {
            document.body.removeChild(script);
        }
    }, [formFacadeURL]); // Dependency array

    return (
        <div id='ff-compose' ff-embed='react'></div>
    );
}

// Memoizing the component with custom equality function
const areEqual = (prevProps, nextProps) => {
    return (
        prevProps.formFacadeURL === nextProps.formFacadeURL &&
        prevProps.prefillForm === nextProps.prefillForm &&
        prevProps.onSubmitForm === nextProps.onSubmitForm &&
        prevProps.onFormLoad === nextProps.onFormLoad
    );
}

export default React.memo(FormFacadeEmbed, areEqual);