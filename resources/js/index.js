import fslightbox from 'fslightbox';

window.fslightbox = fslightbox;

window.SimpleLightBox = {
    getViewerURL(url, extension = null) {
        // https://gist.github.com/theel0ja/b9e44a961f892ccf43e217ab74b9417b
        // Extract the file extension

        if (!extension) {
            extension = url.split('.').pop();
        }

        switch (extension) {
            case 'pdf':
                return `https://docs.google.com/a/bouwflow.be/viewer?url=${url}&embedded=true`;
            case 'doc':
            case 'docx':
            case 'xls':
            case 'xlsx':
            case 'ppt':
            case 'pptx':
                return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
            default:
                return url;
        }
    },
    getMultipleImgURL(element) {

        try {
            if (element != undefined && element != null) {
                let imgArr = element?.closest('div')?.querySelectorAll('img.simple-light-box-img-indicator');
                if (imgArr != undefined && Array.from(imgArr).length > 0) {
                    return Array.from(imgArr, (imgElm) => imgElm.getAttribute('src'));
                }
            }
        } catch (error) {
            //
        }

        return null;
    },
    createIframe(url, extension) {
        // Create a new iframe element
        document.getElementById("tmp-iframe")?.remove();
        let iframe = document.createElement('iframe');
        iframe.src = this.getViewerURL(url, extension);
        iframe.id = "tmp-iframe";
        iframe.className = "fslightbox-source";
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; fullscreen";
        iframe.style = "width: 80vw; height: 80vh;";
        iframe.setAttribute("allowFullScreen", "");
        document.body.appendChild(iframe);
    },
    open(url, extension = null) {
        const lightbox = new FsLightbox();
        if (url !== undefined) {
            this.createIframe(url, extension);
            lightbox.props.sources = [document.getElementById("tmp-iframe")];
            lightbox.props.onClose = function(instance) {
                document.getElementById("tmp-iframe")?.remove();
            }
            lightbox.open();
            return;
        }
    }
}