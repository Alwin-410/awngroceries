// Sample product data with 4-5 items per category and ratings
const products = {
    'Grains & Staples': [{
            id: 1,
            name: 'Rice 1-kg',
            price: 60,
            offer: '10% Off',
            image: 'https://img.freepik.com/premium-photo/rice-burlap-sack_1004890-5846.jpg',
            rating: 4.5
        },
        {
            id: 2,
            name: 'Wheat Flour 1-kg',
            price: 40,
            offer: '5% Off',
            image: 'https://img.freepik.com/free-photo/stashed-flour-used-cooking_23-2149517175.jpg',
            rating: 4.2
        },
        {
            id: 3,
            name: 'Coconut oil -1l',
            price: 350,
            offer: '8% Off',
            image: 'https://img.freepik.com/premium-photo/coconut-oil-isolated-white_123827-7898.jpg',
            rating: 4.0
        },
        {
            id: 4,
            name: 'pasta 1-pack',
            price: 35,
            offer: '12% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/a61b919b-639e-48a6-ae8a-6a1e1feb7fdf/Chef-s-Basket-Durum-Wheat-Fusilli-Pasta-500-g-Combo.jpg',
            rating: 4.3
        },
        {
            id: 5,
            name: 'Salt 1-kg',
            price: 15,
            offer: '15% Off',
            image: 'https://img.freepik.com/premium-photo/salt-packaging-3d-design-element_312299-1418.jpg',
            rating: 4.7
        },
    ],
    'Fresh Items': [{
            id: 6,
            name: 'Apples 1-kg',
            price: 250,
            offer: '15% Off',
            image: 'https://img.freepik.com/free-photo/top-view-apple-mix-green-yellow-red-apples_141793-6996.jpg',
            rating: 4.6
        },
        {
            id: 7,
            name: 'Carrots 1-kg',
            price: 60,
            offer: '10% Off',
            image: 'https://img.freepik.com/free-photo/stack-carrots-bowl-marble_114579-65075.jpg',
            rating: 4.1
        },
        {
            id: 8,
            name: 'Tomatoes 1-kg',
            price: 15,
            offer: '5% Off',
            image: 'https://img.freepik.com/free-photo/bottom-view-red-tomatoes-cut-tomatoes-wooden-box-black-table_140725-146202.jpg',
            rating: 4.4
        },
        {
            id: 9,
            name: 'Spinach 1-pc',
            price: 20,
            offer: '20% Off',
            image: 'https://img.freepik.com/free-photo/close-up-photo-fresh-spinach_176420-7294.jpg',
            rating: 4.0
        },
        {
            id: 10,
            name: 'Bananas 1-pc',
            price: 4,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/f35152f8-31b1-4450-ae76-fe0f8893005a/Banana-Robusta.jpeg',
            rating: 4.8
        },
    ],
    'Dairy Essentials': [{
            id: 11,
            name: 'Milk 1-pc',
            price: 24,
            offer: '5% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/3a8d4113-939d-4e4e-a7ce-96e52152ba97/Amul-Gold-Full-Cream-Fresh-Milk-Pouch-.jpeg',
            rating: 4.2
        },
        {
            id: 12,
            name: 'Cheese 1-pc',
            price: 250,
            offer: '20% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/263afa34-4e15-4e5d-b891-d3126b1b3019/Amul-Cheese-Slices.jpeg',
            rating: 4.5
        },
        {
            id: 13,
            name: 'Yogurt 1-pc',
            price: 39,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/2c92d940-dbc1-4d1a-a7a2-8b151cbefac5/Milky-Mist-Fruit-Yogurt-Strawberry.jpeg',
            rating: 4.3
        },
        {
            id: 14,
            name: 'Butter 1/2-kg',
            price: 250,
            offer: '15% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/e15c0b10-0367-4675-a5ab-6da2abf9bee1/Amul-Salted-Butter.jpeg',
            rating: 4.1
        },
        {
            id: 15,
            name: 'Paneer-200grams',
            price: 89,
            offer: '8% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/234846da-5d2c-4fc1-a711-d70b31709856/Akshayakalpa-Organic-High-Protein-Paneer.jpg',
            rating: 4.6
        },
    ],
    'Snacks & Bakery': [{
            id: 16,
            name: 'Cookies 1-pack',
            price: 39,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/5e5280b3-8624-488b-ae9b-cd4d21a55d06/Parle-Hide-Seek-Chocolate-Biscuits.jpeg',
            rating: 4.4
        },
        {
            id: 17,
            name: 'Chips 1-pc',
            price: 29,
            offer: '15% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/5f134c5a-96e7-4a31-95be-aa3958d768c1/Lay-s-India-s-Magic-Masala-Potato-Chips.jpeg',
            rating: 4.0
        },
        {
            id: 18,
            name: 'Bread 1-pack',
            price: 36,
            offer: '5% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/3a2498fd-fa08-4295-9df4-b3cf1b6a81db/Britannia-100-Whole-Wheat-Bread-No-Maida-400-g-Combo.jpg',
            rating: 4.2
        },
        {
            id: 19,
            name: 'Noodles-200grams',
            price: 30,
            offer: '12% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/116c68f6-27b3-46f9-808e-30507316aca7/Maggi-Chicken-Instant-Noodles.jpeg',
            rating: 4.3
        },
        {
            id: 20,
            name: 'Muffins',
            price: 350,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/2032fa2e-e9a2-4fd5-a1ce-f5f29884add0/The-Baker-S-Dozen-Choco-Chip-Muffin.jpg',
            rating: 4.7
        },
    ],
    'Beverages': [{
            id: 21,
            name: 'Coffee-100 grams',
            price: 200,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/e7d1ffde-a41f-4041-bd0b-a737f81e8106/Tata-Classic-Grand-Instant-Coffee.jpeg',
            rating: 4.5
        },
        {
            id: 22,
            name: 'Juice 1l',
            price: 64,
            offer: '5% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/537e5f0a-30a9-4bc3-88b1-259c63a48674/Pluckk-Fresh-Mango-Fruit-Juice.jpeg',
            rating: 4.1
        },
        {
            id: 23,
            name: 'Tea 1-kg',
            price: 200,
            offer: '8% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/9a919b05-1013-4aef-816a-b6ef8584fff8/Red-Label-Basil-Tea.jpeg',
            rating: 4.3
        },
        {
            id: 24,
            name: 'Soda 500ml',
            price: 39,
            offer: '15% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/66bf471b-73b9-446b-81e6-e6ac4d39be9a/Polka-Pop-Lemon-and-Lime-Sparkling-Water.jpeg',
            rating: 4.0
        },
        {
            id: 25,
            name: 'Energy Drink 250ml',
            price: 69,
            offer: '12% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/b07de33f-ad21-448e-b2cb-8d6be80de8f6/Monster-Energy-Ultra-Zero-Sugar-.jpeg',
            rating: 4.4
        },
    ],
    'Personal Use': [{
            id: 26,
            name: 'Shampoo 250ml',
            price: 350,
            offer: '10% Off',
            image: ' https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/bd1173e0-cced-4f2f-981a-b1b333732dc6/Meera-Hairfall-Care-Shampoo.jpeg',
            rating: 4.2
        },
        {
            id: 27,
            name: 'Soap 1-nos',
            price: 25,
            offer: '20% Off',
            image: ' https://cdn.zeptonow.com/production/ik-seo/tr:w-600,ar-600-600,pr-true,f-auto,q-80/cms/product_variant/d64f6a34-7886-45bd-a817-aa373215c625/Mamaearth-Vitamin-C-Moisturizing-Lotion-Soap.jpg',
            rating: 4.0
        },
        {
            id: 28,
            name: 'Toothpaste 50 grams',
            price: 43,
            offer: '5% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/98f9a910-dbcf-45ac-802f-0124a915d30a/Colgate-MaxFresh-Watermelon-Blast-Gel-Toothpaste-with-Cooling-Crystals-Ultrafreeze-Technology.jpeg ',
            rating: 4.3
        },
        {
            id: 29,
            name: 'Sanitory pads 1-packet',
            price: 26,
            offer: '15% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/0620d347-2750-4146-903a-db4b5fb6341c/Whisper-Daily-Liners-Clean-And-Fresh-Pantyliner-Pack-Of-40-.jpg',
            rating: 4.5
        },
        {
            id: 30,
            name: 'Deodorant 100 ml',
            price: 240,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1330-1600,pr-true,f-auto,q-80/cms/product_variant/874002af-4287-496b-b491-b8746e02d132/KamaSutra-Spark-Deodorant-for-Men.jpeg ',
            rating: 4.1
        },
    ],
    'Home Essentials': [{
            id: 31,
            name: 'Detergent 1-kg',
            price: 100,
            offer: '15% Off',
            image: 'https://img.freepik.com/premium-vector/washing-powder-bags-realistic-set_103044-643.jpg',
            rating: 4.4
        },
        {
            id: 32,
            name: 'Floor Cleaner 500ml',
            price: 150,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/8c6d1f15-c276-4d8c-99cc-3d0884b689a7/BAY6-Citrus-Disinfectant-Floor-Cleaner.jpeg',
            rating: 4.2
        },
        {
            id: 33,
            name: 'Dish Soap 1-nos',
            price: 15,
            offer: '5% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/5f274602-7ec9-4461-9391-ad48fa0b6ed46679/Vim-Dishwash-Bar-Tub-Lemon-500-g-Combo.jpg',
            rating: 4.0
        },
        {
            id: 34,
            name: 'Tissue Paper 1-nos',
            price: 50,
            offer: '12% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/ad98d4c3-11f4-46fc-a6e6-2d83bdcf70eb/Origami-So-Soft-Face-Tissues-200-Pulls-2-Ply.jpeg',
            rating: 4.3
        },
        {
            id: 35,
            name: 'Garbage Bags 1-nos',
            price: 35,
            offer: '8% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/83ffb0ac-76d0-4f21-a898-b80f524459e6/Crystal-Medium-Garbage-Bag-19x21-Compostable-Green-Colour-1-pc-Combo.jpg',
            rating: 4.1
        },
    ],
    'Others': [{
            id: 36,
            name: 'Batteries(4)',
            price: 160,
            offer: '5% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/55dc6a1a-7d8a-4fb3-8712-0658599877c5/Duracell-Ultra-Alkaline-AAA-Batteries-Pack-Of-8-High-Drain-Devices-Digital-Camera-Toys-Electric-Toothbrush.jpg',
            rating: 4.2
        },
        {
            id: 37,
            name: 'Candles(2)',
            price: 250,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/99377f79-24ef-4b2d-8357-ef607d29e165/Iris-Twin-pack-Glass-jar-candles-Ocean-dream.jpg',
            rating: 4.0
        },
        {
            id: 38,
            name: 'Light Bulbs(1)',
            price: 140,
            offer: '15% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/6cde0eb6-8be9-4c7e-a6eb-b6315efa9f06/Eveready-9-W-LED-Bulb-Cool-Day-Light-6500-K-Long-Lasting.jpeg',
            rating: 4.3
        },
        {
            id: 39,
            name: 'Matches(1)',
            price: 20,
            offer: '20% Off',
            image: 'https://cdn.zeptonow.com/production/tr:w-0.98,h-0.98,f-auto/cms/product_variant/f151fbbd-754a-46c4-8ba8-45eb1077b652.jpeg',
            rating: 4.1
        },
        {
            id: 40,
            name: 'Stationery Set(1)',
            price: 50,
            offer: '10% Off',
            image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/6cd2b9db-88df-40ee-a51f-880ab4f89c1d/Apsara-Scholars-School-Kit.jpeg',
            rating: 4.4
        },
    ],
};

