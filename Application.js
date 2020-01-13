class Application {
    constructor() {
        this.GetBaseUrl = () => {
            let url = window.location.href;
            if (window.location.protocol == "https:") {
                let httpRoot = url.match(/^https:\/\/[^/]+/);
                return httpRoot ? httpRoot[0] : null;
            }
            else {
                let httpRoot = url.match(/^http:\/\/[^/]+/);
                return httpRoot ? httpRoot[0] : null;
            }
        }
    }
}
