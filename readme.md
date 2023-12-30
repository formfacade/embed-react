<img width="941" alt="Formfacade customzie logo" src="https://github.com/formfacade/embed-react-native/assets/54505967/0f61a2da-664d-43c4-9481-20b2b6c7d1bf">

# Customize the UI and embed Google Forms in React without the need for an Iframe.

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## Description

Use Formfacade to integrate Google Forms into your React app with a user interface that complements your website and gets rid of the Google Forms branding.

<img width="672" alt="@formfacade:embed-react demo" src="https://github.com/formfacade/embed-react-native/assets/54505967/3166a45e-1493-41e2-b5e4-8de99c2512fb">

## Features

- Tailored UI for seamless integration with Light and Dark backgrounds
- Easily implement callback functions upon form submission
- Embed scripts instead of iframes to make them easier to load and UI-friendly.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Support](#support)

## Installation

Instructions on how to install the package:

```bash
npm i @formfacade.dev/embed-react
```

## Usage

```javascript

import FormfacadeEmbed from "@formfacade.dev/embed-react";

<FormfacadeEmbed
    formFacadeEmbedURL={FORMFACADE_FORM_URL}
    onSubmitFormHandler={onSubmitFormHandler}
/>

````


| Prop                  | Type      | Default Value     | Required/Optional   |
| --------------------- | --------- | ----------------- | ------------------- |
| formFacadeEmbedURL    | String    | Required          | Required            |
| onSubmitFormHandler   | Function  | `() => Alert.alert('Form Submitted');` | Optional            |
| prefillFormFn         | Function  | Not specified     | Optional            |



- **formFacadeEmbedURL**: URL of the Formfacade embedded Google Form. This is a required field.
- **onSubmitFormHandler**: Callback function triggered on form submission. Default behavior: Shows an alert for form submission.
- **prefillFormFn**: Function to prefill form data. It's optional. 



### Example 

```javascript

import React from "react";
import FormfacadeEmbed from "@formfacade.dev/embed-react";

const FORMFACADE_URL = "https://formfacade.com/include/109671923741510513923/form/1FAIpQLSetAzIt89c0hBCWhI1AzUWRXDQ0VV1JAUph6i_3dvNpT-ZpqA/classic.js?div=ff-compose";


const App = () => {

  const prefillFormFn = () => {
    // To get the entry ID for the input fields, please visit https://formfacade.com/website/embed-google-form-in-website.html
    return {
      'entry.1297600622': '@formfacade.dev/embed-react',
      'entry.813617742': `${new Date()}`
    };
  };

  const onSubmitFormHandler = () => {
    alert('Form submitted');
  }

  return (
    <div className="App">
      <header>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Formfacade Embed React
        </h1>
      </header>
      <FormfacadeEmbed
        formFacadeEmbedURL={FORMFACADE_URL}
        prefillFormFn={prefillFormFn}
        onSubmitFormHandler={onSubmitFormHandler}
      />
    </div>
  );
};

export default App;


```

## Support

For support, email support@formfacade.com