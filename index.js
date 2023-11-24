function checkWebsiteStatus(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    resolve("Online");
                } else {
                    resolve("Offline");
                }
            })
            .catch(error => {
                reject("Error: " + error.message);
            });
    });
}

module.exports = checkWebsiteStatus;