const triggerBtn = document.querySelector('.trigger-btn');
const snackbar = document.querySelector('.snackbar');
const closeBtn = document.querySelector('.close-btn');

let timeoutId;

window.onload = function () {
  setTimeout(() => {
    snackbar.classList.add('active');
    startAutoClose();
  }, 2100);
};

triggerBtn.addEventListener('click', () => {
  snackbar.classList.add('active');
  startAutoClose();
});

closeBtn.addEventListener('click', () => {
  snackbar.classList.remove('active');
  clearTimeout(timeoutId);
});

function startAutoClose() {
  timeoutId = setTimeout(() => {
    snackbar.classList.remove('active');
  }, 15000);
}

snackbar.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
});

snackbar.addEventListener('mouseleave', startAutoClose);


const sessionTerms = {
    paid: [
        'Complete the payment to confirm your session slot.',
        'Rescheduling is allowed only if requested at least 24 hours in advance.',
        'Payments are non-refundable if you miss your session.',
        'Cancellations do not guarantee a refund.',
        'If you fail to attend, rescheduling may not be available for the same payment.'
    ],
    free: [
        'To avail of a free session, register for the NSAT exam using our referral link.',
        'After registration, submit proof of your enrollment.',
        'One free session per user; extras are paid.',
        'Rescheduling is allowed only if requested at least 24 hours before the session.',
        "For more details and a step-by-step booking process, visit <a href='../Paid&Free/index.html?policy=Registretion' target='_blank' style='text-decoration: underline;'>Zenova.details</a>."
    ]
};

function initializeTerms() {
    const paidList = document.getElementById('paid-terms');
    const freeList = document.getElementById('free-terms');
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    const createTermItem = (text, index) => {
        const li = document.createElement('li');
        li.innerHTML = text;
        li.style.margin = '8px 0';
        if (index >= 3) {
            li.style.display = 'none';
            li.classList.add('hidden-term');
        }
        return li;
    };

    if (paidList) {
        paidList.innerHTML = '';
        sessionTerms.paid.forEach((term, index) => {
            paidList.appendChild(createTermItem(term, index));
        });
    }

    if (freeList) {
        freeList.innerHTML = '';
        sessionTerms.free.forEach((term, index) => {
            freeList.appendChild(createTermItem(term, index));
        });
    }

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const termsList = this.previousElementSibling;
            const hiddenTerms = termsList.querySelectorAll('.hidden-term');
            const isExpanded = this.textContent === 'Read less...';

            hiddenTerms.forEach(term => {
                term.style.display = isExpanded ? 'none' : 'block';
            });

            this.textContent = isExpanded ? 'Read more...' : 'Read less...';
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeTerms);

function initializeReadMore() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        const termsList = button.previousElementSibling;
        const terms = termsList.querySelectorAll('li');
        let isExpanded = false;

        button.addEventListener('click', () => {
            isExpanded = !isExpanded;
            terms.forEach((term, index) => {
                if (index >= 3) {
                    term.style.display = isExpanded ? 'flex' : 'none';
                }
            });
            button.textContent = isExpanded ? 'Show less' : 'Read more...';
        });
    });
}

function initializeBookingButtons() {
    const bookingButtons = document.querySelectorAll('.book-session-btn');

    bookingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sessionType = button.getAttribute('data-type');

            if (sessionType === 'paid') {
                // Redirect to WhatsApp
                const message = 'I want to book a paid session.';
                const whatsappUrl = `https://wa.me/9588172862?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            } else if (sessionType === 'free') {
                // booking popup
                const bookingPopup = document.getElementById('bookingPopup');
                if (bookingPopup) bookingPopup.style.display = 'flex';
            }
        });
    });
}

const bookingPopup = document.getElementById('bookingPopup');

if (bookingPopup) {
    const closeBtnPopup = bookingPopup.querySelector('.close-btn');
    if (closeBtnPopup) {
        closeBtnPopup.addEventListener('click', () => {
            bookingPopup.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === bookingPopup) {
            bookingPopup.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            bookingPopup.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 4);

    const preferredDate = document.getElementById('preferredDate');
    if (preferredDate) {
        preferredDate.min = formatDate(today);
        preferredDate.max = formatDate(maxDate);
    }
});

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            mobileNumber: document.getElementById('mobileNumber').value,
            registrationDate: document.getElementById('registrationDate').value,
            preferredDate: document.getElementById('preferredDate').value,
            preferredTime: document.getElementById('preferredTime').value,
            duration: document.getElementById('duration').value,
            callPurpose: document.getElementById('callPurpose').value
        };

        redirectToEmail(formData);
    });
}


function redirectToEmail(data) {
    const email = 'session.zenova@gmail.com';
    const subject = `Free Session Booking Request - ${data.name}`;
    const body = `Dear Zenova Team,

I hope you are doing well.

I would like to request a free session booking. Below are my details:


📌 PERSONAL DETAILS:  

1️⃣ Full Name: ${data.name}

2️⃣ Mobile Number: ${data.mobileNumber}

3️⃣ NSAT Registration Date using our Referral Link: ${data.registrationDate}

📌 SESSION PREFERENCES:    
    
4️⃣ Preferred Session Date: ${data.preferredDate}

5️⃣ Preferred Session Time: ${data.preferredTime}

6️⃣ Duration of Session: ${data.duration}

7️⃣ Purpose of the Session: ${data.callPurpose}


Additionally, I confirm that the attached video proof is original and unaltered.

Please let me know if any further details are required.

Looking forward to your confirmation.

Best Regards,
${data.name}`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}


document.addEventListener('DOMContentLoaded', () => {
    initializeTerms();
    initializeReadMore();
    initializeBookingButtons();
});


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('active');
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.sidebar-close').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
});

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
    this.style.display = 'none';
});
