const STORAGE_KEY = "vizyoner-editorial-feed-v6";
const ASSET_VERSION = "7";

const covers = {
    earthquakeMain: `kapak-deprem-ana.jpg?v=${ASSET_VERSION}`,
    earthquakeMap: `kapak-deprem-harita.jpg?v=${ASSET_VERSION}`,
    earthquakeCity: `kapak-deprem-sehir.jpg?v=${ASSET_VERSION}`,
    towers: `kapak-ekonomi.jpg?v=${ASSET_VERSION}`,
    stadium: `kapak-spor.jpg?v=${ASSET_VERSION}`,
    studio: `kapak-editor.jpg?v=${ASSET_VERSION}`
};

const articles = [
    {
        id: "deprem-istanbul-ankara-izmir",
        title: "Son dakika deprem mi oldu? Az once deprem nerede oldu? Istanbul, Ankara, Izmir ve il il AFAD son depremler 29 Nisan 2026",
        summary: "Son depremler ve anlik resmi aciklamalar tek akis uzerinde toplandi. AFAD ve kandilli verileri editor secimiyle bir araya geliyor.",
        category: "Dunya",
        source: "NTV Son Dakika",
        age: "5 gun once",
        publishedLabel: "4 Mayis 2026 18:00",
        publishedAt: "2026-05-04T18:00:00+03:00",
        image: covers.earthquakeMain,
        detailImage: covers.earthquakeMain,
        sourceUrl: "#",
        imagePosition: "50% 54%",
        body: [
            "Deprem basliklari gundemin ritmini belirleyen en hassas alanlardan biri oldugu icin editor masasi, resmi kurum akislarini tek pencerede toplamayi surduruyor.",
            "Bu dosyada amac, yalnizca ilk sinyali vermek degil; hangi sehirlerin etkilendigini, hangi aciklamalarin geldigini ve kamuoyu icin bir sonraki anlamli guncellemenin ne olacagini netlestirmek.",
            "Okur icin asil deger, mansetin hemen ardindan gelen baglam katmaninda ortaya cikiyor. Vizyoner bu yuzden manseti buyuk tutarken takip listesini de ayni ekrana yerlestiriyor."
        ],
        watch: [
            "AFAD ve kandilli aciklamalarindaki saat farklarini kontrol edin.",
            "Yerel yonetimlerden gelen ulasim ve toplanma alani duyurularini izleyin.",
            "Resmi aciklamalarda tekrar eden risk basliklarini not edin."
        ]
    },
    {
        id: "samsun-deprem-brief",
        title: "Az once deprem Samsun'da deprem mi oldu? Samsun deprem listesi ve son aciklamalar",
        summary: "Samsun cevresindeki son bildirimler, resmi veri akisi ve editor notlariyla birlikte sunuluyor.",
        category: "Dunya",
        source: "NTV Son Dakika",
        age: "2 gun once",
        publishedLabel: "2 Mayis 2026 11:20",
        publishedAt: "2026-05-02T11:20:00+03:00",
        image: covers.earthquakeMap,
        detailImage: covers.earthquakeMap,
        sourceUrl: "#",
        imagePosition: "50% 48%",
        body: [
            "Bolgesel sarsinti haberlerinde ilk saatler icinde dogru veri toplamak, basligin kendisinden daha kritik hale gelebiliyor.",
            "Samsun dosyasi, tek seferde hem resmi kaynaklara hem de editor ozetiyle duzenlenmis bir akisa erisim sagliyor.",
            "Bu tasarim dili, alarm duygusunu buyutmeden gerekli bilgiyi belirgin bir hiyerarsiyle okura tasimayi hedefliyor."
        ],
        watch: [
            "Kandilli ve AFAD buyukluk degerleri arasinda fark var mi bakin.",
            "Ilgili ilce veya mahalle bazli bilgilendirmeleri izleyin.",
            "Yeni artci dizisine dair saatlik guncellemeleri kontrol edin."
        ]
    },
    {
        id: "mugla-deprem-dosya",
        title: "Mugla'da deprem mi oldu? Az once deprem Mugla'da nerede oldu? AFAD son depremler listesi 02 Mayis 2026",
        summary: "Mugla cevresindeki bildirimler ve editor secimi oncelik notlari, hizli okunacak bir duzende listeleniyor.",
        category: "Dunya",
        source: "NTV Son Dakika",
        age: "3 gun once",
        publishedLabel: "2 Mayis 2026 08:30",
        publishedAt: "2026-05-02T08:30:00+03:00",
        image: covers.earthquakeCity,
        detailImage: covers.earthquakeCity,
        sourceUrl: "#",
        imagePosition: "50% 56%",
        body: [
            "Yerel deprem haberlerinde en zor kisim, bilgi kalabaligini panik yerine netlige donusturebilmek.",
            "Mugla dosyasi, kart ustu ozet ve detay sayfasi katmanlariyla ayni haberin iki farkli okuma temposunu destekliyor.",
            "Gorselde referans aldiginiz yapidaki gibi bu alan da buyuk tipografi, kart ici rozetler ve ince cizgilerle guclendirildi."
        ],
        watch: [
            "Son aciklamalardaki derinlik ve buyukluk bilgisini karsilastirin.",
            "Yerel yonetim ya da valilik duyurularina bakin.",
            "Ayni bolgedeki tekrar eden sarsinti dizisini izleyin."
        ]
    },
    {
        id: "finans-merkezleri",
        title: "Finans merkezlerinde yeni gun: kuleler arasinda belirsizlikten veriye gecis donemi",
        summary: "Piyasalarin yon arayisinda odak noktasi; veri takvimi, merkez bankasi tonu ve beklenti yonetimi olmaya devam ediyor.",
        category: "Ekonomi",
        source: "NTV Son Dakika",
        age: "1 gun once",
        publishedLabel: "3 Mayis 2026 20:30",
        publishedAt: "2026-05-03T20:30:00+03:00",
        image: covers.towers,
        detailImage: covers.towers,
        sourceUrl: "#",
        imagePosition: "50% 52%",
        body: [
            "Ekonomi haberlerinin etkisi cogu zaman basligin kendisinden sonra ortaya cikar; beklenti, veri ve yonlendirme arasindaki baglar okur icin net gosterilmelidir.",
            "Bu yuzden ekonomi kartlarinda daha serin gorseller, daha sakin tonlar ve kisa ama yogun ozetler kullaniyoruz.",
            "Hedef, okurun piyasaya dair buyuk resmi ilk ekranda algilayabilmesi."
        ],
        watch: [
            "Merkez bankasi ve veri takvimi arasindaki iliskiyi izleyin.",
            "Piyasa fiyatlamasinda en hizli tepki veren gostergelere bakin.",
            "Resmi metinlerde ton degisimi var mi not edin."
        ]
    },
    {
        id: "spor-ekonomi",
        title: "Spor ekonomisi buyuyor: taraftar deneyimi dijital uyeliklerle yeniden tasarlaniyor",
        summary: "Kulupler, mac gunu gelirinin otesine gecmek icin dijital urun ve aidiyet katmanlarini buyutuyor.",
        category: "Spor",
        source: "NTV Son Dakika",
        age: "4 gun once",
        publishedLabel: "1 Mayis 2026 12:40",
        publishedAt: "2026-05-01T12:40:00+03:00",
        image: covers.stadium,
        detailImage: covers.stadium,
        sourceUrl: "#",
        imagePosition: "50% 62%",
        body: [
            "Spor sayfasinda hedef sadece skor vermek degil; kulubun ekonomik pozisyonunu ve taraftar deneyimini ayni hikayeye baglamak.",
            "Referans gorseldeki kart ritmini koruyarak daha hafif ama canli bir ton ekledik.",
            "Bu alan, gundem yogunlugunu bozmadan farkli kategorilerin ayni sistem icinde nefes alabilmesini sagliyor."
        ],
        watch: [
            "Uyelik modeli ve dijital urun detaylarini karsilastirin.",
            "Kulup yonetiminden gelen gelir beklentisi aciklamalarini izleyin.",
            "Taraftar geri bildiriminin urun tarafina nasil yansidigina bakin."
        ]
    },
    {
        id: "editor-dosya",
        title: "Editor masasinin yeni duzeni: daha belirgin mansetler, daha temiz kartlar ve hizli tarama akisi",
        summary: "Yeni arayuz, buyuk manset alanini filtre paneli ve kart tabanli haber akisiyla daha sistemli hale getiriyor.",
        category: "Ekonomi",
        source: "Vizyoner Studio",
        age: "bugun",
        publishedLabel: "4 Mayis 2026 21:10",
        publishedAt: "2026-05-04T21:10:00+03:00",
        image: covers.studio,
        detailImage: covers.studio,
        sourceUrl: "#",
        imagePosition: "50% 52%",
        body: [
            "Bu calismada en buyuk degisim, ilk gorseldeki premium haber odasi hissini daha duzgun bir grid ve tipografi sistemiyle yeniden kurmak oldu.",
            "Ust bolumde buyuk kahraman alan, sagda briefing paneli, altta arama ve kategori filtreleri, sonrasinda da birbirine yaslanan kart akisi tasarlandi.",
            "Detay ve hakkimizda sayfalari da ayni gorsel dili paylastigi icin site artik daha butunluklu gorunuyor."
        ],
        watch: [
            "Kategori filtrelerinin hizli tarama deneyimini destekleyip desteklemedigini izleyin.",
            "Kartlar arasi bosluk ve tipografi ritminin mobilde de korunduguna bakin.",
            "Detay sayfasi ile ana akis arasindaki gorsel bagin yeterince guclu olup olmadigini test edin."
        ]
    }
];

