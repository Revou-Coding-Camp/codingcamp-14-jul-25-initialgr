document.addEventListener('DOMContentLoaded', () => {
  // ELEMENT SELECTORS
  const els = {
    // Modal Elements
    welcomeModal: document.getElementById('welcomeModal'),
    welcomeVisitorNameInput: document.getElementById('welcomeVisitorNameInput'),
    welcomeSubmitNameButton: document.getElementById('welcomeSubmitNameButton'),
    welcomeMessageElem: document.getElementById('welcomeMessage'),
    bookingSuccessModal: document.getElementById('bookingSuccessModal'),
    bookingDetails: document.getElementById('bookingDetails'),

    // Form Inputs
    country: document.getElementById('country'),
    departureDate: document.getElementById('departure-date'),
    returnDate: document.getElementById('return-date'),
    fullName: document.getElementById('full-name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    cardNumber: document.getElementById('card-number'),
    expiryDate: document.getElementById('expiry-date'),
    cvv: document.getElementById('cvv'),

    // UI Elements
    nextButton: document.getElementById('nextButton'),
    destinationContainer: document.getElementById('destination-cards-container'),

    // Warning & Alert
    warningModal: document.getElementById('warningModal'),
    warningModalMessage: document.getElementById('warningModalMessage'),
    autoDismissAlert: document.getElementById('autoDismissAlert'),
    autoDismissAlertText: document.getElementById('autoDismissAlertText')
  };

  let currentTab = 'destination';

  // === WELCOME MODAL ===
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    els.welcomeModal.classList.add('hidden');
    els.welcomeMessageElem.textContent = `Welcome, ${savedName}!`;
  } else {
    els.welcomeModal.classList.remove('hidden');
  }

  els.welcomeSubmitNameButton?.addEventListener('click', () => {
    const name = els.welcomeVisitorNameInput.value.trim();
    if (!name) {
      els.welcomeVisitorNameInput.placeholder = 'Please enter your name!';
      els.welcomeVisitorNameInput.classList.add('border-red-500');
      els.welcomeVisitorNameInput.focus();
      return;
    }
    localStorage.setItem('userName', name);
    els.welcomeModal.classList.add('hidden');
    els.welcomeMessageElem.textContent = `Welcome, ${name}!`;
  });


  // === TABS ===
  function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-header').forEach(header => {
      header.classList.remove('active-tab');
      header.querySelector('span:first-child').classList.remove('bg-blue-600', 'text-white');
      header.querySelector('span:first-child').classList.add('border', 'border-gray-300');
    });

    document.getElementById(`${tabName}TabContent`)?.classList.remove('hidden');

    const activeHeader = document.querySelector(`.tab-header[data-tab="${tabName}"]`);
    activeHeader?.classList.add('active-tab');
    activeHeader?.querySelector('span:first-child').classList.add('bg-blue-600', 'text-white');
    activeHeader?.querySelector('span:first-child').classList.remove('border', 'border-gray-300');

    currentTab = tabName;
    updateNextButton();
  }

  function updateNextButton() {
    els.nextButton.textContent = currentTab === 'payment' ? 'BOOK' : 'NEXT';
  }

  function scrollDestinations(direction) {
    els.destinationContainer.scrollBy({
      left: direction * 352,
      behavior: 'smooth'
    });
  }


  // === BOOKING PROCESS ===
  function collectAndShowBookingData() {
    const {
      country, departureDate, returnDate,
      fullName, email, phone,
      cardNumber, expiryDate, cvv
    } = els;

    els.bookingDetails.innerHTML = `
      <p><strong>Country:</strong> ${country?.value || 'N/A'}</p>
      <p><strong>Departure Date:</strong> ${departureDate?.value || 'N/A'}</p>
      <p><strong>Return Date:</strong> ${returnDate?.value || 'N/A'}</p>
      <p><strong>Full Name:</strong> ${fullName?.value || 'N/A'}</p>
      <p><strong>Email:</strong> ${email?.value || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone?.value || 'N/A'}</p>
      <p><strong>Card Number:</strong> ${cardNumber?.value ? '**** **** **** ' + cardNumber.value.slice(-4) : 'N/A'}</p>
      <p><strong>Expiry Date:</strong> ${expiryDate?.value || 'N/A'}</p>
      <p><strong>CVV:</strong> ${cvv?.value ? '***' : 'N/A'}</p>
    `;
    openModal('bookingSuccessModal');
  }

  function handleNext() {
    const requiredDestination = [els.country, els.departureDate, els.returnDate];
    const requiredTraveler = [els.fullName, els.email, els.phone];
    const requiredPayment = [els.cardNumber, els.expiryDate, els.cvv];

    const isEmpty = (inputs) => inputs.some(input => !input.value.trim());

    if (currentTab === 'destination' && isEmpty(requiredDestination)) {
      showAutoDismissAlert('Harap di isi!');
      return;
    }
    if (currentTab === 'traveler' && isEmpty(requiredTraveler)) {
      showAutoDismissAlert('Harap di isi!');
      return;
    }
    if (currentTab === 'payment' && isEmpty(requiredPayment)) {
      showAutoDismissAlert('Harap di isi!');
      return;
    }

    if (currentTab === 'payment') {
      collectAndShowBookingData();
    } else if (currentTab === 'destination') {
      showTab('traveler');
    } else if (currentTab === 'traveler') {
      showTab('payment');
    }
  }


  // === MODALS ===
  function openModal(id) {
    document.getElementById(id)?.classList.remove('hidden');
  }

  function closeModal(id) {
    document.getElementById(id)?.classList.add('hidden');

    if (id === 'bookingSuccessModal') {
      ['country', 'departureDate', 'returnDate', 'fullName', 'email', 'phone', 'cardNumber', 'expiryDate', 'cvv'].forEach(field => {
        if (els[field]) els[field].value = '';
      });

      localStorage.removeItem('userName');
      document.documentElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => location.reload(), 2000);
    }
  }


  // === ALERT (AUTO-DISMISS) ===
  function showAutoDismissAlert(message, duration = 3000) {
    if (!els.autoDismissAlert) return;

    els.autoDismissAlertText.textContent = message;
    els.autoDismissAlert.classList.remove('hidden', 'opacity-0', '-translate-y-10');
    els.autoDismissAlert.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      els.autoDismissAlert.classList.remove('opacity-100', 'translate-y-0');
      els.autoDismissAlert.classList.add('opacity-0', '-translate-y-10');
    }, duration - 300);

    setTimeout(() => {
      els.autoDismissAlert.classList.add('hidden');
    }, duration);
  }


  // === GLOBAL EXPORT ===
  window.scrollDestinations = scrollDestinations;
  window.showTab = showTab;
  window.handleNext = handleNext;
  window.closeModal = closeModal;


  // === EVENTS ===
  document.querySelectorAll('.tab-header').forEach(header => {
    header.addEventListener('click', () => showTab(header.dataset.tab));
  });

  els.nextButton?.addEventListener('click', handleNext);


  // === INIT ===
  showTab('destination');
});
