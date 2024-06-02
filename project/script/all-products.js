const products = [
    { id: 1, name: 'MSI Modern Ultra Thin', type: 'laptop', imageUrl: 'https://c1.neweggimages.com/productimage/nb300/34-156-444-02.jpg', description: 'The MSI Modern 14 C7M-048US is a lightweight 14" business laptop with an AMD Ryzen 7 7730U processor, 16GB RAM, and a 512GB NVMe SSD. It features a Full HD IPS display, Wi-Fi 6E, Bluetooth 5.2, various USB ports, and HDMI. Running Windows 11 Home, it includes a backlit keyboard and weighs 3.75 lbs.' },
    { id: 2, name: 'Lenovo V15 Gen 4 Business', type: 'laptop', imageUrl: 'https://c1.neweggimages.com/productimage/nb300/B0GJD2312140DX5OX1F.jpg', description: 'The Lenovo V15 Gen 4 is a business laptop featuring a 15.6" Full HD IPS display, powered by an AMD Ryzen 5 5500U processor, 24GB of memory, and a 2TB PCIe SSD. It offers versatile connectivity options, including USB-C, HDMI, and Ethernet, and runs on Windows 11 Pro, making it ideal for professional use.' },
    { id: 3, name: 'MSI Bravo 15 15.6"', type: 'laptop', imageUrl: 'https://c1.neweggimages.com/productimage/nb300/34-156-587-06.jpg', description: 'The MSI Bravo 15 C7VFKP is a high-performance gaming laptop featuring an AMD Ryzen 9 7940HS CPU, NVIDIA GeForce RTX 4060 GPU, and a 15.6" Full HD IPS display with a 144 Hz refresh rate. It offers 16 GB of DDR5 memory, a 1 TB NVMe SSD, and advanced connectivity options including Wi-Fi 6E and Bluetooth 5.2, all in a sleek aluminum black chassis.' },
    { id: 4, name: 'Asus TUF Gaming 17.3', type: 'laptop', imageUrl: 'https://c1.neweggimages.com/productimage/nb300/34-236-508-28.jpg', description: 'The ASUS TUF Gaming FX707VI-NS74 is a powerful gaming laptop featuring a 17.3" WQHD 240 Hz display, an Intel Core i7-13620H CPU, 16 GB DDR5 memory, and an NVIDIA GeForce RTX 4070 GPU with 8 GB of dedicated video memory. It offers robust performance with a 1 TB PCIe Gen4 SSD and excellent connectivity options, including Wi-Fi 6, Thunderbolt 4, and multiple USB ports, all in a sleek Mecha Gray chassis.' },
    { id: 5, name: 'Crucial Pro 32GB Memory', type: 'computerParts', imageUrl: 'https://c1.neweggimages.com/ProductImageCompressAll300/20-156-394-12.jpg?ex=2', description: 'The Crucial Pro Series CP2K16G4DFRA32A is a 32GB DDR4 memory kit, featuring two 16GB modules with a speed of 3200MHz, CAS Latency 22, and Intel XMP 2.0 support. Designed for compatibility with 8th–13th Gen Intel® Core and AMD Ryzen™ 1000–5000 Series Desktop CPUs, it includes a heat spreader and operates at 1.20V.' },
    { id: 6, name: 'MSI Ventus GeForce RTX 4070 Super', type: 'computerParts', imageUrl: 'https://m.media-amazon.com/images/I/712dJxmjvHL.__AC_SY300_SX300_QL70_FMwebp_.jpg', description: 'The MSI RTX 4070 SUPER 12G VENTUS 2X WHITE OC is a powerful graphics card featuring a GeForce RTX 4070 SUPER GPU with 7168 CUDA Cores and 12GB of GDDR6X memory. With a boost clock of 2505 MHz and a sleek white design, it offers exceptional performance for high-resolution gaming and content creation, backed by a 220W thermal design power and requiring a recommended PSU wattage of 750W.' },
    { id: 7, name: 'Iphone 15', type: 'mobile', imageUrl: 'https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_SY679_.jpg', description: 'Experience the pinnacle of iPhone technology with a 6.1-inch Super Retina XDR display and a powerful A16 Bionic chip, complemented by an advanced dual-camera system for stunning photography. With innovative features like Dynamic Island interaction and satellite-based emergency services, this device offers unparalleled performance and safety for modern users.' },
    { id: 8, name: 'Samsung S24', type: 'mobile', imageUrl: 'https://m.media-amazon.com/images/I/71NngboUC6L.__AC_SX300_SY300_QL70_FMwebp_.jpg', description: 'The Samsung S24 Series offers advanced features like Circle to Search for quick visual searches, real-time voice translations, and Note Assist for smart note management. With a 50MP camera, Generative Edit for photo enhancements, Snapdragon 8 Gen 3 processor, and Chat Assist for improved text communication, it delivers powerful performance and convenience.' },
    { id: 9, name: 'Oneplus 12', type: 'mobile', imageUrl: 'https://m.media-amazon.com/images/I/71NW2QaIzlL._AC_SX679_.jpg', description: 'The OnePlus 12, powered by the Snapdragon 8 Gen 3 and up to 16GB of RAM, features a 2k 120Hz Super Fluid Display, a 5400 mAh battery with 80W SUPERVOOC charging, and a 4th Gen Hasselblad Camera System with a 50MP primary, 64MP periscope, and 48MP ultra-wide lenses. Purchases include 6 months of Google One and 3 months of YouTube Premium for new accounts.' },
    { id: 10, name: 'Iphone SE', type: 'mobile', imageUrl: 'https://m.media-amazon.com/images/I/71i+K1V-+YL._AC_SY300_SX300_.jpg', description: 'The unlocked Apple iPhone SE2 features iOS 16, 64 GB storage, a 4.7-inch screen, and supports 5G and 4G LTE on GSM and CDMA networks. It has been tested for battery health, passed diagnostic tests, and comes with a generic charging cable but no headphones or SIM card, and has minimal cosmetic damage.' },
    { id: 11, name: 'Pixel 8a', type: 'mobile', imageUrl: 'https://m.media-amazon.com/images/I/71n1Bn04lJL.__AC_SX300_SY300_QL70_FMwebp_.jpg', description: 'The Google Pixel 8a is an unlocked Android 5G smartphone with a 6.1-inch bright Actua display, 8 GB RAM, and 128 GB storage, featuring an advanced Pixel Camera with Google AI for superior photo and video quality. It offers top-rated security, a long-lasting adaptive battery, IP67 protection, and versatile carrier compatibility, making it a robust and flexible device for everyday tasks.' },
    { id: 12, name: 'Motorola Edge', type: 'mobile', imageUrl: 'https://m.media-amazon.com/images/I/61VSeC3U7AL._AC_SY300_SX300_.jpg', description: 'The Motorola Edge 2023 boasts a fluid design with IP68 underwater protection, featuring a 50MP camera with the widest smartphone aperture, rapid 68W TurboPower charging, and a borderless 6.6" display with a 144Hz refresh rate, accompanied by Dolby Atmos audio. Powered by the MediaTek Dimensity 7030 chipset, it offers smooth performance for gaming and multimedia tasks, along with features like Ready For for wireless connectivity to TVs and a clean Android experience with moto gesture controls.' },
    { id: 13, name: 'BLU G63', type: 'mobile', imageUrl: 'https://m.media-amazon.com/images/I/71EAB02TrzL.__AC_SX300_SY300_QL70_FMwebp_.jpg', description: 'The BLU G63 runs on Android 13.0 and features a 6.8-inch screen, 4GB RAM, and 128GB storage capacity, along with dual 13MP rear cameras and an 8MP selfie camera. It offers GSM unlocked compatibility, a 5000mAh battery for extended use, and an elegant design with metallic accents and a side-mounted fingerprint sensor for secure access.' },
    { id: 14, name: 'Ryzen 9 7950XD 16 Core', type: 'computerParts', imageUrl: 'https://m.media-amazon.com/images/I/51wD3-OAv0L._AC_SX679_.jpg', description: 'This AMD Ryzen 9 processor features a 4.2 GHz clock speed, 16 cores, and 128 MB of L3 cache for enhanced performance and productivity, and fits into a Socket AM5 without soldering. It includes an AMD Radeon Graphics controller for superior graphics output.' },
    { id: 15, name: 'NZXT H6 Flow', type: 'computerParts', imageUrl: 'https://m.media-amazon.com/images/I/71s+qbMWMLL._AC_SY300_SX300_.jpg', description: 'The NZXT CC-H61FW-01 Mid Tower Case in white features wraparound glass panels for a clear view of components and a compact dual-chamber design for improved thermal performance and aesthetics. It includes three pre-installed 120mm fans, airflow-optimized panels, and an intuitive cable management system for easy building and enhanced cooling.' },
    { id: 16, name: 'Corsair iCUE SP120 RGB Elite', type: 'computerParts', imageUrl: 'https://m.media-amazon.com/images/I/81NDvx12zjL.__AC_SX300_SY300_QL70_FMwebp_.jpg', description: 'The Corsair fan with AirGuide Technology features anti-vortex vanes for concentrated cooling and includes eight individually addressable RGB LEDs for customizable lighting effects via the included iCUE Lighting Node CORE controller. It operates quietly at 18 dBA and provides high airflow with PWM-controlled speeds up to 1500 RPM, making it suitable for various cooling applications.' },
    { id: 17, name: 'NZXT PSU 850 Watt', type: 'computerParts', imageUrl: 'https://m.media-amazon.com/images/I/513-cOwIEYL.__AC_SY445_SX342_QL70_FMwebp_.jpg', description: 'This power supply boasts 2% higher efficiency than the 80plus Gold Standard at 50% load and high-line input voltage, featuring a fully modular design for customizable cable usage and compatibility with various PC styles and components, ensuring precise, error-free performance with optimized, silent operation through its micro controller-enabled protection mechanism and low thermal dissipation design.' },
]


function createCard(product) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
    <h3>${product.name}</h3>
    <p><b>Description:</b> ${product.description}</p>
    <h4><a href="bought-item.html">BUY NOW</a></h4>
    `;
    
    return card
}

function displayAllCard(products) {
    const cardContainer = document.getElementById('all-products');
    cardContainer.innerHTML = '';
    products.forEach(product => {
        const card = createCard(product);
        cardContainer.appendChild(card);
    });
}

displayAllCard(products)

const navMenu = document.querySelector(".navigation-links");
const navButton = document.querySelector("#navigation");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
})