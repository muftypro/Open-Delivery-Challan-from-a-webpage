// ==UserScript==
// @name Open Delivery Challan HTML with Values
// @namespace http://tampermonkey.net/
// @version 0.2
// @description Adds a button to open the Delivery Challan HTML with values dynamically filled from the webpage
// @author Your Name
// @match https://salsabeelcars.site/index.php/admin/car_edit*
// @grant none
// ==/UserScript==

(function () {
'use strict';

// Create the "Open HTML" button
let openHtmlButton = document.createElement("button");
openHtmlButton.innerHTML = "Open HTML";
openHtmlButton.style.position = "fixed"; // Fixed position
openHtmlButton.style.top = "10px"; // Adjust the position of the button
openHtmlButton.style.right = "10px";
openHtmlButton.style.zIndex = "9999"; // Ensure it's on top of other elements

// Append the button to the body of the page
document.body.appendChild(openHtmlButton);

// Event listener for button click
openHtmlButton.addEventListener("click", function () {
// Extract values from the webpage using CSS selectors
let brandName = document.querySelector('body > div.wrapper > div.content-wrapper > section > div > form:nth-child(4) >
div:nth-child(5) > div > input').value;
let color = document.querySelector('body > div.wrapper > div.content-wrapper > section > div > form:nth-child(4) >
div:nth-child(7) > div.col-sm-2 > input').value;
let cc = document.querySelector('body > div.wrapper > div.content-wrapper > section > div > form:nth-child(4) >
div:nth-child(7) > div.col-sm-3 > input').value;
let yearOfModel = document.querySelector('body > div.wrapper > div.content-wrapper > section > div > form:nth-child(4) >
div:nth-child(4) > div.col-sm-3 > input').value;
let chassisNo = document.querySelector('body > div.wrapper > div > section > div > form:nth-child(4) > div:nth-child(4)
> div.col-sm-2 > input').value;
let engineNo = document.querySelector('#salesNote').value;

// The HTML content with placeholders for the extracted values
const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delivery Challan</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #141313;
        }

        .a4-page {
            width: 210mm;
            height: 297mm;
            padding: 1cm;
            background-color: white;
            color: #000000;
            font-family: "Times New Roman", Times, serif;
            font-size: 20px;
            font-weight: bold;
        }

        .top,
        .mid,
        .bottom {
            margin-bottom: 20px;
            margin-left: 5%;
            margin-right: 5%;
        }

        .top,
        .bottom {
            margin-top: 10%;
        }

        .top_top {
            text-align: center;
            padding-top: 1%;
            margin-bottom: 30px;
        }

        .top_top h1 {
            font-weight: bold;
            text-decoration: underline;
        }

        .top_mid {
            margin-bottom: 10px;
        }

        .date-wrapper {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }

        .date-wrapper label {
            margin-right: 10px;
            display: inline-block;
            white-space: nowrap;
        }

        .top_mid label {
            display: block;
            margin-bottom: 5px;
        }

        .top_mid input,
        .top_mid textarea {
            width: 100%;
            padding: 5px;
            border: 1px solid #ffffff;
            box-sizing: border-box;
            font-size: inherit;
            font-family: inherit;
            font-weight: normal;
        }

        textarea {
            height: 40px;
            resize: none;
        }

        .vehicle-details {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 30px;
        }

        .vehicle-details th,
        .vehicle-details td {
            border: 1px solid #000;
            padding: 2px;
            font-size: inherit;
            font-family: inherit;
            font-weight: normal;
            text-align: left;
        }

        .vehicle-details th {
            width: 30%;
        }

        .vehicle-details td {
            width: 70%;
        }

        .vehicle-details td input {
            width: 100%;
            border: none;
            padding: 5px;
            font-size: inherit;
            font-family: inherit;
            font-weight: normal;
            box-sizing: border-box;
        }

        .signatures {
            display: flex;
            justify-content: space-between;
            margin-top: 100px;
        }

        .signatures div {
            text-align: center;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            cursor: pointer;
        }

        @media print {
            button {
                display: none;
            }
        }
    </style>
</head>

<body>
    <div class="a4-page" id="a4-page">
        <div class="top">
            <div class="top_top">
                <h1>Delivery Challan</h1>
            </div>

            <div class="top_mid">
                <div class="date-wrapper">
                    <label>Date:</label>
                    <input type="text" style="width: auto;">
                </div>
                <label>Buyer's Name:</label>
                <input type="text">
                <label>Address:</label>
                <textarea></textarea>
            </div>
        </div>

        <div class="mid">
            <div class="mid_top">
                <h3>Description of Vehicle:</h3>
                <table class="vehicle-details">
                    <tr>
                        <th>01. Brand Name</th>
                        <td><input type="text" value=""></td>
                    </tr>
                    <tr>
                        <th>02. Color</th>
                        <td><input type="text" value=""></td>
                    </tr>
                    <tr>
                        <th>03. C.C</th>
                        <td><input type="text" value=""></td>
                    </tr>
                    <tr>
                        <th>04. Year of Model</th>
                        <td><input type="text" value=""></td>
                    </tr>
                    <tr>
                        <th>05. Chassis No.</th>
                        <td><input type="text" value=""></td>
                    </tr>
                    <tr>
                        <th>06. Engine No.</th>
                        <td><input type="text" value=""></td>
                    </tr>
                    <tr>
                        <th>07. Registration No.</th>
                        <td><input type="text" value="On Test"></td>
                    </tr>
                    <tr>
                        <th>08. Accessories</th>
                        <td><input type="text" value="Full loaded"></td>
                    </tr>
                </table>
            </div>

            <div class="mid_bottom">
                <p>Delivery Received:</p>
                <p style="font-weight: normal;">I/we, hereby received the above-mentioned vehicle in good running
                    condition with all accessories & original documents.</p>
            </div>
        </div>

        <div class="bottom">
            <div class="signatures">
                <div>
                    <p>Signature of Buyer</p>
                </div>
                <div>
                    <p>Authorized of Sal-Sabeel Cars</p>
                </div>
            </div>
        </div>
    </div>

    <button onclick="window.print();">Print this page</button>
</body>

</html>
`;

// Open a new tab and inject the HTML content with the filled values
let newWindow = window.open("", "_blank");
newWindow.document.write(htmlContent);
newWindow.document.close(); // Close the document to complete the load
});
})();