const categoryOrder = ["all", "Dunya", "Ekonomi", "Spor"];

function saveArticles() {
    Object.keys(localStorage)
        .filter((key) => key.startsWith("vizyoner-editorial-feed-v"))
        .forEach((key) => {
            if (key !== STORAGE_KEY) {
                localStorage.removeItem(key);
            }
        });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

function readArticles() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        return Array.isArray(stored) && stored.length ? stored : articles;
    } catch (error) {
        return articles;
    }
}

function createDetailUrl(article) {
    return `detay.html?id=${encodeURIComponent(article.id)}`;
}

function renderHomePage() {
    const data = readArticles();
    const feature = data[0];
    const hero = document.getElementById("hero-feature");
    const briefingList = document.getElementById("briefing-list");
    const sideStory = document.getElementById("side-story");
    const filterGroup = document.getElementById("filter-group");
    const searchInput = document.getElementById("search-input");
    const newsGrid = document.getElementById("news-grid");
    const template = document.getElementById("news-card-template");
    const marquee = document.getElementById("live-marquee");
    let activeCategory = "all";

    hero.innerHTML = `
        <div class="hero-spotlight__media" style="background-image:url('${feature.detailImage}');background-position:${feature.imagePosition || "50% 50%"}"></div>
        <div class="hero-spotlight__content">
            <div class="badge-row">
                <span class="badge badge--accent">${feature.category}</span>
                <span class="badge">Manset</span>
            </div>
            <div class="hero-meta">
                <span>${feature.age}</span>
                <span>${feature.source}</span>
            </div>
            <h1>${feature.title}</h1>
            <p>${feature.summary}</p>
            <div class="hero-facts">
                <div><strong>${feature.category}</strong><span>Odak alani</span></div>
                <div><strong>Baglam</strong><span>Ozet + takip listesi</span></div>
                <div><strong>29 Nisan 2026</strong><span>Guncellenme gunu</span></div>
            </div>
            <div class="hero-actions">
                <a class="button button--primary" href="${createDetailUrl(feature)}">Haberi ac</a>
                <a class="button button--ghost" href="#news-grid">Akisa gec</a>
            </div>
        </div>
    `;

    briefingList.innerHTML = data.slice(0, 4).map((article, index) => `
        <article class="briefing-item">
            <div class="briefing-item__index">${index + 1}</div>
            <div>
                <strong>${article.title}</strong>
                <small>${article.category} - ${article.age}</small>
            </div>
        </article>
    `).join("");

    const secondary = data[2];
    sideStory.innerHTML = `
        <div class="side-story__image" style="background-image:url('${secondary.image}');background-position:${secondary.imagePosition || "50% 50%"}"></div>
        <div class="side-story__body">
            <p class="section-tag">Gunun Konusu</p>
            <h3>Gunun dunya dosyasi</h3>
            <p>${secondary.summary}</p>
            <div class="tag-row">
                <span>${secondary.category}</span>
                <span>${secondary.publishedLabel.split(" ").slice(0, 3).join(" ")}</span>
            </div>
            <a class="news-card__link" href="${createDetailUrl(secondary)}">Gunluk haberi ac</a>
        </div>
    `;

    marquee.textContent = data.map((article) => article.title).join(" | ");

    filterGroup.innerHTML = categoryOrder.map((category) => {
        const label = category === "all" ? "Tumu" : category;
        const active = category === "all" ? " is-active" : "";
        return `<button class="filter-chip${active}" data-category="${category}">${label}</button>`;
    }).join("");

    function updateStats(visible) {
        document.getElementById("stat-total").textContent = data.length;
        document.getElementById("stat-visible").textContent = visible.length;
        document.getElementById("stat-category").textContent = new Set(visible.map((article) => article.category)).size;
    }

    function renderGrid(list) {
        newsGrid.innerHTML = "";

        if (!list.length) {
            newsGrid.innerHTML = `
                <article class="glass-panel" style="grid-column:1/-1">
                    <p class="section-tag">Sonuc yok</p>
                    <h3>Arama veya filtreye uygun haber bulunamadi.</h3>
                    <p class="panel-copy">Daha genel bir kelime deneyebilir veya tum kategorilere donebilirsiniz.</p>
                </article>
            `;
            updateStats(list);
            return;
        }

        list.forEach((article) => {
            const node = template.content.firstElementChild.cloneNode(true);
            const image = node.querySelector(".news-card__photo");
            image.src = article.image;
            image.alt = article.title;
            image.style.objectPosition = article.imagePosition || "50% 50%";
            node.querySelector(".news-card__pill").textContent = article.category;
            node.querySelector(".news-card__source").textContent = article.source;
            node.querySelector(".news-card__title").textContent = article.title;
            node.querySelector(".news-card__summary").textContent = article.summary;
            node.querySelector(".news-card__age").textContent = article.age;
            node.querySelector(".news-card__date").textContent = article.publishedLabel;
            node.querySelector(".news-card__link").href = createDetailUrl(article);
            newsGrid.appendChild(node);
        });

        updateStats(list);
    }

    function applyFilters() {
        const term = searchInput.value.trim().toLowerCase();
        const filtered = data.filter((article) => {
            const categoryMatch = activeCategory === "all" || article.category === activeCategory;
            const termMatch = !term || `${article.title} ${article.summary} ${article.category}`.toLowerCase().includes(term);
            return categoryMatch && termMatch;
        });

        renderGrid(filtered);
    }

    filterGroup.addEventListener("click", (event) => {
        const button = event.target.closest("[data-category]");
        if (!button) {
            return;
        }

        activeCategory = button.dataset.category;
        filterGroup.querySelectorAll(".filter-chip").forEach((chip) => {
            chip.classList.toggle("is-active", chip === button);
        });
        applyFilters();
    });

    searchInput.addEventListener("input", applyFilters);
    renderGrid(data);
}

