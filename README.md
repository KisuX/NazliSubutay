## 21.11.2026 — Editör bilgisi ve yayın öncesi kontrol

Site editörü **Kasım Sever**, iletişim adresi **severkasim@gmail.com**. Editör bilgisi TR/EN site bilgileri ve tüm aktif sayfaların altbilgilerine işlendi. Klinik fotoğrafları aynen korunmuştur; proje yayımlanacak nihai sürüm değildir. Yapılması gerekenler için `YAYIN-ONCESI-KONTROL.md` dosyasına bakın.

# Diş Hekimi Nazlı Subutay — Web Sitesi Başlangıç Paketi

## Son düzenleme — sadeleştirme ve telefon değişikliği (21.11.2026)

- `bilgilendirme.html` ve `en/dental-health.html` aktif sayfa olmaktan çıkarıldı; eski URL'ler `rehber.html` ve `en/guide.html` sayfalarına yönlendirir.
- Ortak navbar artık yalnızca Ana Sayfa / Hakkımda / Rehber / İletişim (ve İngilizce eşdeğerleri) menülerini içerir.
- Hakkımda üst özetindeki `2016–2024` kutusu kaldırıldı. Eğitim ve sertifikaların gerçek yılları korunuyor.
- Telefon **+90 533 427 86 05**; arama bağlantısı `tel:+905334278605`, WhatsApp hedefi `https://wa.me/905334278605`.
- Mesai saatleri: Pazartesi–Cumartesi 10.00–18.00.


Bu proje, bireysel diş hekimi profili ve ağız-diş sağlığı hakkında genel bilgilendirme amacıyla hazırlanmış, Türkçe/İngilizce statik web sitesi başlangıç paketidir.

## İçindekiler

- Türkçe ana sayfa ve alt sayfalar
- İngilizce sayfalar (`/en/`)
- Rehber yazı şablonları (yayın öncesi hekim kontrolü gerekir)
- KVKK, gizlilik, çerez ve site bilgileri sayfaları (hukuki taslak alanları)
- Ortak CSS ve JavaScript
- Tasarım ön izlemesi için eklenmiş, temsili WebP fotoğraflar
- `cms/` altında Sanity Studio başlangıç dosyaları

## Yerel olarak açma

En kolay yöntem Visual Studio Code içinde **Live Server** eklentisiyle bu klasörü açıp `index.html` üzerinde **Open with Live Server** seçmektir. Alternatif olarak proje klasöründe terminal açıp `python -m http.server 8000` çalıştırın ve `http://localhost:8000` adresini açın.

## Yayın öncesi tamamlanacaklar

1. `index.html` ve tüm sayfalardaki `https://ALAN-ADINIZ/` canonical / hreflang adreslerini gerçek alan adıyla değiştirin.
2. `img/demo/` klasöründeki fotoğraflar yalnızca tasarım ön izlemesi içindir; gerçek hekim veya muayenehane fotoğrafları değildir. Yayına almadan önce hekimin onayladığı gerçek fotoğraflarla değiştirin ve sayfalardaki görsel yollarını güncelleyin.
3. Üniversite, mezuniyet yılı, doğrulanmış mesleki geçmiş, muayenehane adresi, telefon, e-posta, hasta kabul gün/saat ve site editörü bilgilerini tamamlayın.
4. Köşeli parantezli tüm alanları kontrol edin. Gerçek olmayan uzmanlık, akademik unvan, sertifika veya başarı yazmayın.
5. Rehber yazılarını diş hekimi kontrolünden ve güvenilir kaynak kontrolünden geçirmeden yayınlamayın.
6. Yasal sayfaları gerçek veri akışları ve kullanılan hizmetlere göre hukuk/KVKK uzmanına hazırlatıp onaylatın.
7. `robots.txt` ve `sitemap.xml` içindeki alan adı örneğini gerçek alan adıyla değiştirin.

## Önemli teknik notlar

