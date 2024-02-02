<img width="941" alt="Formfacade customzie logo" src="https://github.com/formfacade/embed-react-native/assets/54505967/0f61a2da-664d-43c4-9481-20b2b6c7d1bf">

# Customize the UI and embed Google Forms in React without the need for an Iframe.

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE.md)

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

1. **Download the FormFacade Plugin:**
   Obtain the FormFacade plugin from the [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/formfacade/743872305260).

2. **Access Google Forms:**
   Open your Google Form

3. **Add the FormFacade Add-on:**
   - Click on the 'Add-ons' button in Google Forms.
   - Choose 'Formfacade' from the list of available add-ons.
   - Select 'Embed in a web page'.

4. **Embedding the Form:**
   - Upon clicking 'Embed', a dialog will appear asking, “Where do you want to embed this form?”
   - Choose "Embed in React App" for integration.
   - Retrieve the 'formfacadeURL' from this selection.

5. **Integrate with React App:**
   Use the following npm command to install the required package for embedding the form within your React application:

  ```bash
  npm i @formfacade/embed-react
  ```
For more detailed information, please visit [FAQ: How do I embed a Google Form in the React App without the need for an Iframe?](https://docs.google.com/document/d/1w23EMeHBlFisximqlIS6pZoyyIDRMFwV4rrosYCMzhM/edit)

## Usage

```javascript

import FormfacadeEmbed from "@formfacade/embed-react";

<FormfacadeEmbed
    formFacadeURL={formFacadeURL}
    onSubmitForm={onSubmitForm}
/>

````


| Prop                  | Type      | Default Value     | Required/Optional   |
| --------------------- | --------- | ----------------- | ------------------- |
| formFacadeURL    | String    | Required          | Required            |
| onSubmitForm   | Function  | `() => console.log('Form Submitted');` | Optional            |
| prefillForm         | Function  | Not specified     | Optional            |



- **formFacadeURL**: URL of the Formfacade embedded Google Form. This is a required field.
- **onSubmitForm**: Callback function triggered on form submission. Default behavior: Shows an alert for form submission.
- **prefillForm**: Function to prefill form data. It's optional. 



### Example 

[![Edit embed-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/embed-react-29w8cy?file=%2Fsrc%2FApp.js%3A14%2C5)

```javascript

import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

const FORMFACADE_URL = "https://formfacade.com/include/109671923741510513923/form/1FAIpQLSetAzIt89c0hBCWhI1AzUWRXDQ0VV1JAUph6i_3dvNpT-ZpqA/classic.js?div=ff-compose";


const App = () => {

  const prefillForm = () => {
    // To get the entry ID for the input fields, please visit https://formfacade.com/website/does-formfacade-support-pre-filled-survey-links-like-native-google-forms-on-1FAIpQLSfGvg22V7Lzyw_5AEbKBSpklS_TMw6tKxcQiDqlC9KvfBVTgQ.html
    return {
      'entry.1297600622': '@formfacade/embed-react',
      'entry.813617742': `${new Date()}`
    };
  };

  const onSubmitForm = () => {
    // Add your specific form submission handling code below.
    console.log("----FORM SUBMITTED----");
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
        formFacadeURL={FORMFACADE_URL}
        prefillForm={prefillForm}
        onSubmitForm={onSubmitForm}
      />
    </div>
  );
};

export default App;


```


## Support

For support, email support@formfacade.com
