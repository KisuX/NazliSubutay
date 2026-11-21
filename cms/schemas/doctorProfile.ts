import {defineField, defineType} from 'sanity'

export const doctorProfile = defineType({
  name: 'doctorProfile', title: 'Hekim Profili', type: 'document',
  fields: [
    defineField({name: 'name', title: 'Ad Soyad', type: 'string', validation: r => r.required()}),
    defineField({name: 'professionalTitle', title: 'Mesleki unvan', type: 'string', initialValue: 'Diş Hekimi'}),
    defineField({name: 'portrait', title: 'Portre fotoğrafı', type: 'image', options: {hotspot: true}}),
    defineField({name: 'shortBioTr', title: 'Kısa biyografi (TR)', type: 'text', rows: 4}),
    defineField({name: 'shortBioEn', title: 'Short biography (EN)', type: 'text', rows: 4}),
    defineField({name: 'education', title: 'Eğitim bilgileri', type: 'array', of: [{type: 'object', fields: [
      {name: 'institution', title: 'Kurum', type: 'string'},
      {name: 'qualification', title: 'Program / derece', type: 'string'},
      {name: 'year', title: 'Yıl', type: 'string'},
    ]}]}),
    defineField({name: 'experience', title: 'Mesleki geçmiş', type: 'array', of: [{type: 'object', fields: [
      {name: 'organization', title: 'Kurum', type: 'string'},
      {name: 'role', title: 'Görev', type: 'string'},
      {name: 'period', title: 'Dönem', type: 'string'},
    ]}]}),
    defineField({name: 'professionalInterestsTr', title: 'Mesleki ilgi alanları (TR)', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'professionalInterestsEn', title: 'Professional interests (EN)', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'continuingEducation', title: 'Katıldığı eğitimler', type: 'array', of: [{type: 'object', fields: [
      {name: 'year', title: 'Yıl (boş bırakılabilir)', type: 'number'},
      {name: 'titleTr', title: 'Eğitim adı (TR)', type: 'string'},
      {name: 'titleEn', title: 'Course title (EN)', type: 'string'},
    ]}]}),
    defineField({name: 'certificates', title: 'Eğitim / Katılım Belgeleri', type: 'array', of: [{type: 'object', fields: [
      {name: 'titleTr', title: 'Belge / Kurs Adı (TR)', type: 'string'},
      {name: 'titleEn', title: 'Certificate / Course Title (EN)', type: 'string'},
      {name: 'date', title: 'Eğitim Tarihi', type: 'date'},
      {name: 'issuer', title: 'Düzenleyen Kurum', type: 'string'},
      {name: 'instructor', title: 'Eğitmen', type: 'string'},
      {name: 'certificateImage', title: 'Belge Görseli', type: 'image', options: {hotspot: false}},
    ]}]}),
    defineField({name: 'verified', title: 'Bilgiler doğrulandı', type: 'boolean', initialValue: false}),
  ],
})
