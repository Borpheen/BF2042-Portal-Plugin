(function() {
    function integrateExternalSite() {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://chatgpt.com/g/g-2NEN8CgSe-battlefield-xml-generator';
        iframe.style.position = 'absolute';
        iframe.style.top = '50px';
        iframe.style.right = '10px';
        iframe.style.width = '300px';
        iframe.style.height = '400px';
        iframe.style.zIndex = '1000';
        document.body.appendChild(iframe);

        window.addEventListener('message', (event) => {
            if (event.origin !== 'https://chatgpt.com') return;

            if (event.data.type === 'xml') {
                const xmlData = event.data.data;
                console.log('Received XML data:', xmlData);
                processXmlData(xmlData);
            }
        });

        iframe.onload = () => {
            iframe.contentWindow.postMessage('Hello from the BF2042 Portal Rules Editor!', 'https://chatgpt.com');
        };
    }

    function processXmlData(xml) {
        alert('XML data received: ' + xml);
    }

    document.addEventListener('DOMContentLoaded', integrateExternalSite);
})();
