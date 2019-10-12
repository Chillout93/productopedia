import { CategoryDescription } from "./models";

// Hardware > Heating, Ventilation & Air Conditioning > Vents & Flues
// Health & Beauty > Personal Care > Cosmetics > Bath & Body > Adult Hygienic Wipes
// Home & Garden > Kitchen & Dining > Kitchen Tools & Utensils > Pizza Cutters
// Sporting Goods > Outdoor Recreation > Cycling > Bicycle Parts > Bicycle Handlebars
// Vehicles & Parts > Vehicle Parts & Accessories > Vehicle Maintenance, Care & Decor > Vehicle Covers > Vehicle Storage Covers > Boat Storage Covers

// bestreviews.com
// What's good about it?
// 
// what's bad about it?
// 

export const laptops: CategoryDescription = {
    id: 1,
    name: "Laptops",
    lastUpdated: new Date(),
    whatMakesItGood: "Below are the metrics to look out for when buying any laptop, \
    our suggestion for the best value for money is to always buy second hand from sites \
    like <a href=\"https://uk.webuy.com/\">cex.com</a>. Laptops deprecate in value quickly so you can get many bargains via second hand shops, watch out buying directly from \
    other people without testing some basic interactions and all the externals (USB ports/webcam/microphone).",
    useCases: [
        {
            id: 1,
            name: "For Browsing The Internet",
            products: [
                {
                    id: 1,
                    name: "Lenovo Ideapad S340 14",
                    level: {
                        level: 1,
                        price: "200-400",
                    },
                    summary: "Ideal for kids or grandparents who just want to occasionally browse the internet, \
                        or someone who is looking for a cheap workhorse, this laptop has the latest generation processor and an SSD so even for a cheap price you should \
                        feel like your flying by when browsing the internet or doing some light word processing.",
                    pros: [
                        "Display hinge goes 180 degrees, means less prone to failure",
                        "USB-C ports",
                        "Long battery life",
                        "Latest generation processor"
                    ],
                    cons: [
                        "Poor webcam",
                        "Not the greatest screen"
                    ],
                    comparisonAttributes: [
                        { comparisonCode: "OS", productCode: 1, value: "Windows 10" },
                        { comparisonCode: "Features", productCode: 1, value: "" },
                        { comparisonCode: "Camera", productCode: 1, value: "Yes" },
                        { comparisonCode: "Wi-Fi", productCode: 1, value: "Wi-Fi 1 (802.11b), Wi-Fi 2 (802.11a), Wi-Fi 3 (802.11g), Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac)" },
                        { comparisonCode: "Ports", productCode: 1, value: "Ethernet, HDMI, Headphone, Microphone, 1 USB C, 2 USB A" },
                        { comparisonCode: "RAM", productCode: 1, value: "4GB" },
                        { comparisonCode: "Storage", productCode: 1, value: "128GB SSD" },
                        { comparisonCode: "Processor", productCode: 1, value: "Intel Core i5 8250U" },
                        { comparisonCode: "Graphics", productCode: 1, value: "UHD Graphics 620 (Integrated)" },
                        { comparisonCode: "Material", productCode: 1, value: "Aluminum" },
                        { comparisonCode: "Colours", productCode: 1, value: "Grey, Pink, Blue, Black, White" },
                        { comparisonCode: "Size", productCode: 1, value: "15.6" },
                        { comparisonCode: "Resolution", productCode: 1, value: "1366x768" },
                        { comparisonCode: "Battery Life", productCode: 1, value: "7 Hours" },
                        { comparisonCode: "Height", productCode: 1, value: "1.9cm" },
                        { comparisonCode: "Width", productCode: 1, value: "35.8cm" },
                        { comparisonCode: "Depth", productCode: 1, value: "24.4cm" },
                        { comparisonCode: "Weight", productCode: 1, value: "1.7kg" },
                    ],
                    alternatives: [
                        {
                            name: "Acer Aspire 3",
                            summary: "A cheaper alternative to the Lenovo, great if you can't make that price point, but it will feel a lot slower with the older AMD architecture and hard drive instead of SSD",
                            price: 239.99,
                            image: "https://media.4rgos.it/i/Argos/9121894_R_Z001A?w=750&h=440&qlt=70",
                            comparisonAttributes: [
                                { comparisonCode: "OS", value: "Windows 10" },
                                { comparisonCode: "Features", value: "" },
                                { comparisonCode: "Camera", value: "Yes" },
                                { comparisonCode: "Wi-Fi", value: "" },
                                { comparisonCode: "Ports", value: "1 HDMI, 1 Ethernet, 1 USB 3, 2 USB 2, SD card reader" },
                                { comparisonCode: "RAM", value: "4GB" },
                                { comparisonCode: "Storage", value: "1TB HDD" },
                                { comparisonCode: "Processor", value: "AMD E Series 9000E processor" },
                                { comparisonCode: "Graphics", value: "AMD Radeon R2 Graphics (Integrated)" },
                                { comparisonCode: "Material", value: "Aluminum, Plastic" },
                                { comparisonCode: "Colours", value: "Black" },
                                { comparisonCode: "Size", value: "15.6" },
                                { comparisonCode: "Resolution", value: "1266x768" },
                                { comparisonCode: "Battery Life", value: "5.5 Hours" },
                                { comparisonCode: "Height", value: "2.09cm" },
                                { comparisonCode: "Width", value: "38.16cm" },
                                { comparisonCode: "Depth", value: "25.9cm" },
                                { comparisonCode: "Weight", value: "2.1kg" },
                            ],
                            affiliateLinks: [{
                                price: 239.99,
                                url: "https://www.argos.co.uk/product/9121894?&cmpid=GS001&_$ja=tsid:59158%7cacid:532-198-3455%7ccid:598756200%7cagid:24290293370%7ctid:aud-641224040377:pla-620708744391%7ccrid:86846330570%7cnw:g%7crnd:2823360956818400612%7cdvc:c%7cadp:1o2%7cmt:%7cloc:&gclid=Cj0KCQjw84XtBRDWARIsAAU1aM2ELZmx79b2evdeM8n1jFjaY7Mb4OF3P0SgIjH6vU52uP2H3n72LOQaAopHEALw_wcB&gclsrc=aw.ds",
                                name: "Argos"
                            }]
                        },
                        {
                            name: "Asus VivoBook 15",
                            summary: "Has a better feel and screen than the Lenovo but the processor is not ideal, if you must have a high resolution screen this is worth an option, but it will not stand the test of time as well.",
                            price: 399.99,
                            image: "https://brain-images-ssl.cdn.dixons.com/6/2/10195126/u_10195126.jpg",
                            comparisonAttributes: [
                                { comparisonCode: "OS", value: "Windows 10" },
                                { comparisonCode: "Features", value: "" },
                                { comparisonCode: "Camera", value: "Yes" },
                                { comparisonCode: "Wi-Fi", value: "" },
                                { comparisonCode: "Ports", value: "1 HDMI, 1 USB-C, 1 USB-3, 2 USB-2" },
                                { comparisonCode: "RAM", value: "4GB" },
                                { comparisonCode: "Storage", value: "256 GB SSD" },
                                { comparisonCode: "Processor", value: "AMD Ryzen 3 3200U Processor" },
                                { comparisonCode: "Graphics", value: "AMD Radeon R2 Graphics (Integrated)" },
                                { comparisonCode: "Material", value: "Aluminum, Plastic" },
                                { comparisonCode: "Colours", value: "Grey" },
                                { comparisonCode: "Size", value: "15.6" },
                                { comparisonCode: "Resolution", value: "1920x1080" },
                                { comparisonCode: "Battery Life", value: "6 Hours" },
                                { comparisonCode: "Height", value: "1.9cm" },
                                { comparisonCode: "Width", value: "35.7cm" },
                                { comparisonCode: "Depth", value: "23.0cm" },
                                { comparisonCode: "Weight", value: "1.7kg" },
                            ],
                            affiliateLinks: [{
                                price: 399.99,
                                url: "https://www.currys.co.uk/gbuk/computing/laptops/laptops/asus-vivobook-15-x512da-15-6-amd-ryzen-3-laptop-256-gb-ssd-grey-10195126-pdt.html?istCompanyId=bec25c7e-cbcd-460d-81d5-a25372d2e3d7&istFeedId=4d7eb93e-055f-499d-8ee5-1cdcc50d67d1&istItemId=ixwtiiprx&istBid=tztx&srcid=198&cmpid=ppc~gg~1011%20(PLA)%20Windows%20Laptops%20and%20Convertibles%20-%20Adaptive~1011%20(PLA)%20Windows%20Laptops%20And%20Convertibles%20ad%20group~Exact&mctag=gg_goog_7904&kwid=GOOGLE&device=c&ds_kids=92700048097222798&tgtid=1011%20(PLA)%20Windows%20Laptops%20and%20Convertibles%20-%20Adaptive&&gclid=Cj0KCQjw84XtBRDWARIsAAU1aM3WMc2QZmUXjKbb8NZyGC3lK7sZYDXJ746UD6q9cO40h77ZfBvFrOAaAtrhEALw_wcB&gclsrc=aw.ds",
                                name: "Currys"
                            }]
                        }
                    ],
                    affiliateLinks: [{
                        price: 379.96,
                        url: "https://www.ebuyer.com/899327-lenovo-ideapad-330s-i5-8gb-1tb-hdd-hd-15-6in-win-10-home-81f501fvuk?mkwid=s_dc&pcrid=51467863979&pkw=&pmt=&gclid=Cj0KCQjw84XtBRDWARIsAAU1aM1FLGhTluHda4KVHHpwEkBu6KZf3ueGuxeciTkmNPBJvmm_WRyAyx4aAo5oEALw_wcB",
                        name: "EBuyer"
                    }],
                    images: [
                        "https://www.lenovo.com/medias/lenovo-laptop-ideapad-330s-14-2.jpg?context=bWFzdGVyfHJvb3R8NzU3NDd8aW1hZ2UvanBnfGhjNi9oMDcvOTcwMTYzNzE2MDk5MC5qcGd8MTk0ZGUyMmRiOTA2M2Y4NDJiYWEzZjQ3NzQ5NmFkMDA0OTRjOGE5MmZhZTE0MjIzMGRkNWJiMGRiNzZlMmIyMQ",
                        "https://www.lenovo.com/medias/lenovo-laptop-ideapad-330s-14-4.jpg?context=bWFzdGVyfHJvb3R8OTEwMjB8aW1hZ2UvanBnfGhiYy9oYjgvOTcwMTYzNzI5MjA2Mi5qcGd8MTRjMGI4ZmRmYmEyNGQwNWRlMDRiYTkwNzk2NDU2NGEyMjI1MTQxMjMyMGQzMjBlZDQ0OTNiYjgzNzJhMDQxYw",
                        "https://www.lenovo.com/medias/lenovo-laptop-ideapad-330s-14-5.jpg?context=bWFzdGVyfHJvb3R8NTU5Njl8aW1hZ2UvanBnfGg2My9oYjgvOTcwMTYzNzM1NzU5OC5qcGd8ZjdkMjVjYWYzNzc4YjQ4YzgxYzk0N2M4NzM2NTQxOWNmZmUxNjIzYzZkZGQ2Y2E5YjFhMjliMzc2NmMxMGNiOQ"
                    ]
                }
            ]
        },
    ],
    comparisonMetrics: [
        { name: "OS", code: "OS" },
        { name: "Features", code: "Features" },
        { name: "Camera", code: "Camera" },
        { name: "Wi-Fi", code: "Wi-Fi" },
        { name: "Ports", code: "Ports" },
        { name: "RAM", code: "RAM" },
        { name: "Storage", code: "Storage" },
        { name: "Processor", code: "Processor" },
        { name: "Graphics", code: "Graphics" },
        { name: "Material", code: "Material" },
        { name: "Colours", code: "Colours" },
        { name: "Size", code: "Size" },
        { name: "Resolution", code: "Resolution" },
        { name: "Battery Life", code: "Battery Life" },
        { name: "Height", code: "Height" },
        { name: "Width", code: "Width" },
        { name: "Depth", code: "Depth" },
        { name: "Weight", code: "Weight" },
    ],
    metrics: [
        {
            name: "Build Quality & Features", description: "A laptop with better build quality will have more premium materials like metal and carbon fiber over plasic, Macs tend to have the best build quality but come at a heavy premium on price for the brand label. \
            Extra features to look out for are USB-C port laptops which will prevent you needing to buy a new laptop for many years; webcams/microphones and durability/flexibility of the spine which is usually the first thing to break. \
        " },
        {
            name: "Performance", description: " \
        <p> \
        <strong>CPU:</strong>  Nowadays you will mostly see Intel CPUs in the format iX-Xxxx, the first X will be a 3, 5, 7 or 9 with the higher number being a stronger \
        processor. The second X determines the generation, so an i7-8110 is an i7 processor from the 8th generation. The generation includes architecture improvements over time <source /> \
        you should expect a higher generation i5 to outperform a lower generation i7 for example. The best way to compare processors is through benchmarks <a href=\"https://www.cpubenchmark.net/laptop.html\">here</a>. \
        </p> \
        <p> \
            <strong>RAM: </strong> RAM is quite cheap and you should be looking for at least 8GB even for lower end laptops, 16GB for more mid-level. The more information your computer can hold in ram \
            over storage the faster it can access the information, so ideally for all the applications you are using at one time it should be able to hold all that in memory, or \
            you should expect severe performance degredation. \
        </p> \
        <p> \
            <strong>Storage: </strong> Try and avoid hard disks where possible, look for laptops with \"SSD\" over \"Hard Disk\" as these will allow your computer to turn on \
            faster and overall create the sense that your laptop is a lot faster than it really is. If you require a lot of storage which you don't access frequently then \
            we recommend just getting external hard drives to hold photos or videos. \
        </p> \
        <p> \
            <strong>Graphics Card: </strong> You only need a dedicated graphics card if you plan to do gaming otherwise it will be encorporated onto the motherboard, try and \
            avoid laptops with dedicated graphics cards unless you plan to do gaming, in which case you should look at benchmarks to determine the best forming ones. \
        </p>" },
        {
            name: "Portability", description: "        <p> \
        <strong>Weight: </strong> The more power you pack into a laptop, the heavier you should expect it to be. It often takes a lot of work to make a laptop light and performant, so expect to pay a premium if you're looking for portable laptops that also perform very well. Don't forgot to take into account the charger weight \
        with any laptop as it's rare you will be going anywhere far without the charger. \
    </p> \
    <p> \
        <strong>Battery Life: </strong>Battery life will vary between 2-8 hours depending on what work you are doing, when laptops exceed this capability we try to make a special note in the recommendations, but otherwise you should expect most laptops to fall within this range. \
    </p>" },
    ]
};