let cart = [];
let currentCategory = '';
let orderDetails = {};

// Navigation
function goToLogin() {
    document.getElementById('front-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
});

// Back Button Navigation
function goToHomepage() {
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
}

// About Us Navigation
function goToAboutUsPage() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'block';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
}

// Hamburger Menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Update Cart Counter
function updateCartCounter() {
    const counters = [
        document.getElementById('cart-counter'),
        document.getElementById('cart-counter-cat'),
        document.getElementById('cart-counter-cart'),
        document.getElementById('cart-counter-about'),
        document.getElementById('cart-counter-order-summary'),
        document.getElementById('cart-counter-delivery-address'),
        document.getElementById('cart-counter-delivery-time'),
        document.getElementById('cart-counter-payment-options'),
        document.getElementById('cart-counter-payment-confirmation')
    ];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    counters.forEach(counter => {
        if (counter) counter.textContent = totalItems;
    });
}

// Search Functionality
function searchProducts() {
    const query = document.querySelector('input[type="text"]:not([style*="display: none"])').value.toLowerCase();
    if (!query) {
        if (document.getElementById('category-page').style.display === 'block') {
            showCategory(currentCategory);
        }
        return;
    }

    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    let found = false;

    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            if (product.name.toLowerCase().includes(query)) {
                found = true;
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                const stars = Math.round(product.rating);
                let ratingHTML = '';
                for (let i = 1; i <= 5; i++) {
                    ratingHTML += `<i class="fas fa-star${i <= stars ? '' : '-o'}"></i>`;
                }
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <div class="rating">${ratingHTML}</div>
                    <p class="price">₹${product.price}</p>
                    <p class="offer">${product.offer}</p>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
                `;
                productsDiv.appendChild(productDiv);
            }
        });
    });

    if (!found) {
        productsDiv.innerHTML = '<p>No products found.</p>';
    }
}

// Category Page
function goToCategoryPage(category) {
    currentCategory = category;
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'block';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
    showCategory(category);
}

function showCategory(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    document.getElementById('category-title').textContent = category;
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        const stars = Math.round(product.rating);
        let ratingHTML = '';
        for (let i = 1; i <= 5; i++) {
            ratingHTML += `<i class="fas fa-star${i <= stars ? '' : '-o'}"></i>`;
        }
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="rating">${ratingHTML}</div>
            <p class="price">₹${product.price}</p>
            <p class="offer">${product.offer}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

// Cart Functionality
function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1
        });
    }
    updateCartCounter();
    showAlert(`${name} added to cart!`);
}

function removeFromCart(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
        updateCart();
        updateCartCounter();
        showAlert(`${item.name} removed from cart!`);
    }
}

function goToCartPage() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'block';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name} - ₹${item.price} x ${item.quantity || 1}</p>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });
    document.getElementById('cart-total').textContent = `Total: ₹${total}`;
}

// Order Summary Page
function goToOrderSummaryPage() {
    if (cart.length === 0) {
        showAlert('Your cart is empty!');
        return;
    }
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'block';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderSummaryItemsDiv = document.getElementById('order-summary-items');
    orderSummaryItemsDiv.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        subtotal += itemTotal;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name} - ₹${item.price} x ${item.quantity || 1} = ₹${itemTotal}</p>
        `;
        orderSummaryItemsDiv.appendChild(cartItem);
    });

    const deliveryCharges = subtotal < 500 ? 50 : 0; // Free delivery for orders above ₹500
    const discount = calculateDiscount(subtotal); // Example discount logic
    const finalTotal = subtotal + deliveryCharges - discount;

    document.getElementById('order-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('order-delivery-charges').textContent = `₹${deliveryCharges}`;
    document.getElementById('order-discount').textContent = `₹${discount}`;
    document.getElementById('order-final-total').textContent = `₹${finalTotal}`;

    // Store order details for later use
    orderDetails = {
        items: [...cart],
        subtotal,
        deliveryCharges,
        discount,
        finalTotal
    };
}

