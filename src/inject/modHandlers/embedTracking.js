const embedTracking = () => {
    const shippingAnchor = document.querySelector('td.col-tracking_number a');
    if (!shippingAnchor) return;
    const trackingUrl = shippingAnchor.href;
    const iframe = document.createElement("iframe");
    iframe.src = trackingUrl;
    iframe.width = 600;
    iframe.height = 250;
    const shippingContainerDiv = shippingAnchor.closest('.panel_contents');
    shippingContainerDiv.append(iframe);
}

export default embedTracking;