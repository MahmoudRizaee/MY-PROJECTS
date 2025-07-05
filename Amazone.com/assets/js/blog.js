
document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('categoryFilter');
    const authorSelect = document.getElementById('authorFilter');

    const choicesCategory = new Choices(categorySelect, {
      removeItemButton: true,
      searchEnabled: true,
      placeholderValue: 'Select categories',
      searchPlaceholderValue: 'Search categories',
      shouldSort: false,
    });

    const choicesAuthor = new Choices(authorSelect, {
      removeItemButton: false,
      searchEnabled: false,
      placeholderValue: 'Select author',
      shouldSort: false,
    });

    categorySelect.addEventListener('change', filterNews);
    authorSelect.addEventListener('change', filterNews);
  });

function filterNews() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  const categorySelect = document.getElementById('categoryFilter');
  const selectedCategories = Array.from(categorySelect.selectedOptions).map(opt => opt.value.toLowerCase());

  const author = document.getElementById('authorFilter').value.toLowerCase();

  const newsItems = document.querySelectorAll('.news-card');

  newsItems.forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase();
    const itemCategory = item.getAttribute('data-category').toLowerCase();
    const itemAuthor = item.getAttribute('data-author').toLowerCase();

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(itemCategory);
    const matchesAuthor = author === '' || itemAuthor === author;

    if (matchesSearch && matchesCategory && matchesAuthor) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}