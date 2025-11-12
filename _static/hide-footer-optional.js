document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  // greift für .../experiments/fp1/raman/01_Experiment_Guide/optional_tasks.html (mit oder ohne trailing slash)
  if (path.endsWith('/experiments/fp1/raman/01_Experiment_Guide/optional_tasks.html') || path.endsWith('/experiments/fp1/raman/01_Experiment_Guide/optional_tasks/')) {
    const el = document.querySelector('.bd-article-nav, .prev-next-area');
    if (el) el.style.display = 'none';
  }
});
