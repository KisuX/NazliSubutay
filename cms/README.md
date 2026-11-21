# Sanity Studio — Yönetim Paneli Başlangıcı

Bu klasör, içerik yönetim paneli için başlangıç iskeletidir. Statik HTML sayfalarına henüz bağlanmamıştır; dolayısıyla CMS üzerinden değiştirilen içerikler şu anda web sayfalarına otomatik yansımaz. Bunun için sonraki aşamada Sanity sorguları ve ön yüz entegrasyonu yapılmalıdır.

## Kurulum

1. Sanity hesabı oluşturun ve yeni bir proje açın.
2. `cms` klasörünü terminalde açın.
3. `.env.example` dosyasını `.env` olarak kopyalayın ve gerçek proje kimliğini girin.
4. `npm install` çalıştırın.
5. `npm run dev` komutuyla Studio'yu yerelde açın.

İlk başlatma ve proje bağlantısı için güncel resmi dokümantasyon: https://www.sanity.io/docs/studio

## Hazır şemalar

- Hekim Profili
- Rehber Yazısı (TR/EN, kaynaklar, hekim onayı)
- Bilgilendirme Sayfası
- Site Ayarları (telefon, e-posta, adres, kabul saatleri, editör)

## Güvenlik ve yayın akışı

- Studio erişimini yalnızca yetkili hesaplara verin; çok faktörlü kimlik doğrulamayı etkinleştirin.
- Hasta adı, sağlık geçmişi, fotoğrafı, teşhisi veya röntgeni gibi hasta verilerini bu CMS'e eklemeyin.
- Rehber yazılarında `Yayın için hekim onayı` alanı işaretlenmeden içerik yayınlamayın. Bu alan şu an şema düzeyinde bir metadata alanıdır; yayın engelleme kuralı için ayrıca workflow / role kontrolü geliştirilmelidir.
- Hukuki sayfaları CMS üzerinden otomatik üretmeden önce hukuk/KVKK uzmanına inceletin.