function calculateDiscount(subtotal) {
    // Example: 10% discount for orders above ₹1000
    if (subtotal > 1000) {
        return Math.round(subtotal * 0.1);
    }
    return 0;
}

// Delivery Address Page
function goToDeliveryAddressPage() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'block';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
    loadAddress();
}

function loadAddress() {
    // Load address from localStorage or use default
    const savedAddress = JSON.parse(localStorage.getItem('deliveryAddress')) || {
        name: 'John Doe',
        address: 'No-12 Nehru Nagar, 5th Lane, Anna Nagar, Chennai, Tamilnadu',
        phone: '+91 98765 43210'
    };
    document.getElementById('address-name').textContent = savedAddress.name;
    document.getElementById('address-text').textContent = savedAddress.address;
    document.getElementById('address-phone').textContent = savedAddress.phone;

    // Pre-fill the edit form
    document.getElementById('edit-name').value = savedAddress.name;
    document.getElementById('edit-address').value = savedAddress.address;
    document.getElementById('edit-phone').value = savedAddress.phone;
}

function editAddress() {
    const editForm = document.getElementById('edit-address-form');
    editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('address-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newAddress = {
        name: document.getElementById('edit-name').value,
        address: document.getElementById('edit-address').value,
        phone: document.getElementById('edit-phone').value
    };
    localStorage.setItem('deliveryAddress', JSON.stringify(newAddress));
    loadAddress();
    document.getElementById('edit-address-form').style.display = 'none';
    showAlert('Address updated successfully!');
});
// Delivery Time Page
function goToDeliveryTimePage() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'block';
    document.getElementById('payment-options-page').style.display = 'none';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
}

