# ☕ Velvet & Bean - Artisan Cafe & Roastery Web Menu

A luxury, modern, static Cafe Menu web application built with **HTML5**, **Vanilla CSS3**, and **ES6 JavaScript**. Designed specifically for easy one-click hosting on **GitHub Pages**.

---

## 🌟 Features

- **Languages & Currency**: Fully in English with prices in **Israeli Shekels (₪)**.
- **Menu Categories**:
  - ☕ Espresso & Specialty Coffee Drinks
  - 🥗 Fresh Superfood & Halloumi Salads
  - 🥪 Artisan Sourdough & Focaccia Sandwiches
  - 🥐 Fresh Daily French Bakery & Pastries
  - 🫘 Specialty Whole & Ground Coffee Beans (250g / 1kg)
- **Interactive Customizer**: Select alternative milks (Oat, Almond, Soy), extra espresso shots, syrup flavors, or coffee bean grind size with dynamic live total updates in ₪.
- **Search & Dietary Filters**: Real-time keyword search bar and tags for 🌱 Vegan, 🌾 Gluten-Free, 🧀 Vegetarian, and ⭐ Best Sellers.
- **Interactive Basket & Cart**: Live basket drawer, item quantity controls, price calculation in ₪, and simulated checkout modal.
- **GitHub Pages Ready**: Zero build steps required! Instant static hosting out-of-the-box.

---

## 🚀 How to Upload & Deploy on GitHub Pages

Follow these simple steps to put your cafe menu online:

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and log in.
2. Click **New Repository** (`+` icon at top right).
3. Name your repository (e.g., `cafe-menu`).
4. Keep it **Public** and click **Create repository**.

### Step 2: Upload Project Files
Upload all files in this project directory to your repository (`main` branch):
- `index.html`
- `styles.css`
- `js/data.js`
- `js/app.js`
- `README.md`

*(You can drag and drop these files directly into GitHub in your browser, or use Git CLI command `git push`)*

### Step 3: Enable GitHub Pages
1. On your GitHub repository page, click **Settings** (top tab).
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment** -> **Branch**:
   - Select `main`
   - Folder: `/ (root)`
4. Click **Save**.

🎉 Within 1-2 minutes, GitHub will generate your live site URL at:
`https://<your-username>.github.io/cafe-menu/`

---

## 🛠️ Customizing the Menu

To edit menu items, prices, or add new categories, simply open `js/data.js` and edit the `MENU_ITEMS` array:

```javascript
{
  id: 'c7',
  name: 'Iced Spanish Latte',
  category: 'coffee',
  price: 24, // Price in Shekels (₪)
  description: 'Espresso poured over ice and sweetened condensed milk.',
  image: 'https://images.unsplash.com/...',
  tags: ['bestseller'],
  calories: '210 kcal'
}
```
