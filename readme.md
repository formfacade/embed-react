![Logo](https://cdn.neartail.com/1FAIpQLScRq0UUyhMrAuRBN39i68JdMoTvq85YCATs394gxuT_K3TU1A/2079056105/image_title/Screenshot%202023-12-28%20at%2012.42.30%20PM.png)

# Customize the UI and embed Google Forms in React without the need for an Iframe.

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## Description

Use Formfacade to integrate Google Forms into your React app with a user interface that complements your website and gets rid of the Google Forms branding.

![Description](https://cdn.formfacade.com/1FAIpQLSf2YKzD1EdnlSaqvIHkJZedwqJyqhcr3TH56YoJ3t1sDlSTFA/root/banner/%40formfacade%3Aembed-react-native.png)

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
npm i @formfacade.dev/embed-react-native
```

## Usage

```javascript
import FormfacadeWebview from "@formfacade.dev/embed-react-native";

<FormfacadeEmbed
    formFacadeEmbedURL={FORMFACADE_FORM_URL}
    onSubmitFormHandler={onSubmitFormHandler}
/>

````