// Payment Options Page
function goToPaymentOptionsPage() {
    const deliveryDate = document.getElementById('delivery-date').value;
    const timeSlot = document.getElementById('delivery-time-slot').value;
    if (!deliveryDate || !timeSlot) {
        showAlert('Please select a delivery date and time slot!');
        return;
    }
    orderDetails.deliveryDate = deliveryDate;
    orderDetails.timeSlot = timeSlot;

    document.getElementById('homepage').style.display = 'none';
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('about-us-page').style.display = 'none';
    document.getElementById('order-summary-page').style.display = 'none';
    document.getElementById('delivery-address-page').style.display = 'none';
    document.getElementById('delivery-time-page').style.display = 'none';
    document.getElementById('payment-options-page').style.display = 'block';
    document.getElementById('payment-confirmation-page').style.display = 'none';
    document.getElementById('sidebar').classList.remove('active');
}

// Payment Confirmation Page
function processPayment() {
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
    if (!selectedPaymentMethod) {
        showAlert('Please select a payment method!');
        return;
    }

    orderDetails.paymentMethod = selectedPaymentMethod.value;

    // Simulate payment processing
    setTimeout(() => {
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('category-page').style.display = 'none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('about-us-page').style.display = 'none';
        document.getElementById('order-summary-page').style.display = 'none';
        document.getElementById('delivery-address-page').style.display = 'none';
        document.getElementById('delivery-time-page').style.display = 'none';
        document.getElementById('payment-options-page').style.display = 'none';
        document.getElementById('payment-confirmation-page').style.display = 'block';
        document.getElementById('sidebar').classList.remove('active');

        // Generate Order ID
        const orderId = 'AWN' + Date.now();
        document.getElementById('order-id').textContent = orderId;

        // Display Items
        const confirmationItemsDiv = document.getElementById('confirmation-items');
        confirmationItemsDiv.innerHTML = '';
        orderDetails.items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name} - ₹${item.price} x ${item.quantity || 1}</p>
            `;
            confirmationItemsDiv.appendChild(cartItem);
        });

        // Display Total
        document.getElementById('confirmation-total').textContent = `₹${orderDetails.finalTotal}`;

        // Play Success Audio
        const audio = document.getElementById('payment-success-audio');
        audio.play();

        // Clear Cart
        cart = [];
        updateCartCounter();

        showAlert('Payment successful! Thank you for shopping.');
    }, 1000); // Simulate a 1-second payment process
}

function trackOrder() {
    showAlert('Tracking feature coming soon!');
}

function downloadInvoice() {
    showAlert('Invoice download feature coming soon!');
}

// Alert
function showAlert(message) {
    const alertDiv = document.getElementById('alert');
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 3000);
}
