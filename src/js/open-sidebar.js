export function openSidebar() {
  const btnOpen = document.querySelector('.js-open-sidebar');
  const btnClose = document.querySelector('.js-close-sidebar');
  const sidebar = document.querySelector('.sidebar');

  btnOpen.addEventListener('click', () => {
    sidebar.classList.add('active')
  });

  btnClose.addEventListener('click', () => {
    sidebar.classList.remove('active')
  });
}