- Bu ön yüz statik HTML/CSS/JS olarak çalışır; çevrimiçi randevu, hasta formu, hasta kaydı veya sağlık verisi toplama özelliği yoktur.
- Bu pakette analitik veya reklam pikseli eklenmemiştir. Google Haritalar, kullanıcı istediğinde yüklenen bir harita alanı olarak Muayenehane ve İletişim sayfalarında mevcuttur.
- Google Fonts dış kaynaktan yüklenir. Tamamen yerel font kullanmak isterseniz font bağlantılarını kaldırıp sistem fontlarına geçin.
- `cms/` klasörü Sanity Studio için başlangıç iskeletidir. Henüz statik sayfalara bağlanmamıştır. Sanity hesabı/proje kimliği oluşturulup bağlantı ve içerik sorguları geliştirilmelidir.
- CMS başlangıcını çalıştırmak için `cms/README.md` dosyasındaki adımları izleyin.

## Sağlık mevzuatı ve içerik

Site, sağlık hizmetlerinde açık/örtülü reklam veya yönlendirici iddialar yerine mesleki bilgiler ve genel koruyucu sağlık bilgilendirmesi için yapılandırılmıştır. Türkiye'de yayın öncesinde 12 Kasım 2025 tarihli ve 33075 sayılı Resmî Gazete'de yayımlanan **Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik** başta olmak üzere güncel mevzuat ayrıca incelenmelidir. İngilizce dildeki sayfalar da Türkiye'deki kurallardan otomatik olarak muaf değildir. Bu proje hukuki uygunluk garantisi vermez.

Mevzuat metni için başlangıç kaynağı: https://www.lexpera.com.tr/mevzuat/yonetmelikler/saglik-hizmetlerinde-tanitim-ve-bilgilendirme-faaliyetleri-hakkinda-yonetmelik-2


## Örnek görseller

`img/demo/` klasöründe örnek diş hekimi portresi, muayene odası ve ağız bakımı görselleri bulunur. Bu görseller yapay zekâ ile oluşturulmuş veya tasarım görselinden kırpılmış temsili görsellerdir; Nazlı Subutay'ı ya da gerçek muayenehaneyi temsil etmez. Deneme sırasında görünür örnek görsel notları bırakılmıştır. Gerçek fotoğraflar sağlandığında bu dosyalar değiştirilmelidir.


## Güncelleme: Gerçek portre ve mesleki özgeçmiş (21.11.2026)

- `img/nazli-subutay-portre.webp`, kullanıcı tarafından gönderilen fotoğraf kullanılarak web için optimize edildi.
- `index.html` ve `en/index.html`: Ana görsel ve kısa özgeçmiş güncellendi.
- `cms/schemas/doctorProfile.ts`: İlgi alanları ve eğitimleri yönetmek için alanlar eklendi. CMS halen kurulum gerektirir; statik siteyi otomatik güncellemez.
- Yayın öncesi kurumsal izin, fotoğraf kullanım izni, hekimin içerik onayı, güncel çalışma yeri/iletişim doğrulaması ve sağlık mevzuatı kontrolü yapılmalıdır.


## Konum ve geçmiş güncellemesi (21 Kasım 2026)

- Adres: Şemsettin Günaltay Cd. No:176, Kadıköy, İstanbul, Türkiye. Bina içi kat/daire bilgisi verilmediğinden eklenmedi.
- Türkçe ve İngilizce Muayenehane/İletişim sayfalarına Google Haritalar konumu ve yol tarifi eklendi. Harita gizlilik için kullanıcı tıkladığında yüklenir.
- Hasta kabul saatleri ve telefon/e-posta eksik, kullanıcıdan doğrulama gerekir.
- Google Maps bağlantısı bina düzeyindedir; kat/daire ve kurum konum doğruluğu yayından önce ayrıca kontrol edilmelidir.

## Sertifikalar (Kasım 2026)

- `hakkimda.html` ve `en/about.html`: 7 adet hekim tarafından paylaşılan sertifika fotoğrafı, tarih, kurs adı, kurum ve eğitmen bilgileri ile birlikte galeriye eklendi. Tıklanınca büyük gösterilir.
- `index.html` ve `en/index.html`: sertifika galerisine yönlendiren 3 görselli ön izleme eklendi.
- Görseller `img/sertifikalar/` altında WebP biçimindedir.
- 2016 yılı belgeleri ve 27 Mart 2022 eğitimi mesleki eğitimler listesine eklendi.
- **Önemli:** 2016 tarihli Dr. Marius Steigmann belgesi, önceden girilen 2019 tarihli farklı başlıklı eğitimden ayrı gösterildi.
- Sertifikalar yalnızca katılım / eğitim tamamlama kanıtı olarak gösterilmektedir; uzmanlık unvanı yerine kullanılmaz. Hukuki uygunluk için yayın öncesi kontrol gerekir.
- Sanity CMS şemasına `certificates` alanı eklendi; ancak statik site halen otomatik olarak CMS'ye bağlı değildir.

