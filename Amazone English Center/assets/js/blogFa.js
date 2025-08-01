document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('categoryFilter');
    const authorSelect = document.getElementById('authorFilter');
    const searchInput = document.getElementById('searchInput');

    const choicesCategory = new Choices(categorySelect, {
      removeItemButton: true,
      searchEnabled: true,
      placeholderValue: 'انتخاب دسته‌بندی',
      searchPlaceholderValue: 'جستجوی دسته‌بندی',
      shouldSort: false,
    });

    const choicesAuthor = new Choices(authorSelect, {
      removeItemButton: false,
      searchEnabled: false,
      placeholderValue: 'انتخاب نویسنده',
      shouldSort: false,
    });

    categorySelect.addEventListener('change', filterNews);
    authorSelect.addEventListener('change', filterNews);
    searchInput.addEventListener('input', filterNews);
});

function normalizePersian(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/ة/g, 'ه')
    .replace(/[^\w\u0600-\u06FF\s]+/g, '')
    .trim();
}

function filterNews() {
  const searchTerm = normalizePersian(document.getElementById('searchInput').value);

  const categorySelect = document.getElementById('categoryFilter');
  const selectedCategories = Array.from(categorySelect.selectedOptions).map(opt => normalizePersian(opt.value));

  const author = normalizePersian(document.getElementById('authorFilter').value);
  const newsItems = document.querySelectorAll('.news-card');

  newsItems.forEach(item => {
    const title = normalizePersian(item.querySelector('.news-title')?.innerText);
    const itemCategory = normalizePersian(item.getAttribute('data-category'));
    const itemAuthor = normalizePersian(item.getAttribute('data-author'));

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(itemCategory);
    const matchesAuthor = author === '' || itemAuthor === author;

    item.style.display = (matchesSearch && matchesCategory && matchesAuthor) ? 'flex' : 'none';
  });
}