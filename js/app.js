import { MENU_ITEMS, CATEGORIES, DIET_FILTERS, CURRENCY } from './data.js';

// Application State
let activeCategory = 'all';
let activeDietFilters = new Set();
let searchQuery = '';
let currentModalItem = null;
let currentModalQty = 1;
let selectedModalOptions = {};
let cart = [];

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const categoriesNav = document.getElementById('categories-nav');
const dietFiltersContainer = document.getElementById('diet-filters');
const searchInput = document.getElementById('search-input');
const itemCountEl = document.getElementById('item-count');
const sectionTitleEl = document.getElementById('section-title');

// Modal Elements
const modalBackdrop = document.getElementById('item-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalOptionsContainer = document.getElementById('modal-options');
const modalQtyVal = document.getElementById('modal-qty-val');
const btnQtyMinus = document.getElementById('btn-qty-minus');
const btnQtyPlus = document.getElementById('btn-qty-plus');
const btnAddToCartConfirm = document.getElementById('btn-add-to-cart-confirm');

// Cart Elements
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartCloseBtn = document.getElementById('cart-close');
const cartItemsList = document.getElementById('cart-items-list');
const cartCountBadge = document.getElementById('cart-count');
const cartTotalPriceEl = document.getElementById('cart-total-price');
const btnCheckout = document.getElementById('btn-checkout');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderCategories();
  renderDietFilters();
  renderMenu();
  setupEventListeners();
  updateCartUI();
});

// Event Listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderMenu();
  });

  // Modal Controls
  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  btnQtyMinus.addEventListener('click', () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      modalQtyVal.textContent = currentModalQty;
      updateModalPrice();
    }
  });

  btnQtyPlus.addEventListener('click', () => {
    currentModalQty++;
    modalQtyVal.textContent = currentModalQty;
    updateModalPrice();
  });

  btnAddToCartConfirm.addEventListener('click', handleAddToCartFromModal);

  // Cart Drawer
  cartToggleBtn.addEventListener('click', () => {
    cartDrawer.classList.add('open');
  });

  cartCloseBtn.addEventListener('click', () => {
    cartDrawer.classList.remove('open');
  });

  btnCheckout.addEventListener('click', handleCheckout);
}

