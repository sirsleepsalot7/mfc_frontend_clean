// Firefox Club Registration popup using SweetAlert2
function showRegistration() {
  Swal.fire({
    title: 'Mozilla Firefox Club Registration',
    html: `
      <input type="text" id="name" class="swal2-input" placeholder="Name">
      <input type="email" id="email" class="swal2-input" placeholder="Email">
      <input type="tel" id="phone" class="swal2-input" placeholder="Phone Number">
    `,
    confirmButtonText: 'Join Club',
    background: '#1c1b22',
    color: '#fff',
    confirmButtonColor: '#ff7139',
    focusConfirm: false,
    preConfirm: () => {
      const popup = Swal.getPopup();
      const name = popup.querySelector('#name').value;
      const email = popup.querySelector('#email').value;
      const phone = popup.querySelector('#phone').value;
      if (!name || !email || !phone) {
        Swal.showValidationMessage(`Please enter name, email, and phone number`);
      }
      return { name, email, phone };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Registration Complete!',
        html: `
          <p><strong>Name:</strong> ${result.value.name}</p>
          <p><strong>Email:</strong> ${result.value.email}</p>
          <p><strong>Phone:</strong> ${result.value.phone}</p>
        `,
        confirmButtonColor: '#ff7139'
      });
    }
  });
}

// Attach to all register buttons/links
document.querySelectorAll('.registerBtn').forEach(el => {
  el.addEventListener('click', (e) => {
    if (e && e.preventDefault) e.preventDefault();
    showRegistration();
    // close mobile nav when used
    const nav = document.querySelector('header nav');
    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('header nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}