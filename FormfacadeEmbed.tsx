import React from 'react';

interface FormfacadeEmbedProps {
    prefillFormFn: () => any;
    formFacadeEmbedURL: string;
    onSubmitFormHandler: (event: any) => void;
};

const onSubmitFormHandlerDefault = () => {
    alert('Form submitted');
}
const FormfacadeEmbed = ({
    prefillFormFn,
    formFacadeEmbedURL,
    onSubmitFormHandler = onSubmitFormHandlerDefault
}: FormfacadeEmbedProps) => {


  React.useEffect(() => {

    const script = document.createElement('script');
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

    return () => {
      document.body.removeChild(script);
    }
  }, [formFacadeEmbedURL]);

  return (
    <div id='ff-compose'></div>
  )
}

export default FormfacadeEmbed;