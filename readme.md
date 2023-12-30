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
