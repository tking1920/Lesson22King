function createInvoice()
{
/* Getting Inputs from Lesson22.html */
/*Float means it is a decmial value */
/* .value is a property of .getElementbyId to get the actual value of that ID */
    I1 = parseFloat(document.getElementById("price1").value);
    I2 = parseFloat(document.getElementById("price2").value);
    I3 = parseFloat(document.getElementById("price3").value);

    /* Defining variables for calculations */
    var subtotal = I1 + I2 + I3;
    var tax = 0.07 * subtotal;
    var total = parseFloat(subtotal + tax);
 
/* Opens new window for Invoice HTML adding values from Lesson22.html and invoice.js */
/* let html =`  `    put html code in the inside if you want to print information from javascript to a new html page that you want to open */
/* below use ${document.getElmentbyID().value} to get information that you entered on html page. in () name of value that you called goes here*/

let html = 
`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="invoice-style.css">
    <title>Customer Invoice</title>
</head>
<body>
    <header>
        <div class="logo">
            <img src="chocolate-logo.jpg" alt="Chocolate Logo">
        </div>
        <div class="invoice-text">
            <p>
            123 Main St.<br>
            St. Louis, MO 99955<br>
            (123) 456-7890<br>
            </p>
        </div>
    </header>
    <main>
        <table>
            <tr>
                <th colspan="3">Customer Information</th>
            </tr>
            <tr >
                <td colspan="3">${document.getElementById("name").value}<br>
                    ${document.getElementById("street").value}<br>
                    ${document.getElementById("city").value} ${document.getElementById("state").value} ${document.getElementById("zip").value}<br>
                    ${document.getElementById("phone").value}
                    
                </td>
            </tr>
            <tr>
                <th width="20%">Item</th>
                <th>Product</th>
                <th width="20%">Price</th>
            </tr>
            <tr>
                <td>Item 1</td>
                <td>${document.getElementById("item1").value}</td>
                <td>$${document.getElementById("price1").value}</td>
            </tr>
            <tr>
                <td>Item 2</td>
                <td>${document.getElementById("item2").value}</td>
                <td>$${document.getElementById("price2").value}</td>
            </tr>
            <tr>
                <td>Item 3</td>
                <td>${document.getElementById("item3").value}</td>
                <td>$${document.getElementById("price3").value}</td>
            </tr>
            <tr>
                <td></td>
                <td>Subtotal</td>
                <td>$${subtotal}</td>
            </tr>
            <tr>
                <td></td>
                <td>Tax</td>
                <td>$${tax.toFixed(2)}</td>
            </tr>
            <tr>
                <td></td>
                <td>Total</td>
                <td>$${total.toFixed(2)}</td>
            </tr>
            </table>
    </main>
</body>
</html>
`



/* Opens new window to display invoice html */
let newWindow = window.open();
newWindow.document.write(html);

    
}
