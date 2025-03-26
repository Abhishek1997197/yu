let openedTabs = [];

document.getElementById('startButton').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;
    if (!url) return alert('Please enter a valid URL');

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            let tab = window.open(url, '_blank');
            if (tab) openedTabs.push(tab);
        }, i * 300); // Small delay to bypass browser restrictions
    }

    setTimeout(() => {
        openedTabs.forEach(tab => tab && tab.close());
        openedTabs = [];
    }, 10000);
});

document.getElementById('cancelButton').addEventListener('click', () => {
    openedTabs.forEach(tab => tab && tab.close());
    openedTabs = [];
});