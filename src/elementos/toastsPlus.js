function reduceHeight() {
    var toastContainer = document.getElementById("toast-container");
    toastContainer.style.minHeight = "100px";
}

function deleteMessage() {
    var toastContainer = document.getElementById('toast-containers');
    toastContainer.classList.add('toast-hidden');
}

let hideTimeout;

function deleteMessage() {
    var toastContainer = document.getElementById('toast-containers');
    toastContainer.classList.add('toast-hidden');
}

function showToast() {
    var toastContainer = document.getElementById('toast-containers');
    toastContainer.classList.remove('toast-hidden');
    toastContainer.classList.add('toast-visible');

    clearTimeout(hideTimeout);

    hideTimeout = setTimeout(function () {
        toastContainer.classList.remove('toast-visible');
    }, 3000);
}
