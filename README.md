﻿# NPM-Package
# Website Availability Checker

## About
The "Website Availability Checker" is a simple Node.js package designed to check the availability of a website. It uses HTTP GET requests to determine if a website is online, offline, or experiencing issues. This package is particularly useful for monitoring website uptime or for integrating website status checks into larger applications.

## Functionality
The package provides a single function `checkWebsiteStatus(url)`, which returns a promise. This promise resolves with:
- `"Online"` if the website returns a successful HTTP response.
- `"Offline"` if the website is reachable but returns an unsuccessful HTTP response.
- An error message if the website is not reachable or any other error occurs.

## Creation and Publication
The package was created using Node.js and the `node-fetch` library to handle HTTP requests. The process involved:
1. Writing the JavaScript code to perform the website status check.
2. Creating a `package.json` file with metadata and dependencies.
3. Documenting the usage and functionality in a `README.md` file.
4. Testing the package locally to ensure functionality.
5. Publishing the package to npm using `npm publish`.

## Package Name
The package is named `@amnaeman/mynpm-pkg`.

## Package Link
[https://www.npmjs.com/package/@amnaeman/mynpm-pkg](https://www.npmjs.com/package/@amnaeman/mynpm-pkg)

Note: This link is a placeholder and does not lead to an actual npm package.

## Installation
Install the package using npm:
bash
npm i @amnaeman/mynpm-pkg


## Usage
To use the package, require it in your Node.js application and call the `checkWebsiteStatus` function with a website URL.

javascript
const checkWebsiteStatus = require('@amnaeman/mynpm-pkg');

checkWebsiteStatus('https://google.com')
    .then(status => console.log('Website status:', status))
    .catch(error => console.error('Error:', error));
