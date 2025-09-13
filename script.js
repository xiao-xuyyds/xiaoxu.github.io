// 书籍数据 - 确保图片与书名一致
const books = [
    {
        id: 1,
        title: "活着",
        author: "余华",
        price: 36.00,
        image: "https://tse4-mm.cn.bing.net/th/id/OIP-C.ce1_8CO8IgNleIU9S-dLjAAAAA?w=150&h=180&c=7&r=0&o=7&dpr=2.3&pid=1.7&rm=3",
        description: "讲述了在大时代背景下，随着内战、三反五反、大跃进、文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。"
    },
    {
        id: 2,
        title: "三体",
        author: "刘慈欣",
        price: 49.80,
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.l8P7TtKVcfynts-_AECmpgHaKv?w=141&h=205&c=7&r=0&o=7&dpr=2.3&pid=1.7&rm=3",
        description: "讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。其第一部经过刘宇昆翻译后获得了第73届雨果奖最佳长篇小说奖。"
    },
    {
        id: 3,
        title: "百年孤独",
        author: "加西亚·马尔克斯",
        price: 39.50,
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.RplTh-tIH0zBMCf3cr2AjwHaHa?w=208&h=208&c=7&r=0&o=5&dpr=2.3&pid=1.7",
        description: "描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。"
    },
    {
        id: 4,
        title: "人类简史",
        author: "尤瓦尔·赫拉利",
        price: 68.00,
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.NH8M5hIwmaHhVm4wugfC6gHaHa?w=211&h=211&c=7&r=0&o=5&dpr=2.3&pid=1.7",
        description: "从认知革命、农业革命到科学革命，我们真的了解自己吗？我们过得更加快乐吗？我们知道金钱和宗教从何而来，为何产生吗？"
    },
    {
        id: 5,
        title: "原则",
        author: "瑞·达利欧",
        price: 98.00,
        image: "https://p2.ssl.qhimgs1.com/sdr/400__/t019f458125e3cafb12.jpg",
        description: "作者瑞·达利欧分享了他生活和工作中的原则，这些原则帮助他创造了独特的公司文化，并取得了非凡的成功。"
    },
    {
        id: 6,
        title: "思考，快与慢",
        author: "丹尼尔·卡尼曼",
        price: 56.00,
        image: "https://p2.ssl.qhimgs1.com/sdr/400__/t01f2b43768240a95d2.jpg",
        description: "作者丹尼尔·卡尼曼带领我们体验一次思维的终极之旅，并阐述了我们大脑中两个系统的特点与优劣。"
    }
];

// 购物车计数
let cartCount = 0;

// 页面加载完成后执行
window.onload = function() {
    renderBooks();
};

// 渲染书籍函数
function renderBooks() {
    const booksContainer = document.getElementById('books-container');
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-img">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">作者: ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <div class="book-price">
                    <span class="price">¥${book.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart(${book.id})">加入购物车</button>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    });
}

// 添加到购物车函数
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        // 更新购物车数量
        cartCount++;
        document.querySelector('.cart-count').textContent = cartCount;
        
        // 显示提示信息
        alert(`已添加《${book.title}》到购物车`);
    }
}