function renderDetailPage() {
    const data = readArticles();
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");
    const article = data.find((item) => item.id === articleId) || data[0];

    document.title = `${article.title} | Vizyoner`;
    document.getElementById("detail-title").textContent = article.title;
    document.getElementById("detail-summary").textContent = article.summary;
    document.getElementById("detail-meta").innerHTML = `
        <span class="badge badge--accent">${article.category}</span>
        <span>${article.source}</span>
        <span>${article.publishedLabel}</span>
    `;
    document.getElementById("detail-cover").style.backgroundImage = `url('${article.detailImage}')`;
    document.getElementById("detail-cover").style.backgroundPosition = article.imagePosition || "50% 50%";
    document.getElementById("detail-hero-visual").style.backgroundImage = `url('${article.image}')`;
    document.getElementById("detail-hero-visual").style.backgroundPosition = article.imagePosition || "50% 50%";
    document.getElementById("detail-body").innerHTML = article.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
    document.getElementById("watch-list").innerHTML = article.watch.map((item) => `<li>${item}</li>`).join("");
    document.getElementById("source-link").href = article.sourceUrl || createDetailUrl(article);

    const related = data.filter((item) => item.id !== article.id).slice(0, 3);
    document.getElementById("related-list").innerHTML = related.map((item) => `
        <a class="related-item" href="${createDetailUrl(item)}">
            <strong>${item.title}</strong>
            <small>${item.category} - ${item.age}</small>
        </a>
    `).join("");
}

saveArticles();

if (document.getElementById("hero-feature")) {
    renderHomePage();
}

if (document.getElementById("detail-title")) {
    renderDetailPage();
}