### Sertifika içeriği

- 24–25 Şubat 2024: **İmplant Üstü Protezler**, Artı Kurs Dijital Dental Eğitim Programı — Prof. Dr. Erhan Çömlekoğlu
- 26–27 Mart 2016: **Porselen Laminate Veneer Eğitimi**, Dentsem — Diş Hekimliği Sürekli Eğitim Merkezi — Doç. Dr. Ali Murat Kökat · Doç. Dr. Atila Ertan
- 4–5 Kasım 2023: **Dental İmplantolojide Anındalık Yaklaşımı**, Duru Dental — Dr. Cem Yıldız
- 5–6 Mart 2016: **Temel İmplantoloji Eğitimi**, Dentsem — Diş Hekimliği Sürekli Eğitim Merkezi — Yrd. Doç. Dr. Bahadır Kan
- 1–2 Nisan 2016: **İleri Seviye İmplant Eğitimi**, Dentsem — Diş Hekimliği Sürekli Eğitim Merkezi — Yrd. Doç. Dr. Bahadır Kan
- 27 Mart 2022: **Planlamadan Simantasyona, Klinik Pratiğinde Estetik Fonksiyon Oklüzyon**, İDA Dent Akademi — Diş Hekimi Özgür Baydemir
- 30 Mayıs 2016: **Diş İmplantlarında Yumuşak Dokunun Kemik Stabilitesine ve Estetik Sonuca Etkisi**, BioHorizons — Dr. Marius Steigmann


## 21.11.2026 güncellemesi
- Randevu için WhatsApp: https://wa.me/905334278605?text=Merhaba%2C%20randevu%20i%C3%A7in%20uygun%20g%C3%BCn%20ve%20saatleri%20%C3%B6%C4%9Frenmek%20istiyorum.
- İletişim telefonu: +90 533 427 86 05
- Çalışma saatleri: Pazartesi–Cumartesi 10.00–18.00; Pazar kapalı.
- Rehber 10 konuya ve İngilizce karşılıklarına genişletildi; içerik kaynakları her makalenin altında bulunur.
- Görünen demo geliştirme uyarıları kaldırıldı. Ancak muayenehane görselleri **gerçek fotoğraf değildir**; yayına almadan önce değiştirilmelidir.
- Yasal sayfalar kısa site-işleyişi açıklamalarıyla yenilendi; altyapı ve veri sorumlusu bilgileri için uygulamaya özel hukuki inceleme gerekir.
- Sitede domain belirlenmediği için canonical URL üretilemedi; sitemap example.invalid alan adıyla bırakıldı ve canlı domainde değiştirilmelidir.
- Site editörü e-posta adresi verilmediğinden yayınlanmadı; mevzuat uyumu için yayından önce eklenmelidir.
- WhatsApp bağlantısı randevuyu otomatik olarak oluşturmaz, sadece konuşma başlatır.


## Birleşik İletişim ve Ortak Menü (21.11.2026)

- Tek iletişim sayfası: `iletisim.html` / `en/contact.html`. Telefon, WhatsApp randevu bağlantısı, açık adres, çalışma saatleri ve harita burada.
- Ayrı Muayenehane sayfası kaldırıldı; eski `muayenehane.html` ve `en/practice.html` adresleri otomatik olarak İletişim'e yönlenir.
- **Tüm aktif HTML sayfaları aynı üst menüyü kullanır:** `js/shared-nav.js`. Menüdeki etiket ve bağlantıları yalnızca bu dosyadan değiştirebilirsiniz. Görünüm: `css/shared-nav.css`.
- Navbar kök dizin, makaleler ve yasal sayfalarda aynı görünümü korur. TR/EN geçişleri mümkün olduğunda aynı sayfanın çevirisine gider.
- Yerel ön izleme için `index.html` dosyasını Live Server ile açabilirsiniz. JavaScript açık olmalıdır.
