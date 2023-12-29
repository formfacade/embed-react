![Logo](https://cdn.neartail.com/1FAIpQLScRq0UUyhMrAuRBN39i68JdMoTvq85YCATs394gxuT_K3TU1A/2079056105/image_title/Screenshot%202023-12-28%20at%2012.42.30%20PM.png)

# Embed Google Forms with Professional UI in React Native using Formfacade.

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## Description

Embed Google Forms into your React app with a professional UI while removing the Google Form branding using Formfacade.

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
npm i @formfacade/embed-react-native
```

## Usage

```javascript
import FormfacadeWebview from "@formfacade/embed-react-native";

<FormfacadeEmbed
    formFacadeEmbedURL={FORMFACADE_FORM_URL}
    onSubmitFormHandler={onSubmitFormHandler}
/>

````
