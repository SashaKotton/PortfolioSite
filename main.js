const progressbarhtml = document.querySelector('.progressbar-html');
const progressbarjs = document.querySelector('.progressbar-js');
const progressbarpython = document.querySelector('.progressbar-python');

function enableProgressbar() {
    progressbarhtml.setAttribute("role", "progressbar");
    progressbarhtml.setAttribute("aria-valuenow", 56);
    progressbarhtml.setAttribute("aria-live", 'polite');
    progressbarjs.setAttribute("role", "progressbar");
    progressbarjs.setAttribute("aria-valuenow", 25);
    progressbarjs.setAttribute("aria-live", 'polite');
    progressbarpython.setAttribute("role", "progressbar");
    progressbarpython.setAttribute("aria-valuenow", 40);
    progressbarpython.setAttribute("aria-live", 'polite');

}

enableProgressbar()