(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("iframe");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    // set attributes
    dialog.setAttribute("header-text", "Third Party JavaScript");
    footer.setAttribute("slot", "footer");
    // content
    content.src = "https://www.ieplads.com/mailers/2023_ui/hr/hr-aug/Infoedge_Policies_Procedures_V.1.49.pdf";
    content.style.width = "100%";
    content.style.height = "400px"; // Adjust height as needed
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show();
})();