// Render Category Tabs
function renderCategories() {
  categoriesNav.innerHTML = CATEGORIES.map(cat => `
    <button class="category-tab ${cat.id === activeCategory ? 'active' : ''}" data-id="${cat.id}">
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');

  categoriesNav.querySelectorAll('.category-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.id;
      document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu();
    });
  });
}

// Render Dietary Filters
function renderDietFilters() {
  dietFiltersContainer.innerHTML = DIET_FILTERS.map(filter => `
    <button class="diet-pill ${activeDietFilters.has(filter.id) ? 'active' : ''}" data-id="${filter.id}">
      ${filter.label}
    </button>
  `).join('');

  dietFiltersContainer.querySelectorAll('.diet-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const id = pill.dataset.id;
      if (activeDietFilters.has(id)) {
        activeDietFilters.delete(id);
        pill.classList.remove('active');
      } else {
        activeDietFilters.add(id);
        pill.classList.add('active');
      }
      renderMenu();
    });
  });
}

// Filter and Render Menu Cards
function renderMenu() {
  let filtered = MENU_ITEMS.filter(item => {
    // Category match
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    
    // Search match
    const matchSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) || 
      item.description.toLowerCase().includes(searchQuery);

    // Dietary filter match
    let matchDiet = true;
    if (activeDietFilters.size > 0) {
      activeDietFilters.forEach(dietId => {
        if (!item.tags.includes(dietId)) {
          matchDiet = false;
        }
      });
    }

    return matchCategory && matchSearch && matchDiet;
  });

  // Update section title & count
  const currentCatObj = CATEGORIES.find(c => c.id === activeCategory);
  sectionTitleEl.textContent = currentCatObj ? currentCatObj.name : 'All Items';
  itemCountEl.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''} available`;

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">☕</div>
        <h3>No items found</h3>
        <p>Try searching for something else or clear your filters.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(item => `
    <div class="menu-card" data-id="${item.id}">
      <div class="card-img-wrapper">
        <img class="card-img" src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="card-overlay"></div>
        <div class="card-badges">
          ${item.tags.map(tag => `
            <span class="badge-tag ${tag}">${tag === 'bestseller' ? '⭐ Best Seller' : tag}</span>
          `).join('')}
        </div>
        <div class="price-tag">${CURRENCY}${item.price}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-description">${item.description}</p>
        <div class="card-footer">
          <span class="card-meta">${item.calories !== 'N/A' ? item.calories : 'Single Origin'}</span>
          <button class="btn-add-item" onclick="openItemModal('${item.id}')">
            <span>+</span> Customize & Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Open Item Customization Modal
window.openItemModal = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  currentModalItem = item;
  currentModalQty = 1;
  selectedModalOptions = {};
  modalQtyVal.textContent = 1;

  modalImg.src = item.image;
  modalTitle.textContent = item.name;
  modalDesc.textContent = item.description;

  // Build Options UI
  let optionsHTML = '';
  if (item.options && Object.keys(item.options).length > 0) {
    for (const [key, group] of Object.entries(item.options)) {
      const isArray = Array.isArray(group);
      optionsHTML += `
        <div class="option-group">
          <div class="option-title">Select ${key}</div>
          <div class="option-choices">
      `;

      if (isArray) {
        // Single selection (Radio buttons)
        group.forEach((opt, idx) => {
          const isChecked = idx === 0;
          if (isChecked) selectedModalOptions[key] = opt;
          optionsHTML += `
            <label class="option-choice-label">
              <span>
                <input type="radio" name="opt-${key}" value="${idx}" ${isChecked ? 'checked' : ''} onchange="handleOptionSelect('${key}', ${idx})" />
                ${opt.name}
              </span>
              <span>${opt.price > 0 ? `+${CURRENCY}${opt.price}` : 'Free'}</span>
            </label>
          `;
        });
      } else {
        // Checkbox option (e.g. Extra shot)
        selectedModalOptions[key] = null;
        optionsHTML += `
          <label class="option-choice-label">
            <span>
              <input type="checkbox" name="opt-${key}" onchange="handleCheckboxSelect('${key}')" />
              ${group.name}
            </span>
            <span>+${CURRENCY}${group.price}</span>
          </label>
        `;
      }
      optionsHTML += `</div></div>`;
    }
  }

  modalOptionsContainer.innerHTML = optionsHTML;
  updateModalPrice();
  modalBackdrop.classList.add('active');
};

window.handleOptionSelect = function(groupKey, index) {
  const item = currentModalItem;
  if (item && item.options && item.options[groupKey]) {
    selectedModalOptions[groupKey] = item.options[groupKey][index];
    updateModalPrice();
  }
};

window.handleCheckboxSelect = function(groupKey) {
  const item = currentModalItem;
  const checkbox = document.querySelector(`input[name="opt-${groupKey}"]`);
  if (item && item.options && item.options[groupKey]) {
    selectedModalOptions[groupKey] = checkbox.checked ? item.options[groupKey] : null;
    updateModalPrice();
  }
};

function updateModalPrice() {
  if (!currentModalItem) return;
  let unitPrice = currentModalItem.price;

  for (const opt of Object.values(selectedModalOptions)) {
    if (opt && opt.price) {
      unitPrice += opt.price;
    }
  }

  const totalPrice = unitPrice * currentModalQty;
  btnAddToCartConfirm.textContent = `Add to Order • ${CURRENCY}${totalPrice}`;
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  currentModalItem = null;
}

// Cart Logic
function handleAddToCartFromModal() {
  if (!currentModalItem) return;

  // Compile selected options text
  const optionsArr = [];
  for (const [key, val] of Object.entries(selectedModalOptions)) {
    if (val && val.name && val.name !== 'Whole Milk' && val.name !== 'None' && val.name !== 'No Extra Protein' && val.name !== 'Standard') {
      optionsArr.push(val.name);
    }
  }

  let unitPrice = currentModalItem.price;
  for (const opt of Object.values(selectedModalOptions)) {
    if (opt && opt.price) unitPrice += opt.price;
  }

  const cartItemId = currentModalItem.id + '-' + optionsArr.join('-').replace(/\s+/g, '');
  const existingIndex = cart.findIndex(ci => ci.cartItemId === cartItemId);

  if (existingIndex > -1) {
    cart[existingIndex].qty += currentModalQty;
  } else {
    cart.push({
      cartItemId,
      id: currentModalItem.id,
      name: currentModalItem.name,
      image: currentModalItem.image,
      optionsText: optionsArr.join(', '),
      unitPrice,
      qty: currentModalQty
    });
  }

  saveCartToStorage();
  updateCartUI();
  closeModal();
  cartDrawer.classList.add('open');
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);

  cartCountBadge.textContent = totalCount;
  cartTotalPriceEl.textContent = `${CURRENCY}${totalPrice}`;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛍️</p>
        <p>Your basket is currently empty.</p>
      </div>
    `;
    return;
  }

  cartItemsList.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        ${item.optionsText ? `<div class="cart-item-options">${item.optionsText}</div>` : ''}
        <div class="cart-item-price">${CURRENCY}${item.unitPrice * item.qty}</div>
      </div>
      <div class="quantity-control" style="padding: 2px 8px;">
        <button class="btn-qty" onclick="changeCartQty(${index}, -1)">-</button>
        <span class="qty-val">${item.qty}</span>
        <button class="btn-qty" onclick="changeCartQty(${index}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

window.changeCartQty = function(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
};

function handleCheckout() {
  if (cart.length === 0) {
    alert('Your basket is empty!');
    return;
  }

  const orderTotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const orderId = Math.floor(1000 + Math.random() * 9000);

  alert(`🎉 Thank you for your order!

Order #${orderId}
Total Amount: ${CURRENCY}${orderTotal}

Your order has been received. Please present this screen to the counter or await server delivery.`);

  cart = [];
  saveCartToStorage();
  updateCartUI();
  cartDrawer.classList.remove('open');
}

function saveCartToStorage() {
  try {
    localStorage.setItem('velvet_cafe_cart', JSON.stringify(cart));
  } catch (e) {
    console.error(e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('velvet_cafe_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}
